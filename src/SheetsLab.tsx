import { useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, Download } from 'lucide-react'
import AppNavigation from './AppNavigation'
import KnowledgeTopicNav from './KnowledgeTopicNav'
import type { LearningRoute } from './routeModel'
import { sheetsLessons, sheetsColumns, sheetsRows, sheetsProducts, sheetsSetup, sheetsMonth } from './sheetsLessons'

const topics = sheetsLessons.map(({ id, title, category }) => ({ id, title, category }))
const groups = [...new Set(topics.map(topic => topic.category))]
function downloadTable(name: string, rows: string[][]) {
  const csv = '\uFEFF' + rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\r\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const link = document.createElement('a')
  link.href = url
  link.download = `${name}.csv`
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
function Formula({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)
  async function copy() {
    try { await navigator.clipboard.writeText(value); setCopied(true); setError(false) }
    catch { setError(true) }
  }
  return <div className="sheets-formula"><pre><code>{value}</code></pre><button onClick={() => void copy()}>{copied ? 'Đã sao chép' : 'Sao chép'}</button>{error && <p role="status">Hãy chọn công thức để sao chép thủ công.</p>}</div>
}
export default function SheetsLab({ onLanguage, onSection }: { onLanguage: (language: LearningRoute['language']) => void; onSection: (section: LearningRoute['section']) => void }) {
  const [activeId, setActiveId] = useState(sheetsLessons[0].id)
  const index = sheetsLessons.findIndex(item => item.id === activeId)
  const lesson = sheetsLessons[index]
  function select(id: string) { setActiveId(id); window.scrollTo({ top: 0, behavior: 'auto' }) }
  return <div className="app-shell ai-shell ai-docs-shell ai-sharing-shell sheets-shell">
    <aside className="sidebar ai-sidebar"><div className="sidebar-heading"><span>GOOGLE SHEETS CHO DA</span><span>{index + 1}/14</span></div><KnowledgeTopicNav topics={topics} selected={topics[index]} onSelect={select} /></aside>
    <main className="main-area"><AppNavigation language="google-sheets" section="knowledge" onLanguage={onLanguage} onSection={onSection} trail={lesson.category} />
      <div className="ai-mobile-lesson-picker"><label htmlFor="sheets-lesson">Google Sheets · Chọn bài</label><select id="sheets-lesson" value={activeId} onChange={event => select(event.target.value)}>{groups.map(group => <optgroup key={group} label={group}>{sheetsLessons.filter(item => item.category === group).map(item => <option key={item.id} value={item.id}>{item.id.slice(-2)} · {item.title}</option>)}</optgroup>)}</select></div>
      <div className="ai-docs-layout"><article className="ai-doc-article" key={activeId}>
        <header className="ai-doc-header"><p className="ai-doc-breadcrumb">Google Sheets for Data Analyst <span>/</span> {lesson.category}</p><p className="ai-doc-kicker">BÀI {String(index + 1).padStart(2, '0')} · 14 BÀI VIẾT · 4 CHUYÊN MỤC</p><h1>{lesson.title}</h1><p className="ai-doc-lead">{lesson.intro}</p></header>
        <nav className="sheets-toc" aria-label="Mục lục bài viết">{lesson.sections.map((section, i) => <a key={section.title} href={`#sheets-section-${i}`}>{section.title}</a>)}<a href="#sheets-data">Dữ liệu và cách làm theo</a><a href="#sheets-exercise">Tự thực hành</a></nav>
        {lesson.sections.map((section, i) => <section className="ai-doc-section" id={`sheets-section-${i}`} key={section.title}><h2>{section.title}</h2><p>{section.text}</p>{section.formula && <Formula value={section.formula} />}{section.result && <aside className="ai-doc-note"><strong>Kết quả đối chiếu</strong><p>{section.result}</p></aside>}</section>)}
        <section className="ai-doc-section" id="sheets-data"><h2>Dữ liệu và cách làm theo</h2><p>Bộ dữ liệu mô phỏng dùng chung cho 14 bài. Đơn vị tiền: nghìn đồng. Mỗi dòng Orders là một đơn có một sản phẩm. Tải CSV, tạo một file Google Sheets và nhập từng bảng vào tab đúng tên Orders và Products, bắt đầu từ A1.</p>
          <div className="sheets-downloads"><button onClick={() => downloadTable('Orders', [sheetsColumns.slice(0, 8), ...sheetsRows])}><Download size={16} />Tải Orders.csv</button><button onClick={() => downloadTable('Products', [['product_id', 'product_name', 'category'], ...sheetsProducts])}><Download size={16} />Tải Products.csv</button></div>
          <details className="sheets-data-details"><summary>Xem bảng Orders · 6 dòng</summary><div className="ai-case-table"><table><caption>Orders · Dữ liệu mô phỏng</caption><thead><tr>{sheetsColumns.slice(0, 8).map(column => <th key={column} scope="col">{column}</th>)}</tr></thead><tbody>{sheetsRows.map(row => <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div></details>
          <details className="sheets-data-details"><summary>Xem bảng Products · 3 dòng</summary><div className="ai-case-table"><table><caption>Products · Dữ liệu mô phỏng</caption><thead><tr>{['product_id', 'product_name', 'category'].map(column => <th key={column} scope="col">{column}</th>)}</tr></thead><tbody>{sheetsProducts.map(row => <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div></details>
          <details className="sheets-data-details"><summary>Thiết lập công thức và định dạng</summary><p>Vào File → Settings, chọn Locale: United States để dùng dấu phẩy trong công thức như ví dụ. Khi nhập CSV, bật chuyển văn bản thành số/ngày. Kiểm tra =ISNUMBER(B2), =ISNUMBER(F2), =ISNUMBER(G2) đều TRUE; định dạng ngày thành yyyy-mm-dd. Nếu dùng locale khác, dấu phân cách đối số có thể là dấu chấm phẩy.</p><p>Đặt tiêu đề I1 = revenue và J1 = month. Giữ trống các ô dưới I2 và J2, rồi đặt mỗi công thức sau vào đúng ô đầu vùng. Cột I định dạng số; cột J định dạng yyyy-mm. Khi bài yêu cầu Analysis hoặc Report, tạo tab mới với tên đó.</p><p><strong>Orders!I2 — doanh thu Paid:</strong></p><Formula value={sheetsSetup} /><p><strong>Orders!J2 — tháng đầu kỳ:</strong></p><Formula value={sheetsMonth} /><p>Đối chiếu: tổng I2:I7 = 2300, số đơn Paid = 5. Công thức có phạm vi đến dòng 1000; mở rộng đồng bộ khi dữ liệu lớn hơn. Với khối có nhiều công thức, mỗi dòng là một ví dụ riêng, đặt vào ô trống riêng. Đây là hướng dẫn làm trong Google Sheets; trang bài học hiển thị công thức và kết quả để đối chiếu.</p></details>
        </section>
        <section className="ai-doc-section" id="sheets-exercise"><h2>Tự thực hành</h2><p>{lesson.exercise}</p><details className="sheets-data-details"><summary><BookOpen size={16} />Xem gợi ý và kết quả</summary><p>{lesson.answer}</p></details><aside className="ai-doc-note"><strong>Những điều cần nhớ</strong><ul>{lesson.notes.map(note => <li key={note}>{note}</li>)}</ul></aside></section>
        <section className="ai-doc-section sheets-sources"><h2>Tài liệu đọc thêm</h2><ul>{lesson.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a></li>)}</ul></section>
        <nav className="ai-doc-pagination" aria-label="Điều hướng bài"><button disabled={index === 0} onClick={() => select(sheetsLessons[index - 1].id)}><ArrowLeft size={16} /><span><small>Bài trước</small>{sheetsLessons[index - 1]?.title ?? 'Bắt đầu series'}</span></button><button disabled={index === sheetsLessons.length - 1} onClick={() => select(sheetsLessons[index + 1].id)}><span><small>Bài tiếp</small>{sheetsLessons[index + 1]?.title ?? 'Hoàn thành series'}</span><ArrowRight size={16} /></button></nav>
      </article></div>
    </main>
  </div>
}
