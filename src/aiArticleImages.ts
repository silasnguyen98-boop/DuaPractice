export type AiArticleImageData = {
  src: string
  width: number
  height: number
  alt: string
  caption: string
  sourceLabel: string
  sourceUrl?: string
  afterSection?: number
}

export const aiArticleImages: Record<string, AiArticleImageData> = {
  "overview": {
    "src": "/images/ai/overview-example.png",
    "width": 1200,
    "height": 721,
    "alt": "Bảng doanh thu hai tháng và ba việc người phân tích cần kiểm tra khi dùng AI.",
    "caption": "Cách AI và người phân tích chia việc từ câu hỏi doanh thu đến nhận xét có số liệu. Đơn vị bảng: triệu đồng.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "generative-ai": {
    "src": "/images/ai/generative-ai-example.png",
    "width": 1200,
    "height": 822,
    "alt": "Câu lệnh dùng cột revenue không được cung cấp, bên cạnh bảng thật có cột amount và câu lệnh đã sửa.",
    "caption": "Ví dụ AI đoán sai tên cột: cần đối chiếu với cấu trúc bảng thật.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "context": {
    "src": "/images/ai/context-example.png",
    "width": 1200,
    "height": 690,
    "alt": "So sánh câu hỏi tính doanh thu còn thiếu thông tin với yêu cầu đã nêu ngày, trạng thái đơn và đơn vị tiền.",
    "caption": "Câu hỏi rõ hơn khi bổ sung bảng cần dùng, cách tính và kết quả mong muốn.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "ai-assistants": {
    "src": "/images/ai/ai-assistants-example.png",
    "width": 1200,
    "height": 735,
    "alt": "Đề bài thử công cụ AI gồm tìm dòng trùng, cộng doanh thu và viết nhận xét; kiểm tra độ đúng và thời gian sửa.",
    "caption": "Dùng cùng dữ liệu và đề bài để thử các công cụ công bằng hơn.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "rag": {
    "src": "/images/ai/rag-example.png",
    "width": 1200,
    "height": 747,
    "alt": "Tài liệu định nghĩa khách đang hoạt động là có giao dịch trong 30 ngày và câu trả lời dựa trên tài liệu.",
    "caption": "Một đoạn tài liệu giúp AI trả lời đúng định nghĩa của công ty.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "agents": {
    "src": "/images/ai/agents-example.png",
    "width": 1200,
    "height": 721,
    "alt": "Ví dụ trợ lý AI thực hiện báo cáo tuần bằng các công cụ được cấp, kiểm tra đủ ngày trước khi viết.",
    "caption": "Trợ lý được cấp công cụ đọc số, kiểm tra ngày và tạo bản nháp.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "tools": {
    "src": "/images/ai/tools-example.png",
    "width": 1200,
    "height": 751,
    "alt": "Bốn tình huống dùng AI: giải thích câu lệnh, phân tích tệp, làm bảng tính và báo cáo hằng tuần.",
    "caption": "Chọn công cụ theo việc cần làm: hỏi, tính, làm bảng hoặc tự động hóa.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "prompting": {
    "src": "/images/ai/prompting-example.png",
    "width": 1200,
    "height": 664,
    "alt": "Yêu cầu tính doanh thu theo tháng từ orders được tách thành bốn phần dễ kiểm tra.",
    "caption": "Một yêu cầu mẫu có đủ nhiệm vụ, dữ liệu, cách tính và kết quả cần nhận.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "business-context": {
    "src": "/images/ai/business-context-example.png",
    "width": 1200,
    "height": 720,
    "alt": "Khách đăng ký tháng 4, mua lần đầu tháng 5: cách tính theo lần mua đầu ghi nhận khách mới tháng 5.",
    "caption": "Cùng một khách, định nghĩa khác nhau sẽ cho tháng ghi nhận khác nhau.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "api": {
    "src": "/images/ai/api-example.png",
    "width": 1200,
    "height": 721,
    "alt": "Bảng doanh thu gửi tới AI cùng hướng dẫn viết nhận xét và kết quả mẫu gồm tóm tắt, nhận xét, thông tin thiếu.",
    "caption": "Chương trình gửi bảng số và hướng dẫn, rồi nhận nội dung có cấu trúc.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "sql-python": {
    "src": "/images/ai/sql-python-example.png",
    "width": 1200,
    "height": 741,
    "alt": "Hai đơn tổng 500 nghìn; sau khi nối bảng sản phẩm, tiền đơn 300 lặp hai lần làm tổng sai thành 800 nghìn.",
    "caption": "Một đơn nhiều sản phẩm có thể khiến tiền cả đơn bị cộng lặp sau JOIN.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "files": {
    "src": "/images/ai/files-example.png",
    "width": 1200,
    "height": 732,
    "alt": "Bốn dòng tổng 1.000 nghìn, trong đó dòng ngày 31/04 có 300 nghìn; phần hợp lệ còn 700 nghìn.",
    "caption": "Giữ riêng dòng có ngày lỗi để giải thích được phần tiền còn thiếu.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "data-analysis": {
    "src": "/images/ai/data-analysis-example.png",
    "width": 1200,
    "height": 697,
    "alt": "Tháng 4 có 1.000 đơn, tháng 5 có 700 đơn, đều 600 nghìn mỗi đơn; doanh thu giảm 30%.",
    "caption": "Số đơn giảm trong khi tiền trung bình mỗi đơn giữ nguyên.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "storytelling": {
    "src": "/images/ai/storytelling-example.png",
    "width": 1200,
    "height": 691,
    "alt": "Doanh thu 900 triệu, giảm 10%; trực tuyến giảm 180 triệu, cửa hàng tăng 80 triệu; chưa rõ nguyên nhân.",
    "caption": "Nhận xét có số làm căn cứ và nêu rõ điều chưa biết.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "validation": {
    "src": "/images/ai/validation-example.png",
    "width": 1200,
    "height": 685,
    "alt": "Kênh A có 10 đơn trên 100 lượt, B có 90 trên 300; tỷ lệ chung đúng là 25%, không phải 20%.",
    "caption": "Tính tỷ lệ chung bằng tổng số lượt, thay vì lấy trung bình hai tỷ lệ.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "privacy": {
    "src": "/images/ai/privacy-example.png",
    "width": 1200,
    "height": 721,
    "alt": "Lựa chọn giữ mã đơn, tiền và sản phẩm, bỏ tên và email; dùng bảng hoàn toàn giả lập để thử lỗi.",
    "caption": "Mẫu thử lỗi nối bảng không cần tên hay email của khách hàng.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "automation": {
    "src": "/images/ai/automation-example.png",
    "width": 1200,
    "height": 638,
    "alt": "Tuần trước đủ 7 ngày, tuần này mới 5 ngày; quy trình báo thiếu hai ngày và chưa viết báo cáo.",
    "caption": "Thiếu ngày dữ liệu thì dừng trước bước AI viết nhận xét.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "business-dashboard": {
    "src": "/images/ai/business-dashboard-example.png",
    "width": 1200,
    "height": 735,
    "alt": "Dashboard mẫu tháng 5: doanh thu 900 triệu, giảm 10%, trực tuyến 420 và cửa hàng 480 triệu.",
    "caption": "Màn hình tập trung trả lời một câu hỏi: doanh thu giảm ở kênh nào?",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "scheduled-reports": {
    "src": "/images/ai/scheduled-reports-example.png",
    "width": 1200,
    "height": 691,
    "alt": "Lịch báo cáo thứ Hai với ba điều kiện kiểm tra, bên cạnh bản nháp doanh thu tuần giảm 10%.",
    "caption": "Báo cáo tuần cần đủ dữ liệu, tổng khớp và tránh tạo bản trùng.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  },
  "analyst-assistant": {
    "src": "/images/ai/analyst-assistant-example.png",
    "width": 1200,
    "height": 691,
    "alt": "Bảng doanh thu trả lời được kênh giảm nhiều nhất, nhưng chưa cho biết quảng cáo nào gây giảm.",
    "caption": "Trợ lý trả lời khi có số và hỏi thêm khi câu hỏi vượt dữ liệu đã cho.",
    "sourceLabel": "DUA Edu · ví dụ học tập, dữ liệu giả lập"
  }
}

export const aiReferenceImages: Partial<Record<string, AiArticleImageData>> = {
  "ai-assistants": {
    "src": "/images/ai/excel-analysis.jpg",
    "width": 342,
    "height": 494,
    "alt": "Khung Analyze Data trong Excel, gồm ô nhập câu hỏi, gợi ý và bảng kết quả.",
    "caption": "Khung Analyze Data trong Excel gợi ý câu hỏi và trả bảng kết quả. Đây là tính năng Analyze Data; ảnh giúp hình dung cách hỏi dữ liệu ngay trong bảng tính.",
    "sourceLabel": "Microsoft Support",
    "sourceUrl": "https://support.microsoft.com/en-us/excel/analyze-data-in-excel",
    "afterSection": 0
  },
  "agents": {
    "src": "/images/ai/agent-tools.png",
    "width": 2401,
    "height": 1000,
    "alt": "Sơ đồ Anthropic: mô hình ngôn ngữ kết nối với tìm tài liệu, công cụ và bộ nhớ.",
    "caption": "Mô hình ở giữa có thể kết nối với tìm tài liệu (Retrieval), công cụ (Tools) và bộ nhớ (Memory). Các phần kết nối giúp trợ lý làm nhiều việc hơn chỉ viết câu trả lời.",
    "sourceLabel": "Anthropic · Building effective agents",
    "sourceUrl": "https://www.anthropic.com/engineering/building-effective-agents",
    "afterSection": 0
  },
  "data-analysis": {
    "src": "/images/ai/powerbi-explore.png",
    "width": 2112,
    "height": 1209,
    "alt": "Báo cáo mẫu Retail Analysis trong Power BI với một người quản lý khu vực được chọn để lọc dữ liệu.",
    "caption": "Trong báo cáo mẫu của Microsoft, chọn một nhóm giúp xem riêng dữ liệu của nhóm đó. Đây là cách tìm phần nào đóng góp vào thay đổi chung.",
    "sourceLabel": "Microsoft Learn · Retail Analysis sample",
    "sourceUrl": "https://learn.microsoft.com/en-us/power-bi/create-reports/sample-retail-analysis",
    "afterSection": 1
  },
  "storytelling": {
    "src": "/images/ai/powerbi-report.png",
    "width": 898,
    "height": 861,
    "alt": "Giao diện Power BI Desktop thêm một biểu đồ từ các trường dữ liệu trong bảng.",
    "caption": "Ví dụ tạo biểu đồ trong Power BI: chọn dữ liệu cần hiển thị và kiểu biểu đồ phù hợp với câu hỏi.",
    "sourceLabel": "Microsoft Learn · Report view",
    "sourceUrl": "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-report-view",
    "afterSection": 0
  },
  "business-dashboard": {
    "src": "/images/ai/powerbi-dashboard.png",
    "width": 1714,
    "height": 1294,
    "alt": "Dashboard mẫu Retail Analysis của Microsoft, gồm chỉ số doanh số và biểu đồ so sánh cửa hàng.",
    "caption": "Dashboard mẫu bán lẻ của Microsoft kết hợp các chỉ số chính với biểu đồ. Đây là ảnh báo cáo mẫu, không phải số liệu doanh thu trong ví dụ DUA Edu.",
    "sourceLabel": "Microsoft Learn · Retail Analysis sample",
    "sourceUrl": "https://learn.microsoft.com/en-us/power-bi/create-reports/sample-retail-analysis",
    "afterSection": 2
  }
}
