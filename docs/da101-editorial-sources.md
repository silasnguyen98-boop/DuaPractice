# Nguồn biên tập: DA101 – Data Analytics Fundamentals

Cập nhật: 08/10/2026. 16 bài viết theo 5 chuyên mục của syllabus người dùng:
3 bài tổng quan, 4 bài tư duy, 3 bài dữ liệu, 4 bài quy trình/diễn giải, 2 bài ứng dụng.
Nội dung và mọi ví dụ kinh doanh là bài học tự biên soạn, không phải dịch lại một nguồn.

## Nguồn tham khảo khái niệm

- [AWS — Data Analytics](https://aws.amazon.com/what-is/data-analytics/): bốn loại descriptive, diagnostic, predictive và prescriptive. Không dùng các khẳng định dự báo chắc chắn hay suy luận nhân quả tự động.
- [NIST — EDA](https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm): khám phá cấu trúc, phân phối, bất thường và giả định trước phân tích/mô hình hóa.
- [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework): completeness, accuracy, consistency, validity, uniqueness, timeliness; chất lượng phù hợp với mục đích sử dụng.
- [PostgreSQL — Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html): primary key và foreign key; không coi CSV tự có ràng buộc của database.
- [Atlassian — 5 Whys](https://www.atlassian.com/team-playbook/plays/5-whys): khung hỏi nguyên nhân; bài nhấn mạnh mỗi bước phải có bằng chứng.

Phân biệt DA/BA/DS/DE là cách mô tả trách nhiệm phổ biến để học, không phải chuẩn chức danh áp dụng cho mọi công ty. Các metric ngành là ví dụ minh họa, không phải benchmark, chuẩn pháp lý hoặc khuyến nghị tài chính.

## Hợp đồng dữ liệu case cửa hàng An

- Hai kỳ liên tiếp, mỗi kỳ đủ 30 ngày, cùng múi giờ.
- Doanh thu chỉ từ Paid; mô hình chưa có hoàn tiền, thuế hoặc giảm giá.
- Web và App là hai nhóm phiên không trùng; mỗi phiên tối đa một đơn Paid.
- Session conversion = phiên có ít nhất một đơn Paid / tổng phiên hợp lệ.
  Với giả định một đơn mỗi phiên của case, số đơn Paid bằng số phiên chuyển đổi.
- AOV = tổng doanh thu Paid / số order_id Paid duy nhất.
- Kỳ trước: Web 10000 phiên, 500 đơn; App 5000 phiên, 250 đơn.
- Kỳ này: Web 10000 phiên, 300 đơn; App 5000 phiên, 250 đơn.
- AOV mọi dòng là 200000 VND.
- Tổng doanh thu 150 → 110 triệu; giảm 40 triệu, 26,67%.
- Web 100 → 60 triệu; App 50 → 50 triệu.
- Conversion Web 5% → 3%: giảm 2 điểm phần trăm, 40% tương đối.
- Kịch bản Web về 5% khi traffic/AOV giữ nguyên là thêm 40 triệu doanh thu,
  không phải dự báo, lợi nhuận hoặc mức phục hồi chắc chắn.

Tình tiết lỗi xác thực/tái hiện trong bài 16 là giả lập bổ sung để minh họa
bước điều tra, không phải kết quả suy ra từ bảng bốn dòng. Phân rã số học,
phát hiện tương quan và biến động trước/sau không tự chứng minh nhân quả.

## Trải nghiệm học

DA101 có tab riêng ở `/theory/da101`, mục lục 5 nhóm, bộ chọn bài trên di động,
điều hướng trước/sau, bài tập có lời giải, bảng minh họa và công cụ tương tác
chọn Tất cả/Web/App ở bài 4, 7, 16. Không yêu cầu SQL để đọc phần nền tảng.
