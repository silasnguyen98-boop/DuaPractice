import { Award, ArrowRight } from 'lucide-react'
import AppNavigation from './AppNavigation'
import type { LearningRoute } from './routeModel'

export default function CertificationPage({ language, onLanguage, onSection }: { language: LearningRoute['language']; onLanguage: (language: LearningRoute['language']) => void; onSection: (section: LearningRoute['section']) => void }) {
  return <div className="app-shell certification-shell"><AppNavigation language={language} section="certification" onLanguage={onLanguage} onSection={onSection} trail="Luyện thi chứng chỉ" /><main className="certification-main"><span className="certification-icon"><Award size={30} /></span><p className="eyebrow">LUYỆN THI CHỨNG CHỈ · {language.toUpperCase()}</p><h1>Chuẩn bị cho bước tiếp theo.</h1><p>Nội dung luyện thi chứng chỉ Data Analyst đang được chuẩn bị. Trong lúc chờ, bạn có thể củng cố kiến thức và luyện tập với các bài hiện có.</p><span className="certification-status">Chưa mở luyện thi</span><div className="certification-actions"><button onClick={() => onSection('knowledge')}>Ôn lý thuyết<ArrowRight size={16} /></button><button onClick={() => onSection('practice')}>Luyện thực hành<ArrowRight size={16} /></button></div></main></div>
}
