import { lazy, Suspense, useEffect, useState } from 'react'
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  CirclePlay,
  ChartNoAxesCombined,
  Command,
  Lightbulb,
  LoaderCircle,
  RotateCcw,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react'
import './App.css'
import PythonEditor from './PythonEditor'
import AppNavigation from './AppNavigation'
import useLearningRoute from './useLearningRoute'
import UpcomingSubjectPage from './UpcomingSubjectPage'
import AiLab from './AiLab'
import SheetsLab from './SheetsLab'
const Da101Lab = lazy(() => import('./Da101Lab'))
const StatisticsLab = lazy(() => import('./StatisticsLab'))
import GeneralPage from './GeneralPage'
import CertificationPage from './CertificationPage'
import KnowledgePage from './KnowledgePage'
const SqlLab = lazy(() => import('./SqlLab'))
import { lessons, tracks, type Lesson } from './lessons'

type PyodideRuntime = {
  runPythonAsync: (code: string) => Promise<unknown>
  loadPackage: (packages: string[]) => Promise<unknown>
  loadPackagesFromImports: (code: string) => Promise<unknown>
  setStdout: (options: { batched: (message: string) => void }) => void
  setStderr: (options: { batched: (message: string) => void }) => void
}

declare global {
  interface Window {
    loadPyodide?: (options: { indexURL: string }) => Promise<PyodideRuntime>
  }
}

let pyodidePromise: Promise<PyodideRuntime> | null = null

async function getPythonRuntime() {
  if (!pyodidePromise) {
    pyodidePromise = new Promise<void>((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>('[data-pyodide]')
      if (window.loadPyodide) {
        resolve()
        return
      }
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(), { once: true })
        existingScript.addEventListener('error', () => reject(new Error('Không tải được Python. Kiểm tra kết nối mạng rồi thử lại.')), { once: true })
        return
      }
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js'
      script.dataset.pyodide = 'true'
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Không tải được Python. Kiểm tra kết nối mạng rồi thử lại.'))
      document.head.appendChild(script)
    }).then(async () => {
      if (!window.loadPyodide) throw new Error('Python chưa sẵn sàng. Hãy tải lại trang và thử lại.')
      return window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/' })
    })
  }
  return pyodidePromise
}

function comparableJson(value: unknown): string {
  return JSON.stringify(value, (_, item: unknown) => {
    if (item && typeof item === 'object' && !Array.isArray(item)) {
      return Object.fromEntries(Object.entries(item).sort(([a], [b]) => a.localeCompare(b)))
    }
    return item
  })
}

function readStoredProgress() {
  try {
    return JSON.parse(localStorage.getItem('data-analyst-lab-completed-v1') || '[]') as string[]
  } catch {
    return []
  }
}

function App() {
  const { language, section, setLanguage, setSection } = useLearningRoute()
  const [activeId, setActiveId] = useState(lessons[0].id)
  const [completed, setCompleted] = useState<string[]>(readStoredProgress)
  const [solutions, setSolutions] = useState<Record<string, string>>(() => {
    try {
      return JSON.parse(localStorage.getItem('data-analyst-lab-solutions-v1') || '{}') as Record<string, string>
    } catch {
      return {}
    }
  })
  const [output, setOutput] = useState('')
  const [outputError, setOutputError] = useState(false)
  const [plots, setPlots] = useState<string[]>([])
  const [runtimeMessage, setRuntimeMessage] = useState('')
  const [testResults, setTestResults] = useState<{ label: string; passed: boolean; error?: string }[] | null>(null)
  const [busy, setBusy] = useState<'run' | 'check' | null>(null)
  const [runtimeReady, setRuntimeReady] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const lesson = lessons.find((item) => item.id === activeId) ?? lessons[0]
  const code = solutions[activeId] ?? lesson.starter
  const track = tracks.find((item) => item.id === lesson.track) ?? tracks[0]
  const trackLessons = lessons.filter((item) => item.track === track.id)
  const completedCount = lessons.filter((item) => completed.includes(item.id)).length
  const progress = Math.round((completedCount / lessons.length) * 100)

  useEffect(() => {
    localStorage.setItem('data-analyst-lab-completed-v1', JSON.stringify(completed))
  }, [completed])

  useEffect(() => {
    localStorage.setItem('data-analyst-lab-solutions-v1', JSON.stringify(solutions))
  }, [solutions])

  function changeLesson(id: string) {
    if (busy) return
    setPlots([])
    setActiveId(id)
    setOutput('')
    setOutputError(false)
    setTestResults(null)
    setShowHint(false)
    setShowAnswer(false)
  }

  function updateCode(value: string) {
    setSolutions((current) => ({ ...current, [activeId]: value }))
    setTestResults(null)
  }

  async function executeCode(check: boolean) {
    if (busy) return
    setBusy(check ? 'check' : 'run')
    setPlots([])
    setRuntimeMessage('Đang chuẩn bị Python...')
    setOutput('')
    setOutputError(false)
    setTestResults(null)
    try {
      const pyodide = await getPythonRuntime()
      setRuntimeReady(true)
      setRuntimeMessage('Đang tải thư viện cần thiết...')
      if (lesson.packages?.length) await pyodide.loadPackage(lesson.packages)
      await pyodide.loadPackagesFromImports(code)
      const hasPlots = lesson.plotting || /(?:^|\n)\s*(?:import\s+matplotlib|from\s+matplotlib)/.test(code)
      if (hasPlots) {
        await pyodide.loadPackage(['matplotlib'])
        await pyodide.runPythonAsync('import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as __lab_plt\n__lab_plt.close("all")')
      }
      setRuntimeMessage(check ? 'Đang chạy kiểm thử...' : 'Đang chạy code...')
      const outputLines: string[] = []
      pyodide.setStdout({ batched: (message) => outputLines.push(message) })
      pyodide.setStderr({ batched: (message) => outputLines.push(message) })
      await pyodide.runPythonAsync(`__lab_scope = {"__name__": "__main__"}\nexec(compile(${JSON.stringify(code)}, "analysis.py", "exec"), __lab_scope)`)
      setOutput(outputLines.join('\n') || 'Chương trình chạy thành công, chưa có nội dung in ra.')
      if (hasPlots) {
        const plotJson = await pyodide.runPythonAsync(`
import io as __lab_io, base64 as __lab_base64, json as __lab_json
__lab_images = []
for __lab_number in __lab_plt.get_fignums():
    __lab_buffer = __lab_io.BytesIO()
    __lab_plt.figure(__lab_number).savefig(__lab_buffer, format="png", bbox_inches="tight", dpi=120)
    __lab_images.append(__lab_base64.b64encode(__lab_buffer.getvalue()).decode("ascii"))
__lab_json.dumps(__lab_images)
`)
        setPlots(JSON.parse(String(plotJson)) as string[])
      }
      if (check) {
        const results = []
        for (const test of lesson.tests) {
          try {
            const resultJson = await pyodide.runPythonAsync(`__import__("json").dumps(eval(${JSON.stringify(test.expression)}, __lab_scope), ensure_ascii=False)`)
            const actual = JSON.parse(String(resultJson)) as unknown
            results.push({ label: test.label, passed: comparableJson(actual) === comparableJson(test.expected) })
          } catch (error) {
            results.push({ label: test.label, passed: false, error: error instanceof Error ? error.message : String(error) })
          }
        }
        setTestResults(results)
        if (results.every((result) => result.passed)) {
          setCompleted((current) => current.includes(lesson.id) ? current : [...current, lesson.id])
        }
      }
    } catch (error) {
      setOutputError(true)
      setOutput(error instanceof Error ? error.message : String(error))
      if (check) setTestResults(lesson.tests.map((test) => ({ label: test.label, passed: false })))
    } finally {
      setBusy(null)
      setRuntimeMessage('')
    }
  }

  function resetCode() {
    setPlots([])
    updateCode(lesson.starter)
    setOutput('')
    setOutputError(false)
    setTestResults(null)
  }

  const allPassed = testResults?.length && testResults.every((result) => result.passed)

  if (section === 'roadmap' || section === 'community' || section === 'courses') return <GeneralPage section={section} language={language} onLanguage={setLanguage} onSection={setSection} />

  if (section === 'certification') return <CertificationPage language={language} onLanguage={setLanguage} onSection={setSection} />

  if (language === 'ai') return <AiLab section={section} onLanguage={setLanguage} onSection={setSection} />

  if (language === 'statistics') return <Suspense fallback={<div className="loading-lab">Đang mở kiến thức Statistics...</div>}><StatisticsLab onLanguage={setLanguage} onSection={setSection} /></Suspense>

  if (language === 'da101') return <Suspense fallback={<div className="loading-lab">Đang mở kiến thức DA101...</div>}><Da101Lab onLanguage={setLanguage} onSection={setSection} /></Suspense>

  if (language === 'google-sheets') return <SheetsLab onLanguage={setLanguage} onSection={setSection} />

  if (language === 'power-bi') return <UpcomingSubjectPage section={section} language={language} onLanguage={setLanguage} onSection={setSection} />

  if (section === 'knowledge') return <KnowledgePage language={language} onLanguage={setLanguage} onPractice={() => setSection('practice')} onSection={setSection} />

  if (language === 'sql') return <Suspense fallback={<div className="loading-lab">Đang mở khu vực luyện SQL...</div>}><SqlLab onLanguage={setLanguage} onSection={setSection} /></Suspense>

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#home" aria-label="DataLab, trang chủ">
          <span className="brand-mark"><ChartNoAxesCombined size={19} strokeWidth={2.2} /></span>
          <span className="brand-name">data<span>lab</span></span>
        </a>

        <div className="sidebar-heading"><span>LỘ TRÌNH</span><span>{completedCount}/{lessons.length}</span></div>
        <div className="course-progress" aria-label={`Đã hoàn thành ${progress}%`}><span style={{ width: `${progress}%` }} /></div>

        <nav className="lesson-list" aria-label="Danh sách bài học">
          {tracks.map((item, index) => {
            const items = lessons.filter((lessonItem) => lessonItem.track === item.id)
            const done = items.filter((lessonItem) => completed.includes(lessonItem.id)).length
            return <button key={item.id} className={`track-link ${track.id === item.id ? 'track-active' : ''}`} onClick={() => changeLesson(items[0].id)} disabled={busy !== null} aria-current={track.id === item.id ? 'page' : undefined}>
              <span className="track-number">{String(index + 1).padStart(2, '0')}</span><span className="track-copy"><strong>{item.title}</strong><small>{done}/{items.length} bài hoàn thành</small></span>
            </button>
          })}
          <div className="track-lesson-list"><p className="unit-label">BÀI TRONG PHẦN NÀY</p>{trackLessons.map((item) => <LessonLink key={item.id} lesson={item} active={item.id === activeId} completed={completed.includes(item.id)} disabled={busy !== null} onClick={() => changeLesson(item.id)} />)}</div>
        </nav>

        <div className="sidebar-bottom">
          <div className="streak-icon"><Sparkles size={17} /></div>
          <div><strong>Từ dữ liệu đến insight</strong><p>Thực hành tư duy phân tích.</p></div>
        </div>
      </aside>

      <main className="main-area">
        <AppNavigation language="python" section="practice" onLanguage={setLanguage} onSection={setSection} disabled={busy !== null} trail={track.title} />

        <div className="learning-overview">
          <div><span className="eyebrow">LỘ TRÌNH DATA ANALYST</span><h2>{track.title}</h2><p>{track.description}</p></div>
          <span className="track-summary">{trackLessons.filter((item) => completed.includes(item.id)).length}/{trackLessons.length} bài hoàn thành</span>
          <nav className="track-tabs" aria-label="Chọn phần luyện tập">{tracks.map((item, index) => <button key={item.id} onClick={() => changeLesson(lessons.find((lessonItem) => lessonItem.track === item.id)!.id)} disabled={busy !== null} aria-current={track.id === item.id ? 'page' : undefined} className={track.id === item.id ? 'tab-active' : ''}><span>{index + 1}</span>{item.title}</button>)}</nav>
          <nav className="track-lesson-mobile" aria-label="Bài trong phần đang chọn">{trackLessons.map((item) => <LessonLink key={item.id} lesson={item} active={item.id === activeId} completed={completed.includes(item.id)} disabled={busy !== null} onClick={() => changeLesson(item.id)} />)}</nav>
        </div>

        <div className="workspace">
          <section className="lesson-panel">
            <div className="lesson-meta"><span className="eyebrow">BÀI {lesson.number} <i /> {lesson.duration.toUpperCase()}</span><span className="lesson-count">{lesson.number} <span>/ {String(lessons.length).padStart(2, '0')}</span></span></div>
            <h1>{lesson.title}</h1>

            <div className="lesson-badges"><span>{lesson.difficulty ?? 'Cơ bản'}</span>{lesson.packages?.map((item) => <span key={item}>{item === 'matplotlib' ? 'Matplotlib' : item === 'numpy' ? 'NumPy' : item === 'scikit-learn' ? 'scikit-learn' : item}</span>)}{lesson.track === 'cases' && <span>{lesson.tests.length} kiểm thử</span>}</div>

            <div className="challenge-block">
              <div className="block-heading"><span className="challenge-icon"><Terminal size={15} /></span><h2>{lesson.track === 'cases' ? 'Đề bài' : 'Bài thực hành'}</h2></div>
              <h3>{lesson.prompt}</h3>
              <p>{lesson.instruction}</p>
              <div className="expected-note"><span className="note-dot" /><span>Viết code bên phải, sau đó chạy kiểm thử.</span></div>
            </div>

            <div className="dataset-block">
              <div className="dataset-heading"><strong>{lesson.track === 'python' || lesson.track === 'cases' || lesson.track === 'logic' ? 'Ví dụ đầu vào / đầu ra' : 'Dữ liệu mẫu'}</strong><span>{lesson.rows.length} dòng · dữ liệu mô phỏng</span></div>
              <div className="dataset-scroll"><table><thead><tr>{lesson.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead><tbody>{lesson.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>
              <p className="insight-note"><Lightbulb size={14} /><span>{lesson.goal}</span></p>
            </div>

            {lesson.constraints && <div className="case-constraints"><h3>Ràng buộc</h3><ul>{lesson.constraints.map((item) => <li key={item}>{item}</li>)}</ul><p>{lesson.explanation}</p></div>}

            <button className={`hint-button ${showHint ? 'hint-open' : ''}`} onClick={() => setShowHint((current) => !current)}>
              <Lightbulb size={16} /><span>{showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}</span><ChevronDown size={14} className={showHint ? 'chevron-rotated' : ''} />
            </button>
            {showHint && <div className="hint-content">{lesson.hint}</div>}

            <div className="lesson-nav"><button onClick={() => changeLesson(lessons[Math.max(0, lessons.findIndex((item) => item.id === activeId) - 1)].id)} disabled={busy !== null || activeId === lessons[0].id}><ArrowLeft size={15} /> Bài trước</button><button onClick={() => changeLesson(lessons[Math.min(lessons.length - 1, lessons.findIndex((item) => item.id === activeId) + 1)].id)} disabled={busy !== null || activeId === lessons[lessons.length - 1].id}>Bài tiếp <ArrowRight size={15} /></button></div>
          </section>

          <section className="lab-panel" aria-label="Trình soạn thảo Python">
            <div className="editor-toolbar"><div className="file-tab"><span className="python-file-icon">Py</span><span>analysis.py</span><span className="unsaved-dot" /></div><div className="editor-actions"><button className="icon-button" onClick={resetCode} disabled={busy !== null} title="Khôi phục code mẫu" aria-label="Khôi phục code mẫu"><RotateCcw size={15} /></button><span className="toolbar-divider" /><span className="language-tag">Python 3</span></div></div>

            <PythonEditor key={activeId} value={code} onChange={updateCode} onRun={() => { if (!busy) void executeCode(false) }} />
            <div className="editor-tips">Ctrl + Space: gợi ý · Tab / Enter: chọn gợi ý · Esc: đóng</div>

            <div className="editor-footer"><span className="runtime-status"><span className={runtimeReady ? 'runtime-ready' : ''} />{runtimeReady ? 'Python đã sẵn sàng' : 'Python chạy trên trình duyệt'}</span><span className="shortcut"><Command size={11} /> Enter để chạy</span></div>

            <div className="run-actions"><button className="run-button" onClick={() => void executeCode(false)} disabled={busy !== null}><CirclePlay size={16} />{busy === 'run' ? 'Đang chạy...' : 'Chạy thử'}<span className="run-shortcut">Ctrl ↵</span></button><button className="check-button" onClick={() => void executeCode(true)} disabled={busy !== null}>{busy === 'check' ? <LoaderCircle size={16} className="spin" /> : <Check size={16} />}{busy === 'check' ? 'Đang chấm...' : 'Kiểm tra bài'}</button><button className="check-button" onClick={() => setShowAnswer((current) => !current)} aria-expanded={showAnswer} aria-controls="lesson-answer"><BookOpen size={16} />{showAnswer ? 'Ẩn đáp án' : 'Xem đáp án'}</button></div>

            {showAnswer && <section className="answer-panel" id="lesson-answer" aria-label={`Đáp án: ${lesson.prompt}`}><div className="answer-heading"><BookOpen size={15} /><strong>Đáp án · {lesson.prompt}</strong></div><PythonEditor key={`answer-${activeId}`} value={lesson.answer} readOnly />{lesson.complexity && <p className="answer-complexity">{lesson.complexity}</p>}</section>}

            <div className="output-panel">
              <div className="output-header"><div className="output-title"><Terminal size={15} /><span>{testResults ? 'Kết quả kiểm tra' : 'Kết quả chạy'}</span>{testResults && <span className={`test-score ${allPassed ? 'score-pass' : 'score-fail'}`}>{testResults.filter((result) => result.passed).length}/{testResults.length}</span>}</div><span className="output-ready">{busy ? <><LoaderCircle size={12} className="spin" /> {runtimeMessage}</> : 'OUTPUT'}</span></div>
              {testResults ? <div className="test-list">{testResults.map((result, index) => <div className="test-row" key={`${result.label}-${index}`} title={result.error}><span className={`test-status ${result.passed ? 'passed' : 'failed'}`}>{result.passed ? <Check size={12} /> : <X size={12} />}</span><span>Test {index + 1}</span><span className="test-label">{result.label}</span><strong className={result.passed ? 'test-pass-text' : 'test-fail-text'}>{result.passed ? 'Đúng' : 'Chưa đúng'}</strong></div>)}{allPassed && <div className="success-banner"><CheckCircle2 size={16} /> Tuyệt vời! Bạn đã hoàn thành bài học.</div>}</div> : <pre className={`output-content ${outputError ? 'output-error' : ''}`}>{output || <span className="output-placeholder">{busy ? runtimeMessage : 'Kết quả sẽ xuất hiện ở đây sau khi chạy code.'}</span>}</pre>}
            </div>
            {testResults?.some((result) => result.error) && <details className="test-errors"><summary>Chi tiết lỗi kiểm thử</summary>{testResults.filter((result) => result.error).map((result) => <pre key={result.label}>{result.label}: {result.error}</pre>)}</details>}
            {plots.length > 0 && <section className="plot-panel" aria-label="Biểu đồ kết quả"><h3>Biểu đồ</h3>{plots.map((plot, index) => <figure key={index}><img src={`data:image/png;base64,${plot}`} alt={`Biểu đồ ${index + 1} từ bài ${lesson.title}`} /><a href={`data:image/png;base64,${plot}`} download={`chart-${lesson.id}-${index + 1}.png`}>Tải biểu đồ PNG</a></figure>)}</section>}
            {testResults && outputError && <pre className="output-content output-error" role="alert">{output}</pre>}
            <div className="lab-footnote"><ArrowDownToLine size={13} /><span>Code của bạn được lưu tự động trên thiết bị này.</span></div>
          </section>
        </div>

        <footer className="statusbar"><span><span className="status-dot" /> Tất cả hệ thống hoạt động</span><span>DataLab · Python & SQL <i /> Bản thử nghiệm</span></footer>
      </main>
    </div>
  )
}

function LessonLink({ lesson, active, completed, disabled, onClick }: { lesson: Lesson; active: boolean; completed: boolean; disabled: boolean; onClick: () => void }) {
  return <button className={`lesson-link ${active ? 'lesson-active' : ''}`} onClick={onClick} disabled={disabled}><span className={`lesson-index ${completed ? 'index-done' : ''}`}>{completed ? <Check size={13} /> : lesson.number}</span><span className="lesson-link-title">{lesson.title}</span>{active && <span className="active-marker" />}</button>
}

export default App
