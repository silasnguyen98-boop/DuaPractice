import { Fragment, useState } from 'react'
import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react'
import AppNavigation from './AppNavigation'
import type { LearningRoute } from './routeModel'
import { aiTheoryLessons } from './aiTheoryLessons'
import AiArticleIllustration from './AiArticleIllustration'
import { getAiIllustrationTitle } from './aiIllustrationData'
import KnowledgeTopicNav from './KnowledgeTopicNav'
import AiToolsExplorer from './AiToolsExplorer'
import AiArticleImage from './AiArticleImage'
import { aiArticleImages, aiReferenceImages } from './aiArticleImages'

const aiTopics = aiTheoryLessons.map(lesson => ({ id: lesson.id, title: lesson.title, category: lesson.group }))
const groups = [...new Set(aiTheoryLessons.map(item => item.group))]

export default function AiLab({ section, onLanguage, onSection }: { section: LearningRoute['section']; onLanguage: (language: LearningRoute['language']) => void; onSection: (section: LearningRoute['section']) => void }) {
  const [activeId, setActiveId] = useState(aiTheoryLessons[0].id)
  const lesson = aiTheoryLessons.find(item => item.id === activeId) ?? aiTheoryLessons[0]
  const lessonIndex = aiTheoryLessons.findIndex(item => item.id === activeId)
  const articleImage = aiArticleImages[lesson.id]
  const referenceImage = aiReferenceImages[lesson.id]
  const illustrationTitle = getAiIllustrationTitle(lesson.id)
  const illustrationAfter = ['overview', 'generative-ai', 'ai-assistants', 'tools'].includes(lesson.id) ? 0 : 1
  const toc = [
    ...lesson.details.flatMap((detail, index) => [
      { id: `ai-detail-${index}`, title: detail.heading },
      ...(index === illustrationAfter ? [{ id: 'ai-illustration', title: illustrationTitle }] : []),
    ]),
    ...(lesson.caseStudy ? [{ id: 'ai-case', title: lesson.caseStudy.title }] : []),
  ]

  function changeLesson(id: string) {
    setActiveId(id)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  function moveLesson(direction: -1 | 1) {
    const next = aiTheoryLessons[lessonIndex + direction]
    if (next) changeLesson(next.id)
  }

  return (
    <div className="app-shell ai-shell ai-docs-shell ai-sharing-shell">
      <aside className="sidebar ai-sidebar">
        <div className="sidebar-heading"><span>LỘ TRÌNH AI</span><span>{lessonIndex + 1}/{aiTheoryLessons.length}</span></div>
        <KnowledgeTopicNav topics={aiTopics} selected={aiTopics[lessonIndex]} onSelect={changeLesson} />
      </aside>
      <main className="main-area">
        <AppNavigation language="ai" section={section} onLanguage={onLanguage} onSection={onSection} trail={lesson.group} />
        <div className="ai-mobile-lesson-picker"><label htmlFor="ai-lesson-picker">AI cho Data Analyst · Chọn chủ đề</label><select id="ai-lesson-picker" value={activeId} onChange={event => changeLesson(event.target.value)}>{groups.map(group => <optgroup label={group} key={group}>{aiTheoryLessons.filter(item => item.group === group).map(item => <option value={item.id} key={item.id}>{String(aiTheoryLessons.indexOf(item) + 1).padStart(2, '0')} · {item.title}</option>)}</optgroup>)}</select></div>
        <div className="ai-docs-layout">
          <article className="ai-doc-article" id="ai-article">
            <header className="ai-doc-header">
              <p className="ai-doc-breadcrumb">AI cho Data Analyst · Chia sẻ <span>/</span> {lesson.group}</p>
              <div className="ai-doc-meta"><span><Clock3 size={14} />{lesson.duration}</span></div>
              <h1>{lesson.title}</h1><p className="ai-doc-lead">{lesson.summary}</p>
            </header>
            <details className="ai-mobile-toc"><summary>Trong bài này</summary><nav aria-label="Mục lục bài trên di động">{toc.map(item => <a key={item.id} href={`#${item.id}`}>{item.title}</a>)}</nav></details>
            {articleImage && <AiArticleImage image={articleImage} />}
            {lesson.id === 'ai-assistants' && <AiToolsExplorer />}
            {lesson.details.map((detail, index) => <Fragment key={detail.heading}><section className="ai-doc-section ai-doc-explanation" id={`ai-detail-${index}`}>
              <h2>{detail.heading}</h2>{detail.body.split('\n\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </section>{referenceImage?.afterSection === index && <AiArticleImage image={referenceImage} reference />}{index === illustrationAfter && <section className="ai-doc-section ai-doc-illustration" id="ai-illustration"><h2>{illustrationTitle}</h2><AiArticleIllustration key={activeId} lessonId={lesson.id} /></section>}</Fragment>)}
            {lesson.caseStudy && <section className="ai-doc-section" id="ai-case">
              <span className="ai-doc-kicker">VÍ DỤ · DỮ LIỆU GIẢ LẬP</span><h2>{lesson.caseStudy.title}</h2><p>{lesson.caseStudy.context}</p>
              <div className="ai-case-table"><table><caption>Bảng minh họa</caption><thead><tr>{lesson.caseStudy.columns.map(column => <th key={column} scope="col">{column}</th>)}</tr></thead><tbody>{lesson.caseStudy.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>
              {lesson.caseStudy.note && <aside className="ai-doc-note"><strong>Đọc cùng bảng</strong><p>{lesson.caseStudy.note}</p></aside>}
            </section>}
            <nav className="ai-doc-pagination" aria-label="Điều hướng bài"><button onClick={() => moveLesson(-1)} disabled={lessonIndex === 0}><ArrowLeft size={16} /><span><small>Bài trước</small>{aiTheoryLessons[lessonIndex - 1]?.title ?? 'Bắt đầu lộ trình'}</span></button><button onClick={() => moveLesson(1)} disabled={lessonIndex === aiTheoryLessons.length - 1}><span><small>Bài tiếp</small>{aiTheoryLessons[lessonIndex + 1]?.title ?? 'Hết lộ trình'}</span><ArrowRight size={16} /></button></nav>
          </article>
        </div>
      </main>
    </div>
  )
}
