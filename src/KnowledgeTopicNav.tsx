import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { KnowledgeTopic } from './knowledgeTopics'

type TopicNavItem = Pick<KnowledgeTopic, 'id' | 'title' | 'category'>

export default function KnowledgeTopicNav({ topics, selected, onSelect }: { topics: TopicNavItem[]; selected: TopicNavItem; onSelect: (id: string) => void }) {
  const prefix = useId()
  const categories = [...new Set(topics.map(topic => topic.category))]
  const [state, setState] = useState<{ selectedId: string; expanded: Record<string, boolean> }>({ selectedId: selected.id, expanded: { [selected.category]: true } })
  if (state.selectedId !== selected.id) {
    setState({ selectedId: selected.id, expanded: { ...state.expanded, [selected.category]: true } })
  }
  const expanded = state.expanded
  return <nav className="knowledge-topic-nav" aria-label="Chủ đề kiến thức">{categories.map((category, index) => {
    const titles: Record<string, string> = {
      'Nền tảng · SQL cho DA': 'Nền tảng SQL',
      'Tổng hợp · KPI & báo cáo': 'Tổng hợp & KPI',
      'Nền tảng · Python cho DA': 'Nền tảng Python',
      'Xử lý dữ liệu · Python': 'Xử lý dữ liệu',
      'Phân tích bảng · pandas': 'Phân tích với pandas',
      'Mở rộng · Machine Learning': 'Machine Learning',
    }
    const title = titles[category] ?? category
    const items = topics.filter(topic => topic.category === category)
    const open = Boolean(expanded[category])
    const panelId = `${prefix}-group-${index}`
    return <section className={selected.category === category ? 'knowledge-topic-group current-group' : 'knowledge-topic-group'} key={category}><button className="knowledge-group-toggle" aria-expanded={open} aria-controls={panelId} onClick={() => setState(current => ({ ...current, expanded: { ...current.expanded, [category]: !current.expanded[category] } }))}><span title={category}>{title}</span><small>{items.length} bài</small><ChevronDown size={16} className={open ? 'group-chevron expanded' : 'group-chevron'} aria-hidden="true" /></button><div className="knowledge-group-items" id={panelId} hidden={!open}>{items.map(item => <button key={item.id} className={selected.id === item.id ? 'knowledge-topic selected' : 'knowledge-topic'} aria-current={selected.id === item.id ? 'page' : undefined} onClick={() => onSelect(item.id)}>{item.title}</button>)}</div></section>
  })}</nav>
}
