# Nguồn biên tập: Google Sheets for Data Analyst

Cập nhật: 08/10/2026. Series gồm 14 bài, 4 chuyên mục theo syllabus của người dùng.
Nội dung, bộ đơn hàng, sản phẩm và nhận xét kinh doanh là ví dụ học tập tự xây dựng.
Đơn vị tiền trong bộ mẫu: nghìn đồng. Một dòng Orders là một đơn có một sản phẩm.
Doanh thu chỉ ghi nhận Paid; chưa mô hình hóa hoàn tiền, thuế hoặc giảm giá.

## Bài tham khảo định hướng

- [Just Arnav — Google Sheets as a data analysis tool](https://medium.com/@justarnav/google-sheets-as-a-data-analysis-tool-way-more-powerful-than-i-gave-it-credit-for-a29b34261c38): gợi ý phạm vi về QUERY, ARRAYFORMULA và hiệu suất. Không sao chép bài, không dùng các ngưỡng số dòng hay cam kết hiệu suất của bài làm giới hạn chung.

## Nguồn kỹ thuật chính thức

- [Danh mục hàm](https://support.google.com/docs/table/25273?hl=en): cú pháp các nhóm hàm điều kiện, ngày, mảng và lookup.
- [XLOOKUP](https://support.google.com/docs/answer/12405947?hl=en): exact match và giá trị khi không tìm thấy.
- [FILTER](https://support.google.com/docs/answer/3093197?hl=en): các vùng điều kiện và kết quả không có dòng.
- [QUERY](https://support.google.com/docs/answer/3093343?hl=en): tham số header và cột hỗn hợp kiểu dữ liệu.
- [Query Language](https://developers.google.com/chart/interactive/docs/querylanguage): SELECT, WHERE, GROUP BY, ORDER BY, PIVOT, LABEL; phân biệt với SQL trong database.
- [Pivot Table](https://support.google.com/docs/answer/1272900?hl=en): cấu hình Rows, Columns, Values, Filters; cập nhật khi nguồn thay đổi.
- [STDEV](https://support.google.com/docs/answer/3094054?hl=en): độ lệch chuẩn mẫu.
- [PERCENTILE](https://support.google.com/docs/answer/3094093?hl=en): nội suy percentile.
- [Các loại biểu đồ](https://support.google.com/docs/answer/190718?hl=en): mục đích line, bar và scatter.
- [Giới hạn tệp](https://support.google.com/drive/answer/37603?hl=en): giới hạn dung lượng thay đổi theo sản phẩm. Bài học không đóng đinh một con số hay coi giới hạn là mức chạy nhanh.

## Cách tái tạo ví dụ

Tải Orders.csv và Products.csv từ mỗi bài. Nhập vào hai tab cùng tên từ A1;
chọn locale United States, chuyển chuỗi thành số/ngày khi nhập, kiểm tra kiểu ngày.
I1 = revenue, J1 = month; đặt hai ARRAYFORMULA được hướng dẫn vào I2 và J2.
Các công thức ví dụ cùng bảng nằm trên Orders; công thức tổng hợp có tên tab nguồn.
Vùng dữ liệu dự phòng kết thúc ở dòng 1000 và phải mở rộng đồng bộ nếu vượt giới hạn.
Không có trình thực thi Google Sheets trên website; bài có công thức để sao chép,
CSV tải xuống, bài tập và kết quả đối chiếu để làm trong Google Sheets.

## Các mốc đối soát

- 6 đơn, 5 Paid, 4 khách Paid; tổng Paid 2300.
- Tháng 1: 500 / 2 đơn = AOV 250; tháng 2: 1800 / 3 đơn = AOV 600.
- Revenue MoM 260%, số đơn +50%, AOV +140%.
- Bắc 500, Nam 1800; P01 500, P02 900, P03 900.
- Mean đơn Paid 460, median 300, sample SD khoảng 288,10; Q1 300, Q3 600.
- O06 đóng góp 50% doanh thu tháng 2, 69,23% mức tăng tháng 2 so với tháng 1.
