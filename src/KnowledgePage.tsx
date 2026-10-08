import { useState } from 'react'
import { BookOpen, ArrowRight } from 'lucide-react'
import type { LearningRoute } from './routeModel'
import AppNavigation from './AppNavigation'
import KnowledgeTopicNav from './KnowledgeTopicNav'
import SqlCourseButton from './SqlCourseButton'
import TheoryPlayground from './TheoryPlayground'
import { knowledgeTopics } from './knowledgeTopics'
import JoinDemo from './JoinDemo'
import { joinQuery, type JoinKind } from './joinModel'
import CteDemo from './CteDemo'
import WindowDemo from './WindowDemo'
import WorkedExample from './WorkedExample'
import { AggregationAnimation, SortingAnimation, LagAnimation, UnionAnimation, ExistsAnimation, QualityAnimation } from './SqlAnimations'

export default function KnowledgePage({ language, onLanguage, onPractice, onSection }: { language: 'python' | 'sql' | 'statistics'; onLanguage: (language: LearningRoute['language']) => void; onPractice: () => void; onSection: (section: LearningRoute['section']) => void }) {
  const [selected, setSelected] = useState(language === 'sql' ? 'sql-intro' : 'python-intro')
  const [joinKind, setJoinKind] = useState<JoinKind>('FULL')
  const [demoQueries, setDemoQueries] = useState<Record<string, string>>({})
  const topics = knowledgeTopics.filter((topic) => language === 'statistics' ? topic.id.startsWith('statistics-') : topic.language === language && !topic.id.startsWith('statistics-'))
  const topic = topics.find((item) => item.id === selected) ?? topics[0]
  const example = topic.id === 'join' ? joinQuery(joinKind) : demoQueries[topic.id] ?? topic.example
  const updateDemoQuery = (query: string) => setDemoQueries(current => current[topic.id] === query ? current : { ...current, [topic.id]: query })
  return <div className="app-shell knowledge-shell"><aside className="sidebar"><a className="brand" href="#home" aria-label="DataLab, trang chủ"><span className="brand-mark"><BookOpen size={19} /></span><span className="brand-name">data<span>lab</span></span></a><KnowledgeTopicNav key={language} topics={topics} selected={topic} onSelect={setSelected} /><div className="sidebar-bottom sql-course-sidebar"><SqlCourseButton compact /></div></aside><main className="main-area"><AppNavigation language={language} section="knowledge" onLanguage={(next) => { onLanguage(next); setSelected(next === 'sql' ? 'sql-intro' : 'python-intro') }} onSection={onSection} trail={topic.category} /><div className="knowledge-main"><nav className="knowledge-mobile-topics" aria-label="Chọn chủ đề">{topics.map((item) => <button key={item.id} className={topic.id === item.id ? 'selected' : ''} onClick={() => setSelected(item.id)}>{item.title}</button>)}</nav><article className="knowledge-article" key={`${language}-${topic.id}`}><p className="knowledge-category">{topic.category}</p><h1>{topic.title}</h1><p className="knowledge-intro">{topic.intro}</p><nav className="article-navigation" aria-label="Mục lục bài kiến thức"><a href="#knowledge-concepts">Giải thích</a><a href="#knowledge-demo">Minh họa</a><a href="#knowledge-example">Chạy thử</a><a href="#knowledge-notes">Lưu ý</a></nav><div className="knowledge-text-sections" id="knowledge-concepts">{topic.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}</div><div id="knowledge-demo">{topic.id === 'join' ? <JoinDemo kind={joinKind} onKindChange={setJoinKind} /> : topic.id === 'cte' ? <CteDemo onQueryChange={updateDemoQuery} /> : topic.id === 'window' ? <WindowDemo onQueryChange={updateDemoQuery} /> : topic.id === 'aggregation' ? <AggregationAnimation /> : topic.id === 'sorting' ? <SortingAnimation onQueryChange={updateDemoQuery} /> : topic.id === 'sql-lag' ? <LagAnimation onQueryChange={updateDemoQuery} /> : topic.id === 'sql-union' ? <UnionAnimation onQueryChange={updateDemoQuery} /> : topic.id === 'sql-exists' ? <ExistsAnimation onQueryChange={updateDemoQuery} /> : topic.id === 'sql-quality' ? <QualityAnimation onQueryChange={updateDemoQuery} /> : <WorkedExample topic={topic} />}</div><TheoryPlayground key={`${topic.id}-${example}`} topic={{ ...topic, example }} /><section className="knowledge-notes" id="knowledge-notes"><h2>Những điều cần nhớ</h2><ul>{topic.notes.map((note) => <li key={note}>{note}</li>)}</ul></section>{topic.id === 'join' && <p className="knowledge-source">Đọc thêm: <a href="https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN" target="_blank" rel="noreferrer">Tài liệu JOIN của PostgreSQL</a></p>}<div className="knowledge-course-offer"><SqlCourseButton /></div><button className="knowledge-practice-link" onClick={onPractice}>Chuyển sang bài tập {language === 'sql' ? 'SQL' : 'Python'}<ArrowRight size={15} /></button></article></div></main></div>
}
