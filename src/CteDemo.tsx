import CodeBlock from './CodeBlock'
import useDemoQuery from './useDemoQuery'
import type { DemoQueryProps } from './demoQueries'
import { useEffect, useState } from 'react'
import { ArrowDown, Pause, Play, RotateCcw, StepForward } from 'lucide-react'

const orders = [ ['O01', 'An', 300], ['O02', 'Bình', 200], ['O03', 'An', 250], ['O04', 'Chi', 700], ['O05', 'Bình', 150] ] as const
const totals = ['An', 'Bình', 'Chi'].map(customer => ({ customer, revenue: orders.filter(row => row[1] === customer).reduce((sum, row) => sum + row[2], 0) }))
const aggregate = 'SELECT customer, SUM(amount) AS revenue\nFROM orders\nGROUP BY customer'
const stages = ['Đọc bảng orders', 'Cộng tiền theo khách', 'Lọc tổng doanh thu']

export default function CteDemo({ onQueryChange }: DemoQueryProps) {
  const [mode, setMode] = useState<'subquery' | 'cte'>('cte')
  const [step, setStep] = useState(2)
  const [playing, setPlaying] = useState(false)
  const [threshold, setThreshold] = useState(500)
  const [customer, setCustomer] = useState('An')
  const result = totals.filter(row => row.revenue >= threshold)
  useEffect(() => {
    if (!playing || step === 2) return
    const timer = window.setTimeout(() => setStep(current => current + 1), 1800)
    return () => window.clearTimeout(timer)
  }, [playing, step])
  const running = playing && step < 2
  const inner = mode === 'cte' ? `WITH totals AS (\n${aggregate.split('\n').map(line => `  ${line}`).join('\n')}\n)` : `FROM (\n${aggregate.split('\n').map(line => `  ${line}`).join('\n')}\n) AS totals`
  const outer = `SELECT customer, revenue${mode === 'cte' ? '\nFROM totals' : ''}\nWHERE revenue >= ${threshold}\nORDER BY revenue DESC;`
  const query = mode === 'cte' ? `${inner}\n${outer}` : `SELECT customer, revenue\n${inner}\nWHERE revenue >= ${threshold}\nORDER BY revenue DESC;`
  useDemoQuery(query, onQueryChange)
  return <section className="cte-demo" aria-label="Mô phỏng Subquery và CTE">
    <h2>Ví dụ: tìm khách có tổng chi tiêu từ {threshold}</h2>
    <p>Trước tiên cộng các đơn hàng của từng khách. Sau đó mới lọc tổng tiền, thay vì lọc từng đơn hàng.</p>
    <div className="join-kind-tabs">{(['subquery', 'cte'] as const).map(item => <button key={item} aria-pressed={mode === item} className={mode === item ? 'selected' : ''} onClick={() => setMode(item)}>{item === 'cte' ? 'CTE' : 'Subquery'}</button>)}</div>
    <div className="cte-flow" aria-label="Chọn bước xử lý">{stages.map((title, index) => <button key={title} aria-pressed={step === index} className={step === index ? 'selected' : ''} onClick={() => { setStep(index); setPlaying(false) }}><b>{index + 1}</b>{title}</button>)}</div>
    <div className="cte-tables">
      <div className={`knowledge-table cte-panel ${step === 0 ? 'cte-active' : ''}`}><h3>① Bảng gốc · orders</h3><table><thead><tr><th>order_id</th><th>customer</th><th>amount</th></tr></thead><tbody>{orders.map(row => <tr key={row[0]} className={row[1] === customer ? 'cte-linked' : ''}>{row.map((value, index) => <td key={index}>{value}</td>)}</tr>)}</tbody></table><p>5 đơn hàng → 3 khách hàng</p></div>
      <ArrowDown className="cte-arrow" size={24} aria-hidden="true" />
      <div className={`knowledge-table cte-panel ${step === 1 ? 'cte-active' : ''}`}><h3>② Kết quả trung gian · totals</h3>{step >= 1 ? <><table><thead><tr><th>customer</th><th>revenue = SUM(amount)</th></tr></thead><tbody>{totals.map(row => <tr key={row.customer} className={row.customer === customer ? 'cte-linked' : ''}><td><button className="cte-customer" aria-pressed={customer === row.customer} onClick={() => setCustomer(row.customer)}>{row.customer}</button></td><td>{row.revenue}</td></tr>)}</tbody></table><p>Chọn khách để tô các đơn tạo ra tổng tiền.</p></> : <p className="cte-placeholder">Bước tiếp sẽ gom các đơn cùng khách và cộng amount.</p>}</div>
      <ArrowDown className="cte-arrow" size={24} aria-hidden="true" />
      <div className={`knowledge-table cte-panel ${step === 2 ? 'cte-active' : ''}`}><h3>③ Kết quả cuối · revenue ≥ {threshold}</h3>{step === 2 ? <><table><thead><tr><th>customer</th><th>revenue</th></tr></thead><tbody>{[...result].sort((a, b) => b.revenue - a.revenue).map(row => <tr key={row.customer}><td>{row.customer}</td><td>{row.revenue}</td></tr>)}</tbody></table>{!result.length && <p>Không có khách đạt ngưỡng này.</p>}<p>{result.length} khách đạt điều kiện.</p></> : <p className="cte-placeholder">Truy vấn ngoài sẽ lọc trên tổng tiền vừa tính.</p>}</div>
    </div>
    <p className="cte-calculation">{customer}: {orders.filter(row => row[1] === customer).map(row => row[2]).join(' + ')} = <strong>{totals.find(row => row.customer === customer)?.revenue}</strong>. {customer === 'An' ? 'Hai đơn đều dưới 500, nhưng tổng là 550.' : 'Mỗi khách có một dòng trong totals.'}</p>
    <label className="cte-threshold">Thử đổi ngưỡng lọc <select value={threshold} onChange={event => setThreshold(Number(event.target.value))}>{[300, 500, 600, 800].map(value => <option key={value} value={value}>{value}</option>)}</select></label>
    <div className="demo-controls"><button onClick={() => { if (running) setPlaying(false); else { if (step === 2) setStep(0); setPlaying(true) } }}>{running ? <Pause size={15} /> : <Play size={15} />}{running ? 'Tạm dừng' : 'Phát mô phỏng'}</button><button disabled={step === 2} onClick={() => { setPlaying(false); setStep(current => current + 1) }}><StepForward size={15} />Bước tiếp</button><button aria-label="Đặt lại mô phỏng CTE" onClick={() => { setStep(0); setPlaying(false) }}><RotateCcw size={15} /></button><span>Bước {step + 1}/3</span></div>
    <div className="cte-code-parts"><div className={step === 1 ? 'cte-code-active' : ''}><h3>② {mode === 'cte' ? 'Đặt tên kết quả là totals' : 'Truy vấn con tạo bảng totals'}</h3><CodeBlock code={inner} /></div><div className={step === 2 ? 'cte-code-active' : ''}><h3>③ Truy vấn ngoài dùng totals</h3><CodeBlock code={outer} /></div></div>
    <h3 className="cte-full-title">Câu SQL hoàn chỉnh · {mode === 'cte' ? 'CTE' : 'Subquery'}</h3>
    <CodeBlock code={query} className="cte-full-query" />
    <p className="demo-explanation" aria-live="polite">{mode === 'cte' ? 'CTE viết phần tổng hợp trước, đặt tên totals rồi dùng tên đó trong FROM của truy vấn chính.' : 'Subquery viết phần tổng hợp ngay trong ngoặc của FROM. AS totals đặt bí danh cho bảng kết quả đó.'} Cả hai cho cùng kết quả.</p>
    <p className="knowledge-caption">Các bước minh họa luồng dữ liệu để hiểu câu SQL; hệ quản trị có thể tối ưu cách thực thi. totals chỉ dùng trong câu lệnh này, không tạo bảng lưu vĩnh viễn.</p>
  </section>
}
