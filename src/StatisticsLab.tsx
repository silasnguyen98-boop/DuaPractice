import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import AppNavigation from './AppNavigation'
import KnowledgeTopicNav from './KnowledgeTopicNav'
import TheoryPlayground from './TheoryPlayground'
import StatisticsVisual from './StatisticsVisual'
import { knowledgeTopics } from './knowledgeTopics'
import { statisticsContent, type StatFormula } from './statisticsContent'
import type { LearningRoute } from './routeModel'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const topics = knowledgeTopics.filter(topic => topic.id.startsWith('statistics-'))
const groups = [...new Set(topics.map(topic => topic.category))]
function MathCard({ formula }: { formula: StatFormula }) {
  const renderedMath = katex.renderToString(formula.math, { displayMode: true, throwOnError: false })
  return <section className="stat-math-card"><h3>{formula.title}</h3><div className="stat-math-expression" dangerouslySetInnerHTML={{ __html: renderedMath }} /><p><strong>Đọc công thức:</strong> {formula.reading}</p><dl><div><dt>Ký hiệu</dt><dd>{formula.symbols}</dd></div><div><dt>Điều kiện áp dụng</dt><dd>{formula.condition}</dd></div></dl></section>
}
export default function StatisticsLab({ onLanguage, onSection }: { onLanguage: (language: LearningRoute['language']) => void; onSection: (section: LearningRoute['section']) => void }) {
  const [activeId, setActiveId] = useState(topics[0].id)
  const index = topics.findIndex(topic => topic.id === activeId)
  const topic = topics[index]
  const content = statisticsContent[activeId]
  function select(id: string) { setActiveId(id); window.scrollTo({ top: 0, behavior: 'auto' }) }
  return <div className="app-shell ai-shell ai-docs-shell ai-sharing-shell statistics-shell">
    <aside className="sidebar ai-sidebar"><div className="sidebar-heading"><span>STATISTICS CHO DA</span><span>{index + 1}/{topics.length}</span></div><KnowledgeTopicNav topics={topics} selected={topic} onSelect={select} /></aside>
    <main className="main-area"><AppNavigation language="statistics" section="knowledge" onLanguage={onLanguage} onSection={onSection} trail={topic.category} />
      <div className="ai-mobile-lesson-picker"><label htmlFor="statistics-lesson">Statistics · Chọn bài</label><select id="statistics-lesson" value={activeId} onChange={event => select(event.target.value)}>{groups.map(group => <optgroup key={group} label={group}>{topics.filter(item => item.category === group).map(item => <option key={item.id} value={item.id}>{item.id.slice(-2)} · {item.title}</option>)}</optgroup>)}</select></div>
      <div className="ai-docs-layout"><article className="ai-doc-article" key={activeId}>
        <header className="ai-doc-header"><p className="ai-doc-breadcrumb">Statistics for Data Analyst <span>/</span> {topic.category}</p><p className="ai-doc-kicker">BÀI {String(index + 1).padStart(2,'0')} · XÁC SUẤT VÀ THỐNG KÊ</p><h1>{topic.title}</h1><p className="ai-doc-lead">{topic.intro}</p></header>
        <nav className="sheets-toc" aria-label="Mục lục bài viết"><a href="#stat-business">Bài toán kinh doanh</a>{content.sections.map((section,i)=><a key={section.title} href={`#stat-detail-${i}`}>{section.title}</a>)}<a href="#stat-math">Công thức và ký hiệu</a><a href="#stat-visual">Hình minh họa</a><a href="#stat-worked">Ví dụ tính từng bước</a><a href="#knowledge-example">Chạy thử Python</a><a href="#stat-exercise">Tự kiểm tra</a></nav>
        <section className="ai-doc-section" id="stat-business"><h2>Bài toán kinh doanh</h2><p>{topic.sections[0].text}</p></section>
        {content.sections.map((section,i)=><section className="ai-doc-section" id={`stat-detail-${i}`} key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
        <section className="ai-doc-section" id="stat-math"><h2>Công thức và ý nghĩa từng ký hiệu</h2><p>Đọc công thức cùng đơn vị và điều kiện áp dụng, rồi đối chiếu với ví dụ phía dưới.</p>{content.formulas.map(formula=><MathCard key={formula.title} formula={formula}/>)}</section>
        <section className="ai-doc-section" id="stat-visual"><h2>Hình minh họa</h2><StatisticsVisual id={activeId}/></section>
        <section className="ai-doc-section" id="stat-worked"><h2>{content.worked.title}</h2><ol className="stat-worked-steps">{content.worked.steps.map(step=><li key={step}>{step}</li>)}</ol><aside className="ai-doc-note"><strong>Diễn giải kết quả</strong><p>{content.worked.conclusion}</p></aside></section>
        <TheoryPlayground topic={topic}/>
        <section className="ai-doc-section" id="stat-exercise"><h2>Tự kiểm tra</h2><p>{content.exercise}</p><details className="sheets-data-details"><summary>Xem lời giải</summary><p>{content.answer}</p></details><aside className="ai-doc-note"><strong>Những điều cần nhớ</strong><ul>{topic.notes.map(note=><li key={note}>{note}</li>)}</ul></aside></section>
        <section className="ai-doc-section sheets-sources"><h2>Tài liệu đọc thêm</h2><a href={content.source.url} target="_blank" rel="noreferrer">{content.source.title}</a></section>
        <nav className="ai-doc-pagination" aria-label="Điều hướng bài"><button disabled={index===0} onClick={()=>select(topics[index-1].id)}><ArrowLeft size={16}/><span><small>Bài trước</small>{topics[index-1]?.title??'Bắt đầu series'}</span></button><button disabled={index===topics.length-1} onClick={()=>select(topics[index+1].id)}><span><small>Bài tiếp</small>{topics[index+1]?.title??'Hoàn thành series'}</span><ArrowRight size={16}/></button></nav>
      </article></div>
    </main>
  </div>
}
