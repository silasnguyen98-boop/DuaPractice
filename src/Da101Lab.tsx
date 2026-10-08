import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import AppNavigation from './AppNavigation'
import KnowledgeTopicNav from './KnowledgeTopicNav'
import type { LearningRoute } from './routeModel'
import { da101Lessons, da101Case, type Da101Table } from './da101Lessons'

const topics = da101Lessons.map(({ id, title, category }) => ({ id, title, category }))
const groups = [...new Set(topics.map(topic => topic.category))]
const number = new Intl.NumberFormat('vi-VN', { maximumFractionDigits: 2 })
function DataTable({ table }: { table: Da101Table }) {
  return <div className="ai-case-table"><table><caption>{table.caption}</caption><thead><tr>{table.columns.map(column => <th scope="col" key={column}>{column}</th>)}</tr></thead><tbody>{table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>
}
function RevenueExplorer() {
  const [channel, setChannel] = useState<'Tất cả' | 'Web' | 'App'>('Tất cả')
  const totals = ['Kỳ trước', 'Kỳ này'].map(period => da101Case.filter(row => row.period === period && (channel === 'Tất cả' || row.channel === channel)).reduce((sum, row) => ({ sessions: sum.sessions + row.sessions, orders: sum.orders + row.paidOrders, revenue: sum.revenue + row.paidOrders * row.aov }), { sessions: 0, orders: 0, revenue: 0 }))
  const [before, after] = totals
  const difference = after.revenue - before.revenue
  return <section className="ai-doc-section da101-explorer" id="da101-visual"><h2>Khám phá cách phân rã doanh thu</h2><p>Chọn kênh để so hai kỳ đủ 30 ngày. Dữ liệu mô phỏng; mỗi phiên tối đa một đơn Paid.</p>
    <div className="da101-channel-picker" role="group" aria-label="Chọn kênh phân tích">{(['Tất cả', 'Web', 'App'] as const).map(value => <button key={value} aria-pressed={channel === value} onClick={() => setChannel(value)}>{value}</button>)}</div>
    <div aria-live="polite" aria-atomic="true"><p className="da101-equation">Doanh thu = số đơn Paid × AOV</p><div className="da101-periods">{totals.map((total, i) => <div className="da101-period" key={i}><strong>{i === 0 ? 'Kỳ trước' : 'Kỳ này'}</strong><div className="da101-bar-track"><div className="da101-bar" style={{ width: `${total.revenue / before.revenue * 100}%` }} /></div><p><b>{number.format(total.revenue / 1000000)} triệu đồng</b></p><dl><div><dt>Đơn Paid</dt><dd>{number.format(total.orders)}</dd></div><div><dt>AOV</dt><dd>{number.format(total.revenue / total.orders / 1000)} nghìn</dd></div><div><dt>Phiên</dt><dd>{number.format(total.sessions)}</dd></div><div><dt>Conversion</dt><dd>{number.format(total.orders / total.sessions * 100)}%</dd></div></dl></div>)}</div>
      <p className="da101-change">Chênh lệch: <strong>{number.format(difference / 1000000)} triệu đồng ({number.format(difference / before.revenue * 100)}%)</strong></p>
      <p>{channel === 'App' ? 'App giữ nguyên doanh thu, traffic, số đơn và AOV trong hai kỳ.' : channel === 'Web' ? 'Web giảm 200 đơn, tương ứng 40 triệu đồng. Traffic và AOV giữ nguyên; conversion giảm từ 5% xuống 3%, tức 2 điểm phần trăm.' : 'Doanh thu tổng giảm 40 triệu. Web đóng góp toàn bộ chênh lệch ròng; App không đổi. AOV chung giữ 200 nghìn đồng.'}</p>
    </div><aside className="ai-doc-note"><strong>Phân rã chưa phải chứng minh nguyên nhân</strong><p>Số học cho biết phần nào thay đổi. Để giải thích vì sao conversion giảm, cần kiểm tra tracking, cơ cấu khách, tồn kho và quy trình thanh toán.</p></aside>
  </section>
}
export default function Da101Lab({ onLanguage, onSection }: { onLanguage: (language: LearningRoute['language']) => void; onSection: (section: LearningRoute['section']) => void }) {
  const [activeId, setActiveId] = useState(da101Lessons[0].id)
  const index = da101Lessons.findIndex(item => item.id === activeId)
  const lesson = da101Lessons[index]
  function select(id: string) { setActiveId(id); window.scrollTo({ top: 0, behavior: 'auto' }) }
  return <div className="app-shell ai-shell ai-docs-shell ai-sharing-shell da101-shell">
    <aside className="sidebar ai-sidebar"><div className="sidebar-heading"><span>DA101 · NỀN TẢNG DATA</span><span>{index + 1}/16</span></div><KnowledgeTopicNav topics={topics} selected={topics[index]} onSelect={select} /></aside>
    <main className="main-area"><AppNavigation language="da101" section="knowledge" onLanguage={onLanguage} onSection={onSection} trail={lesson.category} />
      <div className="ai-mobile-lesson-picker"><label htmlFor="da101-lesson">DA101 · Chọn bài</label><select id="da101-lesson" value={activeId} onChange={event => select(event.target.value)}>{groups.map(group => <optgroup key={group} label={group}>{da101Lessons.filter(item => item.category === group).map(item => <option key={item.id} value={item.id}>{item.id.slice(-2)} · {item.title}</option>)}</optgroup>)}</select></div>
      <div className="ai-docs-layout"><article className="ai-doc-article" key={activeId}>
        <header className="ai-doc-header"><p className="ai-doc-breadcrumb">DA101 – Data Analytics Fundamentals <span>/</span> {lesson.category}</p><p className="ai-doc-kicker">BÀI {String(index + 1).padStart(2, '0')} · 16 BÀI VIẾT · 5 CHUYÊN MỤC</p><h1>{lesson.title}</h1><p className="ai-doc-lead">{lesson.intro}</p></header>
        <nav className="sheets-toc" aria-label="Mục lục bài viết">{lesson.sections.map((section, i) => <a key={section.title} href={`#da101-section-${i}`}>{section.title}</a>)}{lesson.table && <a href="#da101-table">Bảng minh họa</a>}{lesson.visual && <a href="#da101-visual">Khám phá doanh thu</a>}<a href="#da101-exercise">Tự kiểm tra</a></nav>
        {lesson.sections.map((section, i) => <section className="ai-doc-section" id={`da101-section-${i}`} key={section.title}><h2>{section.title}</h2><p>{section.text}</p>{section.example && <aside className="ai-doc-note"><strong>Ví dụ để đối chiếu</strong><p>{section.example}</p></aside>}</section>)}
        {lesson.table && <section className="ai-doc-section" id="da101-table"><h2>Bảng minh họa</h2><DataTable table={lesson.table} /></section>}
        {lesson.visual && <RevenueExplorer />}
        <section className="ai-doc-section" id="da101-exercise"><h2>Tự kiểm tra</h2><p>{lesson.exercise}</p><details className="sheets-data-details"><summary>Xem gợi ý và lời giải</summary><p>{lesson.answer}</p></details><aside className="ai-doc-note"><strong>Điều cần nhớ</strong><p>{lesson.takeaway}</p></aside></section>
        {lesson.sources && <section className="ai-doc-section sheets-sources"><h2>Tài liệu đọc thêm</h2><ul>{lesson.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a></li>)}</ul></section>}
        <nav className="ai-doc-pagination" aria-label="Điều hướng bài"><button disabled={index === 0} onClick={() => select(da101Lessons[index - 1].id)}><ArrowLeft size={16} /><span><small>Bài trước</small>{da101Lessons[index - 1]?.title ?? 'Bắt đầu DA101'}</span></button><button disabled={index === da101Lessons.length - 1} onClick={() => select(da101Lessons[index + 1].id)}><span><small>Bài tiếp</small>{da101Lessons[index + 1]?.title ?? 'Hoàn thành DA101'}</span><ArrowRight size={16} /></button></nav>
      </article></div>
    </main>
  </div>
}
