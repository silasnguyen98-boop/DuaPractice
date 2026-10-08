import { useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, BarChart3, Braces, CalendarDays, Check, CircleHelp, Code2, FileText, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react'
import AiLessonVisual from './AiLessonVisual'
import { scenes, simulations } from './aiIllustrationData'

function MiniDashboard() {
  const [month, setMonth] = useState<'apr' | 'may'>('may')
  const may = month === 'may'
  return <div className="ai-picture-dashboard">
    <div className="ai-picture-dashboard-head"><span><BarChart3 size={16} /> Doanh thu theo kênh</span><div role="group" aria-label="Kỳ dashboard minh họa"><button aria-pressed={!may} onClick={() => setMonth('apr')}>Tháng 4</button><button aria-pressed={may} onClick={() => setMonth('may')}>Tháng 5</button></div></div>
    <div className="ai-picture-metrics" aria-live="polite"><div><small>Tổng doanh thu</small><strong>{may ? '900' : '1.000'} <span>triệu</span></strong></div><div><small>So với tháng 4</small><strong>{may ? '−10%' : 'Kỳ gốc'}</strong></div></div>
    <svg viewBox="0 0 560 128" role="img" aria-label={`Doanh thu ${may ? 'tháng 5: trực tuyến 420, cửa hàng 480' : 'tháng 4: trực tuyến 600, cửa hàng 400'} triệu đồng`}>
      <text x="4" y="40">Trực tuyến</text><text x="4" y="96">Cửa hàng</text>
      <rect x="120" y="15" width="350" height="36" rx="5" fill="#edf3ee" /><rect x="120" y="71" width="350" height="36" rx="5" fill="#edf3ee" />
      <rect x="120" y="15" width={may ? 245 : 350} height="36" rx="5" fill="#19765c" /><rect x="120" y="71" width={may ? 280 : 233.33} height="36" rx="5" fill="#88b59b" />
      <text x="492" y="40">{may ? '420' : '600'}</text><text x="492" y="96">{may ? '480' : '400'}</text>
    </svg>
  </div>
}

function ContextExample({ id }: { id: string }) {
  if (id === 'generative-ai') return <div className="ai-picture-token-strip" aria-label="Ví dụ chuỗi token minh họa"><span>Câu trả lời đang được tạo</span><div>{['SELECT', 'SUM', '(', 'amount', ')', 'FROM', 'orders'].map((token, i) => <code key={`${token}-${i}`}>{token}</code>)}<span className="ai-picture-token-next">phần tiếp theo?</span></div></div>
  if (id === 'rag') return <div className="ai-picture-document"><FileText size={24} /><div><span>Đoạn tài liệu định nghĩa chỉ số được tìm thấy · ví dụ</span><strong>Khách đang hoạt động</strong><p>Có ít nhất một giao dịch thành công trong 30 ngày.</p></div><span className="ai-picture-document-tag">Đưa cho AI đọc</span></div>
  if (id === 'prompting') return <div className="ai-picture-prompt"><Code2 size={20} /><p>“Dùng bảng orders, mỗi dòng là một đơn. Tính doanh thu tháng 5 của đơn paid theo paid_at. Trả SQL và giải thích cách tính.”</p></div>
  if (id === 'privacy') return <div className="ai-picture-privacy"><div><LockKeyhole size={18} /><span>Bỏ thông tin không cần</span><code>email · số điện thoại · tên</code></div><div><ShieldCheck size={18} /><span>Giữ cấu trúc cần thử</span><code>order_id · amount · mã dùng để nối bảng</code></div></div>
  if (id === 'business-context') return <div className="ai-picture-calendar"><span><CalendarDays size={18} />Tháng 4<strong>Tạo tài khoản</strong></span><ArrowRight size={20} /><span><Check size={18} />Tháng 5<strong>Đơn thanh toán đầu tiên</strong></span><b>Khách mới tháng 5</b></div>
  if (id === 'api') return <div className="ai-picture-prompt"><Braces size={20} /><p><code>{'{ summary: "…", observations: ["…"], missing_information: [] }'}</code><small>Tên mục minh họa: tóm tắt, nhận xét và thông tin thiếu. Nội dung vẫn cần so với số liệu.</small></p></div>
  return null
}

export default function AiArticleIllustration({ lessonId }: { lessonId: string }) {
  const [active, setActive] = useState(0)
  const scene = scenes[lessonId]
  const simulation = simulations[lessonId]
  if (simulation) return <figure className="ai-article-picture" aria-label={simulation.title}>
    <div className="ai-picture-kicker"><Sparkles size={14} /> MINH HỌA TƯƠNG TÁC</div>
    <AiLessonVisual lessonId={simulation.component} />
    <figcaption>{simulation.caption}</figcaption>
  </figure>
  if (!scene) return null
  const StepIcon = scene.steps[active].icon
  const parallel = ['tools', 'ai-assistants'].includes(lessonId)
  const branching = lessonId === 'analyst-assistant'
  return <figure className="ai-article-picture" aria-label={scene.title}>
    <div className="ai-picture-kicker"><Sparkles size={14} /> {parallel ? 'BẢN ĐỒ CÔNG CỤ' : branching ? 'SƠ ĐỒ XỬ LÝ' : 'SƠ ĐỒ MINH HỌA'}<span>Chọn một ô để khám phá</span></div>
    <div className={`ai-picture-flow${parallel ? ' ai-picture-parallel' : ''}${branching ? ' ai-picture-branching' : ''}`} role="group" aria-label={scene.title}>{scene.steps.map((step, index) => {
      const Icon = step.icon
      return <button className={`ai-picture-node${active === index ? ' is-active' : ''}`} aria-pressed={active === index} onClick={() => setActive(index)} key={step.title}>
        <span className="ai-picture-node-top"><span className="ai-picture-icon"><Icon size={25} strokeWidth={1.6} /></span><small>{String(index + 1).padStart(2, '0')}</small></span>
        <strong>{step.title}</strong><span className="ai-picture-node-text">{step.text}</span>
        {!parallel && !branching && index < scene.steps.length - 1 && <ArrowRight className="ai-picture-connector" size={20} aria-hidden="true" />}
        {branching && index === 0 && <ArrowDown className="ai-picture-connector" size={20} aria-hidden="true" />}
        {branching && index === 1 && <svg className="ai-picture-fork" viewBox="0 0 240 32" aria-hidden="true"><path d="M120 0 V12 H20 V30 M120 12 H220 V30" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M16 25 L20 30 L24 25 M216 25 L220 30 L224 25" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>}
      </button>
    })}</div>
    {branching && <div className="ai-picture-branch-labels"><span><Check size={15} />Có dữ liệu → trả lời</span><span><CircleHelp size={15} />Thiếu dữ liệu → hỏi lại</span></div>}
    <ContextExample id={lessonId} />
    {['business-dashboard', 'storytelling'].includes(lessonId) && <MiniDashboard />}
    <div className="ai-picture-detail" aria-live="polite"><StepIcon size={19} /><p><strong>{scene.steps[active].title}</strong>{scene.steps[active].note}</p></div>
    <div className="ai-picture-controls"><button disabled={active === 0} onClick={() => setActive(active - 1)} aria-label="Xem bước trước"><ArrowLeft size={16} /></button><span>{parallel || branching ? 'Mục' : 'Bước'} {active + 1}/{scene.steps.length}</span><button disabled={active === scene.steps.length - 1} onClick={() => setActive(active + 1)} aria-label="Xem bước tiếp"><ArrowRight size={16} /></button><ArrowDown size={14} /><small>Đọc chú thích theo từng bước</small></div>
    <figcaption>{scene.caption}</figcaption>
  </figure>
}
