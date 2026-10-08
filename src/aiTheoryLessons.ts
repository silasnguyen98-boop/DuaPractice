export type AiTheoryLesson = {
  id: string
  title: string
  group: string
  duration: string
  summary: string
  details: { heading: string; body: string }[]
  caseStudy?: { title: string; context: string; columns: string[]; rows: string[][]; note?: string }
  visualId?: string
}

// Reading lessons with fictional learning examples. Editorial sources: docs/ai-editorial-sources.md.
export const aiTheoryLessons: AiTheoryLesson[] = [
  {
    "id": "overview",
    "title": "AI đang thay đổi công việc phân tích dữ liệu như thế nào?",
    "group": "Nền tảng AI",
    "duration": "5 phút",
    "summary": "Data Analyst (DA) là người phân tích dữ liệu để trả lời các câu hỏi kinh doanh. AI có thể giúp viết câu lệnh, xử lý bảng và soạn báo cáo. Người phân tích vẫn cần chọn câu hỏi, kiểm tra số và giải thích kết quả.",
    "details": [
      {
        "heading": "1. AI giúp được những việc gì?",
        "body": "Bạn có thể nhờ AI viết SQL — câu lệnh lấy và tính dữ liệu trong cơ sở dữ liệu. AI cũng có thể hỗ trợ Python — ngôn ngữ lập trình thường dùng để xử lý dữ liệu. Với một bảng bán hàng, AI có thể giúp tìm dòng trùng, cộng doanh thu theo tháng và gợi ý biểu đồ.\n\nTrong báo cáo dbt 2026, 72% người trả lời ưu tiên AI hỗ trợ viết mã, còn 24% ưu tiên hỗ trợ quy trình lấy, kiểm tra và cập nhật dữ liệu.\n\nVí dụ: bạn muốn biết doanh thu giảm ở kênh nào. Bạn xác định hai tháng cần so sánh và những đơn được tính. AI hỗ trợ tạo bảng theo kênh bán; bạn kiểm tra bảng rồi chọn phần cần xem tiếp."
      },
      {
        "heading": "2. Dùng AI có tiết kiệm thời gian không?",
        "body": "Có thể, nhưng cần tính cả thời gian sửa. AI viết một câu lệnh trong vài giây chưa có nghĩa bạn đã hoàn thành công việc: bạn còn phải đọc, chạy thử và kiểm tra kết quả.\n\nTheo Alteryx 2026, 82% DA cho biết tự động hóa giúp họ làm việc hiệu quả hơn. Tuy vậy, DA vẫn dành trung bình 3,7 giờ mỗi tuần để kiểm tra và sửa kết quả AI.\n\nHãy thử cùng một bài bằng hai cách: tự làm và dùng AI. So tổng thời gian đến khi có kết quả đúng, thay vì chỉ so thời gian viết bản nháp."
      },
      {
        "heading": "3. Nếu AI tính sai thì kiểm tra từ đâu?",
        "body": "Một câu lệnh chạy được vẫn có thể cộng sai. Ví dụ, một đơn 300 nghìn có hai sản phẩm. Nếu sau khi nối bảng, số tiền cả đơn xuất hiện ở cả hai dòng sản phẩm, cộng hai dòng sẽ thành 600 nghìn.\n\nBáo cáo dbt 2026 ghi nhận 71% người trả lời lo ngại dữ liệu sai hoặc bịa đặt đến tay người sử dụng.\n\nBắt đầu bằng ba câu hỏi: đang tính những đơn nào, dùng ngày nào, mỗi đơn có bị cộng nhiều lần không? Nếu báo cáo đã gửi có lỗi, sửa số và cho người đọc biết phần đã thay đổi."
      },
      {
        "heading": "4. Vai trò của người phân tích thay đổi thế nào?",
        "body": "AI giúp làm nhiều thao tác, nhưng cần người giải thích công ty muốn đo điều gì. “Khách đang hoạt động” có thể là người mua trong 30 ngày, cũng có thể là người đăng nhập trong tháng. Hai cách hiểu cho hai kết quả khác nhau.\n\nTheo Alteryx 2026, 65% DA cho rằng AI hiệu quả nhất khi các quy tắc kinh doanh được quản lý rõ ràng; 59% kỳ vọng dùng AI agent để tìm nhận xét đáng chú ý từ dữ liệu trong 12 tháng tới.\n\nAI agent là trợ lý có thể dùng công cụ để làm nhiều bước, chẳng hạn lấy số rồi soạn báo cáo. Nó chỉ làm được khi đã được kết nối với dữ liệu và cấp quyền phù hợp."
      },
      {
        "heading": "5. Người mới nên bắt đầu học gì?",
        "body": "Học một công cụ để tự tính và kiểm tra, như Excel hoặc SQL. Tập đặt câu hỏi cụ thể: “Doanh thu tháng 5 giảm ở kênh nào?” dễ làm hơn “Phân tích doanh thu giúp tôi”.\n\nKPI là chỉ số dùng để theo dõi mục tiêu, chẳng hạn doanh thu tháng hoặc số khách mua mới. Bạn cần hiểu cách tính chỉ số trước khi nhờ AI tính hộ. Trong báo cáo dbt 2026, 83% người trả lời xem việc tăng niềm tin vào dữ liệu và đội dữ liệu là ưu tiên quan trọng.\n\nBài thử: lấy một bảng bán hàng nhỏ, tự cộng doanh thu rồi nhờ AI làm lại. So hai kết quả và viết ba nhận xét có con số chứng minh. Giữ bài này làm ví dụ trong hồ sơ dự án của bạn."
      }
    ]
  },
  {
    "id": "generative-ai",
    "title": "LLM hoạt động ra sao và vì sao có thể sai?",
    "group": "Nền tảng AI",
    "duration": "5 phút",
    "summary": "LLM là loại AI tạo văn bản mà bạn thường gặp trong các trợ lý trò chuyện. Nó tạo câu trả lời từ câu hỏi và những gì đã học. Một câu trả lời trôi chảy vẫn có thể chứa tên cột sai, số sai hoặc thông tin không có thật.",
    "details": [
      {
        "heading": "1. LLM là gì?",
        "body": "LLM là viết tắt của Large Language Model, thường gọi là mô hình ngôn ngữ lớn. Bạn có thể hiểu đây là một hệ thống được học từ rất nhiều văn bản để tạo và xử lý ngôn ngữ.\n\nKhi bạn hỏi, mô hình dùng nội dung cuộc trò chuyện và những gì đã học để tạo câu trả lời. Nó không tự biết dữ liệu riêng của công ty bạn, cũng không tự ghi mọi cuộc trò chuyện mới vào kiến thức đã học.\n\nVí dụ: bạn hỏi “Viết SQL tính doanh thu từ bảng orders”. Nếu chưa cho biết bảng có cột nào, AI có thể đoán tên cột là revenue. Nghe hợp lý nhưng bảng thật của bạn có thể dùng tên amount."
      },
      {
        "heading": "2. AI tạo câu trả lời như thế nào?",
        "body": "Có thể hình dung năm bước: nhận câu hỏi → chia văn bản thành phần nhỏ → đọc thông tin liên quan → chọn phần tiếp theo → lặp lại đến khi hoàn thành.\n\nNhững phần nhỏ đó gọi là token. Một token có thể là một phần của từ, một từ hoặc dấu câu; không nên hiểu một token luôn bằng một từ. Mô hình tạo lần lượt các phần này để ghép thành câu trả lời.\n\nNếu bạn nói “chỉ tính đơn đã thanh toán”, thông tin đó giúp AI chọn cách viết phù hợp. Nhưng việc ghép được một câu lệnh có vẻ đúng chưa chứng minh nó chạy được hoặc tính đúng dữ liệu của bạn."
      },
      {
        "heading": "3. Hallucination: vì sao AI có thể bịa thông tin?",
        "body": "Hallucination là tên gọi hiện tượng AI đưa thông tin sai hoặc không có căn cứ nhưng trình bày như thật. Ví dụ: AI nói bảng có một cột chưa từng được cung cấp, hoặc dẫn một nghiên cứu không tồn tại.\n\nAI có thể tạo lời giải mạch lạc ngay cả khi thiếu thông tin. Giọng văn chắc chắn không phải dấu hiệu cho thấy câu trả lời đã được kiểm tra.\n\nVí dụ: chỉ biết doanh thu giảm, AI chưa thể kết luận “do khách ít quay lại”. Nó có thể đề xuất “hãy xem số đơn của khách quay lại”, rồi cần dữ liệu để kiểm tra đề xuất đó."
      },
      {
        "heading": "4. Khi nào AI dễ trả lời sai?",
        "body": "Thiếu thông tin: “tính doanh thu” chưa nói lấy đơn nào, dùng ngày nào và có trừ hoàn tiền không. AI có thể tự đoán phần còn thiếu.\n\nThông tin mới: giá, chính sách và tính năng có thể thay đổi. Cần nguồn cập nhật, thay vì chỉ dựa vào câu trả lời có sẵn của mô hình.\n\nTính toán và nhiều bước: một lần lọc nhầm có thể làm cả bảng, biểu đồ và nhận xét sai theo. Với số liệu, nên dùng bảng tính, SQL hoặc Python để tính rồi đối chiếu.\n\nDẫn nguồn: một đường dẫn trông thật chưa chắc mở được. Một tài liệu có thật cũng chưa chắc nói điều AI khẳng định."
      },
      {
        "heading": "5. Làm gì để giảm lỗi?",
        "body": "Đưa tên bảng, tên cột, ý nghĩa mỗi dòng và cách tính. Ví dụ: “Mỗi dòng orders là một đơn. Cộng amount của đơn status = paid, dùng ngày paid_at. Nếu thiếu thông tin, hãy hỏi lại”. Trong ví dụ này, amount là số tiền, status là trạng thái và paid_at là ngày thanh toán.\n\nVới quy định nội bộ, đưa tài liệu liên quan cho AI đọc. Với số liệu, yêu cầu tính bằng công cụ và xem các bước đã chạy. Nếu nhờ AI nêu điều chưa biết, bạn sẽ dễ phát hiện phần cần bổ sung hơn.\n\nBài thử: nhờ AI viết câu lệnh cho một bảng nhỏ mà bạn đã biết tổng tiền. Kiểm tra tên cột, chạy thử và so kết quả. Hỏi lại cùng AI chưa thay thế được việc kiểm tra trên dữ liệu thật."
      }
    ]
  },
  {
    "id": "context",
    "title": "Context là gì? Cần cung cấp thông tin gì cho AI?",
    "group": "Nền tảng AI",
    "duration": "3 phút",
    "summary": "Context là thông tin đi kèm câu hỏi, giúp AI hiểu bạn đang nói về việc gì. Với phân tích dữ liệu, đó thường là bảng nào cần dùng, các cột có nghĩa gì và bạn muốn tính theo quy tắc nào.",
    "details": [
      {
        "heading": "1. Vì sao một câu hỏi ngắn có thể chưa đủ?",
        "body": "Bạn hỏi “Tính doanh thu tháng 5”. AI vẫn chưa biết dùng ngày đặt hàng hay ngày thanh toán, có lấy đơn bị hủy không và số tiền tính bằng đồng hay nghìn đồng.\n\nHãy bổ sung: “Chỉ tính đơn đã thanh toán, theo ngày thanh toán, đơn vị đồng”. Phần bổ sung đó là context. Không cần kể mọi thứ; chỉ cần những thông tin làm thay đổi cách trả lời."
      },
      {
        "heading": "2. Cho biết mỗi dòng và mỗi cột có nghĩa gì",
        "body": "Cấu trúc bảng (schema) cho biết tên cột và loại dữ liệu trong mỗi cột. Thay vì chỉ đưa tên amount, hãy nói amount là tiền cả đơn, còn mỗi dòng trong bảng orders là một đơn hàng.\n\nNếu nối đơn hàng với sản phẩm, một đơn có ba sản phẩm có thể thành ba dòng. AI cần biết số tiền cả đơn đang bị lặp ở ba dòng để không cộng nhầm. Hãy nói rõ hai bảng nối với nhau bằng cột nào."
      },
      {
        "heading": "3. Nói rõ kết quả bạn muốn nhận",
        "body": "Thay “Phân tích tệp này” bằng “So doanh thu tháng 4 và tháng 5 theo kênh bán. Trả một bảng và ba nhận xét để quản lý biết nên xem tiếp kênh nào”.\n\nNếu đang tìm lỗi câu lệnh, vài dòng mẫu thể hiện được lỗi có thể đủ. Bạn không cần gửi toàn bộ dữ liệu để giải thích một phép cộng bị lặp."
      },
      {
        "heading": "4. Nhắc lại quy tắc khi đổi bài toán",
        "body": "Cuộc trò chuyện càng dài càng có nhiều thông tin. Công cụ có thể tóm tắt hoặc lược bớt phần cũ khi vượt lượng nội dung nó xử lý được. Giới hạn này thường gọi là context window.\n\nKhi chuyển sang việc mới, hãy nhắc lại bảng cần dùng và cách tính quan trọng. Bài thử: viết năm dòng gồm ý nghĩa một dòng dữ liệu, cột tiền, cột ngày, trạng thái cần lấy và kết quả mong muốn. Đọc lại xem một người khác có thể làm theo không."
      }
    ]
  },
  {
    "id": "ai-assistants",
    "title": "Nên sử dụng AI nào cho Data Analyst?",
    "group": "Nền tảng AI",
    "duration": "6 phút",
    "summary": "Chọn AI theo công việc và công cụ bạn đang dùng. Bảng so sánh giúp bạn tìm nơi bắt đầu; bài này hướng dẫn cách thử để biết công cụ có phù hợp với mình không.",
    "details": [
      {
        "heading": "1. Bắt đầu từ công việc thường ngày",
        "body": "Data Analyst (DA) là người phân tích dữ liệu. SQL dùng để lấy và tính dữ liệu trong cơ sở dữ liệu; Python là ngôn ngữ lập trình thường dùng cho phân tích. CSV là tệp bảng dữ liệu dạng văn bản, có thể mở bằng Excel.\n\nNếu học SQL, Python hoặc phân tích CSV, hãy thử trợ lý có thể giải thích code và xử lý tệp. ChatGPT và Claude là những lựa chọn để thử. Nếu làm việc chủ yếu trong Excel hoặc Google Sheets, công cụ tích hợp trong bảng tính có thể giúp bạn thao tác ngay trên dữ liệu đang mở.\n\nBảng phía trên mô tả các công dụng phổ biến. Khả năng đọc tệp, chạy code và kết nối dữ liệu tùy gói tài khoản; hãy thử bằng một tệp nhỏ trước khi chọn dùng lâu dài."
      },
      {
        "heading": "2. Thử bằng cùng một bài toán",
        "body": "Chuẩn bị một tệp bán hàng mà bạn đã biết tổng tiền. Nhờ từng công cụ tìm dòng trùng, cộng doanh thu theo tháng và viết ba nhận xét. Dùng cùng dữ liệu và cùng cách tính để so sánh công bằng.\n\nXem công cụ có tính đúng không, bạn có xem lại cách tính được không và mất bao lâu để sửa. Một câu trả lời trình bày đẹp nhưng không kiểm tra được số liệu sẽ khó dùng."
      },
      {
        "heading": "3. Chọn một công cụ để học trước",
        "body": "Bạn không cần đăng ký nhiều công cụ cùng lúc. Chọn một công cụ phù hợp với môi trường đang dùng, học cách cung cấp cấu trúc bảng, đặt câu hỏi và kiểm tra kết quả. Khi gặp hạn chế rõ ràng, hãy thử thêm lựa chọn khác.\n\nBài thử: dùng cùng một yêu cầu phân tích ở hai công cụ, rồi ghi lại một điểm hữu ích và một lỗi của mỗi công cụ. Đánh giá bằng nhiệm vụ thực tế của bạn thay vì chỉ dựa vào xếp hạng mô hình."
      }
    ]
  },
  {
    "id": "rag",
    "title": "RAG là gì? Vì sao AI cần tìm thêm tài liệu?",
    "group": "Nền tảng AI",
    "duration": "3 phút",
    "summary": "AI không tự biết tài liệu và quy định nội bộ của công ty. RAG giúp tìm thông tin liên quan rồi đưa vào ngữ cảnh trước khi AI trả lời.",
    "details": [
      {
        "heading": "1. Khi kiến thức có sẵn của AI chưa đủ",
        "body": "Bạn hỏi “Công ty mình tính khách đang hoạt động như thế nào?”. AI có thể biết nhiều cách định nghĩa, nhưng chưa biết công ty dùng cách nào.\n\nCần đọc tài liệu của công ty về chỉ số này. Chỉ số dùng để theo dõi mục tiêu thường gọi là KPI. Một định nghĩa đúng cần dựa vào tài liệu hiện đang áp dụng."
      },
      {
        "heading": "2. RAG hoạt động qua những bước nào?",
        "body": "RAG là cách để AI tìm tài liệu liên quan trước khi trả lời. Tên đầy đủ là Retrieval-Augmented Generation; bạn chỉ cần nhớ cách làm: nhận câu hỏi → tìm đoạn tài liệu cần thiết → đưa đoạn đó cho AI đọc → trả lời dựa trên đoạn đã tìm.\n\nVí dụ: tài liệu công ty ghi “khách đang hoạt động là người có giao dịch thành công trong 30 ngày”. Hệ thống tìm đoạn này, rồi AI dùng nó để giải thích. Nhờ vậy, AI có thông tin của công ty thay vì tự đoán một định nghĩa."
      },
      {
        "heading": "3. Truy xuất tài liệu khác với tính trên dữ liệu",
        "body": "Tài liệu cho biết cách tính; bảng giao dịch mới có dữ liệu để tính ra số. Ví dụ, tài liệu nói doanh thu chỉ lấy đơn đã thanh toán, nhưng không chứa số tiền các đơn hôm nay.\n\nMuốn có doanh thu hôm nay, cần đọc bảng giao dịch và cộng tiền những đơn phù hợp. SQL là công cụ thường dùng cho việc này. RAG giúp tìm quy tắc; câu lệnh SQL dùng quy tắc đó để tính số."
      },
      {
        "heading": "4. Tìm được tài liệu vẫn cần xem đúng phiên bản",
        "body": "RAG có thể lấy nhầm đoạn, bỏ sót điều kiện hoặc dùng tài liệu cũ. Nếu quy tắc KPI mới có hiệu lực từ tháng 5, định nghĩa tháng 4 chưa chắc phù hợp với báo cáo hiện tại.\n\nBài thử: chuẩn bị hai đoạn định nghĩa khác nhau, ghi ngày hiệu lực, rồi yêu cầu AI trả lời cho một kỳ cụ thể. Kiểm tra nó chọn đúng đoạn và hỏi lại khi chưa xác định được phiên bản. Với tài liệu nội bộ, hệ thống chỉ nên tìm và lấy phần người dùng được phép đọc."
      }
    ]
  },
  {
    "id": "agents",
    "title": "AI Agent là gì? Có thể tự động hóa công việc Data Analyst đến đâu?",
    "group": "Nền tảng AI",
    "duration": "3 phút",
    "summary": "AI agent kết hợp mô hình với công cụ để thực hiện nhiều bước. Điều cần hiểu là agent được làm việc gì, có dữ liệu nào và dừng ở đâu.",
    "details": [
      {
        "heading": "1. Từ trả lời câu hỏi đến thực hiện công việc",
        "body": "AI agent có thể hiểu là trợ lý AI được kết nối với công cụ và được phép thực hiện công việc. Trợ lý trò chuyện thông thường có thể hướng dẫn cách lấy số; agent có thể dùng công cụ để lấy số, đọc kết quả và chọn bước tiếp theo.\n\nVí dụ: bạn yêu cầu “Tóm tắt doanh thu tuần trước”. Agent lấy bảng doanh thu, kiểm tra có đủ ngày rồi soạn nhận xét. Nếu chưa được kết nối với dữ liệu của công ty, nó không tự có số liệu thật."
      },
      {
        "heading": "2. Agent khác quy trình cố định ở đâu?",
        "body": "Quy trình cố định làm theo các bước đã đặt trước: lấy số → kiểm tra → soạn báo cáo. Agent có thể chọn bước tiếp theo tùy kết quả. Ví dụ, thấy doanh thu giảm thì chọn xem riêng từng khu vực.\n\nVới báo cáo tuần có cách tính ổn định, bạn có thể bắt đầu bằng quy trình cố định. Chỉ cần agent khi công việc thực sự cần chọn giữa nhiều hướng xử lý."
      },
      {
        "heading": "3. Những phần việc có thể giao cho agent",
        "body": "Bắt đầu bằng việc dễ kiểm tra: tìm tài liệu về cách tính chỉ số, đọc bảng tổng hợp hoặc soạn bản nháp nhận xét.\n\nTheo Alteryx 2026, 59% người phân tích dữ liệu trong khảo sát kỳ vọng dùng AI agent để tìm nhận xét đáng chú ý từ dữ liệu trong 12 tháng tới. Đây là kỳ vọng; để làm được, trợ lý vẫn cần dữ liệu, công cụ và hướng dẫn rõ ràng."
      },
      {
        "heading": "4. Xác định quyền và điều kiện dừng",
        "body": "Với bản thử đầu tiên, cho agent đọc một bảng tổng hợp và tạo bản nháp. Những việc như sửa dữ liệu, đổi cách tính chỉ số hoặc gửi báo cáo ra ngoài cần được thiết kế quyền riêng.\n\nThử mô tả agent của bạn trong bốn dòng: mục tiêu, công cụ được dùng, kết quả và trường hợp phải dừng. Ví dụ: dừng nếu thiếu ngày dữ liệu hoặc tổng doanh thu không khớp. Một agent hữu ích cần biết báo thiếu thông tin thay vì luôn cố hoàn thành."
      }
    ]
  },
  {
    "id": "tools",
    "title": "Các nhóm công cụ AI trong công việc Data Analyst",
    "group": "Cách làm việc với AI",
    "duration": "3 phút",
    "summary": "Một sản phẩm có thể chứa nhiều khả năng AI. Hiểu từng nhóm công cụ giúp bạn chọn đúng cách xử lý cho câu hỏi, thay vì giao mọi việc cho một chatbot.",
    "details": [
      {
        "heading": "1. Trợ lý hội thoại: hỏi, giải thích và tạo bản nháp",
        "body": "Trợ lý trò chuyện phù hợp để hỏi khái niệm, nhờ giải thích câu lệnh hoặc soạn hướng phân tích. Bạn đưa thông tin và câu hỏi; AI trả lời để bạn làm tiếp.\n\nVí dụ: đưa câu lệnh nối hai bảng và hỏi “Vì sao sau khi nối, số dòng tăng?”. Thao tác nối bảng gọi là JOIN trong SQL. Trợ lý giúp giải thích, còn kết quả thật cần được kiểm tra bằng cách chạy câu lệnh trên dữ liệu."
      },
      {
        "heading": "2. Công cụ phân tích tệp: đọc dữ liệu và chạy phép tính",
        "body": "Công cụ có khả năng chạy câu lệnh có thể đọc CSV (tệp bảng dữ liệu dạng văn bản), kiểm tra dữ liệu, tổng hợp và vẽ biểu đồ. Với nhóm này, bạn cần xem các bước đã chạy và tệp kết quả.\n\nHãy hỏi rõ “Có bao nhiêu dòng trước và sau khi lọc?”. Nếu 100 dòng bị loại vì thiếu ngày, bạn cần biết chúng là lỗi dữ liệu hay giao dịch chưa hoàn tất trước khi dùng báo cáo."
      },
      {
        "heading": "3. AI trong bảng tính và BI: làm việc tại nơi có dữ liệu",
        "body": "Một số công cụ AI nằm ngay trong Excel, Google Sheets hoặc phần mềm báo cáo như Power BI. Chúng có thể hỗ trợ viết công thức, tạo biểu đồ hoặc giải thích số liệu ngay tại nơi bạn đang làm việc. BI là nhóm công cụ giúp tổng hợp và trình bày dữ liệu để theo dõi kinh doanh.\n\nHãy chỉ rõ trang tính, vùng ô và cột cần dùng. Nếu chọn thiếu dòng, công thức đúng vẫn trả tổng thiếu. Với Power BI, kiểm tra công thức chỉ số và cách nối các bảng."
      },
      {
        "heading": "4. API và công cụ tự động hóa: nối các bước lại",
        "body": "API là cách để chương trình gửi yêu cầu tới dịch vụ AI và nhận kết quả. Một công cụ tự động hóa có thể ghép các bước lấy số, kiểm tra và nhờ AI viết nhận xét. Cách này phù hợp khi bạn cần làm lại cùng một việc nhiều lần.\n\nBài thử: chọn công cụ cho ba việc — giải thích một câu lệnh, tính tổng trong một tệp bán hàng và soạn báo cáo tuần tự động. Với mỗi việc, ghi bước nào cần tính số và bước nào cần viết văn bản."
      }
    ]
  },
  {
    "id": "prompting",
    "title": "Viết yêu cầu cho AI (prompt) thế nào cho rõ?",
    "group": "Cách làm việc với AI",
    "duration": "3 phút",
    "summary": "Prompt là yêu cầu bạn gửi cho AI. Hãy nói rõ việc cần làm, dữ liệu cần dùng và kết quả bạn muốn nhận; không cần nhiều lời nhắc cầu kỳ.",
    "details": [
      {
        "heading": "1. Nêu việc cần làm và người dùng kết quả",
        "body": "Prompt là câu hỏi hoặc yêu cầu bạn gửi cho AI. Không cần viết cầu kỳ: mục tiêu là để AI hiểu đúng việc cần làm.\n\n“Phân tích doanh thu” có thể dẫn tới hàng loạt bảng và biểu đồ. “Tìm kênh đóng góp nhiều nhất vào mức giảm doanh thu tháng 5 để quản lý bán hàng chọn hướng xem tiếp” tạo trọng tâm rõ hơn.\n\nNếu chỉ cần giải thích một hàm, hãy đưa câu lệnh và câu hỏi cụ thể. Không phải yêu cầu nào cũng cần dài; thông tin nên đủ cho nhiệm vụ đang làm."
      },
      {
        "heading": "2. Bổ sung dữ liệu và quy tắc quan trọng",
        "body": "Nêu tên cột, ý nghĩa một dòng và cách tính. Với doanh thu, nói đơn nào được tính, dùng ngày nào, đơn vị tiền và cách trừ hoàn tiền.\n\nVới tỷ lệ, nói rõ lấy số nào chia cho số nào. Ví dụ: tỷ lệ mua hàng = số lượt tạo đơn / số lượt truy cập. Nếu không có lượt truy cập, hãy yêu cầu trả “chưa tính được”. Trong SQL, có thể dùng NULL để biểu thị không có giá trị thay vì ghi tỷ lệ bằng 0."
      },
      {
        "heading": "3. Yêu cầu kết quả thuận tiện cho việc kiểm tra",
        "body": "Bạn có thể yêu cầu một câu lệnh SQL kèm giải thích cách lọc, một bảng kèm số dòng đã dùng hoặc nhận xét kèm con số chứng minh.\n\nVí dụ: “Bảng orders có id (mã đơn), amount (số tiền), paid_at (ngày thanh toán), status (trạng thái). Mỗi dòng là một đơn. Tính doanh thu theo tháng bằng đồng, chỉ lấy status = paid. Viết SQL cho PostgreSQL và giải thích cách xử lý ngày bị thiếu. Nếu thiếu thông tin, hãy hỏi lại”. PostgreSQL là hệ cơ sở dữ liệu dùng trong ví dụ; nếu bạn dùng hệ khác, hãy nói rõ tên."
      },
      {
        "heading": "4. Chia nhỏ khi còn nhiều điều chưa rõ",
        "body": "Nếu yêu cầu kinh doanh mơ hồ, lượt đầu có thể chỉ làm rõ cách đo. Sau đó mới viết truy vấn, xem kết quả và tạo nhận xét. Mỗi lượt giải quyết một điểm còn chưa thống nhất.\n\nBài thử: lấy một yêu cầu gửi cho AI bạn từng dùng, bỏ các lời nhắc chung và thêm một quy tắc cụ thể cùng kết quả cần nhận. So sánh xem bản mới có dễ kiểm tra hơn không."
      }
    ]
  },
  {
    "id": "business-context",
    "title": "Làm sao để AI hiểu đúng dữ liệu và quy tắc kinh doanh?",
    "group": "Cách làm việc với AI",
    "duration": "3 phút",
    "summary": "Cùng một từ “doanh thu” hoặc “khách mới”, mỗi công ty có thể tính khác nhau. Bạn cần giải thích cách công ty mình tính để AI không tự đoán.",
    "details": [
      {
        "heading": "1. Tên cột chưa giải thích đủ ý nghĩa",
        "body": "Một cột amount có thể là tiền trước thuế, sau thuế hoặc số tiền trước giảm giá. “Khách mới” có thể là người tạo tài khoản mới hoặc người có đơn đầu tiên. AI chưa thể suy ra các quy tắc này chỉ từ tên cột.\n\nHãy viết định nghĩa theo cách người khác tính lại được: “Khách mới trong tháng là khách có đơn thanh toán đầu tiên thuộc tháng đó”. Sau đó xác định dữ liệu nào chứng minh được điều kiện."
      },
      {
        "heading": "2. Biến quy tắc thành điều kiện cụ thể",
        "body": "Giả sử doanh thu chỉ tính đơn đã thanh toán (status = paid), không tính đơn thử nghiệm và trừ hoàn tiền thành công. Mỗi ý cần gắn với cột hoặc nguồn dữ liệu tương ứng.\n\nBạn có thể nhờ AI chuyển các quy tắc thành bộ lọc và công thức, rồi đối chiếu từng phần. Nếu không có trường đánh dấu đơn thử nghiệm, AI nên nêu thông tin thiếu thay vì tự loại đơn theo một cách đoán."
      },
      {
        "heading": "3. Thử những tình huống dễ gây nhầm",
        "body": "Ví dụ, khách tạo tài khoản tháng 4 nhưng mua lần đầu tháng 5 phải được tính là khách mới tháng 5 theo định nghĩa ở trên. Một đơn thanh toán ngày cuối tháng nhưng hoàn tiền tháng sau cần quy tắc riêng về kỳ ghi nhận.\n\nĐưa vài tình huống như vậy cho AI và yêu cầu giải thích chúng thuộc nhóm nào. Đây là cách phát hiện hiểu khác nhau trước khi chạy trên toàn bộ dữ liệu."
      },
      {
        "heading": "4. Giữ định nghĩa nhất quán khi trao đổi",
        "body": "Khi đổi cách tính, cập nhật cả tài liệu, câu lệnh và hướng dẫn cho AI. Nếu tháng trước tính tiền trước hoàn trả còn tháng này tính sau hoàn trả, hai số chưa thể so trực tiếp.\n\nBài thử: chọn một chỉ số như số khách mới. Viết cách tính và hai tình huống dễ nhầm, chẳng hạn tạo tài khoản tháng 4 nhưng mua lần đầu tháng 5. Nhờ AI giải thích lại xem có hiểu đúng không."
      }
    ]
  },
  {
    "id": "api",
    "title": "Làm việc với AI qua API: Data Analyst cần biết những gì?",
    "group": "Cách làm việc với AI",
    "duration": "3 phút",
    "summary": "API là cách để chương trình gửi yêu cầu tới AI và nhận câu trả lời. Nó hữu ích khi bạn muốn tự động làm một việc lặp lại, chẳng hạn soạn nhận xét từ bảng doanh thu mỗi tuần.",
    "details": [
      {
        "heading": "1. Chương trình gửi yêu cầu tới AI như thế nào?",
        "body": "Chương trình gửi hướng dẫn và dữ liệu cần xử lý tới dịch vụ AI. Dịch vụ tạo câu trả lời rồi gửi lại để chương trình dùng tiếp. Ví dụ: chương trình Python lấy bảng doanh thu, nhờ AI viết nhận xét và lưu bản nháp.\n\nAPI không tự đọc được cơ sở dữ liệu của bạn. Chương trình cần lấy những số liệu được phép dùng rồi gửi chúng, hoặc kết nối một công cụ đọc dữ liệu với quyền phù hợp."
      },
      {
        "heading": "2. Biết dữ liệu nào được gửi và nhận lại",
        "body": "Trước khi gửi, kiểm tra bảng có đủ thời gian báo cáo, đơn vị tiền và các giá trị cần dùng. Sau khi nhận, xem AI có trả đủ những phần bạn yêu cầu không.\n\nVí dụ, cần ba phần: tóm tắt, các nhận xét và thông tin còn thiếu. Chương trình có thể đặt tên chúng là summary, observations và missing_information. Đây là tên các mục để chương trình đọc kết quả; nội dung trong từng mục vẫn phải được kiểm tra với bảng số liệu."
      },
      {
        "heading": "3. Quản lý khóa, giới hạn và chi phí",
        "body": "Khóa API là mã giúp dịch vụ nhận biết chương trình được phép sử dụng. Hãy lưu ở máy chủ hoặc nơi quản lý khóa riêng, tránh đặt trong mã của trang web mà người dùng có thể xem hoặc trong tệp chia sẻ.\n\nChi phí tùy dịch vụ, mô hình và lượng sử dụng. Nhiều dịch vụ tính theo token — những phần nhỏ dùng để xử lý văn bản, có thể là phần của từ, một từ hoặc dấu câu. Theo dõi số lần gửi và lượng nội dung để biết chi phí thực tế."
      },
      {
        "heading": "4. Thiết kế cả trường hợp gọi thất bại",
        "body": "Dịch vụ có thể phản hồi quá chậm, giới hạn số yêu cầu hoặc trả thiếu nội dung. Chương trình cần biết khi nào thử lại, khi nào dừng và cách tránh tạo hai báo cáo cho cùng một tuần.\n\nBài thử: mô tả việc “bảng doanh thu → bản nháp nhận xét” bằng dữ liệu cần gửi, kết quả muốn nhận và hai lỗi có thể gặp. Bạn có thể thiết kế trên giấy trước khi kết nối dịch vụ thật."
      }
    ]
  },
  {
    "id": "sql-python",
    "title": "AI hỗ trợ SQL và Python như thế nào?",
    "group": "Ứng dụng trong phân tích",
    "duration": "3 phút",
    "summary": "AI hữu ích khi viết bản nháp, giải thích code và tìm lỗi. Bạn vẫn cần đọc được cách xử lý để biết code trả lời đúng câu hỏi hay chỉ chạy được.",
    "details": [
      {
        "heading": "1. Chọn đúng kiểu yêu cầu",
        "body": "SQL dùng để lấy và tính dữ liệu trong cơ sở dữ liệu. Python là ngôn ngữ lập trình thường dùng để xử lý bảng và vẽ biểu đồ. Code là các câu lệnh bạn viết để máy thực hiện việc đó.\n\nViết code từ đầu cần cấu trúc bảng và định nghĩa chỉ số. Giải thích code cần đoạn code cùng phần bạn muốn hiểu. Tìm lỗi cần thêm thông báo lỗi, kết quả bất thường và mẫu dữ liệu tái hiện được vấn đề.\n\nVí dụ: “Đây là SQL PostgreSQL và hai bảng mẫu. Tổng sau khi nối bảng là 800 nhưng tôi tính được 500. Hãy chỉ ra bước làm tăng số dòng”. Câu hỏi này giúp AI tập trung vào lỗi cụ thể."
      },
      {
        "heading": "2. Kiểm tra lỗi cộng lặp sau JOIN",
        "body": "JOIN là thao tác nối hai bảng theo thông tin chung, chẳng hạn mã đơn hàng. Bảng orders có hai đơn, số tiền là 300 và 200 nghìn. Bảng order_items có hai sản phẩm thuộc đơn 300. Khi nối, tiền đơn 300 xuất hiện ở hai dòng: 300, 300, 200. Cộng bằng SUM(amount) ra 800, dù tổng đúng chỉ là 500.\n\nNếu chỉ cần doanh thu cả đơn, cộng trực tiếp từ bảng orders. Nếu cần tìm đơn có một sản phẩm cụ thể, có thể kiểm tra bằng EXISTS — điều kiện xem có dòng phù hợp hay không.\n\nKhông nên sửa bằng SUM(DISTINCT amount), tức chỉ cộng mỗi mức tiền khác nhau một lần. Hai đơn khác nhau cùng giá 300 vẫn phải được cộng cả hai."
      },
      {
        "heading": "3. Với Python, xem cả bước biến đổi dữ liệu",
        "body": "pandas là thư viện Python thường dùng để xử lý bảng. Một chương trình pandas có thể chạy được nhưng hiểu nhầm ngày hoặc bỏ quá nhiều dòng. Hãy nói rõ ngày theo thứ tự ngày/tháng/năm, cách xử lý ô trống và khi nào một dòng được coi là trùng.\n\nGiữ lại cột gốc khi chuyển đổi và tách dòng lỗi để xem lại. Ngày 31/04/2026 không tồn tại; đổi nó thành ô trống chỉ giúp chương trình chạy tiếp, chưa tìm ra ngày đúng của giao dịch."
      },
      {
        "heading": "4. Kiểm tra câu lệnh bằng một mẫu nhỏ",
        "body": "Mẫu thử nên có trường hợp dễ tính tay và trường hợp dễ sai: một đơn nhiều sản phẩm, hai đơn cùng số tiền, ngày đầu/cuối kỳ và phép chia cho 0. So kết quả AI với kết quả bạn biết trước.\n\nBài thử: nhờ AI viết truy vấn tổng tiền cho ví dụ hai đơn, đọc từng bước và giải thích vì sao mỗi đơn chỉ được cộng một lần. Sau đó mới áp dụng cách xử lý cho dữ liệu lớn hơn."
      }
    ]
  },
  {
    "id": "files",
    "title": "AI có thể đọc và phân tích dữ liệu từ Excel, CSV như thế nào?",
    "group": "Ứng dụng trong phân tích",
    "duration": "3 phút",
    "summary": "Bạn có thể nhờ AI đọc bảng Excel hoặc CSV — tệp dữ liệu dạng văn bản. Trước khi hỏi kết quả phân tích, hãy kiểm tra công cụ đã đọc đúng cột, ngày và số tiền chưa.",
    "details": [
      {
        "heading": "1. Chuẩn bị một bảng dễ đọc",
        "body": "Mỗi cột có tên rõ, mỗi dòng là cùng một loại thông tin, chẳng hạn một đơn hàng. Với Excel nhiều trang tính, nói rõ trang và vùng ô cần đọc. Với CSV, mở thử để xem tiếng Việt và các cột có hiển thị đúng không.\n\nVí dụ bảng bán hàng có order_id (mã đơn), paid_at (ngày thanh toán), channel (kênh bán) và amount (số tiền). Nêu mỗi dòng là một đơn đã thanh toán và tiền tính bằng đồng. Nếu có dòng tổng ở cuối, cần bỏ dòng này khi cộng các đơn để không tính hai lần."
      },
      {
        "heading": "2. Yêu cầu AI mô tả dữ liệu trước",
        "body": "Hãy hỏi số dòng, tên cột, kiểu dữ liệu, giá trị thiếu và mã đơn bị trùng. Đây là bước kiểm tra tệp đã đọc được đầy đủ chưa. Với Excel, xem các giá trị AI đọc có khớp vài ô bạn biết không.\n\nBạn có thể yêu cầu: “Trước khi phân tích, liệt kê cấu trúc tệp và các điểm chưa rõ. Chưa xóa hoặc điền dữ liệu”. Nếu công cụ chỉ đọc được một phần tệp, cần biết giới hạn đó trước khi dùng kết quả."
      },
      {
        "heading": "3. Xem cách làm sạch và tính số",
        "body": "Sau khi thống nhất quy tắc, yêu cầu bảng tổng hợp theo tháng và kênh, kèm các bước đã xử lý. Một dòng thiếu ngày nên được tách để tra lại nguồn thay vì tự đoán ngày.\n\nVí dụ giả lập, đơn vị nghìn đồng: có 4 dòng với tổng tiền 1.000; một dòng ngày lỗi mang số tiền 300. Bảng hợp lệ còn 3 dòng và tổng 700. Giữ riêng dòng lỗi giúp giải thích phần chênh lệch 300, thay vì báo rằng doanh thu thật chỉ có 700."
      },
      {
        "heading": "4. Giữ lại kết quả có thể kiểm tra",
        "body": "Nếu công cụ hỗ trợ chạy code, lưu code và bảng kết quả tương ứng. Nếu tạo tệp Excel, mở lại để xem công thức, định dạng ngày và các trang tính có đầy đủ không.\n\nBài thử: dùng một tệp nhỏ có một dòng trùng và một ngày không hợp lệ. Nhờ AI tìm chúng, đề xuất cách xử lý rồi xem kết quả trước/sau có giữ đúng ý nghĩa dữ liệu không."
      }
    ]
  },
  {
    "id": "data-analysis",
    "title": "AI trong khám phá dữ liệu và tạo giả thuyết",
    "group": "Ứng dụng trong phân tích",
    "duration": "3 phút",
    "summary": "Khi doanh thu thay đổi, AI có thể gợi ý phần cần xem tiếp. Giả thuyết là một cách giải thích chưa được xác nhận; bạn cần dữ liệu để biết nó đúng hay sai.",
    "details": [
      {
        "heading": "1. Xác nhận hai kỳ so sánh tương đương",
        "body": "Trước khi giải thích doanh thu giảm, kiểm tra dữ liệu đã đủ ngày, định nghĩa và bộ lọc có giống nhau không. Một kỳ mới có 5 ngày không thể so như kỳ đã đủ 7 ngày.\n\nNếu số liệu nạp chậm, hãy xử lý điều đó trước. Khi dữ liệu đã đáp ứng điều kiện, AI mới có cơ sở đề xuất tách thành từng phần theo kênh, sản phẩm hoặc nhóm khách."
      },
      {
        "heading": "2. Tách doanh thu để biết thay đổi nằm ở đâu",
        "body": "Doanh thu = số đơn × số tiền trung bình mỗi đơn. Số tiền trung bình mỗi đơn thường được gọi là AOV. Nếu doanh thu giảm nhưng tiền trung bình mỗi đơn giữ nguyên, hãy xem số đơn giảm ở nhóm nào.\n\nVí dụ giả lập: tháng trước có 1.000 đơn, trung bình 600.000 đồng/đơn; tháng này có 700 đơn với cùng mức tiền trung bình. Doanh thu giảm từ 600 xuống 420 triệu, tức 30%. Như vậy, số đơn giảm làm doanh thu giảm; vẫn cần tìm hiểu vì sao ít đơn hơn."
      },
      {
        "heading": "3. Mỗi giả thuyết đi cùng cách kiểm tra",
        "body": "“Có thể khách mới giảm” cần dữ liệu khách mới và số đơn theo kỳ. “Có thể website lỗi” cần thời điểm lỗi, lượt truy cập và số lượt tạo đơn. Nhờ AI nêu dữ liệu cần có cho từng giả thuyết.\n\nƯu tiên hướng có đóng góp lớn vào mức thay đổi và có dữ liệu để kiểm tra. Một danh sách dài về mùa vụ, đối thủ và quảng cáo chưa hữu ích nếu bạn chưa biết bắt đầu từ đâu."
      },
      {
        "heading": "4. Đừng nhầm thay đổi nhóm khách với tỷ lệ mua hàng giảm",
        "body": "Ví dụ tỷ lệ mua hàng trên điện thoại là 10%, trên máy tính là 30%. Tháng đầu mỗi nhóm có 100 lượt truy cập: có 10 + 30 = 40 lượt tạo đơn trên 200 lượt, tỷ lệ chung là 20%.\n\nTháng sau, điện thoại có 300 lượt, máy tính vẫn 100. Nếu tỷ lệ từng nhóm giữ nguyên, có 30 + 30 = 60 lượt tạo đơn trên 400 lượt, tỷ lệ chung là 15%. Tỷ lệ chung giảm vì có nhiều lượt từ nhóm điện thoại hơn, dù từng nhóm không giảm.\n\nBài thử: đưa cả số lượt truy cập và số lượt tạo đơn cho AI. Hỏi vì sao tỷ lệ chung giảm và kiểm tra xem nó có tự kết luận website hoạt động kém đi không."
      }
    ]
  },
  {
    "id": "storytelling",
    "title": "AI giúp chọn biểu đồ và viết nhận xét từ dữ liệu",
    "group": "Ứng dụng trong phân tích",
    "duration": "3 phút",
    "summary": "AI giúp đề xuất biểu đồ và soạn nhận xét. Một kết quả tốt cần cho người đọc thấy điều gì thay đổi, mức độ ra sao và bước tiếp theo nên xem gì.",
    "details": [
      {
        "heading": "1. Chọn biểu đồ theo câu hỏi",
        "body": "So sánh doanh thu giữa các kênh thường dùng biểu đồ cột; xem biến động qua nhiều tuần thường dùng đường; cần tra vài số chính xác có thể dùng bảng. Đưa câu hỏi và người đọc cho AI trước khi nhờ chọn cách trình bày.\n\nVới hai tháng, một biểu đồ cột so sánh có thể đủ. Hai điểm thời gian chưa đủ để khẳng định một xu hướng dài hạn."
      },
      {
        "heading": "2. Viết quan sát có số liệu làm căn cứ",
        "body": "Ví dụ giả lập: doanh thu giảm từ 1.000 xuống 900 triệu; trực tuyến giảm 180 triệu, cửa hàng tăng 80 triệu. Nhận xét có thể viết: “Tổng giảm 10%; mức giảm tập trung ở trực tuyến và được bù một phần bởi cửa hàng”.\n\nAI có thể rút gọn câu này cho báo cáo. Nhưng “khách chuyển sang cửa hàng” cần thêm dữ liệu hành vi, chưa suy ra được chỉ từ hai dòng doanh thu."
      },
      {
        "heading": "3. Nêu bước tiếp theo phù hợp",
        "body": "Insight có thể hiểu là nhận xét đáng chú ý từ dữ liệu, giúp bạn biết nên tìm hiểu hoặc làm gì tiếp. Ví dụ: “Doanh thu giảm chủ yếu ở kênh trực tuyến; cần xem kênh này ít đơn hơn hay mỗi đơn có giá trị thấp hơn”. Số tiền trung bình mỗi đơn còn được gọi là AOV.\n\nChưa nên đề xuất chuyển hết ngân sách sang cửa hàng chỉ vì doanh thu cửa hàng tăng. Cần biết thêm chi phí, tiền lãi và khả năng phục vụ thêm khách. Hãy nhờ AI nêu cả thông tin cần kiểm tra trước khi đề xuất hành động."
      },
      {
        "heading": "4. Kiểm tra cách thể hiện trước khi chia sẻ",
        "body": "Xem đơn vị, kỳ, phạm vi dữ liệu, trục và nhãn có rõ không. Tỷ lệ từ 10% lên 15% tăng 5 điểm phần trăm, tương đương tăng tương đối 50%; câu viết “tăng 5%” dễ khiến người đọc hiểu sai.\n\nBài thử: đưa một bảng nhỏ và yêu cầu AI viết ba câu gồm quan sát, điều chưa biết và bước tiếp theo. Đối chiếu từng con số, rồi bỏ các câu gán nguyên nhân khi chưa có bằng chứng."
      }
    ]
  },
  {
    "id": "validation",
    "title": "Kiểm tra kết quả AI: số liệu, câu lệnh và nguồn",
    "group": "Chất lượng và trách nhiệm",
    "duration": "3 phút",
    "summary": "Kiểm chứng giúp bạn biết kết quả có thể dùng được không. Hãy đối chiếu chỉ số, phép tính và nhận định bằng dữ liệu hoặc nguồn độc lập.",
    "details": [
      {
        "heading": "1. Kiểm tra đang đo đúng thứ cần đo",
        "body": "100 lượt tạo đơn trên 1.000 lượt truy cập cho tỷ lệ 10%. Đây là tỷ lệ theo lượt truy cập. Nó chưa phải tỷ lệ theo người, vì một người có thể truy cập nhiều lần.\n\nKhi kiểm tra một tỷ lệ, hỏi “đang lấy số nào chia cho số nào, và đếm theo người hay theo lượt?”. Với doanh thu, hỏi “đơn nào được tính, dùng ngày nào và tiền tính bằng đơn vị gì?”."
      },
      {
        "heading": "2. Tính lại từ các thành phần",
        "body": "Kênh A có 10 lượt tạo đơn trên 100 lượt truy cập, tỷ lệ 10%. Kênh B có 90 trên 300 lượt, tỷ lệ 30%. Tỷ lệ chung là tổng lượt tạo đơn chia tổng lượt truy cập: (10 + 90) / (100 + 300) = 25%.\n\nKhông lấy trung bình 10% và 30% thành 20%, vì hai kênh có số lượt khác nhau. Số bị chia gọi là tử số, số chia gọi là mẫu số. Giữ cả hai trong bảng để tính lại được tỷ lệ. Với tổng tiền, kiểm tra mỗi đơn có bị cộng lặp sau khi nối bảng không."
      },
      {
        "heading": "3. Đối chiếu câu lệnh, kết quả và lời giải thích",
        "body": "Code cần là phiên bản đã dùng để tạo kết quả đang xem. Nếu AI sửa câu chữ mà chưa chạy lại phép tính, nhận xét có thể không khớp bảng.\n\nNguồn có thật cũng cần hỗ trợ đúng nhận định. Mở tài liệu để xem kỳ, định nghĩa và nội dung liên quan. Hỏi lại cùng AI có thể giúp làm rõ câu trả lời, nhưng chưa tạo ra căn cứ độc lập."
      },
      {
        "heading": "4. Nếu dùng AI để dự báo, thử với dữ liệu mới",
        "body": "Nếu AI giúp dự báo doanh thu, hãy kiểm tra trên những tháng chưa dùng để xây cách dự báo. Ví dụ: dùng dữ liệu tháng 1–4 để dự báo tháng 5, rồi so dự báo với doanh thu thật tháng 5. Không đưa số thật tháng 5 vào trước rồi coi đó là dự báo đúng.\n\nSo thêm với cách đơn giản như “tháng sau bằng tháng trước” để biết cách mới có tốt hơn không.\n\nBài thử: lấy một bảng AI đã tạo và kiểm tra ba điểm: cách chọn dữ liệu, phép tính và nhận xét. Chúng cần khớp nhau trước khi đưa vào báo cáo."
      }
    ]
  },
  {
    "id": "privacy",
    "title": "Dữ liệu nào có thể đưa vào AI?",
    "group": "Chất lượng và trách nhiệm",
    "duration": "3 phút",
    "summary": "Chuẩn bị dữ liệu cho AI bắt đầu từ việc xác định thông tin cần dùng và môi trường được phép xử lý. Trong học tập, mẫu giả lập thường đủ để thử cách xử lý.",
    "details": [
      {
        "heading": "1. Chỉ đưa phần dữ liệu cần cho nhiệm vụ",
        "body": "JOIN là thao tác nối hai bảng theo cột chung, chẳng hạn mã đơn hàng.\n\nTìm lỗi JOIN cần cấu trúc bảng, code và vài dòng mẫu. Email, số điện thoại hoặc tên khách hàng thường không giúp giải thích lỗi cộng lặp, nên có thể bỏ khỏi thông tin đưa vào.\n\nVới phân tích doanh thu theo kênh, bảng tổng hợp có thể đủ nếu không cần hành vi từng khách. Chọn dữ liệu theo câu hỏi, tránh gửi toàn bộ tệp chỉ vì tiện."
      },
      {
        "heading": "2. Đổi tên chưa chắc đã che được danh tính",
        "body": "Thay tên bằng customer_01 nhưng giữ số điện thoại vẫn có thể nhận diện người. Một tổ hợp địa điểm, thời gian và giao dịch hiếm cũng có thể dễ truy ngược.\n\nKhi cần dữ liệu thật, dùng công cụ và loại tài khoản được tổ chức cho phép. Quyền xem một tệp không tự đồng nghĩa với quyền đưa tệp đó sang mọi dịch vụ AI."
      },
      {
        "heading": "3. Quyền truy cập cần nằm ở hệ thống",
        "body": "Nếu nhân viên chỉ được xem dữ liệu bộ phận mình, trợ lý AI cũng phải được giới hạn như vậy ở phần kết nối dữ liệu. Chỉ viết “đừng hiển thị bộ phận khác” trong câu hỏi chưa đủ để kiểm soát quyền.\n\nBảng tổng hợp vẫn có thể chứa số liệu nhạy cảm, dù chỉ vài dòng. Hãy kiểm tra người nhận có được phép xem những số đó không."
      },
      {
        "heading": "4. Tự tạo dữ liệu mẫu để thử",
        "body": "Dữ liệu giả lập là dữ liệu bạn tự tạo để học hoặc thử lỗi, không phải giao dịch thật. Ví dụ, hai đơn 300 và 200 cùng ba dòng sản phẩm đủ để thử lỗi cộng lặp ra 800 thay vì 500.\n\nNếu lỗi liên quan ngày hoặc ô trống, tạo cả những tình huống đó trong mẫu. Bài thử: lấy tên cột của một bảng quen thuộc, tự tạo năm dòng và nhờ AI phân tích. Ghi rõ là dữ liệu giả lập để không nhầm với số kinh doanh."
      }
    ]
  },
  {
    "id": "automation",
    "title": "Đưa AI vào quy trình phân tích dữ liệu",
    "group": "Quy trình làm việc",
    "duration": "3 phút",
    "summary": "Đặt AI vào một bước cụ thể giúp bạn kiểm soát thông tin đưa vào và kết quả. Bắt đầu với luồng nhỏ, có điều kiện kiểm tra rõ ràng rồi mới mở rộng.",
    "details": [
      {
        "heading": "1. Chọn một việc lặp lại để thử trước",
        "body": "Hãy thử một việc nhỏ, chẳng hạn tóm tắt doanh thu hàng tuần. Bạn biết bảng cần có cột nào, người đọc cần biết gì và cách kiểm tra tổng tiền.\n\nĐừng bắt đầu quá rộng như “phân tích mọi dữ liệu và tự đề xuất chiến lược”. Chọn một kết quả cụ thể sẽ dễ biết AI có giúp được việc hay không."
      },
      {
        "heading": "2. Tách bước tính số và bước viết nhận xét",
        "body": "Có thể đi theo năm bước: lấy dữ liệu → tính chỉ số → kiểm tra số → AI viết bản nháp → người phân tích xem lại. Chỉ số theo dõi mục tiêu, như doanh thu tuần, thường gọi là KPI. Dùng SQL, Python hoặc bảng tính để tính số trước khi viết nhận xét.\n\nNếu tổng sai, kiểm tra dữ liệu và công thức. Nếu số đúng nhưng nhận xét tự gán nguyên nhân, sửa phần hướng dẫn viết. Tách hai việc giúp bạn biết lỗi nằm ở đâu."
      },
      {
        "heading": "3. Dừng khi dữ liệu chưa đạt điều kiện",
        "body": "Báo cáo so hai tuần đầy đủ cần cả hai kỳ có đủ 7 ngày đã nạp. Nếu tuần này mới có 5 ngày, chưa nên diễn giải mức giảm như so hai tuần hoàn chỉnh.\n\nLuồng có thể trả “thiếu hai ngày dữ liệu” và dừng trước bước soạn báo cáo. Nếu cần báo giữa tuần, thiết kế riêng phép so các ngày tương đương và ghi rõ kỳ tạm."
      },
      {
        "heading": "4. Đo hiệu quả và giữ dấu vết",
        "body": "Theo dõi tổng thời gian từ lấy dữ liệu đến duyệt báo cáo, cùng số lỗi phải sửa. AI tạo bản nháp nhanh chưa đủ để kết luận cả quy trình tiết kiệm thời gian.\n\nGiữ thông tin đưa vào, code, hướng dẫn và kết quả tương ứng để có thể xem lại. Bài thử: vẽ luồng báo cáo của bạn bằng năm bước và đánh dấu một điều kiện dừng trước khi đưa số liệu cho AI."
      }
    ]
  },
  {
    "id": "business-dashboard",
    "title": "Từ yêu cầu kinh doanh đến dashboard: Phân tích dữ liệu cùng AI",
    "group": "Quy trình làm việc",
    "duration": "3 phút",
    "summary": "Dashboard là màn hình tổng hợp các chỉ số và biểu đồ để theo dõi công việc. Bài này dùng ví dụ quản lý muốn biết doanh thu giảm ở đâu để hướng dẫn bạn làm từng bước cùng AI.",
    "details": [
      {
        "heading": "1. Chuyển yêu cầu thành câu hỏi có thể đo",
        "body": "Quản lý nói “Làm dashboard doanh thu giúp tôi”. Hãy hỏi họ cần quyết định gì, xem theo ngày hay tháng và quan tâm nhóm nào. Ví dụ, mục tiêu là tìm kênh giảm doanh thu nhiều nhất tháng 5 để chọn hướng phân tích tiếp.\n\nAI có thể giúp soạn câu hỏi làm rõ. Người phân tích dữ liệu (DA) thống nhất với người dùng định nghĩa doanh thu, kỳ, hoàn tiền và thời điểm dữ liệu được cập nhật."
      },
      {
        "heading": "2. Tính và kiểm tra số trước khi dựng màn hình",
        "body": "Xác định dữ liệu cần có, viết truy vấn và kiểm tra tổng theo kỳ. Với ví dụ giả lập, tháng 4 có 1.000 triệu; tháng 5 có 900 triệu. Trực tuyến giảm từ 600 xuống 420, cửa hàng tăng từ 400 lên 480.\n\nAI hỗ trợ viết SQL và giải thích bước tính. Tổng theo kênh phải khớp tổng toàn bộ trước khi dùng bảng làm nguồn cho dashboard."
      },
      {
        "heading": "3. Chọn nội dung và bố cục phục vụ quyết định",
        "body": "Màn hình có thể gồm ba phần: doanh thu tháng, mức tăng giảm so với tháng trước và biểu đồ theo kênh. Nếu cần xem sâu hơn, thêm số đơn và số tiền trung bình mỗi đơn (AOV). Ghi rõ đơn vị và thời gian của từng số.\n\nNhờ AI đề xuất cách sắp xếp dựa trên câu hỏi cần trả lời. Nếu một biểu đồ không giúp tìm kênh giảm doanh thu, có thể bỏ để màn hình dễ đọc hơn."
      },
      {
        "heading": "4. Thử thay tháng và kênh cần xem",
        "body": "Chọn từng kênh, thay kỳ và thử trường hợp không có dữ liệu. Xem các tổng, tỷ lệ và tiêu đề còn khớp không. Không có dữ liệu cần được thể hiện rõ thay vì mặc nhiên coi là doanh thu bằng 0.\n\nBài thử: phác thảo dashboard gồm ba thành phần cho bảng hai kênh, rồi viết một nhận xét và một câu hỏi cần xem tiếp. “Trực tuyến đóng góp vào mức giảm” là quan sát; nguyên nhân vẫn cần dữ liệu bổ sung."
      }
    ]
  },
  {
    "id": "scheduled-reports",
    "title": "AI có thể tự động hóa báo cáo định kỳ như thế nào?",
    "group": "Quy trình làm việc",
    "duration": "3 phút",
    "summary": "Báo cáo tự động cần lịch chạy, dữ liệu đầy đủ và cách xử lý khi có lỗi. AI có thể soạn nội dung từ bảng chỉ số đã kiểm tra trong luồng đó.",
    "details": [
      {
        "heading": "1. Chốt kỳ và thời điểm chạy",
        "body": "Ví dụ, báo cáo chạy sáng thứ Hai cho tuần đã kết thúc. Xác định múi giờ, mốc bắt đầu/kết thúc tuần và thời điểm nguồn hoàn tất nạp dữ liệu.\n\nNếu chạy trước khi dữ liệu sẵn sàng, báo cáo có thể thiếu giao dịch. Lịch chạy phải gắn với điều kiện dữ liệu, thay vì chỉ chọn một giờ thuận tiện."
      },
      {
        "heading": "2. Chuẩn bị bảng số liệu để gửi cho AI",
        "body": "Chuẩn bị một bảng gồm tên chỉ số, giá trị tuần này, tuần trước, mức chênh lệch và đơn vị. Các chỉ số theo dõi mục tiêu còn được gọi là KPI. Dùng SQL, Python hoặc bảng tính để tính số trước, rồi đưa bảng cho AI viết nhận xét.\n\nNếu tuần trước bằng 0, không thể chia để tính phần trăm tăng như thông thường. Hãy quy định cách trình bày, chẳng hạn “tuần trước chưa có doanh thu”. Yêu cầu AI chỉ dùng các số trong bảng và không tự khẳng định nguyên nhân khi thiếu dữ liệu."
      },
      {
        "heading": "3. Xem lại bản nháp và tránh gửi trùng",
        "body": "Ban đầu, hãy lưu bản nháp để người phụ trách đọc và duyệt. Hệ thống cũng cần ghi lại báo cáo nào đã tạo hoặc gửi cho từng tuần.\n\nVí dụ: lần gọi AI phản hồi quá chậm nên chương trình thử lại. Nếu không theo dõi, có thể tạo hai báo cáo rồi gửi cả hai. Dùng một mã riêng cho từng loại báo cáo và tuần, chẳng hạn doanh-thu-2026-tuan-40, để tránh trùng."
      },
      {
        "heading": "4. Có kết quả rõ khi quy trình thất bại",
        "body": "Thiếu dữ liệu, nguồn không truy cập được hoặc tổng không khớp đều cần cách xử lý. Có thể dừng, ghi lý do và chuyển cho người phụ trách kiểm tra.\n\nBài thử: thiết kế báo cáo tuần trên giấy, gồm kỳ, thông tin đưa vào, điều kiện kiểm tra và nơi lưu bản nháp. Thử tình huống thiếu hai ngày hoặc AI chưa trả kết quả; quy trình nên báo trạng thái thay vì phát hành nội dung không đầy đủ."
      }
    ]
  },
  {
    "id": "analyst-assistant",
    "title": "Xây dựng một trợ lý AI phân tích dữ liệu đơn giản",
    "group": "Quy trình làm việc",
    "duration": "3 phút",
    "summary": "Một trợ lý đầu tiên có thể chỉ nhận câu hỏi, dùng bảng chỉ số đã kiểm tra và trả bản nháp nhận xét. Phạm vi nhỏ giúp bạn hoàn thành và đánh giá được sản phẩm.",
    "details": [
      {
        "heading": "1. Chọn một nhiệm vụ đủ nhỏ",
        "body": "Ví dụ: trợ lý trả lời câu hỏi về doanh thu theo tháng và kênh từ một bảng tổng hợp. Đầu vào gồm câu hỏi, bảng chỉ số theo dõi mục tiêu (KPI) và định nghĩa doanh thu. Đầu ra gồm câu trả lời, con số làm căn cứ và thông tin còn thiếu.\n\nBắt đầu bằng dữ liệu giả lập hoặc được phép sử dụng. Chưa cần cho trợ lý truy cập mọi bảng để kiểm tra ý tưởng này có ích không."
      },
      {
        "heading": "2. Chuẩn bị ba phần của trợ lý",
        "body": "Chuẩn bị ba phần. Dữ liệu: bảng doanh thu có tháng, kênh và đơn vị tiền. Hướng dẫn: chỉ dùng số đã cho, nói rõ tháng và không đoán nguyên nhân. Giao diện: nơi người dùng nhập câu hỏi và đọc kết quả.\n\nBạn có thể thử trong cửa sổ trò chuyện trước. Khi cách trả lời đã phù hợp, mới kết nối bằng API — cách để chương trình tự gửi yêu cầu tới AI và nhận kết quả."
      },
      {
        "heading": "3. Thử cả câu hỏi trả lời được và chưa trả lời được",
        "body": "“Kênh nào giảm nhiều nhất?” có thể trả lời từ bảng doanh thu theo kênh. “Quảng cáo nào gây giảm?” cần thêm dữ liệu chiến dịch. Trợ lý nên nêu phần thiếu thay vì tạo một nguyên nhân.\n\nThử thêm câu hỏi không nêu kỳ, dữ liệu không có tháng yêu cầu và hai kênh cùng đóng góp mức giảm. Chuẩn bị đáp án mong đợi để xem trợ lý xử lý nhất quán không."
      },
      {
        "heading": "4. Mở rộng khi bản nhỏ đã dùng được",
        "body": "Khi kết quả ổn định, có thể bổ sung công cụ đọc dữ liệu mới hoặc tìm tài liệu KPI. Mỗi khả năng mới cần kiểm tra quyền, thông tin đưa vào và trường hợp lỗi tương ứng.\n\nSản phẩm học tập cuối bài: một bảng mẫu, một bộ hướng dẫn, năm câu hỏi kiểm tra và ba câu trả lời đã đối chiếu. Ghi lại một lỗi và cách sửa để hồ sơ dự án thể hiện được cả quá trình xây dựng lẫn đánh giá trợ lý."
      }
    ]
  }
]
