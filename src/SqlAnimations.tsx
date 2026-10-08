import useDemoQuery from './useDemoQuery'
import { lagQuery, unionQuery, existsQuery, sortingQuery, qualityQuery, type DemoQueryProps } from './demoQueries'
import { useEffect, useState, type ReactNode } from 'react'
import { ArrowRight, Pause, Play, RotateCcw, StepForward } from 'lucide-react'

function Controls({ step, last, playing, onStep, onPlaying }: { step: number; last: number; playing: boolean; onStep: (step: number) => void; onPlaying: (playing: boolean) => void }) {
  const running = playing && step < last
  return <div className="demo-controls"><button onClick={() => { if (running) onPlaying(false); else { if (step === last) onStep(0); onPlaying(true) } }}>{running ? <Pause size={15} /> : <Play size={15} />}{running ? 'Tạm dừng' : 'Phát mô phỏng'}</button><button disabled={step === last} onClick={() => { onPlaying(false); onStep(step + 1) }}><StepForward size={15} />Bước tiếp</button><button aria-label="Đặt lại mô phỏng" onClick={() => { onPlaying(false); onStep(0) }}><RotateCcw size={15} /></button><button onClick={() => { onPlaying(false); onStep(last) }}>Xem kết quả</button><span>Bước {step + 1}/{last + 1}</span></div>
}
function usePlayback(last: number) {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    if (!playing || step >= last) return
    const timer = window.setTimeout(() => setStep(current => current + 1), 1800)
    return () => window.clearTimeout(timer)
  }, [step, playing, last])
  return { step, last, playing, onStep: setStep, onPlaying: setPlaying }
}
function Frame({ title, description, playback, explanation, children }: { title: string; description: string; playback: ReturnType<typeof usePlayback>; explanation: string; children: ReactNode }) {
  return <section className="sql-animation" aria-label={title}><h2>{title}</h2><p className="join-description">{description}</p>{children}<Controls {...playback} /><p className="demo-explanation" aria-live="polite">{explanation}</p><p className="knowledge-caption">Mô phỏng giải thích phép xử lý trên dữ liệu; không biểu diễn execution plan vật lý của database.</p></section>
}
function Card({ children, className = '' }: { children: ReactNode; className?: string }) { return <div className={`sql-motion-card ${className}`}>{children}</div> }
const groupOrders = [{ id: 1, channel: 'Website', amount: 300, status: 'đã thanh toán' }, { id: 2, channel: 'Website', amount: 250, status: 'đã thanh toán' }, { id: 3, channel: 'Ứng dụng', amount: 200, status: 'đã thanh toán' }, { id: 4, channel: 'Ứng dụng', amount: 800, status: 'chờ thanh toán' }]
export function AggregationAnimation() {
  const playback = usePlayback(5)
  const { step } = playback
  const explanations = ['Đang hiển thị dữ liệu đầu vào; chưa thực hiện WHERE và GROUP BY. Bấm Phát mô phỏng hoặc Bước tiếp để lọc đơn đã thanh toán rồi gom theo channel.', 'WHERE loại #4 vì pending. Đơn 800 không góp vào doanh thu paid.', 'Đơn #1 vào nhóm Website: tổng tạm thời 300.', 'Đơn #2 cũng vào Website: 300 + 250 = 550.', 'Đơn #3 vào Ứng dụng: tổng 200. GROUP BY tạo hai dòng tổng hợp.', 'HAVING giữ Website vì 550 ≥ 500; loại Ứng dụng vì 200 < 500.']
  return <Frame title="Các đơn được gom thành tổng như thế nào?" description="WHERE status = 'đã thanh toán' → GROUP BY channel → HAVING SUM(amount) >= 500" playback={playback} explanation={explanations[step]}>
    <div className="sql-motion-columns"><div><h3>orders</h3>{groupOrders.map((row, index) => <Card key={row.id} className={`${step >= 1 && row.status !== 'đã thanh toán' ? 'motion-excluded' : ''} ${step === index + 2 && index < 3 ? 'motion-current' : ''}`}><b>#{row.id}</b><span>{row.channel}</span><strong>{row.amount}</strong><small>{row.status}{step >= 1 && row.status !== 'đã thanh toán' ? ' · bị loại' : ''}</small></Card>)}</div><ArrowRight className="sql-motion-arrow" aria-hidden="true" /><div><h3>GROUP BY channel</h3>{['Website', 'Ứng dụng'].map(channel => {
      const members = groupOrders.slice(0, Math.max(0, Math.min(3, step - 1))).filter(row => row.channel === channel)
      const total = members.reduce((sum, row) => sum + row.amount, 0)
      return <div className={`sql-group-bin ${step === 5 && total < 500 ? 'motion-excluded' : ''}`} key={channel}><h4>{channel}</h4><div className="sql-group-members">{members.map(row => <Card key={row.id} className="motion-arrive">#{row.id} · {row.amount}</Card>)}</div><p>{members.length ? `${members.map(row => row.amount).join(' + ')} = ${total}` : step < 2 ? 'Chưa thực hiện GROUP BY' : 'Chưa xét các dòng Ứng dụng trong mô phỏng'}</p>{step === 5 && <strong>{total >= 500 ? 'Giữ nhóm · đạt 500' : 'Loại nhóm · dưới 500'}</strong>}</div>
    })}</div></div>
  </Frame>
}
const sortRows = [{ id: 3, amount: 50 }, { id: 2, amount: 80 }, { id: 1, amount: 80 }, { id: 4, amount: 30 }]
export function SortingAnimation({ onQueryChange }: DemoQueryProps) {
  useDemoQuery(sortingQuery, onQueryChange)
  const playback = usePlayback(3)
  const { step } = playback
  const order = step === 0 ? sortRows : [...sortRows].sort((a, b) => b.amount - a.amount || (step >= 2 ? a.id - b.id : 0))
  const explanations = ['Các dòng đang ở thứ tự ban đầu, chưa phải top N.', 'amount DESC đưa hai đơn 80 lên trước 50 và 30. Hai đơn 80 chưa được phân thứ tự bằng key phụ.', 'id ASC xử lý đồng giá: #1 đứng trước #2. Các dòng đổi vị trí, dữ liệu của mỗi dòng được giữ nguyên.', 'LIMIT 2 chỉ giữ hai dòng đầu của thứ tự vừa tạo: #1 và #2.']
  return <Frame title="Sắp xếp rồi mới lấy top N" description="ORDER BY amount DESC, id ASC LIMIT 2" playback={playback} explanation={explanations[step]}>
    <div className="sql-sort-board" aria-label="Thứ tự đơn hàng"><div className="sql-sort-ranks">{order.map((_, index) => <span key={index}>{index + 1}</span>)}</div><div className="sql-sort-track">{sortRows.map(row => {
      const index = order.findIndex(item => item.id === row.id)
      return <div key={row.id} className={`sql-sort-row ${step === 3 && index >= 2 ? 'motion-excluded' : ''}`} style={{ transform: `translateY(${index * 62}px)` }}><b>#{row.id}</b><div className="sql-amount-bar" style={{ width: `${row.amount}%` }} /><strong>{row.amount}</strong><small>{step === 3 ? index < 2 ? 'Giữ' : 'Ngoài top 2' : ''}</small></div>
    })}</div></div>
  </Frame>
}
const months = [{ month: 'Tháng 1', revenue: 100 }, { month: 'Tháng 2', revenue: 120 }, { month: 'Tháng 3', revenue: 90 }]
export function LagAnimation({ onQueryChange }: DemoQueryProps) {
  const playback = usePlayback(3)
  const { step } = playback
  const [mode, setMode] = useState<'LAG' | 'LEAD'>('LAG')
  useDemoQuery(lagQuery(mode), onQueryChange)
  const current = step - 1
  const source = current + (mode === 'LAG' ? -1 : 1)
  const peer = months[source]
  const active = months[current]
  return <Frame title="Giá trị kỳ trước và kỳ sau đến từ đâu?" description="Mỗi dòng là doanh thu một tháng. Mũi tên nối dòng nguồn với dòng nhận giá trị." playback={playback} explanation={active ? `${active.month}: ${mode} lấy ${peer ? `${peer.revenue} từ ${peer.month}` : 'NULL vì không có dòng tương ứng'}.${mode === 'LAG' && peer ? ` Growth = (${active.revenue} − ${peer.revenue}) / ${peer.revenue} = ${Math.round((active.revenue - peer.revenue) / peer.revenue * 100)}%.` : ''}` : `Chọn ${mode} rồi phát để theo dõi từng tháng.`}>
    <div className="join-kind-tabs">{(['LAG', 'LEAD'] as const).map(item => <button key={item} aria-pressed={mode === item} className={mode === item ? 'selected' : ''} onClick={() => { setMode(item); playback.onStep(0); playback.onPlaying(false) }}>{item}</button>)}</div>
    <div className="sql-lag-board"><svg viewBox="0 0 80 210" aria-hidden="true">{active && peer && <g key={`${mode}-${step}`} className="motion-link"><path d={`M 70 ${source * 62 + 30} H 18 V ${current * 62 + 30} H 60`} fill="none" stroke="#19765c" strokeWidth="2" /><path d={`M 53 ${current * 62 + 24} L 63 ${current * 62 + 30} L 53 ${current * 62 + 36}`} fill="none" stroke="#19765c" strokeWidth="2" /></g>}</svg><div className="sql-lag-rows">{months.map((row, index) => {
      const neighbor = months[index + (mode === 'LAG' ? -1 : 1)]
      return <Card key={row.month} className={current === index ? 'motion-current' : source === index && active ? 'motion-source' : ''}><b>{row.month}</b><span>revenue: {row.revenue}</span><strong>{mode}: {index < step ? neighbor?.revenue ?? 'NULL' : '—'}</strong></Card>
    })}</div></div><p className="knowledge-caption">LAG/LEAD lấy dòng trước/sau đang có trong dữ liệu, không tự bổ sung tháng bị thiếu.</p>
  </Frame>
}
const unionSources = [{ source: 'Website', amount: 100 }, { source: 'Website', amount: 200 }, { source: 'Ứng dụng', amount: 200 }, { source: 'Ứng dụng', amount: 300 }]
export function UnionAnimation({ onQueryChange }: DemoQueryProps) {
  const playback = usePlayback(4)
  const [all, setAll] = useState(true)
  useDemoQuery(unionQuery(all), onQueryChange)
  const processed = unionSources.slice(0, playback.step)
  const result = all ? processed : processed.filter((row, index, rows) => rows.findIndex(peer => peer.amount === row.amount) === index)
  const active = processed.at(-1)
  const duplicate = !all && active && processed.slice(0, -1).some(row => row.amount === active.amount)
  return <Frame title="Ghép hai bảng theo chiều dọc" description="Chỉ SELECT amount để thấy rõ sự khác biệt khi hai nguồn cùng có giá trị 200." playback={playback} explanation={active ? `${active.source} gửi amount ${active.amount}. ${duplicate ? 'UNION đã có 200 nên không thêm dòng trùng.' : 'Thêm một dòng vào kết quả.'} ${result.length} dòng hiện có.` : 'Hai nguồn Website và Ứng dụng có cùng cấu trúc. Chọn UNION hoặc UNION ALL để so sánh.'}>
    <div className="join-kind-tabs">{[true, false].map(value => <button key={String(value)} className={all === value ? 'selected' : ''} aria-pressed={all === value} onClick={() => { setAll(value); playback.onStep(0); playback.onPlaying(false) }}>{value ? 'UNION ALL' : 'UNION'}</button>)}</div>
    <div className="sql-motion-columns"><div>{['Website', 'Ứng dụng'].map(source => <div key={source}><h3>{source}</h3>{unionSources.map((row, index) => row.source === source && <Card key={index} className={index === playback.step - 1 ? 'motion-current' : ''}>{row.amount}</Card>)}</div>)}</div><ArrowRight className="sql-motion-arrow" aria-hidden="true" /><div><h3>Kết quả · amount</h3>{result.map((row, index) => <Card key={`${all}-${index}`} className="motion-arrive">{row.amount}</Card>)}{!result.length && <p className="knowledge-caption">Chưa có dòng</p>}{duplicate && <p className="worked-note">200 trùng → không thêm</p>}</div></div>
  </Frame>
}
const customers = [{ id: 1, name: 'An' }, { id: 2, name: 'Bình' }, { id: 3, name: 'Chi' }]
const existenceOrders = [{ id: 'O1', customer: 1, status: 'đã thanh toán' }, { id: 'O2', customer: 1, status: 'đã thanh toán' }, { id: 'O3', customer: 2, status: 'chờ thanh toán' }]
export function ExistsAnimation({ onQueryChange }: DemoQueryProps) {
  const playback = usePlayback(3)
  const [negated, setNegated] = useState(true)
  useDemoQuery(existsQuery(negated), onQueryChange)
  const active = customers[playback.step - 1]
  const qualifies = (id: number) => existenceOrders.some(order => order.customer === id && order.status === 'đã thanh toán') !== negated
  return <Frame title="Dò order để giữ hoặc loại customer" description="Subquery kiểm tra order của đúng customer và status = 'đã thanh toán'. Mỗi customer được trả về tối đa một lần." playback={playback} explanation={active ? `${active.name}: ${existenceOrders.some(row => row.customer === active.id && row.status === 'đã thanh toán') ? 'có order đã thanh toán' : 'không có order đã thanh toán'} → ${qualifies(active.id) ? 'giữ' : 'loại'} với ${negated ? 'NOT EXISTS' : 'EXISTS'}.` : 'An có hai order đã thanh toán; Bình chỉ có chờ thanh toán; Chi chưa có order.'}>
    <div className="join-kind-tabs">{[false, true].map(value => <button key={String(value)} aria-pressed={negated === value} className={negated === value ? 'selected' : ''} onClick={() => { setNegated(value); playback.onStep(0); playback.onPlaying(false) }}>{value ? 'NOT EXISTS' : 'EXISTS'}</button>)}</div>
    <div className="sql-motion-columns"><div><h3>customers</h3>{customers.map((row, index) => <Card key={row.id} className={active?.id === row.id ? 'motion-current' : ''}><b>{row.name}</b><small>{index < playback.step ? qualifies(row.id) ? 'Giữ' : 'Loại' : 'Chưa xét'}</small></Card>)}</div><ArrowRight className="sql-motion-arrow" aria-hidden="true" /><div><h3>orders</h3>{existenceOrders.map(row => <Card key={row.id} className={active?.id === row.customer ? row.status === 'đã thanh toán' ? 'motion-source' : 'motion-excluded' : ''}><b>{row.id}</b><span>customer_id: {row.customer}</span><small>{row.status}</small></Card>)}</div></div><div className="sql-motion-result"><h3>Kết quả</h3>{customers.slice(0, playback.step).filter(row => qualifies(row.id)).map(row => <Card key={row.id} className="motion-arrive">{row.name}</Card>)}{!customers.slice(0, playback.step).some(row => qualifies(row.id)) && <p className="knowledge-caption">Chưa có customer được giữ</p>}</div>
  </Frame>
}
const itemRows = [{ order: 1, item: 'A', amount: 100 }, { order: 1, item: 'B', amount: 100 }, { order: 2, item: 'C', amount: 200 }, { order: 2, item: 'D', amount: 200 }]
export function QualityAnimation({ onQueryChange }: DemoQueryProps) {
  useDemoQuery(qualityQuery, onQueryChange)
  const playback = usePlayback(4)
  const shown = itemRows.slice(0, playback.step)
  const sum = shown.reduce((total, row) => total + row.amount, 0)
  return <Frame title="JOIN có thể làm doanh thu tăng sai thế nào?" description="orders có 2 dòng, tổng 300. Mỗi order có 2 item; JOIN tạo một dòng cho mỗi item." playback={playback} explanation={playback.step === 4 ? 'Sau JOIN có 4 dòng nhưng chỉ 2 order. SUM(order_amount) = 600 vì mỗi amount lặp hai lần. Cần tính doanh thu ở grain order hoặc tổng hợp items trước khi JOIN.' : playback.step ? `Item ${shown.at(-1)?.item} tạo thêm một dòng. Amount ${shown.at(-1)?.amount} của order được chép sang; tổng sau JOIN tạm thời là ${sum}.` : 'Theo dõi cùng một order_amount xuất hiện ở hai dòng item khác nhau.'}>
    <div className="sql-motion-columns"><div><h3>orders · grain order</h3>{[1, 2].map(id => <Card key={id} className={shown.at(-1)?.order === id ? 'motion-source' : ''}><b>Order #{id}</b><strong>{id === 1 ? 100 : 200}</strong></Card>)}<p className="sql-metric">Tổng đúng: <strong>300</strong></p></div><ArrowRight className="sql-motion-arrow" aria-hidden="true" /><div><h3>Sau JOIN · grain item</h3>{shown.map(row => <Card key={row.item} className="motion-arrive"><b>#{row.order}</b><span>Item {row.item}</span><strong>{row.amount}</strong></Card>)}<p className={`sql-metric ${playback.step === 4 ? 'sql-metric-error' : ''}`}>SUM sau JOIN: <strong>{sum}</strong></p></div></div>{playback.step === 4 && <p className="worked-note">SUM(DISTINCT amount) không sửa được trường hợp hai order khác nhau có cùng amount. Kiểm tra key và grain trước khi tổng hợp.</p>}
  </Frame>
}
