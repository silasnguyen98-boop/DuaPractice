import { useEffect, useState } from 'react'
import { ArrowRight, Check, ChevronRight, CircleAlert, Pause, Play, RotateCcw } from 'lucide-react'

function useSteps(total: number) {
  const [{ step, playing }, setState] = useState({ step: 0, playing: false })
  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => {
      setState(current => {
        const next = Math.min(current.step + 1, total - 1)
        return { step: next, playing: next < total - 1 }
      })
    }, 1500)
    return () => window.clearInterval(timer)
  }, [playing, total])
  return { step, controls: <div className="ai-visual-controls"><button onClick={() => setState(current => ({ step: current.step === total - 1 ? 0 : current.step, playing: !current.playing }))}>{playing ? <Pause size={14} /> : <Play size={14} />}{playing ? 'Tạm dừng' : 'Phát mô phỏng'}</button><button disabled={step === total - 1} onClick={() => setState(current => ({ step: current.step + 1, playing: false }))}><ChevronRight size={14} />Bước tiếp</button><button aria-label="Làm lại mô phỏng" onClick={() => setState({ step: 0, playing: false })}><RotateCcw size={14} /></button><span>Bước {step + 1}/{total}</span></div> }

}

function JoinVisual() {
  const { step, controls } = useSteps(4)
  const descriptions = ['orders có 2 đơn: tổng đúng là 300 + 200 = 500.', 'Đơn 101 khớp 2 dòng sản phẩm. Giá trị 300 của đơn xuất hiện 2 lần.', 'Sau khi nối bảng (JOIN), có 3 dòng. Hàm cộng SUM(amount) tính 300 + 300 + 200 = 800.', 'Câu hỏi chỉ cần tổng tiền đơn: đọc orders để mỗi đơn được cộng đúng một lần.']
  return <div className="ai-visual ai-join-visual"><div className="ai-join-flow"><div><span className="ai-visual-label">orders · một dòng / đơn</span><div className="ai-order-row"><b>#101</b><span>300</span></div><div className="ai-order-row"><b>#102</b><span>200</span></div></div><ArrowRight className="ai-flow-arrow" size={22} /><div><span className="ai-visual-label">{step === 0 ? 'Chờ nối bảng' : step === 3 ? 'Tính trực tiếp từ orders' : 'Nối với bảng sản phẩm'}</span>{step > 0 && <><div className={`ai-order-row ${step > 0 && step < 3 ? 'duplicated' : ''}`}><b>#101</b><span>{step === 3 ? 'Một đơn' : 'Bàn'}</span><strong>300</strong></div>{step > 0 && step < 3 && <div className="ai-order-row duplicated ai-visual-enter"><b>#101</b><span>Ghế</span><strong>300</strong></div>}<div className="ai-order-row"><b>#102</b><span>{step === 3 ? 'Một đơn' : 'Đèn'}</span><strong>200</strong></div></>}<div className={`ai-visual-total ${step === 2 ? 'incorrect' : ''}`}>{step === 0 ? 'Chưa cộng sau nối bảng' : step === 1 ? '300 bị lặp theo sản phẩm' : step === 2 ? 'Tổng sai: 800' : 'Tổng đúng: 500'}</div></div></div><p className="ai-visual-caption" aria-live="polite">{descriptions[step]} <small>Đơn vị: nghìn đồng.</small></p>{controls}</div>
}

function RateVisual() {
  const { step, controls } = useSteps(3)
  const captions = ['Mỗi ô đại diện 10 lượt truy cập. Ô xanh đại diện 10 lượt tạo đơn. A có 100 lượt, B có 300 lượt.', 'Trung bình 10% và 30% cho ra 20%, nhưng cách tính này coi hai kênh có số lượt bằng nhau.', 'Cộng số lượt tạo đơn rồi chia tổng lượt truy cập: 100 / 400 = 25%. Kênh B có nhiều lượt hơn nên không thể coi hai kênh đóng góp ngang nhau.']
  return <div className="ai-visual"><div className="ai-rate-groups">{[{name:'A',count:10,converted:1,rate:10},{name:'B',count:30,converted:9,rate:30}].map(group => <div className="ai-rate-group" key={group.name}><div className="ai-rate-heading"><b>Kênh {group.name}</b><span>{group.converted * 10}/{group.count * 10} = {group.rate}%</span></div><div className="ai-rate-dots">{Array.from({length:group.count},(_,index)=><span key={index} className={index<group.converted?'converted':''} />)}</div></div>)}</div><div className={`ai-visual-total ${step === 1 ? 'incorrect' : ''}`}>{step === 0 ? 'Hai kênh có số lượt truy cập khác nhau' : step === 1 ? '(10% + 30%) / 2 = 20% · Sai cách gộp' : '(10 + 90) / (100 + 300) = 25%'}</div><p className="ai-visual-caption" aria-live="polite">{captions[step]}</p>{controls}</div>
}

function ParseVisual() {
  const { step, controls } = useSteps(3)
  return <div className="ai-visual"><div className="ai-parse-rows">{[{id:101,date:'01/05/2026',amount:100},{id:102,date:'02/05/2026',amount:200},{id:103,date:'31/04/2026',amount:300},{id:104,date:'01/05/2026',amount:400}].map(row => <div key={row.id} className={`ai-parse-row ${step > 0 && row.id === 103 ? 'parse-invalid' : ''}`}><b>#{row.id}</b><span>{row.date}</span><span>{row.amount}</span><span>{step === 0 ? 'Chưa kiểm tra ngày' : row.id === 103 ? 'Ngày không tồn tại' : 'Hợp lệ'}</span></div>)}</div>{step === 2 && <div className="ai-parse-totals ai-visual-enter"><div><Check size={16} /><span>Dòng hợp lệ<br /><strong>3 dòng · 700</strong></span></div><div><CircleAlert size={16} /><span>Dòng cần xem lại<br /><strong>1 dòng · 300</strong></span></div></div>}<p className="ai-visual-caption" aria-live="polite">{['Có 4 dòng ban đầu; ngày theo thứ tự ngày/tháng/năm, tiền tính bằng nghìn đồng.', 'Đọc ngày theo ngày/tháng/năm. Ngày của dòng 103 không tồn tại nên được đánh dấu là thiếu; hai đơn cùng ngày 1/5 vẫn hợp lệ.', 'Tách dòng lỗi để tra lại nguồn. 3 + 1 = 4 dòng; 700 + 300 = 1.000. Không mất dữ liệu.'][step]}</p>{controls}</div>
}

function WorkflowVisual() {
  const [complete, setComplete] = useState(false)
  const {step, controls} = useSteps(4)
  const labels = ['Lấy bảng chỉ số','Kiểm tra dữ liệu','AI soạn bản nháp','Người phụ trách duyệt']
  const blocked = !complete && step >= 1
  return <div className="ai-visual"><div className="ai-visual-switch" role="group" aria-label="Độ đầy đủ dữ liệu"><button aria-pressed={!complete} onClick={()=>setComplete(false)}>Chỉ có 5/7 ngày</button><button aria-pressed={complete} onClick={()=>setComplete(true)}>Đã đủ 7/7 ngày</button></div><ol className="ai-workflow">{labels.map((label,index)=><li key={label} className={blocked && index > 1 ? 'workflow-disabled' : index === (blocked ? 1 : step) ? 'workflow-current' : index < step ? 'workflow-done' : ''}><span>{index + 1}</span><strong>{label}</strong>{index < 3 && <ArrowRight size={16} />}</li>)}</ol><p className="ai-visual-caption" aria-live="polite">{blocked ? 'Dừng ở kiểm tra dữ liệu: thiếu 2 ngày, chưa chuyển sang bước soạn báo cáo.' : ['Dùng câu lệnh SQL hoặc Python để tạo bảng chỉ số theo cách tính đã thống nhất.', 'Đủ 7 ngày ở cả hai kỳ; tiếp tục kiểm tra định nghĩa và chất lượng số liệu.', 'AI chỉ viết nhận xét từ bảng đã kiểm tra, không tự thêm nguyên nhân.', 'Người phân tích đối chiếu số và bằng chứng trước khi gửi báo cáo.'][step]}</p>{controls}</div>
}

function RevenueVisual({aov = false}: {aov?: boolean}) {
  const [period, setPeriod] = useState<'apr'|'may'>('apr')
  const isMay = period === 'may'
  return <div className="ai-visual"><div className="ai-visual-switch" role="group" aria-label="Kỳ doanh thu"><button aria-pressed={!isMay} onClick={()=>setPeriod('apr')}>Tháng 4</button><button aria-pressed={isMay} onClick={()=>setPeriod('may')}>Tháng 5</button></div>{aov ? <div className="ai-aov-equation"><div><span>Số đơn</span><strong>{isMay ? '700' : '1.000'}</strong></div><span>×</span><div><span>Tiền trung bình · triệu/đơn</span><strong>0,6</strong></div><span>=</span><div><span>Doanh thu · triệu</span><strong>{isMay ? '420' : '600'}</strong></div></div> : <div className="ai-revenue-bars">{[{label:'Trực tuyến',value:isMay?420:600},{label:'Cửa hàng',value:isMay?480:400}].map(item=><div key={item.label} className="ai-revenue-row"><span>{item.label}</span><div className="ai-bar-track"><div style={{width:`${item.value/600*100}%`}} /></div><strong>{item.value}</strong></div>)}</div>}<p className="ai-visual-caption">{aov ? 'Chuyển kỳ để thấy: tiền trung bình mỗi đơn không đổi, số đơn giảm 30%, nên doanh thu cũng giảm 30%. Ví dụ cho thấy số đơn giảm làm doanh thu giảm, chưa giải thích vì sao ít đơn hơn.' : 'Chuyển kỳ để so sánh hai kênh. Trực tuyến giảm 180 triệu, cửa hàng tăng 80 triệu; tổng giảm ròng 100 triệu. Biểu đồ chưa cho biết nguyên nhân.'}</p></div>
}

export default function AiLessonVisual({lessonId}: {lessonId:string}) {
  if(lessonId==='sql-python') return <JoinVisual />
  if(lessonId==='validation') return <RateVisual />
  if(lessonId==='data-analysis') return <ParseVisual />
  if(lessonId==='automation') return <WorkflowVisual />
  if(['overview','storytelling','prompt-lab'].includes(lessonId)) return <RevenueVisual aov={lessonId==='prompt-lab'} />
  return null
}
