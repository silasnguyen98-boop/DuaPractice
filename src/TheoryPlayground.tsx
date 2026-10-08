import { useEffect, useMemo, useRef, useState } from 'react'
import { Database, Play, RotateCcw, Square, LoaderCircle } from 'lucide-react'
import PythonEditor from './PythonEditor'
import type { KnowledgeTopic } from './knowledgeTopics'
import { theoryTables } from './theoryDatasets'
import { executeSqlExample, type SqlResult } from './sqlRuntime'

export default function TheoryPlayground({ topic }: { topic: KnowledgeTopic }) {
  const [code, setCode] = useState(topic.example)
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [output, setOutput] = useState<string | null>(null)
  const [results, setResults] = useState<SqlResult[] | null>(null)
  const [plots, setPlots] = useState<string[]>([])
  const worker = useRef<Worker | null>(null)
  const running = useRef(false)
  const mounted = useRef(true)
  const tables = useMemo(() => theoryTables(topic.id), [topic.id])
  const schema = useMemo(() => Object.fromEntries(tables.map(table => [table.name, table.columns])), [tables])
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; worker.current?.terminate(); worker.current = null } }, [])
  const clear = () => { setError(''); setOutput(null); setResults(null); setPlots([]) }
  const stop = () => { worker.current?.terminate(); worker.current = null; running.current = false; setBusy(false); setStatus(''); setOutput('Đã dừng chạy.') }
  async function run() {
    if (running.current) return
    running.current = true
    setBusy(true); clear(); setStatus('Đang chạy...')
    if (topic.language === 'python') {
      try {
        worker.current ??= new Worker(new URL('./pythonExample.worker.ts', import.meta.url))
        worker.current.onmessage = event => {
          if (!mounted.current) return
          const response = event.data as { status?: string; output?: string; error?: string; plots?: string[] }
          if (response.status) { setStatus(response.status); return }
          setError(response.error ?? ''); setOutput(response.output ?? null); setPlots(response.plots ?? [])
          running.current = false; setBusy(false); setStatus('')
        }
        worker.current.onerror = () => { if (!mounted.current) return; setError('Không tải được Python. Kiểm tra kết nối mạng rồi chạy lại.'); worker.current?.terminate(); worker.current = null; running.current = false; setBusy(false); setStatus('') }
        worker.current.postMessage(code)
      } catch (caught) { running.current = false; setBusy(false); setStatus(''); setError(caught instanceof Error ? caught.message : String(caught)) }
      return
    }
    try { const response = await executeSqlExample(code, tables); if (mounted.current) setResults(response) }
    catch (caught) { if (mounted.current) setError(caught instanceof Error ? caught.message : String(caught)) }
    finally { running.current = false; if (mounted.current) { setBusy(false); setStatus('') } }
  }
  return <section className="theory-playground" id="knowledge-example" aria-label={`Chạy thử ${topic.language === 'sql' ? 'SQL' : 'Python'}`}><h2>Chạy thử ví dụ</h2><p>Code mẫu đã điền sẵn. Bạn có thể sửa code rồi bấm Chạy thử để xem kết quả thực tế.</p>
    {topic.language === 'sql' && <details className="theory-data"><summary>Dữ liệu mẫu · {tables.map(table => table.name).join(', ')}</summary>{tables.map(table => <div className="knowledge-table" key={table.name}><h3 className="data-table-title"><Database size={15} aria-hidden="true" /><span className="data-table-kind">Bảng</span><code>{table.name}</code><span className="data-table-count">{table.rows.length} dòng</span></h3><table><thead><tr>{table.columns.map(column => <th key={column} scope="col">{column}</th>)}</tr></thead><tbody>{table.rows.map((row, index) => <tr key={index}>{row.map((cell, column) => <td key={column}>{cell === null ? <em>NULL</em> : cell}</td>)}</tr>)}</tbody></table></div>)}</details>}
    <div className="theory-editor"><PythonEditor value={code} language={topic.language} schema={schema} readOnly={busy} onChange={value => { setCode(value); clear() }} onRun={() => { void run() }} /><div className="theory-run-controls"><button className="theory-run" disabled={busy} onClick={() => { void run() }}>{busy ? <LoaderCircle size={16} className="spin" /> : <Play size={16} />}{busy ? 'Đang chạy' : 'Chạy thử'}</button>{busy && topic.language === 'python' && <button onClick={stop}><Square size={14} />Dừng</button>}<button disabled={busy} onClick={() => { setCode(topic.example); clear() }}><RotateCcw size={15} />Khôi phục code mẫu</button><span>Ctrl / ⌘ + Enter</span></div></div>
    <div className="theory-run-status" role="status">{status}</div>
    {error && <pre className="theory-run-error" role="alert">{error}</pre>}
    {output !== null && <div className="theory-output"><h3>Kết quả chạy</h3><pre>{output}</pre></div>}
    {results?.map((result, index) => <div className="knowledge-table theory-result" key={index}><h3>Kết quả {results.length > 1 ? index + 1 : ''} · {result.values.length} dòng</h3><table><thead><tr>{result.columns.map((column, i) => <th key={i}>{column}</th>)}</tr></thead><tbody>{result.values.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell === null ? <em>NULL</em> : cell}</td>)}</tr>)}</tbody></table>{!result.values.length && <p className="sql-empty">Không có dòng phù hợp.</p>}</div>)}
    {plots.map((plot, index) => <figure className="theory-plot" key={index}><img src={`data:image/png;base64,${plot}`} alt={`Biểu đồ kết quả ${index + 1}`} /></figure>)}
    {topic.language === 'python' && <p className="knowledge-caption">Lần chạy đầu cần tải Python và thư viện qua mạng. Kết quả xuất hiện ở print() hoặc biểu đồ do code tạo.</p>}
  </section>
}
