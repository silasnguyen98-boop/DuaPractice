import CodeBlock from './CodeBlock'
import useDemoQuery from './useDemoQuery'
import type { DemoQueryProps } from './demoQueries'
import { useEffect, useState } from 'react'
import { Pause, Play, RotateCcw, StepForward } from 'lucide-react'

const orders = [
  { id: 1, channel: 'Website', amount: 400 },
  { id: 2, channel: 'Ứng dụng', amount: 300 },
  { id: 3, channel: 'Website', amount: 200 },
  { id: 4, channel: 'Website', amount: 400 },
  { id: 5, channel: 'Ứng dụng', amount: 100 },
  { id: 6, channel: 'Ứng dụng', amount: 300 },
]
const modes = ['ROW_NUMBER', 'RANK', 'DENSE_RANK', 'SUM'] as const
type Mode = typeof modes[number]
const stages = ['Dữ liệu gốc', 'PARTITION BY', 'ORDER BY trong OVER', 'Tính từng dòng']
const descriptions: Record<Mode, string> = {
  ROW_NUMBER: 'Đánh số từng dòng: 1, 2, 3. Thêm id vào ORDER BY để hai đơn bằng tiền vẫn có thứ tự ổn định.',
  RANK: 'Hai đơn bằng tiền cùng hạng 1. Dòng tiếp theo đứng vị trí thứ 3 nên nhận hạng 3.',
  DENSE_RANK: 'Hai đơn bằng tiền cùng hạng 1. Giá trị tiền khác tiếp theo nhận hạng 2, không bỏ số.',
  SUM: 'Cộng từ đầu nhóm đến dòng hiện tại. ROWS xác định window frame theo từng dòng; id quyết định thứ tự khi bằng tiền.',
}

export default function WindowDemo({ onQueryChange }: DemoQueryProps) {
  const [mode, setMode] = useState<Mode>('DENSE_RANK')
  const [partition, setPartition] = useState(true)
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const groups = partition ? ['Ứng dụng', 'Website'].sort().map(channel => orders.filter(row => row.channel === channel)) : [orders]
  const sorted = groups.map(group => [...group].sort((a, b) => b.amount - a.amount || a.id - b.id))
  const rows = sorted.flatMap(group => group.map((row, index) => ({
    ...row,
    rowNumber: index + 1,
    rank: group.findIndex(peer => peer.amount === row.amount) + 1,
    denseRank: new Set(group.slice(0, index + 1).map(peer => peer.amount)).size,
    sum: group.slice(0, index + 1).reduce((total, peer) => total + peer.amount, 0),
  })))
  const lastStep = 3 + rows.length - 1
  const activeIndex = step - 3
  const active = rows[activeIndex]
  const running = playing && step < lastStep
  useEffect(() => {
    if (!playing || step >= lastStep) return
    const timer = window.setTimeout(() => setStep(current => current + 1), 1400)
    return () => window.clearTimeout(timer)
  }, [playing, step, lastStep])
  const reset = () => { setStep(0); setPlaying(false) }
  const orderBy = `ORDER BY amount DESC${mode === 'ROW_NUMBER' || mode === 'SUM' ? ', id' : ''}`
  const query = `SELECT id, channel, amount,\n       ${mode === 'SUM' ? 'SUM(amount)' : `${mode}()`} OVER (\n         ${partition ? 'PARTITION BY channel\n         ' : ''}${orderBy}${mode === 'SUM' ? '\n         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW' : ''}\n       ) AS ${mode === 'SUM' ? 'running_total' : 'revenue_rank'}\nFROM orders\nORDER BY ${partition ? 'channel, ' : ''}amount DESC, id;`
  useDemoQuery(query, onQueryChange)
  const explanation = step === 0 ? '6 đơn hàng ban đầu. Window function sẽ giữ cả 6 dòng và thêm một cột tính toán.'
    : step === 1 ? (partition ? 'PARTITION BY channel chia thành hai nhóm độc lập: Ứng dụng và Web. Thứ hạng và tổng bắt đầu lại ở mỗi nhóm.' : 'Bỏ PARTITION BY: cả 6 dòng cùng thuộc một partition.')
      : step === 2 ? 'ORDER BY amount DESC trong OVER xếp tiền giảm dần trong mỗi nhóm. Hai dòng bằng tiền là đồng hạng với RANK và DENSE_RANK.'
        : active ? `Đơn #${active.id} · ${active.channel} · ${active.amount}: ${mode === 'SUM' ? `${rows.filter(row => (!partition || row.channel === active.channel) && row.rowNumber <= active.rowNumber).map(row => row.amount).join(' + ')} = ${active.sum}` : `${mode} = ${mode === 'ROW_NUMBER' ? active.rowNumber : mode === 'RANK' ? active.rank : active.denseRank}`}. ${partition && active.rowNumber === 1 ? 'Bắt đầu một nhóm mới.' : descriptions[mode]}` : ''

  return <section className="window-demo" aria-label="Mô phỏng window function">
    <div className="knowledge-section-heading"><div><span className="eyebrow">THEO DÕI TỪNG DÒNG</span><h2>Window function tính trên những dòng nào?</h2></div><span className="demo-badge">6 dòng vào → 6 dòng ra</span></div>
    <div className="join-kind-tabs" aria-label="Chọn window function">{modes.map(item => <button key={item} aria-pressed={mode === item} className={mode === item ? 'selected' : ''} onClick={() => { setMode(item); reset() }}>{item === 'SUM' ? 'SUM · Lũy kế' : item}</button>)}</div>
    <p className="join-description">{descriptions[mode]}</p>
    <label className="window-partition"><input type="checkbox" checked={partition} onChange={event => { setPartition(event.target.checked); reset() }} />PARTITION BY channel · tính riêng theo kênh</label>
    <div className="cte-flow">{stages.map((stage, index) => <button key={stage} aria-pressed={Math.min(step, 3) === index} className={Math.min(step, 3) === index ? 'selected' : ''} onClick={() => { setStep(index); setPlaying(false) }}><b>{index + 1}</b>{stage}</button>)}</div>
    <div className="window-tables">
      <div className="knowledge-table"><h3>Dữ liệu gốc · orders</h3><table><thead><tr><th>id</th><th>channel</th><th>amount</th></tr></thead><tbody>{orders.map(row => <tr key={row.id} className={active?.id === row.id ? 'row-highlight' : ''}><td>{row.id}</td><td>{row.channel}</td><td>{row.amount}</td></tr>)}</tbody></table></div>
      <div className="window-groups">{(step === 0 ? [orders] : step === 1 ? groups : sorted).map((group, groupIndex) => <div className="knowledge-table window-group" key={`${step < 2 ? 'source' : 'sorted'}-${groupIndex}`}><h3>{step === 0 ? 'Chưa áp dụng PARTITION BY' : partition ? `Partition ${group[0].channel} · 3 dòng` : 'Một partition · 6 dòng'}</h3><table><thead><tr><th>id</th><th>amount</th><th>{mode === 'SUM' ? 'running_total' : 'revenue_rank'}</th></tr></thead><tbody>{group.map(row => {
        const index = rows.findIndex(result => result.id === row.id)
        const result = rows[index]
        const inFrame = mode === 'SUM' && active && (!partition || row.channel === active.channel) && result.rowNumber <= active.rowNumber
        return <tr key={row.id} className={active?.id === row.id ? 'row-highlight' : inFrame ? 'window-frame' : ''}><td>{row.id}</td><td>{row.amount}</td><td>{step >= 3 && index <= activeIndex ? <strong className="window-value" key={mode}>{mode === 'SUM' ? result.sum : mode === 'ROW_NUMBER' ? result.rowNumber : mode === 'RANK' ? result.rank : result.denseRank}</strong> : <span aria-label="Chưa tính">—</span>}</td></tr>
      })}</tbody></table></div>)}</div>
    </div>
    <div className="demo-controls"><button onClick={() => { if (running) setPlaying(false); else { if (step === lastStep) setStep(0); setPlaying(true) } }}>{running ? <Pause size={15} /> : <Play size={15} />}{running ? 'Tạm dừng' : 'Phát mô phỏng'}</button><button disabled={step === lastStep} onClick={() => { setPlaying(false); setStep(current => current + 1) }}><StepForward size={15} />Bước tiếp</button><button aria-label="Đặt lại mô phỏng window function" onClick={reset}><RotateCcw size={15} /></button><button onClick={() => { setStep(lastStep); setPlaying(false) }}>Xem kết quả</button><span>{step >= 3 ? `${activeIndex + 1}/6 dòng đã tính` : `Bước ${step + 1}/4`}</span></div>
    <p className="demo-explanation" aria-live="polite">{explanation}</p>
    <CodeBlock code={query} />
    <p className="knowledge-caption">GROUP BY channel gộp thành 2 dòng tổng hợp; window function giữ 6 đơn hàng. ORDER BY ngoài cùng quyết định cách hiển thị kết quả. Đây là mô phỏng để học, không phải thứ tự thực thi vật lý của SQL.</p>
  </section>
}
