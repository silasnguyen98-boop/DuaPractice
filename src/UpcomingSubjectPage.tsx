import { ArrowRight, ArrowUpRight, ChartNoAxesCombined, Sparkles } from 'lucide-react'
import AppNavigation from './AppNavigation'
import type { LearningRoute } from './routeModel'

const subjects = {
  'power-bi': { label: 'Power BI', icon: ChartNoAxesCombined },
  ai: { label: 'AI cho Data Analyst', icon: Sparkles },
} as const

const powerBiCourses = [
  {
    title: 'Power BI vỡ lòng',
    category: 'CĂN BẢN',
    description: 'Nền tảng để học cách kết nối dữ liệu, làm sạch, tạo model và dựng báo cáo đơn giản.',
    href: 'https://duadata.net/elearning?course=power-bi',
  },
  {
    title: 'Power BI UI/UX - Nghệ thuật kể chuyện bằng dữ liệu',
    category: 'THIẾT KẾ DASHBOARD',
    description: 'Học cách thiết kế dashboard, bố cục trực quan và truyền tải insight bằng storytelling dữ liệu.',
    href: 'https://duadata.net/elearning?course=power-bi-ui-ux-nghe-thuat-ke-chuyen-bang-du-lieu',
  },
  {
    title: 'Bình dân học Data',
    category: 'PHÂN TÍCH ĐA CÔNG CỤ',
    description: 'Kết hợp Power BI với các công cụ khác để xây dựng quy trình phân tích thực tế và dễ tiếp cận hơn.',
    href: 'https://duadata.net/courses/binh-dan-hoc-data',
  },
] as const

const aiTopics = [
  {
    title: 'Tổng quan về AI',
    description: 'Phân biệt AI, machine learning, deep learning và AI tạo sinh; hiểu đúng khả năng, giới hạn và cách chọn bài toán phù hợp.',
  },
  {
    title: 'Công cụ AI cho Data Analyst',
    description: 'Làm quen với trợ lý AI phổ biến và cách chọn công cụ theo tác vụ: nghiên cứu, phân tích, viết code, trực quan hóa và trình bày.',
  },
  {
    title: 'Generative AI (AI tạo sinh)',
    description: 'Dùng mô hình ngôn ngữ lớn để tóm tắt, phân loại, trích xuất thông tin, tạo nội dung và hỗ trợ khám phá dữ liệu.',
  },
  {
    title: 'Prompting và làm việc với ngữ cảnh',
    description: 'Viết yêu cầu có mục tiêu, ngữ cảnh, ràng buộc và định dạng đầu ra; tinh chỉnh prompt theo tiêu chí kiểm tra được.',
  },
  {
    title: 'AI hỗ trợ SQL, Excel và Python',
    description: 'Tạo và giải thích truy vấn, công thức, script; tìm lỗi, tối ưu và biến yêu cầu nghiệp vụ thành các bước phân tích.',
  },
  {
    title: 'AI trong làm sạch và phân tích dữ liệu',
    description: 'Hỗ trợ khám phá dữ liệu, phát hiện bất thường, gợi ý giả thuyết và diễn giải kết quả mà vẫn kiểm tra bằng dữ liệu gốc.',
  },
  {
    title: 'AI cho trực quan hóa và kể chuyện dữ liệu',
    description: 'Phát triển câu hỏi phân tích, chọn biểu đồ, viết insight và tạo bản nháp nội dung cho báo cáo hoặc dashboard.',
  },
  {
    title: 'Kiểm chứng kết quả và hạn chế hallucination',
    description: 'Đối chiếu số liệu, chạy thử code, kiểm tra nguồn và giả định; nhận biết câu trả lời nghe hợp lý nhưng sai.',
  },
  {
    title: 'Bảo mật, đạo đức và quản trị dữ liệu',
    description: 'Nhận diện dữ liệu nhạy cảm, ẩn danh trước khi dùng công cụ AI và tuân thủ quy định của tổ chức.',
  },
  {
    title: 'Tự động hóa quy trình với AI',
    description: 'Kết nối các bước thu thập, xử lý, phân tích và báo cáo; thiết kế quy trình có con người kiểm tra ở bước quan trọng.',
  },
  {
    title: 'Dự án thực hành cuối khóa',
    description: 'Giải quyết một bài toán phân tích từ yêu cầu đến báo cáo, ghi lại cách dùng AI, bước kiểm chứng và phần việc do analyst quyết định.',
  },
] as const

export default function UpcomingSubjectPage({ section, language, onLanguage, onSection }: { section: LearningRoute['section']; language: keyof typeof subjects; onLanguage: (language: LearningRoute['language']) => void; onSection: (section: LearningRoute['section']) => void }) {
  const { label, icon: Icon } = subjects[language]

  if (language === 'power-bi') {
    return (
      <div className="app-shell certification-shell">
        <AppNavigation section={section} language={language} onLanguage={onLanguage} onSection={onSection} trail="Power BI" />
        <main className="certification-main powerbi-main">
          <span className="certification-icon"><Icon size={30} /></span>
          <p className="eyebrow">POWER BI</p>
          <h1>Bạn muốn học Power BI theo hướng nào?</h1>
          <p className="powerbi-intro">Bắt đầu từ kiến thức căn bản, học thiết kế dashboard, hoặc khám phá quy trình phân tích với nhiều công cụ.</p>
          <div className="powerbi-grid">
            {powerBiCourses.map((course) => (
              <a key={course.title} className="powerbi-card" href={course.href} target="_blank" rel="noopener noreferrer">
                <span className="powerbi-card-category">{course.category}</span>
                <strong>{course.title}</strong>
                <p>{course.description}</p>
                <span className="powerbi-card-link">Học ngay <ArrowUpRight size={16} /></span>
              </a>
            ))}
          </div>
        </main>
      </div>
    )
  }

  if (language === 'ai') {
    return (
      <div className="app-shell certification-shell">
        <AppNavigation section={section} language={language} onLanguage={onLanguage} onSection={onSection} trail={label} />
        <main className="certification-main powerbi-main ai-main">
          <span className="certification-icon"><Icon size={30} /></span>
          <p className="eyebrow">AI CHO DATA ANALYST</p>
          <h1>AI là trợ lý phân tích. Bạn vẫn là người ra quyết định.</h1>
          <p className="powerbi-intro">Lộ trình từ nền tảng AI tạo sinh đến ứng dụng trong SQL, Python, Excel và kể chuyện bằng dữ liệu, với kiểm chứng và bảo mật xuyên suốt.</p>
          <div className="ai-topic-list">
            {aiTopics.map((topic, index) => (
              <article className="ai-topic" key={topic.title}>
                <span className="ai-topic-index">{String(index + 1).padStart(2, '0')}</span>
                <div><h2>{topic.title}</h2><p>{topic.description}</p></div>
              </article>
            ))}
          </div>
        </main>
      </div>
    )
  }

  return <div className="app-shell certification-shell"><AppNavigation section={section} language={language} onLanguage={onLanguage} onSection={onSection} trail="Đang cập nhật" /><main className="certification-main"><span className="certification-icon"><Icon size={30} /></span><p className="eyebrow">{label.toUpperCase()}</p><h1>{label} đang được cập nhật.</h1><p>Nội dung học {label} đang được chuẩn bị. Trong lúc chờ, bạn có thể khám phá các bài SQL và Python hiện có.</p><span className="certification-status">Đang cập nhật</span><div className="certification-actions"><button onClick={() => onLanguage('sql')}>Khám phá SQL<ArrowRight size={16} /></button><button onClick={() => onLanguage('python')}>Khám phá Python<ArrowRight size={16} /></button></div></main></div>
}
