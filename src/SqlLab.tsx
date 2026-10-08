import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, CirclePlay, Database, Lightbulb, LoaderCircle, RotateCcw, X } from 'lucide-react'
import PythonEditor from './PythonEditor'
import type { LearningRoute } from './routeModel'
import AppNavigation from './AppNavigation'
import SqlCourseButton from './SqlCourseButton'
import { sqlLessons, sqlTracks, type SqlLesson } from './sqlLessons'
import { getSqlDataset, getSqlFixtures, getSqlSchema, sqlDomains } from './sqlDatasets'
import { executeSql, type SqlResult } from './sqlRuntime'

function readStored<T,>(key: string, fallback: T): T {
  try { return JSON.parse(localStorage.getItem(key) || 'null') as T ?? fallback } catch { return fallback }
}
function ResultTable({ result }: { result: SqlResult }) {
  return <div className="dataset-scroll"><table><thead><tr>{result.columns.map((column, index) => <th key={index} scope="col">{column}</th>)}</tr></thead><tbody>{result.values.map((row, index) => <tr key={index}>{row.map((cell, column) => <td key={column}>{cell === null ? <em>NULL</em> : String(cell)}</td>)}</tr>)}</tbody></table>{result.values.length === 0 && <p className="sql-empty">Không có dòng phù hợp (0 dòng).</p>}</div>
}
export default function SqlLab({ onLanguage, onSection }: { onLanguage: (language: LearningRoute['language']) => void; onSection: (section: LearningRoute['section']) => void }) {
  const [activeId, setActiveId] = useState<string>(() => readStored('datalab-sql-active-v1', sqlLessons[0].id))
  const [solutions, setSolutions] = useState<Record<string, string>>(() => readStored('datalab-sql-solutions-v1', {}))
  const [completed, setCompleted] = useState<string[]>(() => readStored('datalab-sql-completed-v1', []))
  const [result, setResult] = useState<SqlResult | null>(null)
  const [tests, setTests] = useState<{ label: string; passed: boolean; error?: string }[] | null>(null)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState<'run' | 'check' | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const lesson = sqlLessons.find((item) => item.id === activeId) ?? sqlLessons[0]
  const track = sqlTracks.find((item) => item.id === lesson.track) ?? sqlTracks[0]
  const dataset = getSqlDataset(lesson)
  const sqlFixtures = getSqlFixtures(lesson)
  const trackLessons = sqlLessons.filter((item) => item.track === track.id && (!lesson.datasetId || item.datasetId === lesson.datasetId))
  const schema = getSqlSchema(lesson)
  const code = solutions[activeId] ?? lesson.starter
  const done = sqlLessons.filter((item) => completed.includes(item.id)).length
  const allPassed = Boolean(tests?.length && tests.every((test) => test.passed))
  useEffect(() => { localStorage.setItem('datalab-sql-active-v1', JSON.stringify(activeId)) }, [activeId])
  useEffect(() => { localStorage.setItem('datalab-sql-solutions-v1', JSON.stringify(solutions)) }, [solutions])
  useEffect(() => { localStorage.setItem('datalab-sql-completed-v1', JSON.stringify(completed)) }, [completed])
  function clearResult() { setResult(null); setTests(null); setError('') }
  function changeLesson(id: string) {
    if (busy) return
    setActiveId(id); clearResult(); setShowHint(false); setShowAnswer(false)
  }
  function updateCode(value: string) { setSolutions((current) => ({ ...current, [activeId]: value })); clearResult() }
  async function run(check: boolean) {
    if (busy) return
    setBusy(check ? 'check' : 'run'); clearResult()
    try {
      const response = await executeSql(code, lesson, check)
      setResult(response.result); setTests(response.tests)
      if (response.tests?.every((test) => test.passed)) setCompleted((current) => current.includes(lesson.id) ? current : [...current, lesson.id])
    } catch (caught) { setError(caught instanceof Error ? caught.message : String(caught)) } finally { setBusy(null) }
  }
  function LessonButton({ item }: { item: SqlLesson }) {
    return <button className={`lesson-link ${item.id === activeId ? 'lesson-active' : ''}`} disabled={busy !== null} onClick={() => changeLesson(item.id)}><span className={`lesson-index ${completed.includes(item.id) ? 'index-done' : ''}`}>{completed.includes(item.id) ? <Check size={13} /> : item.number}</span><span className="lesson-link-title">{item.title}</span></button>
  }
  return <div className="app-shell">
    <aside className="sidebar">
      <a className="brand" href="#home" aria-label="DataLab, trang chủ"><span className="brand-mark"><Database size={19} /></span><span className="brand-name">data<span>lab</span></span></a>
      <div className="sidebar-heading"><span>LỘ TRÌNH SQL</span><span>{done}/{sqlLessons.length}</span></div><div className="course-progress" aria-label={`Đã hoàn thành ${Math.round(done / sqlLessons.length * 100)}%`}><span style={{ width: `${done / sqlLessons.length * 100}%` }} /></div>
      <nav className="lesson-list" aria-label="Danh sách bài SQL">{sqlTracks.map((item, index) => <button key={item.id} className={`track-link ${item.id === track.id ? 'track-active' : ''}`} disabled={busy !== null} onClick={() => changeLesson(sqlLessons.find((entry) => entry.track === item.id)!.id)}><span className="track-number">0{index + 1}</span><span className="track-copy"><strong>{item.title}</strong><small>{sqlLessons.filter((entry) => entry.track === item.id && completed.includes(entry.id)).length}/{sqlLessons.filter((entry) => entry.track === item.id).length} bài hoàn thành</small></span></button>)}<div className="track-lesson-list"><p className="unit-label">BÀI TRONG PHẦN NÀY</p>{trackLessons.map((item) => <LessonButton key={item.id} item={item} />)}</div></nav>
      <div className="sidebar-bottom sql-course-sidebar"><SqlCourseButton compact /></div>
    </aside>
    <main className="main-area">
      <AppNavigation language="sql" section="practice" onLanguage={onLanguage} onSection={onSection} disabled={busy !== null} trail={track.title} />
      <div className="learning-overview"><div><span className="eyebrow">LỘ TRÌNH SQL</span><h2>{track.title}</h2><p>{track.description}</p></div><span className="track-summary">{done}/{sqlLessons.length} bài hoàn thành</span><nav className="track-tabs" aria-label="Chọn phần SQL">{sqlTracks.map((item, index) => <button key={item.id} className={item.id === track.id ? 'tab-active' : ''} disabled={busy !== null} onClick={() => changeLesson(sqlLessons.find((entry) => entry.track === item.id)!.id)} aria-current={item.id === track.id ? 'page' : undefined}><span>{index + 1}</span>{item.title}</button>)}</nav><nav className="track-lesson-mobile" aria-label="Bài SQL trong phần đang chọn">{trackLessons.map((item) => <LessonButton key={item.id} item={item} />)}</nav></div>
      {track.id === 'sql-cases' && <nav className="domain-picker" aria-label="Chọn domain dataset">{sqlDomains.map(domain => <button key={domain.id} className={lesson.datasetId === domain.id ? 'domain-selected' : ''} disabled={busy !== null} onClick={() => changeLesson(sqlLessons.find(item => item.datasetId === domain.id)!.id)}><strong>{domain.title}</strong><span>5 bảng · {sqlLessons.filter(item => item.datasetId === domain.id).length} case</span><small>{domain.description}</small></button>)}</nav>}
      <div className="workspace">
        <section className="lesson-panel"><div className="lesson-meta"><span className="eyebrow">BÀI {lesson.number} · SQL</span><span className="lesson-count">{lesson.number} / {String(sqlLessons.length).padStart(2, '0')}</span></div><h1>{lesson.title}</h1><p className="lesson-intro">Viết truy vấn trên bảng dữ liệu mẫu, kiểm tra kết quả và luyện với dữ liệu khác.</p><div className="lesson-badges"><span>SQLite</span><span>{dataset.tables.length} bảng</span>{lesson.datasetId && <span>{dataset.title}</span>}<span>{sqlFixtures.length} kiểm thử</span></div><div className="challenge-block"><h3>Yêu cầu truy vấn</h3><p>{lesson.instruction}</p></div>
          <div className="dataset-heading"><strong>{dataset.title}</strong><span>{dataset.tables.length} bảng · dữ liệu mô phỏng</span></div>
          {dataset.relations.length > 0 && <details className="dataset-relations" open><summary>Quan hệ giữa các bảng</summary>{dataset.relations.map(relation => <p key={relation}>{relation}</p>)}</details>}
          {dataset.tables.map((table) => <details className="dataset-block sql-data-table" key={table.name} open={!lesson.datasetId}><summary className="dataset-heading"><strong>{table.name}</strong><span>{table.rows.length} dòng · xem bảng</span></summary><ResultTable result={{ columns: table.columns, values: table.rows }} /></details>)}<p className="sql-schema-note">{dataset.units}</p>
          <button className="hint-button" onClick={() => setShowHint(!showHint)}><Lightbulb size={16} />{showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}</button>{showHint && <div className="hint-content">{lesson.hint}</div>}
          <div className="lesson-nav"><button disabled={busy !== null || activeId === sqlLessons[0].id} onClick={() => changeLesson(sqlLessons[sqlLessons.indexOf(lesson) - 1].id)}><ArrowLeft size={15} />Bài trước</button><button disabled={busy !== null || activeId === sqlLessons.at(-1)!.id} onClick={() => changeLesson(sqlLessons[sqlLessons.indexOf(lesson) + 1].id)}>Bài tiếp<ArrowRight size={15} /></button></div>
        </section>
        <section className="lab-panel" aria-label="Trình soạn thảo SQL"><div className="editor-toolbar"><div className="file-tab"><span className="python-file-icon">SQL</span><span>query.sql</span></div><div className="editor-actions"><button className="icon-button" title="Khôi phục SQL mẫu" aria-label="Khôi phục SQL mẫu" disabled={busy !== null} onClick={() => updateCode(lesson.starter)}><RotateCcw size={15} /></button><span className="language-tag">SQLite</span></div></div><PythonEditor key={activeId} language="sql" schema={schema} value={code} onChange={updateCode} onRun={() => void run(false)} /><div className="editor-tips">Ctrl + Space: gợi ý bảng, cột và từ khóa · Ctrl/Cmd + Enter: chạy</div><div className="editor-footer"><span className="runtime-status"><span className="runtime-ready" />Dữ liệu được khôi phục mỗi lần chạy</span><span>SQLite</span></div>
          <div className="run-actions"><button className="run-button" disabled={busy !== null} onClick={() => void run(false)}><CirclePlay size={16} />{busy === 'run' ? 'Đang chạy...' : 'Chạy truy vấn'}</button><button className="check-button" disabled={busy !== null} onClick={() => void run(true)}>{busy === 'check' ? <LoaderCircle size={16} className="spin" /> : <Check size={16} />}{busy === 'check' ? 'Đang chấm...' : 'Kiểm tra bài'}</button><button className="check-button" aria-expanded={showAnswer} aria-controls="sql-answer" onClick={() => setShowAnswer(!showAnswer)}><BookOpen size={16} />{showAnswer ? 'Ẩn đáp án' : 'Xem đáp án'}</button></div>
          {showAnswer && <section className="answer-panel" id="sql-answer" aria-label="Đáp án SQL"><div className="answer-heading"><BookOpen size={15} /><strong>Đáp án · {lesson.title}</strong></div><PythonEditor key={`answer-${activeId}`} language="sql" schema={schema} value={lesson.answer} readOnly /></section>}
          <section className="output-panel"><div className="output-header"><div className="output-title"><Database size={15} /><span>Kết quả truy vấn</span>{result && <span>{result.values.length} dòng</span>}</div><span className="output-ready">{busy ? 'Đang xử lý...' : 'RESULT'}</span></div>{error ? <pre className="output-content output-error" role="alert">{error}</pre> : result ? <div className="dataset-block sql-result"><ResultTable result={result} /></div> : <p className="output-content output-placeholder">Chạy truy vấn để xem bảng kết quả.</p>}</section>
          {tests && <section className="output-panel"><div className="output-header"><div className="output-title">Kết quả kiểm tra<span className={`test-score ${allPassed ? 'score-pass' : 'score-fail'}`}>{tests.filter((test) => test.passed).length}/{tests.length}</span></div></div><div className="test-list">{tests.map((test, index) => <div className="test-row" key={test.label} title={test.error}><span className={`test-status ${test.passed ? 'passed' : 'failed'}`}>{test.passed ? <Check size={12} /> : <X size={12} />}</span><span>Test {index + 1}</span><span className="test-label">{test.label}</span><strong className={test.passed ? 'test-pass-text' : 'test-fail-text'}>{test.passed ? 'Đúng' : 'Chưa đúng'}</strong></div>)}{allPassed && <div className="success-banner"><CheckCircle2 size={16} />Bạn đã hoàn thành bài SQL này.</div>}</div></section>}
          <div className="lab-footnote">SQL và tiến độ được lưu tự động trên thiết bị này.</div>
        </section>
      </div><footer className="statusbar"><span><span className="status-dot" />DataLab · Python & SQL</span><span>SQLite trên trình duyệt</span></footer>
    </main>
  </div>
}
