import { BarChart3, Bot, Braces, CalendarDays, ChartNoAxesCombined, Check, CircleHelp, ClipboardCheck, Code2, Database, FileSearch, FileSpreadsheet, FileText, Filter, GitBranch, Layers3, Search, Send, Settings2, ShieldCheck, Sparkles, Target, UserRound, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Step = { title: string; text: string; icon: LucideIcon; note: string }
type Scene = { title: string; caption: string; steps: Step[] }

export const scenes: Record<string, Scene> = {
  overview: {
    title: 'Một câu hỏi, AI và người phân tích cùng xử lý',
    caption: 'Minh họa cách chia việc. Mỗi bước cần thông tin đưa vào rõ trước khi chuyển sang bước tiếp theo.',
    steps: [
      { title: 'Đặt câu hỏi', text: 'Doanh thu giảm ở đâu?', icon: Target, note: 'Người phân tích xác định thời gian so sánh và cách tính doanh thu trước khi giao việc.' },
      { title: 'AI hỗ trợ', text: 'Câu lệnh · bảng · nhận xét', icon: Bot, note: 'AI hỗ trợ viết câu lệnh và soạn nhận xét từ dữ liệu được cung cấp.' },
      { title: 'Người phân tích kiểm tra', text: 'Số liệu · cách tính · ý nghĩa', icon: ClipboardCheck, note: 'Người phân tích chạy câu lệnh, đối chiếu số và kiểm tra nhận xét có căn cứ không.' },
      { title: 'Ra quyết định', text: 'Chọn hướng xem tiếp', icon: UserRound, note: 'Người phụ trách dùng kết quả đã kiểm tra để quyết định bước phân tích tiếp theo.' },
    ],
  },
  'generative-ai': {
    title: 'LLM tạo câu trả lời từng bước',
    caption: 'Sơ đồ đơn giản hóa quá trình sinh văn bản. Token là phần nhỏ của văn bản mà mô hình xử lý. Các ô chỉ minh họa ý tưởng chia nhỏ, không thể hiện cách chia của một mô hình cụ thể.',
    steps: [
      { title: 'Nhận yêu cầu', text: '“Viết SQL tính doanh thu”', icon: Send, note: 'Câu hỏi và thông tin trong cuộc trò chuyện tạo thành ngữ cảnh thông tin đưa vào.' },
      { title: 'Chia văn bản', text: 'Các phần nhỏ gọi là token', icon: Braces, note: 'Văn bản được đổi thành các đơn vị xử lý; một từ có thể gồm nhiều token.' },
      { title: 'Xử lý ngữ cảnh', text: 'Điều đã học + câu hỏi', icon: Layers3, note: 'Mô hình dùng những gì đã học và thông tin trong câu hỏi để chọn phần văn bản tiếp theo.' },
      { title: 'Sinh câu trả lời', text: 'SELECT · SUM · …', icon: Sparkles, note: 'Mô hình tạo tiếp các token. Một câu lệnh nghe hợp lý vẫn cần kiểm tra tên cột và cách tính.' },
    ],
  },
  context: {
    title: 'Thông tin đi kèm giúp AI hiểu đúng câu hỏi',
    caption: 'Ví dụ về thông tin cần có trước khi viết câu lệnh doanh thu.',
    steps: [
      { title: 'Câu hỏi', text: 'Tính doanh thu tháng 5', icon: CircleHelp, note: 'Câu hỏi ban đầu chưa chỉ rõ trạng thái đơn, cột ngày hoặc đơn vị tiền.' },
      { title: 'Dữ liệu', text: 'orders · một dòng / đơn', icon: Database, note: 'Tên cột và ý nghĩa mỗi dòng giúp AI hiểu bảng có những gì và cần tổng hợp ra sao.' },
      { title: 'Quy tắc', text: 'Đã thanh toán · ngày · đồng', icon: Filter, note: 'Chỉ lấy đơn đã thanh toán, dùng cột ngày thanh toán (paid_at) và tính tiền bằng đồng.' },
      { title: 'Kết quả', text: 'Bảng theo tháng và kênh', icon: BarChart3, note: 'Định dạng kết quả gắn với câu hỏi giúp bạn kiểm tra kết quả thuận tiện hơn.' },
    ],
  },
  'ai-assistants': {
    title: 'Chọn công cụ từ công việc đang làm',
    caption: 'Các nhánh là gợi ý bắt đầu, không phải xếp hạng chất lượng AI.',
    steps: [
      { title: 'CSV / Python', text: 'ChatGPT hoặc Claude', icon: Code2, note: 'Thử đọc một tệp nhỏ, chạy phân tích và yêu cầu trả lại các bước tính.' },
      { title: 'Excel', text: 'Copilot trong Excel', icon: FileSpreadsheet, note: 'Thử thao tác ngay trên tệp Excel; kiểm tra vùng dữ liệu và công thức.' },
      { title: 'Google Sheets', text: 'Gemini trong Sheets', icon: Layers3, note: 'Thử công thức và biểu đồ trong môi trường bảng tính nhóm đang dùng.' },
      { title: 'So sánh', text: 'Cùng dữ liệu, cùng đề bài', icon: ClipboardCheck, note: 'Chọn bằng độ đúng và thời gian sửa trên nhiệm vụ thực tế. Tính năng tùy gói và tài khoản.' },
    ],
  },
  rag: {
    title: 'RAG: tìm thông tin trước khi trả lời',
    caption: 'Ví dụ: câu hỏi về định nghĩa khách đang hoạt động cần tài liệu định nghĩa chỉ số của công ty.',
    steps: [
      { title: 'Câu hỏi', text: 'Khách đang hoạt động là ai?', icon: CircleHelp, note: 'Câu hỏi cần quy ước nội bộ; mô hình chưa tự biết công ty đang dùng định nghĩa nào.' },
      { title: 'Tìm tài liệu', text: 'Tìm tài liệu định nghĩa chỉ số phù hợp', icon: FileSearch, note: 'Hệ thống tìm đoạn liên quan trong những tài liệu người dùng được phép đọc.' },
      { title: 'Đưa tài liệu cho AI', text: 'Giao dịch trong 30 ngày', icon: FileText, note: 'Đoạn tìm được được đưa vào ngữ cảnh cùng câu hỏi. Đây là ví dụ định nghĩa, không phải quy tắc chung.' },
      { title: 'Trả lời', text: 'Giải thích theo tài liệu', icon: Bot, note: 'AI dùng đoạn tài liệu để trả lời. Cần kiểm tra ngày hiệu lực và cách diễn giải.' },
    ],
  },
  agents: {
    title: 'Trợ lý AI dùng công cụ để làm nhiều bước',
    caption: 'Agent chỉ thực hiện được những thao tác mà hệ thống đã kết nối và cấp quyền.',
    steps: [
      { title: 'Mục tiêu', text: 'Tóm tắt doanh thu tuần', icon: Target, note: 'Yêu cầu xác định kết quả, kỳ và phạm vi dữ liệu agent được dùng.' },
      { title: 'Chọn công cụ', text: 'Đọc bảng · chạy câu lệnh', icon: Settings2, note: 'Agent chọn trong các công cụ được cấp để lấy thông tin cho nhiệm vụ.' },
      { title: 'Xem kết quả', text: 'Đủ dữ liệu hay cần dừng?', icon: GitBranch, note: 'Kết quả công cụ quyết định bước tiếp theo. Thiếu ngày dữ liệu là lý do cần dừng hoặc hỏi lại.' },
      { title: 'Bản nháp', text: 'Người phân tích xem lại', icon: ClipboardCheck, note: 'Bản nháp và kết quả công cụ cần đối chiếu trước khi phát hành báo cáo.' },
    ],
  },
  tools: {
    title: 'Bốn nhóm công cụ, bốn kiểu kết quả',
    caption: 'Một sản phẩm có thể thuộc nhiều nhóm. Chọn theo việc bạn cần hoàn thành.',
    steps: [
      { title: 'Hội thoại', text: 'Giải thích · bản nháp', icon: Bot, note: 'Phù hợp để hỏi khái niệm, đọc code và làm rõ yêu cầu.' },
      { title: 'Phân tích tệp', text: 'Code · bảng kết quả', icon: FileSpreadsheet, note: 'Đọc tệp và chạy phép tính khi công cụ có khả năng chạy các câu lệnh.' },
      { title: 'Bảng tính / báo cáo', text: 'Công thức · biểu đồ', icon: BarChart3, note: 'Hỗ trợ ngay trong môi trường đang có dữ liệu; cần kiểm tra vùng và công thức tính chỉ số.' },
      { title: 'API / tự động hóa', text: 'Kết quả cho bước sau', icon: Workflow, note: 'Đưa một việc AI thực hiện vào chương trình và kiểm tra dữ liệu trước khi làm.' },
    ],
  },
  prompting: {
    title: 'Viết yêu cầu cho AI bằng bốn phần',
    caption: 'Ví dụ: một yêu cầu gồm việc cần làm, dữ liệu, cách tính và kết quả muốn nhận.',
    steps: [
      { title: 'Nhiệm vụ', text: 'Tính doanh thu theo tháng', icon: Target, note: 'Nêu một việc cụ thể thay vì yêu cầu “phân tích tất cả”.' },
      { title: 'Dữ liệu', text: 'orders(id, amount, …)', icon: Database, note: 'Đưa cấu trúc bảng và giải thích mỗi dòng là một đơn.' },
      { title: 'Cách tính', text: 'Đơn đã thanh toán · ngày', icon: Filter, note: 'Quy tắc rõ quyết định bộ lọc và cách ghi nhận số liệu.' },
      { title: 'Kết quả', text: 'Câu lệnh + giải thích', icon: Code2, note: 'Yêu cầu câu lệnh kèm giải thích giúp bạn đọc và kiểm tra trước khi chạy.' },
    ],
  },
  'business-context': {
    title: 'Từ cách hiểu của công ty đến cách tính',
    caption: 'Ví dụ: khách mua lần đầu tháng 5 thuộc nhóm khách mới tháng 5, dù tạo tài khoản tháng 4.',
    steps: [
      { title: 'Định nghĩa', text: 'Khách mới = mua lần đầu', icon: FileText, note: 'Thống nhất “khách mới” tính theo giao dịch đầu tiên, không theo ngày tạo tài khoản.' },
      { title: 'Dữ liệu', text: 'customer_id · paid_at', icon: Database, note: 'Cần mã khách và lịch sử đơn thanh toán để tìm lần mua đầu.' },
      { title: 'Cách tính', text: 'Ngày mua đầu tiên', icon: Code2, note: 'Tìm ngày mua đầu tiên từ lịch sử đơn đã thanh toán của từng khách, rồi xem ngày đó thuộc tháng nào.' },
      { title: 'Thử tình huống dễ nhầm', text: 'Tạo tháng 4 · mua tháng 5', icon: ClipboardCheck, note: 'Ví dụ này giúp phát hiện câu lệnh dùng nhầm ngày tạo tài khoản.' },
    ],
  },
  api: {
    title: 'API nối chương trình với mô hình AI',
    caption: 'Minh họa luồng tạo nhận xét từ bảng chỉ số đã được kiểm tra.',
    steps: [
      { title: 'Chương trình', text: 'Chuẩn bị bảng và yêu cầu', icon: Code2, note: 'Chương trình lấy phần dữ liệu cần thiết và nêu kỳ, đơn vị cùng định dạng mong muốn.' },
      { title: 'Gửi yêu cầu', text: 'Hướng dẫn + thông tin đưa vào', icon: Send, note: 'Yêu cầu được gửi từ máy chủ; khóa truy cập không đặt trong giao diện công khai.' },
      { title: 'Mô hình xử lý', text: 'Tạo bản nháp nhận xét', icon: Bot, note: 'Dịch vụ có thể trả kết quả, báo lỗi hoặc phản hồi chậm. Chương trình cần biết khi nào chờ, thử lại hoặc dừng.' },
      { title: 'Kiểm tra kết quả', text: 'Đủ nội dung · đúng số', icon: ClipboardCheck, note: 'Kiểm tra cấu trúc và nội dung trước khi dùng phản hồi trong bước tiếp theo.' },
    ],
  },
  'data-analysis': {
    title: 'Tách doanh thu thành số đơn và tiền mỗi đơn',
    caption: 'Dữ liệu giả lập: số đơn giảm, tiền trung bình mỗi đơn giữ nguyên. Chọn từng bước để xem doanh thu thay đổi thế nào.',
    steps: [
      { title: 'Tháng 4', text: '1.000 đơn × 0,6 triệu', icon: CalendarDays, note: 'Doanh thu tháng 4 = 1.000 × 0,6 = 600 triệu đồng.' },
      { title: 'Tháng 5', text: '700 đơn × 0,6 triệu', icon: CalendarDays, note: 'Doanh thu tháng 5 = 700 × 0,6 = 420 triệu đồng.' },
      { title: 'Biến động', text: 'Số đơn −30% · tiền/đơn giữ nguyên', icon: ChartNoAxesCombined, note: 'Số đơn và doanh thu cùng giảm 30% vì tiền trung bình mỗi đơn không đổi.' },
      { title: 'Hỏi tiếp', text: 'Nhóm nào ít đơn hơn?', icon: Search, note: 'Tách số đơn theo nhóm để tìm vị trí thay đổi. Biết nhóm nào giảm vẫn chưa giải thích được vì sao giảm.' },
    ],
  },
  storytelling: {
    title: 'Từ con số đến nhận xét có căn cứ',
    caption: 'Dữ liệu giả lập, đơn vị triệu đồng. Biểu đồ biểu diễn thay đổi, chưa giải thích nguyên nhân.',
    steps: [
      { title: 'Quan sát', text: '1.000 → 900 triệu (−10%)', icon: BarChart3, note: 'Nêu kỳ và mức thay đổi có thể đối chiếu với bảng tổng hợp.' },
      { title: 'Vị trí thay đổi', text: 'Trực tuyến −180 · cửa hàng +80', icon: Filter, note: 'Trực tuyến đóng góp vào mức giảm; cửa hàng bù một phần mức giảm đó.' },
      { title: 'Điều chưa biết', text: 'Chưa rõ nguyên nhân', icon: CircleHelp, note: 'Không suy ra “khách chuyển kênh” chỉ từ hai dòng doanh thu.' },
      { title: 'Xem tiếp', text: 'Số đơn và tiền/đơn trực tuyến', icon: Search, note: 'Bước tiếp theo thu hẹp phần chưa rõ để việc phân tích có hướng cụ thể.' },
    ],
  },
  privacy: {
    title: 'Chọn dữ liệu cần dùng trước khi đưa vào AI',
    caption: 'Ví dụ gỡ lỗi JOIN: cấu trúc và dữ liệu giả lập đủ để tái hiện lỗi.',
    steps: [
      { title: 'Tệp ban đầu', text: 'Tên · email · đơn hàng', icon: Database, note: 'Một tệp có thể chứa nhiều trường không cần thiết cho nhiệm vụ đang làm.' },
      { title: 'Giữ phần cần', text: 'Tên cột · mã đơn · cách nối', icon: Filter, note: 'Giữ thông tin giúp giải thích JOIN; bỏ trường cá nhân không liên quan.' },
      { title: 'Mẫu giả lập', text: 'Đơn 101 · 300 nghìn', icon: FileSpreadsheet, note: 'Tạo giá trị hoàn toàn giả lập nhưng bảo toàn tình huống một đơn có nhiều sản phẩm.' },
      { title: 'Đúng môi trường', text: 'Công cụ được phép dùng', icon: ShieldCheck, note: 'Với dữ liệu thật, xác nhận môi trường và phạm vi chia sẻ theo quy định của tổ chức.' },
    ],
  },
  'business-dashboard': {
    title: 'Dashboard bắt đầu từ câu hỏi kinh doanh',
    caption: 'Bản phác thảo với dữ liệu giả lập, đơn vị triệu đồng; dùng để minh họa cách chọn thành phần báo cáo.',
    steps: [
      { title: 'Câu hỏi', text: 'Doanh thu giảm ở kênh nào?', icon: Target, note: 'Xác định quyết định cần hỗ trợ trước khi chọn chỉ số và biểu đồ.' },
      { title: 'Bảng chỉ số', text: 'Tổng tháng 5: 900 triệu', icon: Database, note: 'Kiểm tra tổng các kênh khớp tổng toàn bộ trước khi dựng dashboard.' },
      { title: 'Bố cục', text: 'Doanh thu · kênh · tháng', icon: BarChart3, note: 'Đặt mức thay đổi tổng và so sánh theo kênh cạnh nhau để trả lời câu hỏi.' },
      { title: 'Thử bộ lọc', text: 'Kỳ khác · kênh khác', icon: ClipboardCheck, note: 'Đổi bộ lọc và thử không có dữ liệu để kiểm tra số, nhãn và trạng thái màn hình.' },
    ],
  },
  'scheduled-reports': {
    title: 'Một lần chạy báo cáo tuần',
    caption: 'Luồng minh họa từ lịch chạy đến bản nháp được kiểm tra; có điều kiện dừng ở bước dữ liệu.',
    steps: [
      { title: 'Đến lịch', text: 'Thứ Hai · tuần đã kết thúc', icon: CalendarDays, note: 'Kỳ và múi giờ phải thống nhất với thời điểm dữ liệu hoàn tất nạp.' },
      { title: 'Kiểm tra', text: 'Đủ 7 ngày · tổng khớp', icon: ShieldCheck, note: 'Thiếu ngày hoặc tổng không khớp thì dừng, chưa chuyển dữ liệu cho AI viết báo cáo.' },
      { title: 'Soạn bản nháp', text: 'Bảng số → nhận xét', icon: Bot, note: 'AI chỉ dùng số liệu đã kiểm tra và ghi rõ phần chưa đủ căn cứ.' },
      { title: 'Duyệt / lưu', text: 'Một bản cho mỗi kỳ', icon: ClipboardCheck, note: 'Kiểm tra trước khi phát hành và theo dõi trạng thái để tránh gửi trùng khi thử lại.' },
    ],
  },
  'analyst-assistant': {
    title: 'Một trợ lý biết trả lời và biết hỏi lại',
    caption: 'Ví dụ trợ lý chỉ có bảng doanh thu theo tháng và kênh, chưa có dữ liệu chiến dịch.',
    steps: [
      { title: 'Nhận câu hỏi', text: 'Kênh nào giảm nhiều nhất?', icon: CircleHelp, note: 'Câu hỏi có thể trả lời nếu kỳ và dữ liệu theo kênh đã có.' },
      { title: 'Đọc bảng doanh thu', text: 'Kỳ · kênh · doanh thu', icon: Database, note: 'Trợ lý đọc bảng đã kiểm tra và định nghĩa doanh thu trước khi so sánh.' },
      { title: 'Đủ căn cứ', text: 'Trả lời kèm con số', icon: Check, note: 'Với câu hỏi theo kênh, so chênh lệch để trả lời và nêu số làm căn cứ.' },
      { title: 'Thiếu căn cứ', text: 'Hỏi thêm dữ liệu cần có', icon: CircleHelp, note: 'Nếu hỏi “quảng cáo nào gây giảm?”, cần dữ liệu chiến dịch. Trợ lý nên nêu phần thiếu.' },
    ],
  },
}

export const simulations: Record<string, { title: string; caption: string; component: string }> = {
  'sql-python': { title: 'Vì sao JOIN có thể cộng lặp doanh thu?', caption: 'Dữ liệu giả lập: hai đơn có tổng 500 nghìn đồng. Dùng các nút để xem số dòng thay đổi sau JOIN.', component: 'sql-python' },
  files: { title: 'Đọc tệp và tách dòng có ngày không hợp lệ', caption: 'Dữ liệu giả lập: 31/04/2026 là ngày không tồn tại. Tách dòng lỗi để tổng tiền vẫn đối chiếu được.', component: 'data-analysis' },
  validation: { title: 'Tính tỷ lệ chung từ số lượt thực tế', caption: 'Dữ liệu giả lập: hai kênh có số lượt khác nhau. Dùng mô phỏng để so trung bình đơn giản với tỷ lệ gộp đúng.', component: 'validation' },
  automation: { title: 'Quy trình dừng khi dữ liệu chưa đầy đủ', caption: 'Chọn thông tin đưa vào đủ hoặc thiếu ngày để xem luồng có được chuyển sang bước AI soạn nhận xét hay không.', component: 'automation' },
}

export function getAiIllustrationTitle(id: string) {
  return scenes[id]?.title ?? simulations[id]?.title ?? 'Minh họa bài học'
}

