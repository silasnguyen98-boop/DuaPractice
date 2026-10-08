import { ArrowUpRight, BookOpen } from 'lucide-react'
import type { LearningRoute } from './routeModel'
import LanguageSwitch from './LanguageSwitch'
import LearningSectionSwitch from './LearningSectionSwitch'
export default function AppNavigation({ language, section, onLanguage, onSection, disabled = false }: {
  language: LearningRoute['language']; section: LearningRoute['section']
  onLanguage: (language: LearningRoute['language']) => void; onSection: (section: LearningRoute['section']) => void
  disabled?: boolean; trail: string
}) {
  const general = ['roadmap', 'community', 'courses'].includes(section)
  return <header className="app-navigation"><div className="navigation-primary"><a className="navigation-brand" href="/practice/python" aria-label="DataLab — Một sản phẩm của DUA Edu, trang chủ"><span className="navigation-brand-icon"><BookOpen size={20} /></span><span className="navigation-brand-copy"><span className="navigation-product-name">data<span>lab</span></span><span className="navigation-brand-owner">Một sản phẩm của <strong>DUA <span>Edu</span></strong></span></span></a><LearningSectionSwitch language={language} section={section} onSwitch={onSection} disabled={disabled} /><a href="https://duadata.net/s/HLwdoCNCMr" className="navigation-courses">Tham gia lớp học<ArrowUpRight size={16} /></a></div>{!general && <div className="navigation-subjects"><LanguageSwitch section={section} language={language} onSwitch={onLanguage} disabled={disabled} /></div>}</header>
}
