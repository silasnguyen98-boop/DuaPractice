export type KnowledgeTopic = {
 id: string; language: 'python' | 'sql'; title: string; category: string; intro: string
 sections: {title: string; text: string}[]; example: string; notes: string[]
 stages: {title: string; detail: string}[]
}
type StatisticsLesson = {
  id: string; title: string; category: string; intro: string
  business: string; concept: string; practical: string; example: string; notes: string[]
}

const statisticsLessons: StatisticsLesson[] = [
  {
    id: 'statistics-01', title: 'Vì sao Data Analyst cần hiểu xác suất thống kê?', category: 'Nền tảng thống kê',
    intro: 'Thống kê giúp Data Analyst mô tả dữ liệu, định lượng sự không chắc chắn và đưa ra kết luận có căn cứ thay vì chỉ nhìn vào một con số.',
    business: 'Doanh thu tháng này tăng 8%. Mức tăng đó phản ánh xu hướng thật hay chỉ là dao động ngẫu nhiên của một tháng?',
    concept: 'Thống kê mô tả tóm tắt dữ liệu đã quan sát; thống kê suy luận dùng mẫu để ước lượng hoặc kiểm định về tổng thể. Một chỉ số đơn lẻ không cho biết cách lấy mẫu, độ biến động, cỡ mẫu hay yếu tố gây nhiễu.',
    practical: 'Bảng doanh thu dưới đây cho thấy tổng và trung bình tuần. Đây là mô tả dữ liệu, chưa chứng minh doanh thu tương lai sẽ tiếp tục tăng.',
    example: "revenue_by_week = [980, 1010, 995, 1215]\nmean_revenue = sum(revenue_by_week) / len(revenue_by_week)\nchange = (revenue_by_week[-1] - revenue_by_week[0]) / revenue_by_week[0]\nprint(f'Trung bình tuần: {mean_revenue:.0f}')\nprint(f'Thay đổi từ tuần đầu đến tuần cuối: {change:.1%}')",
    notes: ['Không kết luận nguyên nhân từ một thống kê mô tả.', 'Luôn xem định nghĩa chỉ số, khoảng thời gian, cỡ mẫu và độ biến động.'],
  },
  {
    id: 'statistics-02', title: 'Population, Sample và Sampling Bias: Dữ liệu có đại diện cho thực tế?', category: 'Nền tảng thống kê',
    intro: 'Kết luận từ mẫu chỉ đáng tin khi biết mẫu được lấy từ đâu và nhóm nào có thể đã bị bỏ sót.',
    business: 'Khảo sát trong ứng dụng cho thấy 90% khách hàng hài lòng. Con số đó đại diện cho cả khách hàng, hay chỉ những người vẫn dùng ứng dụng?',
    concept: 'Population là toàn bộ đối tượng cần hiểu; sample là phần được quan sát. Lấy mẫu ngẫu nhiên đơn, phân tầng và cụm có mục đích khác nhau. Sampling bias xuất hiện khi cơ hội được chọn liên quan đến đặc điểm đang đo; tăng cỡ mẫu không tự sửa được thiên lệch này.',
    practical: 'Khảo sát tự nguyện chỉ thu được phản hồi của người chủ động trả lời. So sánh thành phần người trả lời với toàn bộ khách hàng trước khi khái quát kết quả.',
    example: "customers = [\n    {'segment': 'active', 'satisfied': 1},\n    {'segment': 'active', 'satisfied': 1},\n    {'segment': 'active', 'satisfied': 0},\n    {'segment': 'churned', 'satisfied': 0},\n]\nrespondents = [customer for customer in customers if customer['segment'] == 'active']\nresponse_rate = sum(customer['satisfied'] for customer in respondents) / len(respondents)\npopulation_rate = sum(customer['satisfied'] for customer in customers) / len(customers)\nprint(f'Tỷ lệ trong nhóm phản hồi: {response_rate:.0%}')\nprint(f'Tỷ lệ trong toàn bộ nhóm minh họa: {population_rate:.0%}')",
    notes: ['Mẫu lớn nhưng tự chọn vẫn có thể thiên lệch.', 'Ghi rõ khung lấy mẫu, tỷ lệ không phản hồi và nhóm bị loại.'],
  },
  {
    id: 'statistics-03', title: 'Các loại dữ liệu và cách đo lường trong thống kê', category: 'Nền tảng thống kê',
    intro: 'Kiểu dữ liệu và thang đo quyết định phép tổng hợp, biểu đồ và kiểm định nào có ý nghĩa.',
    business: 'Mã gói dịch vụ 1, 2, 3 là số để tính trung bình, hay chỉ là nhãn cho các nhóm Basic, Plus, Premium?',
    concept: 'Categorical gồm nominal không có thứ tự và ordinal có thứ tự. Numerical gồm discrete đếm được và continuous đo trên một khoảng. Thang interval có khoảng cách nhưng không có số 0 tuyệt đối; ratio có số 0 mang ý nghĩa không có đại lượng. Mã số danh mục không biến dữ liệu phân loại thành số đo.',
    practical: 'Phân loại vài trường thường gặp trước khi chọn thống kê: doanh thu là ratio liên tục, số đơn là ratio rời rạc, mức hài lòng là ordinal, kênh mua là nominal.',
    example: "columns = {\n    'channel': ('categorical', 'nominal'),\n    'satisfaction': ('categorical', 'ordinal'),\n    'order_count': ('numerical', 'discrete, ratio'),\n    'revenue': ('numerical', 'continuous, ratio'),\n}\nfor name, (kind, scale) in columns.items():\n    print(f'{name}: {kind} | {scale}')",
    notes: ['Không tính mean trên mã danh mục tùy tiện.', 'Kiểm tra đơn vị, cách mã hóa và ý nghĩa của giá trị 0.'],
  },
  {
    id: 'statistics-04', title: 'Mean, Median, Mode: Khi nào giá trị trung bình đánh lừa bạn?', category: 'Thống kê mô tả & EDA',
    intro: 'Mean, median và mode trả lời những câu hỏi khác nhau; phân phối và outlier quyết định chỉ số nào đại diện tốt hơn.',
    business: 'Lương trung bình công ty cao nhưng phần lớn nhân viên nhận thấp hơn nhiều: một vài mức lương rất cao đã kéo mean lên.',
    concept: 'Mean dùng mọi giá trị nhưng nhạy với ngoại lệ. Median là giá trị giữa sau khi sắp xếp nên vững hơn với phân phối lệch. Mode là giá trị hoặc nhóm xuất hiện thường xuyên nhất, hữu ích cả với dữ liệu phân loại.',
    practical: 'Với dãy lương minh họa, so sánh mean và median trước khi mô tả mức lương điển hình; báo cáo thêm phân vị nếu cần hiểu chênh lệch.',
    example: "from statistics import mean, median, multimode\nsalaries_million = [12, 13, 14, 15, 16, 80]\nprint('Mean:', mean(salaries_million))\nprint('Median:', median(salaries_million))\nprint('Mode:', multimode(salaries_million))",
    notes: ['Median không thay thế mean trong mọi bài toán; tổng doanh thu vẫn cần phép cộng.', 'Nêu rõ đơn vị phân tích và cách xử lý giá trị thiếu.'],
  },
  {
    id: 'statistics-05', title: 'Variance, Standard Deviation và Percentile: Dữ liệu biến động như thế nào?', category: 'Thống kê mô tả & EDA',
    intro: 'Đo độ phân tán để biết một mức trung bình có đại diện cho dữ liệu hay đang che giấu chênh lệch lớn.',
    business: 'Hai cửa hàng có cùng doanh thu trung bình nhưng một cửa hàng biến động mạnh hơn, khiến kế hoạch tồn kho rủi ro hơn.',
    concept: 'Variance là trung bình bình phương độ lệch; standard deviation đưa độ phân tán về cùng đơn vị với dữ liệu. Percentile chia vị trí trong phân phối; IQR = Q3 − Q1 và quy tắc 1.5 × IQR giúp gắn cờ điểm xa, không tự chứng minh đó là lỗi.',
    practical: 'Dùng tứ phân vị, IQR và các ngưỡng ngoại lệ để rà soát đơn hàng. Histogram cho hình dạng phân phối; boxplot tóm tắt median, quartile và điểm bị gắn cờ.',
    example: "from statistics import median, pstdev, quantiles\norders = [18, 20, 21, 22, 24, 25, 27, 29, 31, 120]\nq1, q2, q3 = quantiles(orders, n=4, method='inclusive')\niqr = q3 - q1\nlower_fence = q1 - 1.5 * iqr\nupper_fence = q3 + 1.5 * iqr\noutliers = [value for value in orders if value < lower_fence or value > upper_fence]\nprint(f'Median: {median(orders)}, population SD: {pstdev(orders):.1f}')\nprint(f'Q1: {q1:.1f}, Q3: {q3:.1f}, IQR: {iqr:.1f}')\nprint('Điểm cần rà soát:', outliers)",
    notes: ['Phân biệt độ lệch chuẩn mẫu và tổng thể.', 'Ngoại lệ có thể là giao dịch thật; kiểm tra nguồn và quy tắc nghiệp vụ trước khi loại.'],
  },
  {
    id: 'statistics-06', title: 'Correlation và Causation: Tương quan có phải quan hệ nhân quả?', category: 'Thống kê mô tả & EDA',
    intro: 'Tương quan đo mức độ hai biến cùng thay đổi, nhưng không tự cho biết biến nào gây ra biến nào.',
    business: 'Ngân sách quảng cáo và doanh thu cùng tăng. Có thể quảng cáo tạo thêm doanh thu, nhưng mùa cao điểm cũng có thể làm cả hai tăng.',
    concept: 'Pearson đo quan hệ tuyến tính trên số; Spearman đo tương quan thứ hạng và phù hợp hơn với quan hệ đơn điệu hoặc dữ liệu thứ bậc. Biến gây nhiễu, chiều nhân quả ngược và Simpson’s paradox có thể làm kết luận gộp khác kết luận theo nhóm.',
    practical: 'Tính Pearson cho dữ liệu minh họa để thấy một con số tương quan. Muốn ước lượng tác động quảng cáo, cần thiết kế thử nghiệm hoặc phương pháp nhân quả và kiểm soát giả định.',
    example: "from math import sqrt\nad_spend = [1, 2, 3, 4, 5]\nsales = [12, 15, 19, 21, 26]\nmean_x = sum(ad_spend) / len(ad_spend)\nmean_y = sum(sales) / len(sales)\ncovariance = sum((x - mean_x) * (y - mean_y) for x, y in zip(ad_spend, sales))\nstd_x = sqrt(sum((x - mean_x) ** 2 for x in ad_spend))\nstd_y = sqrt(sum((y - mean_y) ** 2 for y in sales))\npearson_r = covariance / (std_x * std_y)\nprint(f'Pearson r = {pearson_r:.3f}')\nprint('Tương quan không xác nhận tác động nhân quả.')",
    notes: ['Một tương quan cao vẫn có thể do xu hướng thời gian hoặc biến thứ ba.', 'Luôn vẽ dữ liệu và kiểm tra nhóm con trước khi diễn giải hệ số.'],
  },
  {
    id: 'statistics-07', title: 'Xác suất cơ bản và xác suất có điều kiện trong Data Analytics', category: 'Xác suất & phân phối',
    intro: 'Xác suất biểu diễn mức độ bất định; xác suất có điều kiện cập nhật đánh giá khi biết thêm thông tin.',
    business: 'Một cảnh báo gian lận có độ chính xác cao nghe có vẻ thuyết phục, nhưng cần biết tỷ lệ gian lận nền và xác suất giao dịch thật sự gian lận khi có cảnh báo.',
    concept: 'Với biến cố A và B, P(A|B) = P(A ∩ B)/P(B). Biến cố độc lập thỏa P(A ∩ B) = P(A)P(B). Quy tắc Bayes đảo điều kiện bằng cách kết hợp xác suất nền và độ chính xác của tín hiệu.',
    practical: 'Tính xác suất gian lận khi hệ thống gắn cờ, giả sử tỷ lệ gian lận 1%, độ nhạy 90% và tỷ lệ dương tính giả 5%.',
    example: "fraud_rate = 0.01\nsensitivity = 0.90\nfalse_positive_rate = 0.05\nflag_rate = sensitivity * fraud_rate + false_positive_rate * (1 - fraud_rate)\nfraud_given_flag = sensitivity * fraud_rate / flag_rate\nprint(f'P(gian lận | bị gắn cờ) = {fraud_given_flag:.1%}')",
    notes: ['Không nhầm P(A|B) với P(B|A).', 'Dùng xác suất nền từ đúng population và khoảng thời gian triển khai.'],
  },
  {
    id: 'statistics-08', title: 'Normal, Binomial và Poisson: Những phân phối DA cần biết', category: 'Xác suất & phân phối',
    intro: 'Phân phối mô tả các giá trị có thể xảy ra và xác suất tương ứng, từ đó giúp mô hình hóa câu hỏi kinh doanh.',
    business: 'Số đơn thành công trong 20 lượt truy cập khác với số ticket hỗ trợ đến trong một giờ; chọn phân phối theo cơ chế sinh dữ liệu.',
    concept: 'Normal liên tục, đối xứng quanh mean; Binomial đếm số thành công trong n phép thử độc lập cùng xác suất p; Poisson đếm sự kiện trong một khoảng với tốc độ trung bình λ. Đây là mô hình với giả định, không phải nhãn mặc định cho mọi dữ liệu.',
    practical: 'Tính xác suất có đúng 2 đơn thành công trong 5 lượt với tỷ lệ chuyển đổi 20% bằng Binomial; ví dụ Poisson bên dưới tính xác suất đúng 2 ticket khi λ = 3.',
    example: "from math import comb, exp, factorial\nn, p, successes = 5, 0.20, 2\nbinomial_probability = comb(n, successes) * p ** successes * (1 - p) ** (n - successes)\nrate, arrivals = 3, 2\npoisson_probability = exp(-rate) * rate ** arrivals / factorial(arrivals)\nprint(f'Binomial P(X=2): {binomial_probability:.3f}')\nprint(f'Poisson P(X=2): {poisson_probability:.3f}')\nprint('Normal thường mô tả biến liên tục quanh một giá trị trung tâm.')",
    notes: ['Kiểm tra tính độc lập và tính ổn định của xác suất hoặc tốc độ.', 'Dữ liệu đếm có nhiều số 0 hay phương sai lớn hơn mean có thể không phù hợp Poisson cơ bản.'],
  },
  {
    id: 'statistics-09', title: 'Central Limit Theorem: Vì sao chúng ta có thể suy luận từ mẫu?', category: 'Xác suất & phân phối',
    intro: 'Phân phối của trung bình mẫu thường gần normal khi cỡ mẫu đủ lớn và các điều kiện phù hợp, ngay cả khi dữ liệu gốc không normal.',
    business: 'Một mẫu đơn hàng có phân phối lệch; vì sao khoảng tin cậy cho doanh thu trung bình vẫn thường dựa trên phân phối lấy mẫu?',
    concept: 'Luật số lớn nói trung bình mẫu hội tụ về kỳ vọng khi số quan sát tăng. Central Limit Theorem mô tả hình dạng phân phối lấy mẫu của trung bình; standard error xấp xỉ s/√n đo độ dao động giữa các trung bình mẫu, không phải độ phân tán từng quan sát.',
    practical: 'Chia dữ liệu đơn hàng thành các mẫu minh họa và xem trung bình từng mẫu ổn định hơn dữ liệu thô như thế nào. Với dữ liệu đuôi nặng, phụ thuộc hoặc cỡ mẫu nhỏ, cần thận trọng.',
    example: "from random import Random\nfrom statistics import mean, stdev\nfrom math import sqrt\nrandom = Random(42)\nfor n in [1, 5, 30, 100]:\n    sample_means = [mean(random.expovariate(1) for _ in range(n)) for _ in range(1200)]\n    print(f'n={n:3}: mean các mean={mean(sample_means):.3f}, SD các mean={stdev(sample_means):.3f}, SE lý thuyết={1/sqrt(n):.3f}')\nprint('Tổng thể Exponential(1): mean=1, SD=1; CLT nói về phân phối mean, không biến dữ liệu gốc thành Normal.')",
    notes: ['Không có một ngưỡng cỡ mẫu áp dụng cho mọi phân phối.', 'Các quan sát phụ thuộc hoặc mẫu thiên lệch không được CLT tự khắc phục.'],
  },
  {
    id: 'statistics-10', title: 'Confidence Interval: Khoảng tin cậy 95% thực sự có nghĩa gì?', category: 'Thống kê suy luận & kiểm định',
    intro: 'Khoảng tin cậy thể hiện độ bất định của một ước lượng theo phương pháp lấy mẫu và các giả định đã chọn.',
    business: 'Tỷ lệ chuyển đổi quan sát là 12%. Khoảng tin cậy giúp phân biệt độ chính xác của ước lượng này giữa 100 và 10.000 lượt truy cập.',
    concept: 'Khoảng tin cậy 95% là quy trình mà nếu lặp lấy mẫu và dựng khoảng theo cùng phương pháp, khoảng 95% các khoảng sẽ bao phủ tham số thật. Không diễn giải thành xác suất 95% tham số cố định nằm trong khoảng đã tính. Margin of error phụ thuộc standard error và mức tin cậy.',
    practical: 'Dùng xấp xỉ normal cho một tỷ lệ: p̂ ± 1.96 × √(p̂(1−p̂)/n). Với mẫu nhỏ hoặc tỷ lệ sát 0/1, nên chọn phương pháp khoảng phù hợp hơn.',
    example: "from math import sqrt\nconversions, visitors = 120, 1000\nrate = conversions / visitors\nmargin = 1.96 * sqrt(rate * (1 - rate) / visitors)\nprint(f'Tỷ lệ chuyển đổi: {rate:.1%}')\nprint(f'CI 95% xấp xỉ: [{rate - margin:.1%}, {rate + margin:.1%}]')\nprint('Đây là xấp xỉ Wald; cần kiểm tra điều kiện và chọn phương pháp phù hợp.')",
    notes: ['Khoảng hẹp hơn không đồng nghĩa với ít bias hơn.', 'Nêu phương pháp, cỡ mẫu, mức tin cậy và đơn vị phân tích.'],
  },
  {
    id: 'statistics-11', title: 'Hypothesis Testing và P-value: Khi nào một kết quả có ý nghĩa thống kê?', category: 'Thống kê suy luận & kiểm định',
    intro: 'Kiểm định giả thuyết đánh giá mức độ tương thích của dữ liệu với giả thuyết không, chứ không đo xác suất giả thuyết đó đúng.',
    business: 'Một chiến dịch cho thấy chuyển đổi tăng. P-value giúp định lượng mức độ bất thường của kết quả nếu không có khác biệt thật, dưới mô hình kiểm định.',
    concept: 'H0 là giả thuyết không khác biệt; H1 là phương án cần đánh giá. P-value là xác suất quan sát kết quả hiện tại hoặc cực đoan hơn khi H0 và giả định mô hình đúng. Type I error bác bỏ H0 đúng; Type II error bỏ lỡ hiệu ứng. Ý nghĩa thống kê khác ý nghĩa thực tiễn.',
    practical: 'Chuyển p-value sang bối cảnh: p nhỏ không cho biết hiệu ứng lớn, không sửa thiết kế sai và không thay thế khoảng tin cậy hay quyết định kinh doanh.',
    example: "from math import erfc, sqrt\nz_score = 2.17\np_value_two_sided = erfc(abs(z_score) / sqrt(2))\nalpha = 0.05\nprint(f'p-value hai phía xấp xỉ: {p_value_two_sided:.4f}')\nprint('Bác bỏ H0 ở mức 0.05:', p_value_two_sided < alpha)\nprint('P-value không phải xác suất H0 đúng.')",
    notes: ['Chọn giả thuyết, chiều kiểm định và mức alpha trước khi xem kết quả.', 'Báo cáo effect size và khoảng tin cậy; lưu ý kiểm định nhiều lần.'],
  },
  {
    id: 'statistics-12', title: 'T-test, Chi-square, ANOVA: Chọn phép kiểm định thống kê nào?', category: 'Thống kê suy luận & kiểm định',
    intro: 'Chọn kiểm định theo câu hỏi, kiểu biến, cấu trúc mẫu và các giả định; không chọn chỉ vì tên kiểm định quen thuộc.',
    business: 'Cần so sánh giá trị đơn hàng giữa hai nhóm, tỷ lệ mua hàng giữa các kênh, hay doanh thu trung bình giữa bốn chiến dịch?',
    concept: 'T-test thường so sánh trung bình giữa hai nhóm; Chi-square kiểm tra liên hệ giữa biến phân loại hoặc độ phù hợp tần suất; ANOVA so sánh trung bình từ ba nhóm trở lên. Kiểm tra độc lập, phân phối phần dư, phương sai và cách lấy mẫu; ANOVA có kết quả tổng thể không chỉ ra cặp nhóm nào khác.',
    practical: 'Bắt đầu bằng cách viết rõ outcome và nhóm so sánh. Với outcome nhị phân, so sánh tỷ lệ có thể phù hợp hơn t-test; với quan sát ghép cặp cần phương pháp phản ánh cặp.',
    example: "from scipy import stats\nA = [18, 20, 19, 21]\nB = [22, 23, 21, 24]\nC = [19, 18, 20, 19]\nt = stats.ttest_ind(A, B, equal_var=False)\nprint(f'Welch t={t.statistic:.3f}, p hai phía={t.pvalue:.4f}')\nf = stats.f_oneway(A, B, C)\nprint(f'ANOVA F={f.statistic:.3f}, p={f.pvalue:.4f}')\nchi2, p, df, expected = stats.chi2_contingency([[30, 20], [20, 30]], correction=False)\nprint(f'Chi-square không continuity correction: chi2={chi2:.3f}, df={df}, p={p:.4f}')\nprint('Expected:', expected.tolist())\nprint('Mỗi phép kiểm định cần giả định riêng; các bảng này là ví dụ minh họa, không thay bước kiểm tra thiết kế.')",
    notes: ['Không dùng nhiều t-test thay cho một phân tích nhiều nhóm mà bỏ qua multiple testing.', 'Nếu giả định không phù hợp, xem xét biến thể robust, phi tham số hoặc mô hình khác.'],
  },
  {
    id: 'statistics-13', title: 'Sample Size và Statistical Power: Bao nhiêu dữ liệu là đủ?', category: 'Thống kê suy luận & kiểm định',
    intro: 'Cỡ mẫu nên được tính từ hiệu ứng cần phát hiện, độ biến động, mức alpha và power mong muốn trước khi chạy thử nghiệm.',
    business: 'Một test ít người dùng không tìm thấy khác biệt. Điều đó có thể là không có tác động, hoặc test chưa đủ power để nhận ra tác động đáng giá.',
    concept: 'Power = 1 − β là xác suất phát hiện hiệu ứng đã định khi hiệu ứng tồn tại. Effect size và minimum detectable effect (MDE) mô tả mức thay đổi quan trọng; hiệu ứng nhỏ hơn thường cần mẫu lớn hơn. Cỡ mẫu còn phụ thuộc alpha, power, phương sai và thiết kế.',
    practical: 'Với hai tỷ lệ gần nhau, lập kế hoạch sơ bộ theo xấp xỉ normal. Tính riêng từng nhóm, rồi dùng công cụ chuyên dụng để xác nhận giả định trước khi triển khai.',
    example: "from math import ceil\nfrom statistics import NormalDist\nbase_rate = 0.10\nminimum_detectable_effect = 0.02\nalpha = 0.05\npower = 0.80\nz_alpha = NormalDist().inv_cdf(1 - alpha / 2)\nz_power = NormalDist().inv_cdf(power)\nvariance_sum = base_rate * (1 - base_rate) + (base_rate + minimum_detectable_effect) * (1 - base_rate - minimum_detectable_effect)\nper_group = ceil((z_alpha + z_power) ** 2 * variance_sum / minimum_detectable_effect ** 2)\nprint(f'Cỡ mẫu sơ bộ: {per_group} mỗi nhóm')\nprint('Xấp xỉ hai tỷ lệ độc lập; cần xác nhận bằng công cụ thiết kế thử nghiệm.')",
    notes: ['Không dừng thu thập dữ liệu sớm chỉ vì p-value vừa vượt ngưỡng.', 'Tính thêm hao hụt, phân cụm, nhiều metric và thời gian bao phủ chu kỳ kinh doanh.'],
  },
  {
    id: 'statistics-14', title: 'A/B Testing: Làm sao biết phiên bản nào thực sự hiệu quả hơn?', category: 'Ứng dụng thống kê trong Data Analytics',
    intro: 'A/B test dùng phân bổ ngẫu nhiên để ước lượng tác động của một thay đổi lên metric đã định trước.',
    business: 'Phiên bản checkout mới tăng tỷ lệ chuyển đổi quan sát từ 12% lên 13.2%. Có đủ bằng chứng và giá trị để triển khai không?',
    concept: 'Xác định population, đơn vị ngẫu nhiên hóa, KPI chính, MDE, alpha, power và thời lượng trước khi chạy. Phân nhóm ngẫu nhiên giúp cân bằng yếu tố gây nhiễu kỳ vọng; cần kiểm tra sample ratio mismatch, tracking và guardrail metrics. Kết quả thống kê là một phần của quyết định triển khai.',
    practical: 'Ví dụ tính z-test hai tỷ lệ với phương sai gộp và p-value hai phía. Phép tính minh họa không thay cho kiểm tra chất lượng dữ liệu, khoảng tin cậy, phân cụm hoặc kế hoạch thử nghiệm.',
    example: "from math import erfc, sqrt\ncontrol_conversions, control_n = 120, 1000\ntreatment_conversions, treatment_n = 132, 1000\np_control = control_conversions / control_n\np_treatment = treatment_conversions / treatment_n\npooled = (control_conversions + treatment_conversions) / (control_n + treatment_n)\nstandard_error = sqrt(pooled * (1 - pooled) * (1 / control_n + 1 / treatment_n))\nz_score = (p_treatment - p_control) / standard_error\np_value = erfc(abs(z_score) / sqrt(2))\nprint(f'Chênh lệch: {p_treatment - p_control:.1%}')\nprint(f'z = {z_score:.3f}; p-value hai phía ≈ {p_value:.3f}')\nprint('Đọc cùng khoảng tin cậy, guardrail và mức tác động kinh doanh.')",
    notes: ['P-value 0.03 không tự động có nghĩa nên triển khai; xem effect size, rủi ro và chi phí.', 'Không đổi KPI, nhóm hoặc thời điểm kết thúc sau khi xem kết quả mà không điều chỉnh phương pháp.'],
  },
  {
    id: 'statistics-15', title: 'Regression Analysis: Tìm hiểu yếu tố ảnh hưởng đến kết quả kinh doanh', category: 'Ứng dụng thống kê trong Data Analytics',
    intro: 'Hồi quy mô tả mối liên hệ giữa outcome và predictors, đồng thời giúp dự đoán trong phạm vi dữ liệu phù hợp.',
    business: 'Ước lượng doanh thu theo ngân sách quảng cáo có thể hỗ trợ lập kế hoạch, nhưng hệ số hồi quy không tự chứng minh quảng cáo gây ra doanh thu.',
    concept: 'Hồi quy tuyến tính đơn mô hình hóa y = β₀ + β₁x + ε. Hệ số là thay đổi trung bình dự đoán của y khi x tăng một đơn vị trong mô hình; R² mô tả phần biến thiên được mô hình giải thích. Kiểm tra residuals, tuyến tính, phương sai, độc lập và điểm ảnh hưởng; suy luận nhân quả cần thiết kế và giả định bổ sung.',
    practical: 'Ước lượng đường thẳng bình phương tối thiểu cho dữ liệu doanh thu minh họa, tính R² và xem residual. Không ngoại suy xa khỏi vùng dữ liệu quan sát.',
    example: "ad_spend = [1, 2, 3, 4, 5]\nrevenue = [10, 13, 14, 19, 21]\nmean_x = sum(ad_spend) / len(ad_spend)\nmean_y = sum(revenue) / len(revenue)\nslope = sum((x - mean_x) * (y - mean_y) for x, y in zip(ad_spend, revenue)) / sum((x - mean_x) ** 2 for x in ad_spend)\nintercept = mean_y - slope * mean_x\npredicted = [intercept + slope * x for x in ad_spend]\nresiduals = [actual - estimate for actual, estimate in zip(revenue, predicted)]\ntotal_sum_squares = sum((value - mean_y) ** 2 for value in revenue)\nr_squared = 1 - sum(error ** 2 for error in residuals) / total_sum_squares\nprint(f'Intercept: {intercept:.2f}; slope: {slope:.2f}')\nprint(f'R²: {r_squared:.3f}')\nprint('Residuals:', [round(error, 2) for error in residuals])",
    notes: ['R² cao không chứng minh mô hình đúng hoặc quan hệ nhân quả.', 'Kiểm tra residuals và hiệu năng trên dữ liệu chưa dùng để fit; cân nhắc biến gây nhiễu.'],
  },
]

const statisticsTopics: KnowledgeTopic[] = statisticsLessons.map(lesson => ({
  id: lesson.id,
  language: 'python',
  title: lesson.title,
  category: lesson.category,
  intro: lesson.intro,
  sections: [
    { title: 'Bài toán kinh doanh', text: lesson.business },
    { title: 'Khái niệm thống kê', text: lesson.concept },
    { title: 'Ví dụ thực tế', text: lesson.practical },
  ],
  example: lesson.example,
  notes: lesson.notes,
  stages: [],
}))

export const knowledgeTopics: KnowledgeTopic[] = [
  {
    "id": "python-intro",
    "language": "python",
    "title": "Tổng quan Python cho Data Analyst",
    "category": "Nền tảng · Python cho DA",
    "intro": "Python là gì, DA dùng Python để làm gì và Python phối hợp với SQL, Excel, BI ra sao?",
    "sections": [
      {
        "title": "Python là gì?",
        "text": "Python là ngôn ngữ lập trình đa dụng. Bạn viết các instruction để máy tính xử lý dữ liệu, tính toán hoặc tự động hóa một công việc. Code thường được chạy trong script, notebook hoặc môi trường thực hành."
      },
      {
        "title": "Vì sao DA cần Python?",
        "text": "Python hữu ích khi cần làm sạch nhiều file, phân tích tùy biến, thống kê, trực quan hóa hoặc lặp lại một quy trình. pandas xử lý bảng, NumPy xử lý mảng số, Matplotlib tạo biểu đồ."
      },
      {
        "title": "Python trong quy trình phân tích",
        "text": "Dùng SQL lấy dữ liệu từ database, Python kiểm tra và phân tích dataset, rồi đưa kết quả sang báo cáo hoặc BI. Không cần dùng Python cho mọi bài toán; chọn công cụ theo dữ liệu và đầu ra."
      },
      {
        "title": "Lộ trình học",
        "text": "Học biến, cấu trúc dữ liệu, điều kiện và hàm trước; sau đó đọc file, làm sạch bằng pandas, tổng hợp KPI và trình bày kết quả. Machine Learning là phần mở rộng sau nền tảng phân tích."
      }
    ],
    "example": "# Câu hỏi: doanh thu của các đơn đã thanh toán là bao nhiêu?\norders = [{'amount': 300, 'status': 'đã thanh toán'},\n          {'amount': 200, 'status': 'đã thanh toán'},\n          {'amount': 100, 'status': 'chờ thanh toán'}]\nrevenue = sum(order['amount'] for order in orders\n              if order['status'] == 'đã thanh toán')\nprint(revenue)  # 500",
    "notes": [
      "Chưa cần nhớ cú pháp ở bài tổng quan; hãy hiểu câu hỏi và dữ liệu cần xử lý.",
      "Python là ngôn ngữ; pandas và NumPy là thư viện được import khi cần."
    ],
    "stages": []
  },
  {
    "id": "python-values",
    "language": "python",
    "title": "Biến, data type & operator",
    "category": "Nền tảng · Python cho DA",
    "intro": "Hiểu giá trị, kiểu dữ liệu và phép toán trước khi viết logic phân tích.",
    "sections": [
      {
        "title": "Variable & data type",
        "text": "Dấu = gán một giá trị cho tên biến. int là số nguyên, float là số thực, str là chuỗi, bool là True/False; None biểu diễn chưa có giá trị."
      },
      {
        "title": "Numeric operator",
        "text": "+ - * / thực hiện phép tính; / trả số thực, // là floor division, % lấy phần dư, ** là lũy thừa. Thứ tự phép tính có thể làm đổi kết quả; dùng ngoặc khi cần."
      },
      {
        "title": "Conversion & output",
        "text": "int(), float(), str() đổi kiểu với input phù hợp. print() hiển thị giá trị; type() giúp kiểm tra kiểu. Chuỗi \"100\" chưa phải số để cộng doanh thu."
      }
    ],
    "example": "amount_text = '100'\namount = float(amount_text)\nquantity = 3\nrevenue = amount * quantity\nprint(revenue)  # 300.0\nprint(7 / 2, 7 // 2, 7 % 2)  # 3.5 3 1",
    "notes": [
      "== là so sánh; = là gán giá trị.",
      "Đổi chuỗi không hợp lệ sang số có thể gây ValueError; không coi mọi giá trị lỗi là 0."
    ],
    "stages": []
  },
  {
    "id": "python-string",
    "language": "python",
    "title": "String: chuẩn hóa & formatting",
    "category": "Nền tảng · Python cho DA",
    "intro": "Xử lý chuỗi thường gặp trong tên, mã, email và báo cáo.",
    "sections": [
      {
        "title": "String method",
        "text": "strip() bỏ khoảng trắng hai đầu; lower()/upper() chuẩn hóa hoa thường; replace() thay đoạn chuỗi. Các method trả chuỗi mới, không sửa chuỗi ban đầu."
      },
      {
        "title": "Split & join",
        "text": "split() tách chuỗi thành list theo delimiter; join() ghép các chuỗi. Chọn delimiter đúng với dữ liệu; không tự split CSV phức tạp vì field có thể chứa dấu phẩy."
      },
      {
        "title": "f-string",
        "text": "f-string chèn giá trị hoặc expression vào chuỗi. Ví dụ f\"{rate:.1%}\" biểu diễn 0.125 thành 12.5%; formatting không thay giá trị dùng để tính."
      }
    ],
    "example": "email = ' An@EXAMPLE.COM '\nnormalized = email.strip().lower()\nprint(normalized)  # an@example.com\nchannels = 'Website,Ứng dụng'.split(',')\nprint(' | '.join(channels))  # Website | Ứng dụng\nrate = 0.125\nprint(f'Paid rate: {rate:.1%}')",
    "notes": [
      "Giữ mã có số 0 đầu dưới dạng string.",
      "Chuẩn hóa chuỗi theo quy tắc nghiệp vụ trước khi dùng làm key."
    ],
    "stages": []
  },
  {
    "id": "collections",
    "language": "python",
    "title": "List, tuple, dictionary & set",
    "category": "Nền tảng · Python cho DA",
    "intro": "Chọn cấu trúc dữ liệu dựa trên cách bạn cần lưu, truy cập và tra cứu dữ liệu.",
    "sections": [
      {
        "title": "List",
        "text": "Lưu dãy có thứ tự, cho phép trùng. Truy cập bằng chỉ số bắt đầu từ 0; append thêm phần tử cuối."
      },
      {
        "title": "Dictionary",
        "text": "Lưu cặp khóa–giá trị. get(key, default) trả giá trị mặc định khi khóa chưa có. Khóa phải là giá trị hashable."
      },
      {
        "title": "Set",
        "text": "Lưu các giá trị khác biệt, hỗ trợ kiểm tra thuộc tập. Không dùng set để bảo đảm thứ tự dữ liệu."
      },
      {
        "title": "Tuple & mutability",
        "text": "Tuple giữ sequence có thứ tự và không cho gán lại phần tử; list cho phép cập nhật. Dictionary ánh xạ key sang value, set giữ giá trị unique. Chọn cấu trúc theo cách truy cập, không chỉ theo hình thức dữ liệu."
      }
    ],
    "example": "items = [\"A\", \"B\", \"A\"]\nunique = set(items)\ncounts = {}\nfor item in items:\n    counts[item] = counts.get(item, 0) + 1\nprint(counts)  # {\"A\": 2, \"B\": 1}",
    "notes": [
      "List phù hợp khi thứ tự quan trọng; set phù hợp với tra cứu và loại trùng.",
      "Dictionary giữ thứ tự chèn trong Python hiện đại."
    ],
    "stages": [
      {
        "title": "List",
        "detail": "A, B, A — giữ thứ tự"
      },
      {
        "title": "Set",
        "detail": "A, B — loại trùng"
      },
      {
        "title": "Dictionary",
        "detail": "A: 2, B: 1 — đếm tần suất"
      }
    ]
  },
  {
    "id": "python-slicing",
    "language": "python",
    "title": "Indexing, slicing & sorting",
    "category": "Nền tảng · Python cho DA",
    "intro": "Truy cập phần tử, lấy một đoạn dữ liệu và sắp xếp sequence.",
    "sections": [
      {
        "title": "Indexing",
        "text": "Index bắt đầu từ 0; -1 lấy phần tử cuối. Truy cập index không tồn tại gây IndexError, nên kiểm tra input rỗng."
      },
      {
        "title": "Slicing",
        "text": "seq[start:stop:step] giữ start nhưng không giữ stop. Bỏ start/stop để dùng biên mặc định; slicing một list tạo list mới ở cấp ngoài."
      },
      {
        "title": "Sorting",
        "text": "sorted() trả list mới; list.sort() sửa list tại chỗ và trả None. key điều khiển tiêu chí, reverse=True cho giảm dần."
      }
    ],
    "example": "amounts = [30, 80, 50, 20]\nprint(amounts[0], amounts[-1])  # 30 20\nprint(amounts[1:3])  # [80, 50]\nprint(sorted(amounts, reverse=True)[:2])  # [80, 50]\nprint(amounts)  # list gốc không đổi",
    "notes": [
      "Slicing dùng stop exclusive, tương tự khoảng thời gian [start, end).",
      "Đừng gán result = values.sort(): result sẽ là None."
    ],
    "stages": []
  },
  {
    "id": "conditions",
    "language": "python",
    "title": "Điều kiện & toán tử logic",
    "category": "Nền tảng · Python cho DA",
    "intro": "Điều kiện giúp chương trình chọn hành động dựa trên dữ liệu.",
    "sections": [
      {
        "title": "So sánh",
        "text": "==, !=, >, <, >= và <= tạo giá trị True hoặc False. = gán giá trị, không so sánh."
      },
      {
        "title": "Kết hợp điều kiện",
        "text": "and cần cả hai điều kiện đúng; or cần ít nhất một điều kiện đúng; not đảo kết quả."
      },
      {
        "title": "if, elif, else",
        "text": "Các nhánh được xét theo thứ tự. Nhánh đầu tiên có điều kiện đúng được chạy; else dùng khi không nhánh nào đúng."
      }
    ],
    "example": "age = 20\nhas_ticket = True\nif age >= 18 and has_ticket:\n    print(\"Được vào\")\nelse:\n    print(\"Chưa đủ điều kiện\")",
    "notes": [
      "Chú ý giá trị biên như 0, số âm và ngưỡng bằng nhau.",
      "Viết dấu : sau điều kiện và thụt lề phần thân."
    ],
    "stages": [
      {
        "title": "Dữ liệu",
        "detail": "age = 20, has_ticket = True"
      },
      {
        "title": "Kiểm tra",
        "detail": "age ≥ 18 AND có vé → True"
      },
      {
        "title": "Chọn nhánh",
        "detail": "In “Được vào”"
      }
    ]
  },
  {
    "id": "loops",
    "language": "python",
    "title": "Vòng lặp & tư duy thuật toán",
    "category": "Nền tảng · Python cho DA",
    "intro": "Thuật toán là tập các bước rõ ràng biến đầu vào thành đầu ra. Vòng lặp giúp áp dụng một bước cho nhiều phần tử.",
    "sections": [
      {
        "title": "Vòng lặp for",
        "text": "Duyệt các phần tử trong một iterable. enumerate cho cả chỉ số và giá trị; range tạo dãy số để lặp."
      },
      {
        "title": "Trạng thái qua từng bước",
        "text": "Khởi tạo trạng thái trước vòng lặp, cập nhật trong mỗi lượt và kết luận sau khi duyệt xong. Ví dụ: tổng, số lần xuất hiện, phần tử lớn nhất."
      },
      {
        "title": "Trường hợp biên",
        "text": "Xác định hành vi với đầu vào rỗng, một phần tử, dữ liệu trùng và giá trị cực trị. Thuật toán đúng phải xử lý các trường hợp theo yêu cầu."
      }
    ],
    "example": "total = 0\nfor value in [3, 5, 2]:\n    total += value\nprint(total)  # 10",
    "notes": [
      "return trong vòng lặp kết thúc hàm ngay lập tức.",
      "Không sửa danh sách đang duyệt nếu chưa hiểu ảnh hưởng đến chỉ số."
    ],
    "stages": [
      {
        "title": "Khởi tạo",
        "detail": "total = 0"
      },
      {
        "title": "Lượt 1 và 2",
        "detail": "0 + 3 = 3; 3 + 5 = 8"
      },
      {
        "title": "Lượt cuối",
        "detail": "8 + 2 = 10"
      }
    ]
  },
  {
    "id": "python-comprehension",
    "language": "python",
    "title": "Comprehension & generator",
    "category": "Nền tảng · Python cho DA",
    "intro": "Viết phép biến đổi hoặc lọc sequence rõ ràng sau khi đã hiểu vòng lặp.",
    "sections": [
      {
        "title": "List comprehension",
        "text": "[expression for item in items if condition] tạo list mới. Điều kiện lọc quyết định phần tử nào được giữ; expression tạo giá trị đầu ra."
      },
      {
        "title": "Dictionary comprehension",
        "text": "{key: value for ...} tạo dictionary. Key trùng sẽ bị giá trị sau ghi đè, nên không dùng cách này để cộng tổng nhóm."
      },
      {
        "title": "Generator expression",
        "text": "(expression for ...) tạo generator, tính giá trị khi được duyệt. sum(...) có thể nhận generator để không tạo list trung gian; generator thường chỉ duyệt một lần."
      }
    ],
    "example": "amounts = [80, 100, 250]\nqualified = [amount for amount in amounts if amount >= 100]\nprint(qualified)  # [100, 250]\nprint(sum(amount for amount in amounts if amount >= 100))  # 350",
    "notes": [
      "Tránh comprehension lồng quá nhiều tầng; dùng loop hoặc function khi logic khó đọc.",
      "Comprehension không mặc định nhanh hoặc phù hợp hơn mọi cách xử lý."
    ],
    "stages": []
  },
  {
    "id": "functions",
    "language": "python",
    "title": "Function, parameter & return",
    "category": "Nền tảng · Python cho DA",
    "intro": "Biến đặt tên cho dữ liệu. Hàm đóng gói một công việc để có thể gọi lại với những đầu vào khác nhau.",
    "sections": [
      {
        "title": "Tham số và giá trị trả về",
        "text": "def khai báo hàm; tham số nhận dữ liệu từ nơi gọi. return trả giá trị và kết thúc hàm. Hàm không có return trả về None."
      },
      {
        "title": "Phạm vi biến",
        "text": "Biến tạo bên trong hàm thường có phạm vi cục bộ. Truyền dữ liệu qua tham số và return giúp hàm dễ kiểm thử."
      },
      {
        "title": "Default argument & reuse",
        "text": "Default argument giúp đặt giá trị tùy chọn. Tránh list hoặc dictionary làm default có thể bị cập nhật qua các lần gọi; dùng None rồi tạo bên trong. Một function nên có nhiệm vụ rõ và được gọi với nhiều input."
      }
    ],
    "example": "def total_price(price, quantity):\n    return price * quantity\n\namount = total_price(25, 3)\nprint(amount)  # 75",
    "notes": [
      "print hiển thị dữ liệu; return trả dữ liệu.",
      "Dùng tên biến mô tả rõ ý nghĩa và thụt lề 4 dấu cách."
    ],
    "stages": [
      {
        "title": "Đầu vào",
        "detail": "price = 25, quantity = 3"
      },
      {
        "title": "Hàm xử lý",
        "detail": "25 × 3"
      },
      {
        "title": "Giá trị trả về",
        "detail": "75 được gán vào amount"
      }
    ]
  },
  {
    "id": "python-import",
    "language": "python",
    "title": "Module, import & môi trường",
    "category": "Xử lý dữ liệu · Python",
    "intro": "Biết code phụ thuộc vào module nào và chạy trong môi trường nào để tái lập phân tích.",
    "sections": [
      {
        "title": "Module & import",
        "text": "Module chứa code có thể import. Python có standard library như math, csv, json, datetime; thư viện như pandas cần được cài trong môi trường thực thi."
      },
      {
        "title": "Alias & namespace",
        "text": "import pandas as pd đặt alias pd; from math import sqrt đưa tên sqrt vào namespace. Tránh import * vì khó biết tên đến từ đâu."
      },
      {
        "title": "Notebook & script",
        "text": "Notebook thuận tiện khám phá, script thuận tiện chạy lại quy trình. Biến của notebook phụ thuộc những cell đã chạy; kiểm tra bằng cách restart và chạy từ đầu theo thứ tự."
      }
    ],
    "example": "import math\nfrom statistics import mean\nvalues = [10, 20, 30]\nprint(mean(values))  # 20\nprint(math.sqrt(16))  # 4.0",
    "notes": [
      "Cài thư viện vào đúng môi trường đang chạy code.",
      "Không đặt tên file của bạn là pandas.py hoặc json.py vì có thể che module thật."
    ],
    "stages": []
  },
  {
    "id": "python-files",
    "language": "python",
    "title": "File, CSV & JSON",
    "category": "Xử lý dữ liệu · Python",
    "intro": "Đọc dữ liệu từ file và hiểu kiểu dữ liệu sau khi đọc.",
    "sections": [
      {
        "title": "File & with",
        "text": "with open(...) tự đóng file sau block. Chỉ định encoding phù hợp như utf-8; đường dẫn tương đối được tính theo working directory."
      },
      {
        "title": "CSV",
        "text": "csv.DictReader đọc mỗi record thành dictionary theo header. Giá trị CSV thường là string; cần parse số và ngày. pandas.read_csv phù hợp hơn khi cần phân tích cả bảng."
      },
      {
        "title": "JSON",
        "text": "json.loads đọc chuỗi JSON; json.load đọc file. JSON object thường trở thành dictionary, array thành list, null thành None; kiểm tra cấu trúc trước khi truy cập."
      }
    ],
    "example": "import csv\nimport io\nimport json\ncsv_text = 'channel,amount\\nWeb,100\\nApp,200\\n'\nrows = list(csv.DictReader(io.StringIO(csv_text)))\nprint(sum(float(row['amount']) for row in rows))  # 300.0\nrecord = json.loads('{\"channel\": \"Website\", \"amount\": 100}')\nprint(record['amount'])  # 100",
    "notes": [
      "Ví dụ dùng chuỗi để chạy độc lập; file thực tế dùng with open(...).",
      "Không eval dữ liệu file để parse; dùng parser đúng định dạng."
    ],
    "stages": []
  },
  {
    "id": "python-errors",
    "language": "python",
    "title": "Exception & kiểm tra input",
    "category": "Xử lý dữ liệu · Python",
    "intro": "Nhận diện lỗi dữ liệu, xử lý trường hợp dự kiến và giữ dấu vết để kiểm tra.",
    "sections": [
      {
        "title": "Đọc traceback",
        "text": "Traceback chỉ vị trí và loại lỗi. ValueError thường là giá trị không parse được; TypeError là thao tác sai kiểu; KeyError và IndexError là truy cập không hợp lệ."
      },
      {
        "title": "try / except",
        "text": "Chỉ bắt loại exception bạn dự kiến xử lý. Đừng except rồi bỏ qua mọi lỗi: có thể che lỗi logic và làm báo cáo thiếu dữ liệu."
      },
      {
        "title": "Validation",
        "text": "Kiểm tra input rỗng, missing value, số âm và mẫu số 0 theo quy tắc nghiệp vụ. Dữ liệu không parse được nên được đánh dấu hoặc báo lỗi, không tự thay bằng 0."
      }
    ],
    "example": "def parse_amount(value):\n    try:\n        return float(value)\n    except (ValueError, TypeError):\n        return None\n\nprint([parse_amount(value) for value in ['100', 'oops', None]])\n# [100.0, None, None]",
    "notes": [
      "None trong ví dụ là dấu hiệu parse thất bại; chưa phải quy tắc làm sạch cuối cùng.",
      "Đếm các record lỗi và đối chiếu tổng số record sau xử lý."
    ],
    "stages": []
  },
  {
    "id": "python-datetime",
    "language": "python",
    "title": "Datetime & khoảng thời gian",
    "category": "Xử lý dữ liệu · Python",
    "intro": "Parse ngày, tính khoảng thời gian và xác định kỳ phân tích.",
    "sections": [
      {
        "title": "Parse & format",
        "text": "datetime.strptime parse theo format; strftime tạo chuỗi hiển thị. Dữ liệu ISO có thể dùng datetime.fromisoformat khi cấu trúc phù hợp."
      },
      {
        "title": "Timedelta",
        "text": "Trừ hai datetime tạo timedelta; .days lấy số ngày nguyên, total_seconds() lấy tổng số giây. Đừng dùng .seconds để tính tổng thời lượng qua nhiều ngày."
      },
      {
        "title": "Timezone & boundary",
        "text": "Thống nhất timezone trước khi so sánh hoặc gán ngày. Dùng start <= timestamp < end để lọc kỳ; không trộn datetime có timezone và không có timezone mà chưa xác định quy tắc."
      }
    ],
    "example": "from datetime import datetime\nstart = datetime.fromisoformat('2026-01-01T00:00:00')\nend = datetime.fromisoformat('2026-02-01T00:00:00')\nvalue = datetime.fromisoformat('2026-01-31T23:59:59')\nprint(start <= value < end)  # True\nprint((end - start).days)  # 31",
    "notes": [
      "Ví dụ giả định mọi timestamp cùng timezone.",
      "Khoảng ngày tính theo nghiệp vụ có thể khác elapsed time qua thay đổi timezone."
    ],
    "stages": []
  },
  {
    "id": "pandas",
    "language": "python",
    "title": "DataFrame, Series & khám phá dữ liệu",
    "category": "Phân tích bảng · pandas",
    "intro": "Hiểu cấu trúc bảng của pandas, grain và cách kiểm tra dataset trước khi phân tích.",
    "sections": [
      {
        "title": "DataFrame & Series",
        "text": "DataFrame là bảng có index và column; Series là cấu trúc một chiều có index. df[\"amount\"] trả Series, df[[\"amount\"]] trả DataFrame. Index không mặc định là business key."
      },
      {
        "title": "Đọc & khám phá",
        "text": "read_csv đọc CSV; head() xem mẫu; shape cho số row/column; info() xem dtype và non-null count. describe() tóm tắt phân phối; kiểm tra key, grain và missing value trước khi tổng hợp."
      },
      {
        "title": "Schema & dtype",
        "text": "Kiểm tra các column có đúng tên và kiểu mong đợi không. Mã có số 0 đầu cần string; amount cần numeric. Đừng suy luận dtype chỉ từ vài row hiển thị."
      }
    ],
    "example": "import pandas as pd\ndf = pd.DataFrame({'team': ['A', 'B', 'A'], 'score': [10, 5, 20]})\nprint(df.shape)  # (3, 2)\nprint(df.head())\nprint(df['score'].sum())  # 35",
    "notes": [
      "Không mặc định thay mọi giá trị thiếu bằng 0.",
      "Làm sạch các dòng không hợp lệ trước khi chọn dòng trùng cần giữ."
    ],
    "stages": [
      {
        "title": "Bảng dữ liệu",
        "detail": "A:10, B:5, A:20"
      },
      {
        "title": "Nhóm theo team",
        "detail": "A → [10,20]; B → [5]"
      },
      {
        "title": "Tổng hợp",
        "detail": "A:30; B:5"
      }
    ]
  },
  {
    "id": "pandas-filter",
    "language": "python",
    "title": "Selection, loc & boolean mask",
    "category": "Phân tích bảng · pandas",
    "intro": "Chọn column và lọc row mà vẫn giữ rõ điều kiện phân tích.",
    "sections": [
      {
        "title": "Column selection",
        "text": "df[\"amount\"] chọn Series; df[[\"id\", \"amount\"]] chọn nhiều column. loc chọn theo label, iloc chọn theo vị trí."
      },
      {
        "title": "Boolean mask",
        "text": "Mask là Series True/False theo index. Dùng & cho AND, | cho OR, ~ cho NOT; đặt từng điều kiện trong ngoặc. Không dùng and/or cho cả Series."
      },
      {
        "title": "Assignment với loc",
        "text": "df.loc[mask, \"column\"] = value cập nhật rõ row và column. Tránh chained assignment như df[mask][\"column\"] = value; dùng .copy() khi muốn một dataset riêng."
      }
    ],
    "example": "import pandas as pd\ndf = pd.DataFrame({'id': [1, 2, 3], 'amount': [150, 200, 80],\n                   'status': ['đã thanh toán', 'chờ thanh toán', 'đã thanh toán']})\nmask = (df['status'] == 'đã thanh toán') & (df['amount'] >= 100)\nprint(df.loc[mask, ['id', 'amount']].to_dict('records'))\n# [{'id': 1, 'amount': 150}]",
    "notes": [
      "Mask phải tương ứng với index của dataset đang lọc.",
      "Sau khi lọc, index có thể không liên tục; iloc và loc vẫn có ý nghĩa khác nhau."
    ],
    "stages": []
  },
  {
    "id": "pandas-clean",
    "language": "python",
    "title": "Missing value, dtype & duplicate",
    "category": "Phân tích bảng · pandas",
    "intro": "Làm sạch có quy tắc, đo tác động và giữ được lý do thay đổi dataset.",
    "sections": [
      {
        "title": "Missing value",
        "text": "isna() phát hiện missing; dropna(subset=...) chỉ loại row thiếu column bắt buộc. fillna() thay giá trị khi có cơ sở nghiệp vụ, không mặc định mọi missing đều là 0."
      },
      {
        "title": "Parse dtype",
        "text": "to_numeric(errors=\"coerce\") và to_datetime(errors=\"coerce\") chuyển giá trị không hợp lệ thành missing. Đếm các giá trị mới bị missing để phát hiện lỗi nguồn."
      },
      {
        "title": "Duplicate theo key",
        "text": "duplicated(subset=...) phát hiện trùng business key. drop_duplicates(..., keep=...) giữ theo thứ tự hiện có; sort trước nếu quy tắc là giữ bản mới nhất."
      }
    ],
    "example": "import pandas as pd\ndf = pd.DataFrame({'id': [1, 1, 2, 3], 'amount': ['100', '120', 'oops', None],\n                   'updated_at': ['2026-01-01', '2026-01-02', '2026-01-01', '2026-01-01']})\ndf['amount'] = pd.to_numeric(df['amount'], errors='coerce')\ndf['updated_at'] = pd.to_datetime(df['updated_at'])\nclean = df.sort_values('updated_at').drop_duplicates('id', keep='last')\nprint(clean[['id', 'amount']].sort_values('id').to_dict('records'))\n# id 1: 120; id 2 và 3: missing",
    "notes": [
      "Quyết định giữ bản mới nhất trước hay sau khi loại bản không hợp lệ là hai quy tắc khác nhau.",
      "Ghi lại số row trước/sau và số missing mới tạo khi parse."
    ],
    "stages": []
  },
  {
    "id": "pandas-group",
    "language": "python",
    "title": "groupby, agg & transform",
    "category": "Phân tích bảng · pandas",
    "intro": "Phân biệt kết quả tổng hợp theo nhóm với metric gắn lại từng row chi tiết.",
    "sections": [
      {
        "title": "groupby & agg",
        "text": "groupby định nghĩa dimension; agg tính sum, mean, count hoặc metric đặt tên. as_index=False giữ key nhóm dưới dạng column."
      },
      {
        "title": "count, size & nunique",
        "text": "size đếm row; count đếm giá trị không missing trong column; nunique đếm giá trị khác nhau và mặc định bỏ missing. Chọn đúng phép đếm cho KPI."
      },
      {
        "title": "transform",
        "text": "transform trả kết quả tương ứng với từng row đầu vào. Dùng để gắn tổng nhóm, tỷ trọng hoặc chuẩn hóa theo nhóm mà không làm mất grain chi tiết."
      }
    ],
    "example": "import pandas as pd\ndf = pd.DataFrame({'channel': ['Website', 'Website', 'Ứng dụng'], 'amount': [300, 200, 100]})\nsummary = df.groupby('channel', as_index=False).agg(revenue=('amount', 'sum'))\ndf['channel_total'] = df.groupby('channel')['amount'].transform('sum')\nprint(summary.to_dict('records'))\nprint(df['channel_total'].tolist())  # [500, 500, 100]",
    "notes": [
      "groupby mặc định có thể bỏ nhóm key missing; dùng dropna=False khi cần giữ.",
      "AVG của các average nhóm khác với average toàn bộ row khi nhóm có kích thước khác nhau."
    ],
    "stages": []
  },
  {
    "id": "pandas-merge",
    "language": "python",
    "title": "merge, concat & kiểm tra key",
    "category": "Phân tích bảng · pandas",
    "intro": "Kết hợp dataset theo key hoặc nối row, đồng thời kiểm tra việc nhân dữ liệu.",
    "sections": [
      {
        "title": "merge",
        "text": "merge nối theo key với how như inner hoặc left. Key không unique ở cả hai phía có thể nhân số row; validate=\"many_to_one\" kiểm tra quan hệ khi nối giao dịch với dimension."
      },
      {
        "title": "indicator & missing key",
        "text": "indicator=True tạo _merge để xem matched/unmatched. pandas có thể nối missing key với missing key, khác hành vi JOIN với NULL thông thường trong SQL."
      },
      {
        "title": "concat",
        "text": "concat([...], ignore_index=True) nối row. Column không khớp được bổ sung missing; concat không tự deduplicate theo business key."
      }
    ],
    "example": "import pandas as pd\norders = pd.DataFrame({'id': [1, 2, 3], 'customer_id': [10, 10, 20], 'amount': [100, 200, 50]})\ncustomers = pd.DataFrame({'customer_id': [10], 'name': ['An']})\nresult = orders.merge(customers, on='customer_id', how='left',\n                      validate='many_to_one', indicator=True)\nprint(result[['id', 'name', '_merge']].to_dict('records'))",
    "notes": [
      "So sánh row count, unique key và tổng amount trước/sau merge.",
      "concat tương tự UNION ALL về ý tưởng, nhưng quy tắc khớp column và dtype cần được kiểm tra riêng."
    ],
    "stages": []
  },
  {
    "id": "pandas-reshape",
    "language": "python",
    "title": "pivot_table, melt & reshape",
    "category": "Phân tích bảng · pandas",
    "intro": "Chuyển giữa bảng long và wide để phân tích hoặc xuất báo cáo.",
    "sections": [
      {
        "title": "Long & wide",
        "text": "Long lưu dimension/value theo row, thuận tiện groupby và chart; wide trải dimension thành column, thuận tiện bảng báo cáo. Chuyển layout không tự thay định nghĩa metric."
      },
      {
        "title": "pivot_table",
        "text": "pivot_table chọn index, columns, values và aggfunc. pivot yêu cầu mỗi cặp key unique; pivot_table tổng hợp khi có nhiều row cho cùng cặp key."
      },
      {
        "title": "melt",
        "text": "melt giữ id_vars và chuyển các column value thành row. Đặt tên variable/value rõ ràng để người đọc biết đơn vị và ý nghĩa."
      }
    ],
    "example": "import pandas as pd\ndf = pd.DataFrame({'month': ['Tháng 1', 'Tháng 1', 'Tháng 2'], 'channel': ['Website', 'Ứng dụng', 'Website'], 'revenue': [100, 50, 200]})\nwide = df.pivot_table(index='month', columns='channel', values='revenue', aggfunc='sum')\nprint(wide)\nlong = wide.reset_index().melt(id_vars='month', var_name='channel', value_name='revenue')\nprint(long)",
    "notes": [
      "Không dùng fill_value=0 nếu missing có thể là thiếu dữ liệu nguồn thay vì không phát sinh giao dịch.",
      "Chọn aggfunc rõ ràng: metric doanh thu thường dùng sum, không phải mean mặc định."
    ],
    "stages": []
  },
  {
    "id": "pandas-time",
    "language": "python",
    "title": "Datetime, resample & rolling",
    "category": "Phân tích bảng · pandas",
    "intro": "Tổng hợp theo kỳ và tính moving average trên chuỗi thời gian.",
    "sections": [
      {
        "title": "Datetime trong pandas",
        "text": "to_datetime chuyển column về datetime; dt truy cập thuộc tính như year, month. Kiểm tra lỗi parse và timezone trước khi nhóm theo ngày."
      },
      {
        "title": "Resample",
        "text": "resample tổng hợp theo frequency trên DatetimeIndex hoặc column datetime với on=. \"MS\" biểu diễn month start. Xác định kỳ và cách xử lý kỳ không có dữ liệu."
      },
      {
        "title": "Rolling",
        "text": "rolling(window=3) xét ba observation gần nhất; rolling(\"3D\") xét khoảng thời gian ba ngày với index datetime. min_periods quyết định khi nào đủ dữ liệu để trả kết quả."
      }
    ],
    "example": "import pandas as pd\ndf = pd.DataFrame({'date': pd.to_datetime(['2026-01-01', '2026-01-02', '2026-01-03']), 'revenue': [100, 200, 300]})\ndf = df.set_index('date')\ndf['ma3'] = df['revenue'].rolling(3, min_periods=3).mean()\nprint(df['ma3'].tolist())  # [nan, nan, 200.0]\nprint(df['revenue'].resample('MS').sum())  # tháng 1: 600",
    "notes": [
      "Ba observation không luôn là ba ngày nếu dữ liệu thiếu ngày.",
      "Không dùng dữ liệu tương lai để tạo feature khi mục tiêu là dự báo."
    ],
    "stages": []
  },
  {
    "id": "numpy",
    "language": "python",
    "title": "NumPy & thống kê mô tả",
    "category": "Phân tích & trực quan hóa",
    "intro": "NumPy cung cấp mảng số và phép tính trên toàn mảng, hữu ích cho phân tích dữ liệu và Machine Learning.",
    "sections": [
      {
        "title": "Mảng và phép tính vector",
        "text": "np.array tạo ndarray. Phép tính với mảng được áp dụng trên nhiều phần tử; kiểm tra shape và dtype trước khi xử lý."
      },
      {
        "title": "Mean và median",
        "text": "Mean là tổng chia số phần tử; median là giá trị giữa sau khi sắp xếp. Median ít chịu ảnh hưởng bởi giá trị ngoại lệ hơn mean."
      },
      {
        "title": "Dữ liệu thiếu",
        "text": "NaN biểu diễn dữ liệu số thiếu. nanmean bỏ qua NaN; việc thay hoặc bỏ giá trị thiếu cần dựa vào ý nghĩa dữ liệu."
      }
    ],
    "example": "import numpy as np\na = np.array([10, 20, 90], dtype=float)\nprint(a * 2)  # [20, 40, 180]\nprint(np.mean(a))  # 40\nprint(np.median(a))  # 20",
    "notes": [
      "Đừng kết luận về dữ liệu chỉ từ một chỉ số trung bình.",
      "Kiểm tra mảng rỗng và giá trị thiếu trước khi tính."
    ],
    "stages": [
      {
        "title": "Dữ liệu",
        "detail": "10, 20, 90"
      },
      {
        "title": "Mean",
        "detail": "(10 + 20 + 90) / 3 = 40"
      },
      {
        "title": "Median",
        "detail": "Giá trị giữa = 20"
      }
    ]
  },
  {
    "id": "python-eda",
    "language": "python",
    "title": "EDA, outlier & kiểm tra kết luận",
    "category": "Phân tích & trực quan hóa",
    "intro": "Khám phá dataset có hệ thống trước khi kết luận về hành vi hoặc hiệu quả kinh doanh.",
    "sections": [
      {
        "title": "Bắt đầu bằng câu hỏi",
        "text": "Xác định grain, population, metric và thời gian. Kiểm tra shape, dtype, duplicate, missing value và coverage theo kỳ trước khi tìm pattern."
      },
      {
        "title": "Distribution & outlier",
        "text": "Đối chiếu mean, median, quantile và min/max; dùng histogram hoặc boxplot để xem phân phối. Outlier có thể là dữ liệu lỗi hoặc sự kiện có thật, không tự loại vì khác số đông."
      },
      {
        "title": "Correlation & segmentation",
        "text": "Correlation mô tả mối liên hệ, không chứng minh nguyên nhân. So sánh theo segment, cỡ mẫu và thời gian để tránh kết luận từ một average chung."
      }
    ],
    "example": "from statistics import mean, median\namounts = [10, 20, 20, 30, 200]\nprint({'count': len(amounts), 'mean': mean(amounts),\n       'median': median(amounts), 'min': min(amounts), 'max': max(amounts)})\n# mean 56, median 20: cần xem xét giá trị 200",
    "notes": [
      "Outlier nên được điều tra bằng record gốc và nghiệp vụ.",
      "Ghi rõ các bước lọc và giới hạn dữ liệu khi trình bày kết luận."
    ],
    "stages": []
  },
  {
    "id": "charts",
    "language": "python",
    "title": "Chọn biểu đồ & Matplotlib",
    "category": "Phân tích & trực quan hóa",
    "intro": "Biểu đồ truyền tải một câu hỏi phân tích. Chọn loại biểu đồ phù hợp trước khi viết code.",
    "sections": [
      {
        "title": "Chọn loại biểu đồ",
        "text": "Biểu đồ cột so sánh nhóm; đường thể hiện biến động theo thời gian; histogram xem phân phối; scatter xem mối quan hệ hai biến."
      },
      {
        "title": "Figure và Axes",
        "text": "Figure là khung tổng thể; Axes là vùng vẽ có hệ trục. plt.subplots tạo cả hai. Dùng ax.bar, ax.plot hoặc ax.scatter để thêm dữ liệu."
      },
      {
        "title": "Trình bày rõ ràng",
        "text": "Thêm tiêu đề, nhãn trục và đơn vị. Biểu đồ cột thường nên bắt đầu trục giá trị từ 0 để tránh gây hiểu nhầm."
      }
    ],
    "example": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.bar([\"A\", \"B\"], [30, 15])\nax.set_title(\"Doanh thu theo nhóm\")\nax.set_ylabel(\"Triệu đồng\")\nfig.tight_layout()",
    "notes": [
      "Số nhãn cần khớp số giá trị.",
      "Không dùng hiệu ứng trang trí làm che khuất dữ liệu."
    ],
    "stages": [
      {
        "title": "Câu hỏi",
        "detail": "Nhóm nào có doanh thu cao hơn?"
      },
      {
        "title": "Dữ liệu",
        "detail": "A:30; B:15 triệu đồng"
      },
      {
        "title": "Biểu đồ cột",
        "detail": "Cột A cao gấp đôi cột B"
      }
    ]
  },
  {
    "id": "ml",
    "language": "python",
    "title": "Machine Learning: quy trình cơ bản",
    "category": "Mở rộng · Machine Learning",
    "intro": "Machine Learning học quy luật từ dữ liệu để dự đoán trên dữ liệu mới. Cần đánh giá khả năng tổng quát hóa, không chỉ độ khớp với dữ liệu train.",
    "sections": [
      {
        "title": "Đặc trưng và mục tiêu",
        "text": "X là bảng đặc trưng; y là giá trị cần dự đoán. Hồi quy dự đoán số liên tục; phân loại dự đoán nhóm hoặc nhãn."
      },
      {
        "title": "Chia dữ liệu",
        "text": "Tách train/test trước khi học các bước tiền xử lý. Fit bộ chuẩn hóa và mô hình bằng train, sau đó chỉ transform hoặc predict trên test."
      },
      {
        "title": "Đánh giá",
        "text": "Hồi quy thường dùng MAE/RMSE; phân loại dùng accuracy, precision, recall và confusion matrix. Chọn chỉ số theo chi phí sai sót và phân bố nhãn."
      }
    ],
    "example": "from sklearn.linear_model import LinearRegression\nX_train = [[0], [1], [2]]\ny_train = [1, 3, 5]\nmodel = LinearRegression().fit(X_train, y_train)\nprint(model.predict([[3]]))  # gần 7",
    "notes": [
      "Không dùng test để fit mô hình hoặc chọn quy tắc tiền xử lý.",
      "Accuracy cao có thể gây hiểu nhầm khi nhãn mất cân bằng."
    ],
    "stages": [
      {
        "title": "Train",
        "detail": "Học từ dữ liệu huấn luyện"
      },
      {
        "title": "Mô hình",
        "detail": "Lưu quy luật đã học"
      },
      {
        "title": "Test",
        "detail": "Dự đoán và đo sai số"
      }
    ]
  },
  {
    "id": "sql-intro",
    "language": "sql",
    "title": "Tổng quan SQL cho Data Analyst",
    "category": "Nền tảng · SQL cho DA",
    "intro": "SQL là gì, vì sao Data Analyst cần SQL và bạn sẽ dùng SQL như thế nào trong công việc phân tích dữ liệu? Bài này giúp bạn hiểu bức tranh chung trước khi học cú pháp.",
    "sections": [
      {
        "title": "SQL là gì?",
        "text": "SQL viết tắt của Structured Query Language, là ngôn ngữ dùng để làm việc với dữ liệu trong relational database. Bạn viết một query để yêu cầu database trả về dữ liệu cần tìm, chẳng hạn danh sách đơn đã thanh toán hoặc doanh thu theo tháng. Bạn mô tả kết quả muốn có; database xử lý việc truy xuất và tính toán."
      },
      {
        "title": "Vì sao Data Analyst cần SQL?",
        "text": "Dữ liệu doanh nghiệp thường nằm trong database hoặc data warehouse: giao dịch, khách hàng, sản phẩm và hành vi sử dụng. SQL giúp DA tự lấy dữ liệu, lọc đúng đối tượng, kết hợp nhiều nguồn và tính metric mà không phải chờ người khác xuất file. Nhiều công cụ BI cũng dùng SQL để lấy dữ liệu cho dashboard."
      },
      {
        "title": "DA dùng SQL để trả lời những câu hỏi nào?",
        "text": "Doanh thu tháng này là bao nhiêu? Channel nào có nhiều đơn đã thanh toán nhất? Customer nào chưa quay lại mua? SQL hỗ trợ khám phá dữ liệu, kiểm tra data quality và chuẩn bị dataset để trả lời các câu hỏi này. Kết quả đúng vẫn phụ thuộc vào việc hiểu định nghĩa nghiệp vụ và dữ liệu nguồn."
      },
      {
        "title": "SQL nằm ở đâu trong quy trình phân tích?",
        "text": "Bắt đầu từ câu hỏi kinh doanh, xác định dữ liệu cần dùng, viết SQL để lấy và tổng hợp dữ liệu, rồi kiểm tra kết quả. Sau đó dùng Excel, Python hoặc công cụ BI để phân tích sâu và trực quan hóa. SQL thường xử lý dữ liệu tại database trước khi đưa kết quả sang các công cụ tiếp theo."
      },
      {
        "title": "SQL, Excel, Python & BI",
        "text": "SQL phù hợp để truy vấn và tổng hợp dữ liệu trong database; Excel thuận tiện để xem bảng và phân tích nhanh; Python hỗ trợ xử lý tùy biến, thống kê và tự động hóa; BI trình bày dashboard cho người sử dụng. Một DA có thể dùng nhiều công cụ trong cùng bài toán, tùy nơi dữ liệu được lưu và kết quả cần tạo."
      },
      {
        "title": "Bạn sẽ học gì trong lộ trình này?",
        "text": "Đi từ SELECT và lọc dữ liệu đến GROUP BY để tính KPI, JOIN để kết hợp table, rồi CTE và window function cho các bài toán nhiều bước. Các bài sau giải thích cú pháp và có ví dụ thực hành. Thư viện dùng SQLite trong SQL Lab; các khái niệm cốt lõi áp dụng rộng rãi, còn một số cú pháp khác nhau giữa database."
      }
    ],
    "example": "-- Câu hỏi: doanh thu từ các đơn đã thanh toán là bao nhiêu?\nSELECT SUM(amount) AS paid_revenue\nFROM orders\nWHERE status = 'đã thanh toán';",
    "notes": [
      "Chưa cần ghi nhớ cú pháp ở bài này: hãy hiểu SQL giúp lấy và biến dữ liệu thành câu trả lời.",
      "Database lưu và xử lý dữ liệu; SQL là ngôn ngữ bạn dùng để yêu cầu database làm việc.",
      "Trước khi viết query, làm rõ metric, đối tượng và khoảng thời gian cần phân tích."
    ],
    "stages": [
      {
        "title": "Câu hỏi kinh doanh",
        "detail": "Muốn biết doanh thu từ những đơn đã thanh toán."
      },
      {
        "title": "SQL query",
        "detail": "Đọc orders, giữ status = 'đã thanh toán' và cộng amount. Ví dụ hai đơn đã thanh toán 300 và 200, một đơn chờ thanh toán 100."
      },
      {
        "title": "Kết quả & quyết định",
        "detail": "paid_revenue = 500. Đưa kết quả sang báo cáo hoặc dashboard để theo dõi doanh thu."
      }
    ]
  },
  {
    "id": "select",
    "language": "sql",
    "title": "SELECT, AS & DISTINCT",
    "category": "Nền tảng · SQL cho DA",
    "intro": "Chọn đúng column, tạo column tính toán và xem các giá trị khác nhau để khám phá dữ liệu.",
    "sections": [
      {
        "title": "SELECT & FROM",
        "text": "FROM chọn table; SELECT chọn column hoặc expression trả về. SELECT * hữu ích khi khám phá nhanh, còn báo cáo nên liệt kê column rõ ràng."
      },
      {
        "title": "Expression & alias",
        "text": "Dùng +, -, *, / để tính toán và AS để đặt alias. Alias mô tả metric như net_revenue giúp báo cáo dễ hiểu."
      },
      {
        "title": "DISTINCT",
        "text": "SELECT DISTINCT loại các row trùng trên toàn bộ tổ hợp column được chọn. DISTINCT channel khác với DISTINCT channel, status."
      }
    ],
    "example": "SELECT id, amount,\n       amount - COALESCE(discount, 0) AS net_revenue\nFROM orders;\n\nSELECT DISTINCT channel, status\nFROM orders;",
    "notes": [
      "DISTINCT không sửa được nguyên nhân JOIN nhân số dòng.",
      "Alias tạo trong SELECT thường không dùng trực tiếp trong WHERE cùng cấp query."
    ],
    "stages": [
      {
        "title": "FROM",
        "detail": "orders: Website/đã thanh toán, Website/đã thanh toán, Website/chờ thanh toán"
      },
      {
        "title": "SELECT",
        "detail": "Chọn channel và status"
      },
      {
        "title": "DISTINCT",
        "detail": "Website/đã thanh toán, Website/chờ thanh toán — 2 tổ hợp"
      }
    ]
  },
  {
    "id": "sql-filter",
    "language": "sql",
    "title": "WHERE, AND, OR & NOT",
    "category": "Nền tảng · SQL cho DA",
    "intro": "Lọc đúng population trước khi tính toán: đơn đã thanh toán, khách ở một khu vực hoặc giao dịch đạt ngưỡng.",
    "sections": [
      {
        "title": "Comparison operators",
        "text": "Dùng =, <>, >, >=, <, <= để so sánh. WHERE chỉ giữ row có điều kiện TRUE; điều kiện UNKNOWN do NULL bị loại."
      },
      {
        "title": "AND, OR & NOT",
        "text": "AND yêu cầu cả hai điều kiện đúng; OR yêu cầu ít nhất một; NOT phủ định điều kiện. AND được xét trước OR, nên dùng ngoặc khi kết hợp."
      },
      {
        "title": "Population của KPI",
        "text": "Đặt điều kiện nghiệp vụ như status = 'đã thanh toán' trong WHERE trước khi SUM. Bỏ nhầm điều kiện sẽ tính cả đơn hủy hoặc chưa thanh toán."
      }
    ],
    "example": "SELECT id, channel, amount\nFROM orders\nWHERE status = 'đã thanh toán'\n  AND (channel = 'Website' OR channel = 'Ứng dụng')\n  AND NOT (amount < 100);",
    "notes": [
      "NULL cần IS NULL, không dùng = NULL.",
      "Kiểm tra các giá trị đúng bằng ngưỡng: > 100 khác >= 100."
    ],
    "stages": [
      {
        "title": "Dữ liệu",
        "detail": "đã thanh toán/Website/150, chờ thanh toán/Ứng dụng/200, đã thanh toán/Ứng dụng/80"
      },
      {
        "title": "WHERE status",
        "detail": "Còn đã thanh toán/Website/150 và đã thanh toán/Ứng dụng/80"
      },
      {
        "title": "AND amount >= 100",
        "detail": "Chỉ còn đã thanh toán/Website/150"
      }
    ]
  },
  {
    "id": "sql-pattern",
    "language": "sql",
    "title": "IN, BETWEEN, LIKE & wildcard",
    "category": "Nền tảng · SQL cho DA",
    "intro": "Gom các cách lọc thường dùng vào một bài: danh sách giá trị, khoảng giá trị và pattern của chuỗi.",
    "sections": [
      {
        "title": "IN & NOT IN",
        "text": "IN kiểm tra thuộc danh sách hoặc kết quả subquery. NOT IN không an toàn khi danh sách chứa NULL; dùng NOT EXISTS khi kiểm tra không có bản ghi liên quan."
      },
      {
        "title": "BETWEEN",
        "text": "BETWEEN a AND b bao gồm cả hai biên. Với timestamp, nên dùng >= ngày đầu và < ngày đầu kỳ tiếp theo để bao phủ toàn bộ ngày cuối."
      },
      {
        "title": "LIKE & wildcard",
        "text": "LIKE dùng % cho từ 0 đến nhiều ký tự, _ cho đúng một ký tự. LIKE 'An%' tìm chuỗi bắt đầu bằng An; phân biệt hoa thường phụ thuộc database và collation."
      }
    ],
    "example": "SELECT id, channel, amount\nFROM orders\nWHERE channel IN ('Website', 'Ứng dụng')\n  AND amount BETWEEN 100 AND 500\n  AND created_at >= '2026-01-01'\n  AND created_at < '2026-02-01';\n\nSELECT id, name FROM customers\nWHERE name LIKE 'An%';",
    "notes": [
      "BETWEEN 100 AND 500 giữ cả 100 và 500.",
      "Pattern có ký tự % hoặc _ thật cần escape theo database."
    ],
    "stages": [
      {
        "title": "IN",
        "detail": "Website, Ứng dụng, Cửa hàng → giữ Website và Ứng dụng"
      },
      {
        "title": "BETWEEN",
        "detail": "80, 100, 500, 600 → giữ 100 và 500"
      },
      {
        "title": "LIKE",
        "detail": "An, Anh, Bình → An% giữ An và Anh"
      }
    ]
  },
  {
    "id": "sql-null",
    "language": "sql",
    "title": "NULL, COALESCE & NULLIF",
    "category": "Nền tảng · SQL cho DA",
    "intro": "Phân biệt missing value với 0 để tránh sai số đếm, trung bình và tỷ lệ.",
    "sections": [
      {
        "title": "IS NULL & IS NOT NULL",
        "text": "NULL biểu diễn thiếu hoặc chưa biết, không đồng nghĩa với 0 hay chuỗi rỗng. Dùng IS NULL và IS NOT NULL để kiểm tra."
      },
      {
        "title": "COALESCE",
        "text": "COALESCE trả argument đầu tiên không NULL. Chỉ thay NULL bằng 0 khi nghiệp vụ xác nhận giá trị thiếu có thể được hiểu là 0."
      },
      {
        "title": "NULLIF & division",
        "text": "NULLIF(a, b) trả NULL nếu a = b, ngược lại trả a. NULLIF(denominator, 0) giúp tỷ lệ trả NULL khi mẫu số bằng 0; nhân 1.0 để tránh integer division."
      }
    ],
    "example": "SELECT id,\n       COALESCE(discount, 0) AS discount,\n       amount * 1.0 / NULLIF(quantity, 0) AS unit_price\nFROM orders;\n\nSELECT id FROM customers\nWHERE email IS NULL;",
    "notes": [
      "AVG bỏ qua NULL: AVG(100, NULL) là 100; thay NULL bằng 0 sẽ đổi ý nghĩa.",
      "NULLIF xử lý mẫu số 0, không quyết định hộ ý nghĩa của tỷ lệ thiếu."
    ],
    "stages": [
      {
        "title": "Dữ liệu",
        "detail": "discount = NULL, quantity = 0"
      },
      {
        "title": "COALESCE",
        "detail": "discount được thay bằng 0 theo quy tắc"
      },
      {
        "title": "NULLIF",
        "detail": "quantity 0 → NULL; unit_price = NULL"
      }
    ]
  },
  {
    "id": "sorting",
    "language": "sql",
    "title": "ORDER BY & LIMIT",
    "category": "Nền tảng · SQL cho DA",
    "intro": "Kết quả SQL không có thứ tự bảo đảm nếu bạn chưa yêu cầu sắp xếp. LIMIT giới hạn số dòng của kết quả đã chọn.",
    "sections": [
      {
        "title": "Thứ tự tăng và giảm",
        "text": "ASC tăng dần, DESC giảm dần. Có thể sắp xếp theo nhiều cột; tiêu chí phía sau xử lý trường hợp bằng nhau phía trước."
      },
      {
        "title": "Giới hạn kết quả",
        "text": "LIMIT n lấy tối đa n dòng. Kết hợp ORDER BY để chọn top n thay vì lấy một số dòng tùy ý."
      },
      {
        "title": "Thứ tự ổn định",
        "text": "Thêm khóa duy nhất như id làm tiêu chí cuối để thứ tự ổn định khi các giá trị khác trùng nhau."
      },
      {
        "title": "LIMIT, TOP & FETCH",
        "text": "SQLite và PostgreSQL dùng LIMIT; SQL Server có TOP hoặc OFFSET ... FETCH. Đây là các cách giới hạn kết quả tùy dialect, không phải ba bài riêng."
      }
    ],
    "example": "SELECT id, amount\nFROM orders\nORDER BY amount DESC, id ASC\nLIMIT 3;",
    "notes": [
      "LIMIT không thay thế ORDER BY.",
      "Thứ tự NULL và cú pháp phân trang có thể khác theo hệ quản trị."
    ],
    "stages": [
      {
        "title": "Các giá trị",
        "detail": "30, 80, 50"
      },
      {
        "title": "ORDER BY DESC",
        "detail": "80, 50, 30"
      },
      {
        "title": "LIMIT 2",
        "detail": "80, 50"
      }
    ]
  },
  {
    "id": "sql-cleaning",
    "language": "sql",
    "title": "String function & CAST",
    "category": "Nền tảng · SQL cho DA",
    "intro": "Chuẩn hóa chuỗi và kiểu dữ liệu trước khi lọc, JOIN hoặc tổng hợp.",
    "sections": [
      {
        "title": "TRIM, LOWER & UPPER",
        "text": "TRIM bỏ khoảng trắng đầu/cuối; LOWER và UPPER chuẩn hóa hoa thường. Không tự động loại dấu hoặc khoảng trắng bên trong chuỗi."
      },
      {
        "title": "REPLACE, SUBSTR & LENGTH",
        "text": "REPLACE thay một đoạn chuỗi, SUBSTR lấy một phần và LENGTH đo độ dài trong SQLite. Tên hàm và cách tính độ dài có thể khác theo dialect."
      },
      {
        "title": "CAST & numeric expression",
        "text": "CAST đổi kiểu dữ liệu. Dữ liệu không hợp lệ cần được kiểm tra trước: SQLite có thể chuyển chuỗi không phải số thành 0, dễ làm sai metric."
      }
    ],
    "example": "SELECT id,\n       LOWER(TRIM(email)) AS email_normalized,\n       SUBSTR(phone, 1, 3) AS phone_prefix,\n       CAST(amount AS REAL) AS amount_numeric\nFROM customers;",
    "notes": [
      "Giả định ví dụ có các column email, phone và amount dạng text.",
      "Chuẩn hóa key theo quy tắc nghiệp vụ; không CAST mất số 0 đầu của mã hoặc số điện thoại."
    ],
    "stages": [
      {
        "title": "Raw value",
        "detail": "email = \" An@EXAMPLE.COM \""
      },
      {
        "title": "TRIM",
        "detail": "\"An@EXAMPLE.COM\""
      },
      {
        "title": "LOWER",
        "detail": "\"an@example.com\""
      }
    ]
  },
  {
    "id": "sql-dates",
    "language": "sql",
    "title": "Date & time: lọc kỳ, cohort",
    "category": "Nền tảng · SQL cho DA",
    "intro": "Phân tích theo ngày và tháng cần khoảng thời gian đúng, timezone thống nhất và date function phù hợp.",
    "sections": [
      {
        "title": "Date range",
        "text": "Với timestamp dùng khoảng [start, end): >= ngày đầu và < ngày đầu kỳ tiếp theo. Cách này tránh bỏ các giao dịch cuối ngày."
      },
      {
        "title": "Date function trong SQLite",
        "text": "DATE lấy ngày, STRFTIME('%Y-%m', created_at) tạo month key. JULIANDAY(b) - JULIANDAY(a) cho khoảng cách ngày; database khác dùng các hàm tương ứng."
      },
      {
        "title": "Timezone & cohort",
        "text": "Chuyển timestamp về timezone nghiệp vụ trước khi gán ngày hoặc tháng. Cohort thường dựa trên kỳ đầu tiên customer tham gia, khác với kỳ của từng giao dịch."
      }
    ],
    "example": "SELECT STRFTIME('%Y-%m', created_at) AS month,\n       SUM(amount) AS revenue\nFROM orders\nWHERE status = 'đã thanh toán'\n  AND created_at >= '2026-01-01'\n  AND created_at < '2026-04-01'\nGROUP BY STRFTIME('%Y-%m', created_at)\nORDER BY month;",
    "notes": [
      "Ví dụ giả định created_at là ISO timestamp trong cùng timezone nghiệp vụ.",
      "DATE_TRUNC, EXTRACT, DATEDIFF không dùng chung cú pháp cho mọi database."
    ],
    "stages": [
      {
        "title": "Timestamp",
        "detail": "2026-01-31 23:59:59"
      },
      {
        "title": "Date range",
        "detail": "< 2026-02-01 vẫn giữ giao dịch"
      },
      {
        "title": "Month key",
        "detail": "2026-01 → tổng doanh thu tháng 1"
      }
    ]
  },
  {
    "id": "sql-case",
    "language": "sql",
    "title": "CASE WHEN: phân nhóm dữ liệu",
    "category": "Tổng hợp · KPI & báo cáo",
    "intro": "CASE tạo category từ quy tắc nghiệp vụ, như phân khúc giá trị đơn hàng hoặc nhãn trạng thái.",
    "sections": [
      {
        "title": "Searched CASE",
        "text": "CASE WHEN condition THEN value ... ELSE value END kiểm tra điều kiện theo thứ tự; nhánh đúng đầu tiên được chọn."
      },
      {
        "title": "ELSE & NULL",
        "text": "Không có ELSE thì các row không khớp nhánh nào trả NULL. Kiểm tra missing value trước nếu cần category riêng."
      },
      {
        "title": "Segmentation",
        "text": "Dùng CASE tạo dimension rồi GROUP BY dimension đó trong CTE hoặc query ngoài. Giữ các output value cùng kiểu dữ liệu phù hợp."
      }
    ],
    "example": "SELECT id, amount,\n       CASE\n         WHEN amount IS NULL THEN 'chưa xác định'\n         WHEN amount >= 500 THEN 'cao'\n         WHEN amount >= 200 THEN 'trung bình'\n         ELSE 'thấp'\n       END AS order_segment\nFROM orders;",
    "notes": [
      "Đặt điều kiện hẹp hoặc ưu tiên cao trước; amount 600 cũng thỏa >= 200.",
      "Thống nhất ngưỡng segmentation với người sử dụng báo cáo."
    ],
    "stages": [
      {
        "title": "Amount",
        "detail": "600, 250, 80, NULL"
      },
      {
        "title": "CASE WHEN",
        "detail": "Kiểm tra lần lượt chưa xác định → cao → trung bình"
      },
      {
        "title": "Segment",
        "detail": "cao, trung bình, thấp, chưa xác định"
      }
    ]
  },
  {
    "id": "aggregation",
    "language": "sql",
    "title": "Aggregate function, GROUP BY & HAVING",
    "category": "Tổng hợp · KPI & báo cáo",
    "intro": "Hàm tổng hợp biến nhiều dòng thành chỉ số. GROUP BY tạo một chỉ số riêng cho mỗi nhóm.",
    "sections": [
      {
        "title": "COUNT, SUM, AVG",
        "text": "COUNT(*) đếm dòng; COUNT(column) chỉ đếm giá trị không NULL; SUM và AVG tính trên các giá trị không NULL."
      },
      {
        "title": "MIN, MAX & COUNT DISTINCT",
        "text": "MIN và MAX lấy giá trị nhỏ nhất/lớn nhất không NULL; MIN(date) có thể tìm ngày đầu. COUNT(DISTINCT customer_id) đếm customer khác nhau có id không NULL, không phải số order."
      },
      {
        "title": "GROUP BY",
        "text": "Nhóm theo một hoặc nhiều cột. Với truy vấn tổng hợp, các cột được chọn cần là khóa nhóm hoặc biểu thức tổng hợp để tránh kết quả khó xác định."
      },
      {
        "title": "WHERE và HAVING",
        "text": "WHERE lọc dòng trước khi nhóm; HAVING lọc nhóm sau khi tổng hợp. SUM trên tập rỗng trả NULL; COALESCE có thể thay bằng 0."
      }
    ],
    "example": "SELECT channel, SUM(amount) AS revenue\nFROM orders\nWHERE status = 'đã thanh toán'\nGROUP BY channel\nHAVING SUM(amount) >= 500;",
    "notes": [
      "Điều kiện trên SUM/COUNT thường thuộc HAVING.",
      "Không nhầm số dòng với số giá trị không NULL."
    ],
    "stages": [
      {
        "title": "WHERE",
        "detail": "Giữ các dòng đã thanh toán"
      },
      {
        "title": "GROUP BY",
        "detail": "Tổng hợp từng channel"
      },
      {
        "title": "HAVING",
        "detail": "Giữ nhóm có tổng ≥ 500"
      }
    ]
  },
  {
    "id": "sql-kpi",
    "language": "sql",
    "title": "Conditional aggregation & tỷ lệ KPI",
    "category": "Tổng hợp · KPI & báo cáo",
    "intro": "Tính nhiều metric trên cùng population, đồng thời làm rõ tử số, mẫu số và grain.",
    "sections": [
      {
        "title": "SUM(CASE ...)",
        "text": "SUM(CASE WHEN ... THEN 1 ELSE 0 END) đếm row đạt điều kiện; SUM(CASE WHEN ... THEN amount ELSE 0 END) cộng giá trị theo điều kiện."
      },
      {
        "title": "COUNT DISTINCT theo điều kiện",
        "text": "COUNT(DISTINCT CASE WHEN status = 'đã thanh toán' THEN customer_id END) đếm customer có đơn đã thanh toán. Một customer nhiều đơn vẫn chỉ được đếm một lần."
      },
      {
        "title": "Ratio & denominator",
        "text": "Nhân tử số với 1.0 rồi chia NULLIF(mẫu số, 0). Paid order rate theo số đơn khác với conversion rate theo customer; đặt tên metric theo population thực tế."
      }
    ],
    "example": "SELECT channel,\n       COUNT(*) AS total_orders,\n       SUM(CASE WHEN status = 'đã thanh toán' THEN 1 ELSE 0 END) AS paid_orders,\n       SUM(CASE WHEN status = 'đã thanh toán' THEN amount ELSE 0 END) AS paid_revenue,\n       1.0 * SUM(CASE WHEN status = 'đã thanh toán' THEN 1 ELSE 0 END)\n         / NULLIF(COUNT(*), 0) AS paid_order_rate\nFROM orders\nGROUP BY channel;",
    "notes": [
      "Nếu WHERE chỉ giữ đã thanh toán thì paid_order_rate sẽ luôn là 1 cho các nhóm có dòng.",
      "Không cộng hoặc AVG trực tiếp các tỷ lệ giữa nhóm; tính lại từ tổng tử số và tổng mẫu số."
    ],
    "stages": [
      {
        "title": "Population",
        "detail": "Website: 3 orders, trong đó 2 đã thanh toán"
      },
      {
        "title": "Conditional count",
        "detail": "paid_orders = 2; total_orders = 3"
      },
      {
        "title": "Ratio",
        "detail": "paid_order_rate = 2 / 3 ≈ 0.667"
      }
    ]
  },
  {
    "id": "join",
    "language": "sql",
    "title": "JOIN: kết hợp các bảng",
    "category": "Kết hợp dữ liệu",
    "intro": "JOIN kết hợp các dòng từ hai bảng dựa trên một điều kiện, thường là quan hệ giữa khóa chính và khóa ngoại.",
    "sections": [
      {
        "title": "INNER JOIN",
        "text": "Chỉ giữ các cặp dòng có điều kiện ON đúng. Nếu một khách có hai đơn phù hợp, khách đó xuất hiện hai dòng trong kết quả."
      },
      {
        "title": "LEFT và RIGHT JOIN",
        "text": "LEFT giữ mọi dòng bảng trái, bổ sung NULL ở bảng phải khi không khớp. RIGHT làm điều ngược lại: giữ mọi dòng bảng phải."
      },
      {
        "title": "FULL OUTER JOIN",
        "text": "Giữ các cặp khớp và các dòng không khớp từ cả hai bảng; phía không có dữ liệu được điền NULL."
      },
      {
        "title": "ON và WHERE",
        "text": "ON quyết định các dòng nào khớp nhau. WHERE lọc sau khi nối; điều kiện WHERE trên bảng phải có thể loại các dòng NULL mà LEFT JOIN vừa giữ."
      },
      {
        "title": "Self JOIN & grain",
        "text": "Self JOIN nối một table với chính nó bằng hai alias, ví dụ employee với manager. Trước mọi JOIN, kiểm tra key có unique không và quan hệ one-to-many để tránh nhân doanh thu."
      }
    ],
    "example": "SELECT a.ID, a.Product, b.ID, b.Price\nFROM Products AS a\nLEFT JOIN Prices AS b ON a.ID = b.ID;",
    "notes": [
      "Tên cột giống nhau không tự động tạo quan hệ: cần chỉ định ON.",
      "Khóa không duy nhất ở cả hai bảng có thể tạo nhiều cặp dòng (nhân số dòng).",
      "Mô phỏng dưới đây nối Products và Prices theo cột ID."
    ],
    "stages": [
      {
        "title": "Bảng trái",
        "detail": "Khách hàng"
      },
      {
        "title": "Điều kiện ON",
        "detail": "customers.id = orders.customer_id"
      },
      {
        "title": "Kết quả",
        "detail": "Tùy loại JOIN được chọn"
      }
    ]
  },
  {
    "id": "sql-union",
    "language": "sql",
    "title": "UNION & UNION ALL",
    "category": "Kết hợp dữ liệu",
    "intro": "UNION xếp các dataset theo chiều dọc, phù hợp khi ghép cùng loại giao dịch từ nhiều nguồn.",
    "sections": [
      {
        "title": "UNION ALL",
        "text": "Giữ mọi row từ các query, bao gồm row trùng. Thường phù hợp khi ghép dữ liệu từ các nguồn không chồng lặp hoặc khi cần giữ từng giao dịch."
      },
      {
        "title": "UNION",
        "text": "Loại row trùng trên toàn bộ column output. UNION không tự deduplicate theo business key như order_id."
      },
      {
        "title": "Column alignment",
        "text": "Các query cần cùng số column, thứ tự tương ứng và kiểu tương thích. Thêm source để truy vết; ORDER BY cuối cùng sắp xếp toàn bộ kết quả."
      }
    ],
    "example": "SELECT id, amount, 'Website' AS source\nFROM web_orders\nUNION ALL\nSELECT id, amount, 'Ứng dụng' AS source\nFROM app_orders\nORDER BY source, id;",
    "notes": [
      "JOIN thêm column theo quan hệ key; UNION thêm row cùng cấu trúc.",
      "ID có thể trùng giữa nguồn: cân nhắc key (source, id)."
    ],
    "stages": [
      {
        "title": "Nguồn A",
        "detail": "Website: 100, 200"
      },
      {
        "title": "Nguồn B",
        "detail": "Ứng dụng: 200, 300"
      },
      {
        "title": "So sánh amount",
        "detail": "UNION ALL: 4 dòng; UNION chỉ amount: 3 dòng"
      }
    ]
  },
  {
    "id": "cte",
    "language": "sql",
    "title": "Subquery & CTE",
    "category": "Kết hợp dữ liệu",
    "intro": "Subquery là truy vấn nằm trong một truy vấn khác. CTE đặt tên cho kết quả trung gian bằng WITH, giúp chia bài toán thành các bước dễ đọc.",
    "sections": [
      {
        "title": "Subquery",
        "text": "Một SELECT nằm bên trong câu SQL khác. Ví dụ: truy vấn con tính tổng tiền từng khách; truy vấn ngoài lọc những khách có tổng từ 500 trở lên. Có thể đặt subquery trong FROM, WHERE hoặc SELECT."
      },
      {
        "title": "CTE",
        "text": "Viết bước tính tổng riêng bằng WITH totals AS (...), rồi đọc kết quả bằng FROM totals. CTE giúp câu SQL dài dễ đọc hơn và cho phép dùng lại totals trong cùng câu lệnh."
      },
      {
        "title": "Phạm vi",
        "text": "Tên CTE chỉ dùng được trong câu SQL đang viết. Muốn kết quả có thứ tự, thêm ORDER BY ở truy vấn ngoài."
      }
    ],
    "example": "-- CTE: đặt tên bước tổng hợp\nWITH totals AS (\n    SELECT customer, SUM(amount) AS revenue\n    FROM orders GROUP BY customer\n)\nSELECT customer, revenue FROM totals\nWHERE revenue >= 500\nORDER BY revenue DESC;\n\n-- Subquery: lồng cùng bước tổng hợp trong FROM\nSELECT customer, revenue\nFROM (\n    SELECT customer, SUM(amount) AS revenue\n    FROM orders GROUP BY customer\n) AS totals\nWHERE revenue >= 500\nORDER BY revenue DESC;",
    "notes": [
      "Lọc amount trước khi cộng khác với lọc revenue sau khi cộng. An có 300 + 250 = 550 dù từng đơn đều dưới 500.",
      "ORDER BY cuối truy vấn quyết định thứ tự hiển thị."
    ],
    "stages": [
      {
        "title": "Bảng gốc",
        "detail": "Các giao dịch"
      },
      {
        "title": "CTE totals",
        "detail": "Tổng hợp theo khách"
      },
      {
        "title": "Truy vấn chính",
        "detail": "Lọc kết quả tổng hợp"
      }
    ]
  },
  {
    "id": "sql-exists",
    "language": "sql",
    "title": "EXISTS & NOT EXISTS",
    "category": "Kết hợp dữ liệu",
    "intro": "Tìm customer có hoặc chưa có giao dịch mà không làm nhân số dòng của customer.",
    "sections": [
      {
        "title": "Correlated subquery",
        "text": "Subquery tham chiếu row của query ngoài. Điều kiện o.customer_id = c.id kiểm tra order của đúng customer đang xét."
      },
      {
        "title": "EXISTS",
        "text": "EXISTS trả TRUE nếu subquery có ít nhất một row. Dù customer có 10 order, query ngoài vẫn giữ một row của customer nếu table customer có một row mỗi id."
      },
      {
        "title": "NOT EXISTS",
        "text": "NOT EXISTS tìm row không có bản ghi khớp, hữu ích cho khách chưa mua hoặc sản phẩm chưa bán. Tránh bẫy NULL của NOT IN."
      },
      {
        "title": "ANY & ALL",
        "text": "ANY/ALL so sánh với tập kết quả subquery, hữu ích trong một số bài toán nhưng không được SQLite hỗ trợ. Với lộ trình DA này, ưu tiên EXISTS và aggregate subquery."
      }
    ],
    "example": "-- Customer chưa từng có order đã thanh toán\nSELECT c.id, c.name\nFROM customers AS c\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders AS o\n  WHERE o.customer_id = c.id\n    AND o.status = 'đã thanh toán'\n);",
    "notes": [
      "SELECT 1 trong EXISTS chỉ thể hiện kiểm tra tồn tại, không đếm số order.",
      "Thiếu điều kiện liên kết với query ngoài sẽ kiểm tra toàn table, không phải từng customer."
    ],
    "stages": [
      {
        "title": "Customers",
        "detail": "An, Bình, Chi"
      },
      {
        "title": "Paid orders",
        "detail": "An có 2 đơn, Bình có 1, Chi không có"
      },
      {
        "title": "NOT EXISTS",
        "detail": "Chỉ giữ Chi"
      }
    ]
  },
  {
    "id": "window",
    "language": "sql",
    "title": "Window function & xếp hạng",
    "category": "Phân tích nâng cao",
    "intro": "Window function tính trên một nhóm dòng liên quan nhưng vẫn giữ từng dòng chi tiết trong kết quả.",
    "sections": [
      {
        "title": "OVER và PARTITION BY",
        "text": "OVER xác định window dùng để tính toán; PARTITION BY chia dữ liệu thành các partition độc lập. Không có PARTITION BY thì toàn bộ tập dòng thuộc một partition."
      },
      {
        "title": "Các hàm xếp hạng",
        "text": "ROW_NUMBER đánh số khác nhau cho mỗi dòng; RANK cho đồng hạng và bỏ số tiếp theo; DENSE_RANK cho đồng hạng nhưng không bỏ số."
      },
      {
        "title": "Thứ tự trong và ngoài",
        "text": "ORDER BY trong OVER điều khiển thứ hạng hoặc phép tính. ORDER BY ở truy vấn ngoài điều khiển thứ tự hiển thị."
      },
      {
        "title": "Window frame & running total",
        "text": "SUM(amount) OVER (... ORDER BY ... ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) tính running total từ đầu partition đến row hiện tại. Với giá trị ORDER BY trùng, frame mặc định có thể bao gồm các peer; khai báo ROWS và key phụ khi muốn cộng từng row."
      }
    ],
    "example": "SELECT channel, amount,\n       DENSE_RANK() OVER (\n           PARTITION BY channel ORDER BY amount DESC\n       ) AS revenue_rank\nFROM orders;",
    "notes": [
      "Với các giá trị 400, 400, 200: RANK là 1,1,3; DENSE_RANK là 1,1,2.",
      "ROW_NUMBER cần khóa phụ để ổn định thứ tự khi đồng hạng."
    ],
    "stages": [
      {
        "title": "Nhóm theo channel",
        "detail": "Xét từng kênh riêng"
      },
      {
        "title": "Giá trị giảm dần",
        "detail": "400, 400, 200"
      },
      {
        "title": "DENSE_RANK",
        "detail": "1, 1, 2"
      }
    ]
  },
  {
    "id": "sql-lag",
    "language": "sql",
    "title": "LAG, LEAD & tăng trưởng theo kỳ",
    "category": "Phân tích nâng cao",
    "intro": "So sánh metric với kỳ trước hoặc kỳ sau mà vẫn giữ từng row của chuỗi thời gian.",
    "sections": [
      {
        "title": "Aggregate trước, window sau",
        "text": "Tổng hợp về đúng grain, ví dụ một row mỗi tháng và channel, rồi mới dùng LAG. LAG trên từng order không phải doanh thu tháng trước."
      },
      {
        "title": "LAG & LEAD",
        "text": "LAG lấy giá trị ở row trước, LEAD lấy row sau theo ORDER BY trong partition. Row đầu với LAG thường nhận NULL khi không đặt default."
      },
      {
        "title": "Growth rate",
        "text": "Growth = (current - previous) / previous. Dùng NULLIF(previous, 0) và số thực. LAG lấy row trước đang có dữ liệu, không bảo đảm đó là tháng liền trước nếu thiếu kỳ."
      }
    ],
    "example": "WITH monthly AS (\n  SELECT STRFTIME('%Y-%m', created_at) AS month,\n         SUM(amount) AS revenue\n  FROM orders WHERE status = 'đã thanh toán'\n  GROUP BY STRFTIME('%Y-%m', created_at)\n), compared AS (\n  SELECT month, revenue,\n         LAG(revenue) OVER (ORDER BY month) AS previous_revenue\n  FROM monthly\n)\nSELECT month, revenue, previous_revenue,\n       1.0 * (revenue - previous_revenue)\n         / NULLIF(previous_revenue, 0) AS growth_rate\nFROM compared ORDER BY month;",
    "notes": [
      "Nếu thiếu tháng, bổ sung calendar table trước khi tính month-over-month.",
      "NULL ở kỳ đầu hoặc mẫu số 0 không nên tự thay thành mức tăng trưởng 0%."
    ],
    "stages": [
      {
        "title": "Monthly revenue",
        "detail": "Tháng 1: 100; Tháng 2: 120; Tháng 3: 90"
      },
      {
        "title": "LAG",
        "detail": "previous: NULL, 100, 120"
      },
      {
        "title": "Growth rate",
        "detail": "NULL, 20%, -25%"
      }
    ]
  },
  {
    "id": "sql-quality",
    "language": "sql",
    "title": "Data quality & kiểm tra query",
    "category": "Phân tích nâng cao",
    "intro": "Một query chạy được chưa chắc trả metric đúng. DA cần kiểm tra grain, missing value, duplicate và tính hợp lý của kết quả.",
    "sections": [
      {
        "title": "Duplicate key",
        "text": "GROUP BY key HAVING COUNT(*) > 1 phát hiện key trùng. Không dùng DISTINCT để che vấn đề trước khi biết nguyên nhân."
      },
      {
        "title": "Missing & invalid value",
        "text": "Đếm NULL, giá trị âm, status ngoài danh sách và ngày không hợp lệ. Tách lỗi dữ liệu khỏi các trường hợp hợp lệ theo nghiệp vụ."
      },
      {
        "title": "Reconcile sau JOIN",
        "text": "So sánh số row, COUNT DISTINCT key và tổng metric trước/sau JOIN. JOIN one-to-many có thể làm tổng amount tăng dù không có giao dịch mới."
      },
      {
        "title": "Thứ tự logic của query",
        "text": "Mô hình đọc query: FROM/JOIN → WHERE → GROUP BY → HAVING → window function → SELECT/DISTINCT → ORDER BY → LIMIT. Đây là mô hình giải thích, không phải execution plan vật lý."
      }
    ],
    "example": "-- Key có bị trùng?\nSELECT id, COUNT(*) AS row_count\nFROM orders\nGROUP BY id HAVING COUNT(*) > 1;\n\n-- Kiểm tra population và dữ liệu thiếu\nSELECT COUNT(*) AS rows,\n       COUNT(DISTINCT id) AS unique_orders,\n       SUM(CASE WHEN amount IS NULL THEN 1 ELSE 0 END) AS missing_amount,\n       SUM(amount) AS total_amount\nFROM orders;",
    "notes": [
      "Đối chiếu một nhóm nhỏ bằng tay trước khi tin báo cáo toàn bộ dataset.",
      "Ghi rõ định nghĩa KPI, timezone, grain và điều kiện lọc để người khác tái lập được."
    ],
    "stages": [
      {
        "title": "Trước JOIN",
        "detail": "2 orders, total amount = 300"
      },
      {
        "title": "JOIN order_items",
        "detail": "Mỗi order có 2 item → 4 dòng"
      },
      {
        "title": "Reconcile",
        "detail": "SUM(order amount) = 600: metric bị nhân đôi"
      }
    ]
  },
  ...statisticsTopics
]
