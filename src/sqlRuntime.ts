import initSqlJs, { type Database, type SqlJsStatic } from 'sql.js'
import wasmUrl from 'sql.js/dist/sql-wasm.wasm?url'
import { type SqlLesson, type SqlTable } from './sqlLessons'
import { getSqlFixtures } from './sqlDatasets'

export type SqlResult = { columns: string[]; values: (string | number | null)[][] }
let runtime: Promise<SqlJsStatic> | undefined
function getRuntime() {
  runtime ??= initSqlJs({ locateFile: () => wasmUrl }).catch((error: unknown) => { runtime = undefined; throw error })
  return runtime
}
function createDatabase(SQL: SqlJsStatic, tables: SqlTable[]) {
  const db = new SQL.Database()
  for (const table of tables) db.run(`CREATE TABLE "${table.name}" (${table.columns.map((column, index) => {
    const samples = table.rows.map(row => row[index]).filter(value => value !== null)
    return `"${column}" ${samples.length && samples.every(value => typeof value === 'number') ? 'REAL' : 'TEXT'}`
  }).join(',')})`)
  for (const table of tables) for (const row of table.rows) db.run(`INSERT INTO ${table.name} VALUES (${table.columns.map(() => '?').join(',')})`, row)
  db.run('PRAGMA query_only = ON')
  return db
}
export function queryDatabase(db: Database, code: string): SqlResult {
  let count = 0
  for (const statement of db.iterateStatements(code)) { void statement; count++ }
  if (count !== 1) throw new Error('Viết đúng một truy vấn trả kết quả cho mỗi bài.')
  const statement = db.prepare(code)
  try {
    const columns = statement.getColumnNames()
    if (!columns.length) throw new Error('Bài này cần một truy vấn SELECT trả về bảng kết quả.')
    const values: SqlResult['values'] = []
    while (statement.step()) values.push(statement.get() as SqlResult['values'][number])
    return { columns, values }
  } finally { statement.free() }
}
function sameResult(actual: SqlResult, expected: SqlResult, ordered: boolean) {
  const rows = (result: SqlResult) => ordered ? result.values : result.values.map((row) => JSON.stringify(row)).sort()
  return JSON.stringify(actual.columns) === JSON.stringify(expected.columns) && JSON.stringify(rows(actual)) === JSON.stringify(rows(expected))
}
export async function executeSql(code: string, lesson: SqlLesson, check: boolean) {
  const sqlFixtures = getSqlFixtures(lesson)
  const SQL = await getRuntime()
  const db = createDatabase(SQL, sqlFixtures[0].tables)
  let result: SqlResult
  try { result = queryDatabase(db, code) } finally { db.close() }
  const tests = check ? sqlFixtures.map((fixture) => {
    const actualDb = createDatabase(SQL, fixture.tables)
    const expectedDb = createDatabase(SQL, fixture.tables)
    try {
      const actual = queryDatabase(actualDb, code)
      const expected = queryDatabase(expectedDb, lesson.answer)
      return { label: fixture.label, passed: sameResult(actual, expected, Boolean(lesson.ordered)) }
    } catch (error) {
      return { label: fixture.label, passed: false, error: error instanceof Error ? error.message : String(error) }
    } finally { actualDb.close(); expectedDb.close() }
  }) : null
  return { result, tests }
}

export async function executeSqlExample(code: string, tables: SqlTable[]): Promise<SqlResult[]> {
  const SQL = await getRuntime()
  const db = createDatabase(SQL, tables)
  try {
    const results: SqlResult[] = []
    for (const statement of db.iterateStatements(code)) {
      const columns = statement.getColumnNames()
      if (!columns.length) throw new Error('Ô chạy thử dùng để đọc dữ liệu. Hãy viết truy vấn SELECT.')
      const values: SqlResult['values'] = []
      while (statement.step()) values.push(statement.get() as SqlResult['values'][number])
      results.push({ columns, values })
    }
    if (!results.length) throw new Error('Nhập code SQL trước khi chạy thử.')
    return results
  } finally { db.close() }
}
