import { Code2, Database, ChartNoAxesCombined, Sparkles, Sheet, BookOpen } from 'lucide-react'
import RouteLink from './RouteLink'
import { routePath, type LearningRoute } from './routeModel'
const subjects = [
  { id: 'da101', label: 'DA101', icon: BookOpen },
  { id: 'sql', label: 'SQL', icon: Database },
  { id: 'python', label: 'Python', icon: Code2 },
  { id: 'statistics', label: 'Statistics', icon: ChartNoAxesCombined },
  { id: 'power-bi', label: 'Power BI', icon: ChartNoAxesCombined },
  { id: 'ai', label: 'AI cho Data Analyst', icon: Sparkles },
  { id: 'google-sheets', label: 'Google Sheets', icon: Sheet },
] as const
export default function LanguageSwitch({ language, section, onSwitch, disabled = false }: { language: LearningRoute['language']; section: LearningRoute['section']; onSwitch: (language: LearningRoute['language']) => void; disabled?: boolean }) {
  return <nav className="language-switch" aria-label="Chọn môn học">{subjects.filter(subject => section !== 'practice' || subject.id === 'sql' || subject.id === 'python').map(({ id, label, icon: Icon }) => <RouteLink key={id} href={routePath({ section, language: id })} className={language === id ? 'language-active' : ''} active={language === id} disabled={disabled} onNavigate={() => onSwitch(id)}><Icon size={16} />{label}</RouteLink>)}</nav>
}
