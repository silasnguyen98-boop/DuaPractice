# Nguồn và kiểm chứng: Statistics for Data Analyst

Cập nhật: 08/10/2026. Mở rộng toàn bộ 15 bài hiện có; giữ tiêu đề, 5 nhóm và
đường dẫn `/theory/statistics`. Nội dung, dữ liệu, SVG và ví dụ tính tay tự biên soạn.
Không dịch lại hay sao chép hình từ tài liệu tham khảo.

## Cấu trúc mỗi bài

Bài toán → giải thích khái niệm → công thức MathML → ký hiệu và điều kiện →
hình minh họa → ví dụ tính từng bước → code Python chạy được → bài tập/lời giải.
Các SVG có tên truy cập và phần diễn giải bằng chữ. Bài 2, 4–15 có lựa chọn
kịch bản phù hợp với chủ đề; bài 1 và 3 dùng hình cố định.

## Nguồn khái niệm và công thức

- [OpenStax Introductory Statistics 2e](https://openstax.org/books/introductory-statistics-2e/pages/1-introduction): tổng thể, mẫu, kiểu biến và nền tảng mô tả.
- [NIST Measures of Location](https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm): mean, median và mode.
- [NIST Measures of Scale](https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm): variance, SD, IQR.
- [NIST Scatter Plot](https://www.itl.nist.gov/div898/handbook/eda/section3/scatterp.htm): kiểm tra hình dạng liên hệ, không tự suy ra nhân quả.
- [OpenStax Probability](https://openstax.org/books/introductory-statistics-2e/pages/3-1-terminology): biến cố, độc lập, điều kiện; ví dụ Bayes dùng tần suất tự xây dựng.
- [NIST Normal Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm): mật độ, chuẩn hóa và phân biệt xác suất điểm/khoảng.
- [OpenStax CLT](https://openstax.org/books/introductory-statistics-2e/pages/7-1-the-central-limit-theorem-for-sample-means-averages): phân phối của mean và điều kiện.
- [NIST Confidence Intervals](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm): khoảng cho mean và cách diễn giải độ bao phủ.
- [ASA Statement on P-Values](https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf): p-value không phải xác suất H0 đúng, không đo effect size và không đủ để ra quyết định.
- [NIST Two-Sample t-Test](https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm): Welch statistic, bậc tự do, độc lập/ghép cặp.
- [NIST Sample Size](https://www.itl.nist.gov/div898/handbook/prc/section2/prc222.htm): nguyên tắc lập kế hoạch theo effect, alpha, power. Công thức tỷ lệ ở bài 13 là xấp xỉ sơ bộ hai nhánh cân bằng, cần xác nhận bằng công cụ thiết kế phù hợp.
- [NIST Linear Least Squares](https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd141.htm): OLS và residual; không diễn giải hệ số như nhân quả nếu thiếu thiết kế.

## Mốc tính toán

- Bài 1: [980,1010,995,1215], tổng 4200, mean 1050, thay đổi 23,98%.
- Bài 4: [12,13,14,15,16,80], mean 25, median 14,5; thay 80→20 thì mean 15.
- Bài 5: [2,4,6], variance mẫu 4, SD mẫu 2; variance tổng thể 8/3.
- Bài 7: 10000 giao dịch, 1% gian lận, sensitivity 90%, FPR 5% → 90 cờ đúng,
  495 cờ sai, precision 15,3846%. Đây là giả định học tập.
- Bài 8: Binomial(5,0.2), P(2)=0.2048; Poisson(3), P(2)≈0.22404.
- Bài 9: mô phỏng lặp 1200 mẫu từ Exponential(1), n=1/5/30/100;
  mean tổng thể 1, SD 1, SE=1/sqrt(n). Code dùng Python seed 42; SVG dùng
  LCG seed 20261008, nên kết quả ngẫu nhiên hai môi trường không đồng nhất.
- Bài 10: Wald CI cho 120/1000 ≈ [9,9858%;14,0142%]. Đây là xấp xỉ,
  cần Wilson hoặc phương pháp khác khi điều kiện không phù hợp.
  SVG minh họa độ bao phủ bằng mean Normal, sigma đã biết=10, mu=50,
  24 khoảng z. Không nhầm hình này với khoảng Wald cho tỷ lệ.
- Bài 11: z=2.17, p hai phía≈0.0300, không phải P(H0 đúng).
- Bài 12: A=[18,20,19,21], B=[22,23,21,24]: Welch t≈−3.286, df=6.
  Bảng [[30,20],[20,30]] có expected=25 mọi ô, chi-square=4 với df=1,
  không dùng Yates correction trong ví dụ Python.
- Bài 13: baseline .10, alternative .12, alpha .05, power .80;
  công thức sơ bộ cho 3838.102... → làm tròn lên 3839 mỗi nhánh.
- Bài 14: 120/1000 vs 132/1000; delta .012, lift .10, p≈.419;
  CI delta dùng SE không gộp, xấp xỉ [−1,71;4,11] điểm phần trăm.
- Bài 15: X=[1,2,3,4,5], Y=[10,13,14,19,21]; slope 2.8, intercept 7,
  SSE=2.8, SST=81.2, R²≈0.965517.

## Giới hạn hiển thị và mô phỏng

- Các công thức có lời đọc bằng chữ, bảng giải thích ký hiệu/giả định.
- Histogram CLT giữ trục X [0,6), ghi số mean ngoài miền; trục Y tự co
  và ghi rõ tần suất tối đa, không dùng chiều cao để so tuyệt đối giữa kịch bản.
- Mô phỏng CI không bắt buộc đúng 95% bao phủ trong 24 lần.
- Bộ chọn n trong A/B là so kịch bản, không phải khuyến nghị optional stopping.
- SE, p-value và sample size đều ghi giả định độc lập, thiết kế và phương pháp.
- Không có ngưỡng n=30 áp dụng cho mọi phân phối.
