import CodeBlock from './CodeBlock'
import { useEffect, useId, useState } from 'react'
import { ArrowDown, Pause, Play, RotateCcw, StepForward } from 'lucide-react'
import { buildJoinRows, joinQuery, joinProducts, joinPrices, type JoinKind } from './joinModel'
const descriptions: Record<JoinKind, string> = { INNER: 'Chỉ lấy ID có ở cả hai bảng: 1, 2, 4.', LEFT: 'Giữ tất cả dòng của A. ID 3 và 5 không có giá nên cột B là NULL.', RIGHT: 'Giữ tất cả dòng của B. ID 6 không có sản phẩm nên cột A là NULL.', FULL: 'Giữ toàn bộ hai bảng. ID 3, 5 và 6 không khớp được bổ sung NULL ở phía còn thiếu.' }
export default function JoinDemo({ kind, onKindChange }: { kind: JoinKind; onKindChange: (kind: JoinKind) => void }) {
  const clipId = useId()
  const [step, setStep] = useState(-1)
  const [playing, setPlaying] = useState(false)
  const [showAll, setShowAll] = useState(true)
  const rows = buildJoinRows(kind)
  const active = showAll ? undefined : rows[step]
  useEffect(() => {
    if (!playing || step >= rows.length - 1) return
    const timer = window.setTimeout(() => setStep((current) => current + 1), 1300)
    return () => window.clearTimeout(timer)
  }, [playing, step, rows.length])
  const running = playing && step < rows.length - 1
  const shown = showAll ? rows : rows.slice(0, step + 1)
  const cell = (value: string | number | null, price = false) => value === null ? <em>NULL</em> : price ? `$${value}` : value
  const sqlKind = kind === 'FULL' ? 'FULL OUTER' : kind
  return <section className="join-demo join-visual-demo" aria-label="Mô phỏng JOIN tương tác">
    <div className="knowledge-section-heading"><div><span className="eyebrow">NHÌN BẢNG · HIỂU JOIN</span><h2>Hai bảng được kết hợp như thế nào?</h2></div><span className="demo-badge">Chọn loại JOIN để so sánh</span></div>
    <div className="join-kind-tabs" aria-label="Chọn loại JOIN">{(['INNER', 'LEFT', 'RIGHT', 'FULL'] as JoinKind[]).map((item) => <button key={item} aria-pressed={kind === item} className={kind === item ? 'selected' : ''} onClick={() => { onKindChange(item); setStep(-1); setPlaying(false); setShowAll(true) }}>{item} JOIN</button>)}</div>
    <p className="join-description">{descriptions[kind]}</p>
    <div className="join-infographic">
      <div className="knowledge-table join-table-a"><h3>Table A · Products</h3><table><thead><tr><th>ID</th><th>Product</th></tr></thead><tbody>{joinProducts.map((product) => <tr key={product.id} className={active?.aId === product.id ? 'row-highlight' : ''}><td>{product.id}</td><td>{product.product}</td></tr>)}</tbody></table></div>
      <figure className="join-venn"><svg viewBox="0 0 360 205" role="img" aria-label={`${sqlKind} JOIN: ${descriptions[kind]}`}>
        <defs><clipPath id={clipId}><circle cx="235" cy="98" r="85" /></clipPath></defs>
        <circle cx="125" cy="98" r="85" fill={kind === 'LEFT' || kind === 'FULL' ? '#f7def4' : '#f4f6f5'} />
        <circle cx="235" cy="98" r="85" fill={kind === 'RIGHT' || kind === 'FULL' ? '#dbeefa' : '#f4f6f5'} />
        <circle cx="125" cy="98" r="85" clipPath={`url(#${clipId})`} fill="#c9ebd7" />
        <circle cx="125" cy="98" r="85" fill="none" stroke="#826580" strokeWidth="1.5" /><circle cx="235" cy="98" r="85" fill="none" stroke="#648498" strokeWidth="1.5" />
        <text x="96" y="93" textAnchor="middle" fill="#a13d99" fontSize="17" fontWeight="700">Table A</text><text x="96" y="116" textAnchor="middle" fill="#826580" fontSize="12">ID 3, 5</text>
        <text x="265" y="93" textAnchor="middle" fill="#317dac" fontSize="17" fontWeight="700">Table B</text><text x="265" y="116" textAnchor="middle" fill="#648498" fontSize="12">ID 6</text>
        <text x="180" y="92" textAnchor="middle" fill="#19765c" fontSize="12" fontWeight="600">Khớp</text><text x="180" y="114" textAnchor="middle" fill="#19765c" fontSize="11">1, 2, 4</text>
      </svg><figcaption>Vùng tô màu là các nhóm khóa được giữ lại.</figcaption><CodeBlock code={joinQuery(kind)} className="join-query" /><ArrowDown className="join-output-arrow" size={30} aria-hidden="true" /></figure>
      <div className="knowledge-table join-table-b"><h3>Table B · Prices</h3><table><thead><tr><th>ID</th><th>Price</th></tr></thead><tbody>{joinPrices.map((price) => <tr key={price.id} className={active?.bId === price.id ? 'row-highlight' : ''}><td>{price.id}</td><td>${price.price}</td></tr>)}</tbody></table></div>
    </div>
    <div className="join-color-legend"><span><i className="legend-a" />Dữ liệu A</span><span><i className="legend-b" />Dữ liệu B</span><span><i className="legend-null" />Không có dữ liệu → NULL</span></div>
    <div className="knowledge-table join-output"><h3>Kết quả · {sqlKind} JOIN · {shown.length} dòng</h3><table><thead><tr><th className="a-cell">a.ID</th><th className="a-cell">Product</th><th className="b-cell">b.ID</th><th className="b-cell">Price</th></tr></thead><tbody>{shown.map((row, index) => <tr key={`${kind}-${index}`} className={!showAll && index === step ? 'row-enter row-highlight' : ''}><td className={row.aId === null ? 'null-cell' : 'a-cell'}>{cell(row.aId)}</td><td className={row.product === null ? 'null-cell' : 'a-cell'}>{cell(row.product)}</td><td className={row.bId === null ? 'null-cell' : 'b-cell'}>{cell(row.bId)}</td><td className={row.price === null ? 'null-cell' : 'b-cell'}>{cell(row.price, true)}</td></tr>)}</tbody></table>{!shown.length && <p className="sql-empty">Bấm Bước tiếp để ghép dòng đầu tiên.</p>}</div>
    <div className="demo-controls"><button onClick={() => { if (running) setPlaying(false); else { if (showAll || step >= rows.length - 1) setStep(-1); setShowAll(false); setPlaying(true) } }}>{running ? <Pause size={15} /> : <Play size={15} />}{running ? 'Tạm dừng' : 'Phát mô phỏng'}</button><button disabled={!showAll && step >= rows.length - 1} onClick={() => { setPlaying(false); setShowAll(false); setStep(showAll ? 0 : step + 1) }}><StepForward size={15} />Bước tiếp</button><button onClick={() => { setStep(-1); setShowAll(false); setPlaying(false) }} aria-label="Đặt lại mô phỏng JOIN"><RotateCcw size={15} /></button><button onClick={() => { setShowAll(true); setPlaying(false); setStep(-1) }}>Xem toàn bộ</button><span>{shown.length}/{rows.length} dòng</span></div>
    <p className="demo-explanation" aria-live="polite">{active?.reason ?? (showAll ? descriptions[kind] : 'Bấm Phát mô phỏng hoặc Bước tiếp để theo dõi cách ghép các ID.')}</p>
    <p className="knowledge-caption">Sơ đồ tròn minh họa các nhóm khóa khớp và không khớp trong ví dụ này. JOIN ghép từng cặp dòng; nếu khóa bị trùng, một khóa có thể tạo nhiều dòng kết quả.</p>
  </section>
}
