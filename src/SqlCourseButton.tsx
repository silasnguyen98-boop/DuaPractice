import { useId, useRef } from 'react'
import { ArrowUpRight, ExternalLink, X } from 'lucide-react'

export default function SqlCourseButton({ compact = false }: { compact?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const descriptionId = useId()
  return <>{compact ? <button className="sql-course-button sql-course-compact" onClick={() => dialog.current?.showModal()}><span>SQL thực chiến với bài toán thực tế trong công việc</span><ArrowUpRight size={18} aria-hidden="true" /></button> : <section className="sql-course-promo" aria-label="Lớp SQL thực chiến của Dứa Data"><span className="sql-course-kicker">LỚP HỌC · DỨA DATA</span><h2>SQL thực chiến<br />{' '}<span>với bài toán thực tế trong công việc</span></h2><p>Đã nắm SQL căn bản?<br />Học nâng cao và áp dụng để giải quyết các bài toán phân tích dữ liệu thực tế khi đi làm.</p><button className="sql-course-button" onClick={() => dialog.current?.showModal()}><span>Tìm hiểu lớp SQL thực chiến</span><ArrowUpRight size={18} aria-hidden="true" /></button></section>}<dialog className="domain-dialog" ref={dialog} aria-labelledby={titleId} aria-describedby={descriptionId}><button className="domain-dialog-close" aria-label="Đóng thông báo" onClick={() => dialog.current?.close()}><X size={20} /></button><p className="eyebrow">SQL THỰC CHIẾN</p><h2 id={titleId}>SQL thực chiến với bài toán thực tế trong công việc</h2><p id={descriptionId}>Chương trình học chỉ dành cho học viên lớp SQL thực chiến. Liên hệ Dứa Data để tham gia.</p><a className="domain-contact" href="https://www.facebook.com/duadata" target="_blank" rel="noopener noreferrer">Liên hệ Dứa Data<ExternalLink size={16} aria-hidden="true" /></a></dialog></>
}
