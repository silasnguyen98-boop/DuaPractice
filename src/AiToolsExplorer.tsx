import { useState } from 'react'
import { ArrowUpRight, Bot, ChartColumn, FileSpreadsheet, Sparkles } from 'lucide-react'

const tools = [
  { name: 'Claude', icon: Bot, tag: 'Tệp → phân tích → báo cáo', description: 'Đọc dữ liệu, hỗ trợ làm sạch, phân tích thống kê và tạo biểu đồ hoặc tệp báo cáo.', example: 'Đưa bảng doanh thu và yêu cầu tính riêng từng kênh, kèm các bước tính và nhận xét.', check: 'Kiểm tra bộ lọc, đơn vị và số liệu trong tệp kết quả.', url: 'https://www.anthropic.com/news/create-files' },
  { name: 'ChatGPT', icon: ChartColumn, tag: 'Khám phá dữ liệu bằng code', description: 'Phân tích tệp dữ liệu, chạy Python và tạo bảng, biểu đồ để khám phá xu hướng.', example: 'Tải CSV đơn hàng, tìm ô trống và dòng trùng rồi tổng hợp doanh thu theo tháng.', check: 'Xem code đã chạy, số dòng bị loại và đối chiếu tổng với dữ liệu nguồn.', url: 'https://help.openai.com/en/articles/8437071-advanced-data-analysis' },
  { name: 'Gemini', icon: Sparkles, tag: 'Tệp & biểu đồ', description: 'Phân tích tệp được tải lên và tạo biểu đồ từ bảng tính trong ứng dụng web.', example: 'Đưa bảng doanh thu từng khu vực và yêu cầu biểu đồ so sánh cùng phần mô tả.', check: 'Đối chiếu vùng dữ liệu, nhãn và giá trị trên biểu đồ.', url: 'https://support.google.com/gemini/answer/14903178?hl=en' },
  { name: 'Copilot trong Excel', icon: FileSpreadsheet, tag: 'Làm việc ngay trên bảng tính', description: 'Hỏi đáp về dữ liệu trong Excel, khám phá xu hướng và hỗ trợ phân tích bảng.', example: 'Chỉ rõ cột doanh thu và khu vực, rồi hỏi khu vực nào đóng góp nhiều nhất.', check: 'Kiểm tra phạm vi bảng, tên cột và phép tính trong tệp Excel.', url: 'https://support.microsoft.com/en-us/excel/copilot/data-insights-with-copilot-in-excel' },
]
const scenarios = [
  { label: 'Tôi có một tệp CSV', picks: ['Claude', 'ChatGPT'], reason: 'Thử phân tích tệp và yêu cầu trả lại các bước xử lý hoặc code để tự chạy lại và kiểm tra kết quả.' },
  { label: 'Tôi đang làm trong Excel', picks: ['Copilot trong Excel'], reason: 'Bắt đầu ngay từ bảng đang mở: chỉ rõ cột cần phân tích và câu hỏi kinh doanh.' },
  { label: 'Tôi muốn biểu đồ từ bảng tính', picks: ['Gemini', 'ChatGPT', 'Claude'], reason: 'Yêu cầu biểu đồ từ tệp, rồi đối chiếu nhãn, đơn vị và số liệu với bảng gốc.' },
]

export default function AiToolsExplorer() {
  const [selected, setSelected] = useState(0)
  const scenario = scenarios[selected]
  return <section className="ai-doc-section ai-tools-explorer" aria-label="Khám phá công cụ AI">
    <span className="ai-doc-kicker">CHỌN THEO CÔNG VIỆC</span>
    <h2>Bảng so sánh AI dành cho Data Analyst</h2>
    <p>Chọn theo dữ liệu bạn có và việc bạn cần làm. Một công cụ có thể phục vụ nhiều nhu cầu; các gợi ý dưới đây giúp bạn chọn nơi bắt đầu.</p>
    <div className="ai-case-table"><table>
      <caption>Tham khảo tính năng ngày 08/10/2026 · Tính năng tùy gói và tài khoản</caption>
      <thead><tr><th scope="col">AI / sản phẩm</th><th scope="col">Công dụng cho người phân tích</th><th scope="col">Khi nào nên thử?</th><th scope="col">Điểm cần xem</th></tr></thead>
      <tbody>
        <tr><th scope="row">ChatGPT</th><td>Phân tích CSV/Excel, chạy Python, tạo bảng và biểu đồ; hỗ trợ viết SQL.</td><td>Học SQL/Python, khám phá một tệp dữ liệu hoặc thử nhanh cách phân tích.</td><td>Xem code, bộ lọc và số dòng dùng để tính; hỏi đáp SQL cần tên cột và cấu trúc bảng thật.</td></tr>
        <tr><th scope="row">Claude</th><td>Đọc tài liệu và tệp, hỗ trợ phân tích, viết code và tạo báo cáo.</td><td>Kết hợp cách tính chỉ số, yêu cầu kinh doanh và bảng dữ liệu để soạn bản phân tích.</td><td>Yêu cầu chỉ rõ nguồn số liệu, giả định và các bước xử lý trong kết quả.</td></tr>
        <tr><th scope="row">Gemini trong Google Sheets</th><td>Hỗ trợ công thức, tổ chức bảng, phân tích và tạo biểu đồ ngay trong Sheets.</td><td>Nhóm làm việc chủ yếu trên Google Workspace và chia sẻ bảng tính.</td><td>Kiểm tra vùng dữ liệu, công thức và quyền truy cập của tài khoản Workspace.</td></tr>
        <tr><th scope="row">Copilot trong Excel</th><td>Hỗ trợ công thức, hỏi đáp dữ liệu và khám phá xu hướng trong tệp Excel.</td><td>Người thường xuyên tổng hợp và phân tích bằng Excel.</td><td>Kiểm tra cấu trúc bảng, phạm vi tính và điều kiện sử dụng Copilot của tài khoản.</td></tr>
      </tbody>
    </table></div>
    <p className="ai-doc-small">Nguồn chính thức: <a href="https://help.openai.com/en/articles/8437071-advanced-data-analysis" target="_blank" rel="noopener noreferrer">ChatGPT</a>, <a href="https://www.anthropic.com/news/create-files" target="_blank" rel="noopener noreferrer">Claude</a>, <a href="https://blog.google/products-and-platforms/products/workspace/gemini-google-sheets-state-of-the-art/" target="_blank" rel="noopener noreferrer">Gemini trong Sheets</a>, <a href="https://support.microsoft.com/en-us/excel/get-direct-answers-to-your-data-analysis-questions" target="_blank" rel="noopener noreferrer">Copilot trong Excel</a>.</p>
    <h2>Bạn muốn AI hỗ trợ việc gì?</h2>
    <div className="ai-visual-switch" role="group" aria-label="Chọn tình huống phân tích">{scenarios.map((item, index) => <button key={item.label} aria-pressed={selected === index} onClick={() => setSelected(index)}>{item.label}</button>)}</div>
    <div className="ai-tool-recommendation" aria-live="polite"><strong>Có thể bắt đầu với: {scenario.picks.join(', ')}</strong><p>{scenario.reason}</p></div>
    <div className="ai-tool-grid">{tools.map(tool => <article className={`ai-tool-card ${scenario.picks.includes(tool.name) ? 'suggested' : ''}`} key={tool.name}>
      <div className="ai-tool-heading"><tool.icon size={22} aria-hidden="true" /><h3>{tool.name}</h3></div>
      <span className="ai-tool-tag">{tool.tag}</span><p>{tool.description}</p>
      <details><summary>Xem ví dụ & cách kiểm tra</summary><p><strong>Ví dụ:</strong> {tool.example}</p><p><strong>Đối chiếu:</strong> {tool.check}</p></details>
      <a href={tool.url} target="_blank" rel="noopener noreferrer">Tài liệu chính thức<ArrowUpRight size={14} /></a>
    </article>)}</div>
    <p className="ai-doc-small">Tham khảo tính năng ngày 07/10/2026. Khả năng sử dụng tùy gói và cấu hình tài khoản. Các tình huống trên là gợi ý thực hành, không phải xếp hạng công cụ.</p>
  </section>
}
