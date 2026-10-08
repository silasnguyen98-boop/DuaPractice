import type { Example } from './WorkedExample'

export const pythonWorkedExamples: Record<string, Example> = {
  "python-intro": {
    "question": "Từ ba đơn hàng, Python trả lời câu hỏi doanh thu đã thanh toán thế nào?",
    "columns": [
      "amount",
      "status"
    ],
    "input": [
      [
        300,
        "đã thanh toán"
      ],
      [
        200,
        "đã thanh toán"
      ],
      [
        100,
        "chờ thanh toán"
      ]
    ],
    "outputColumns": [
      "paid_revenue"
    ],
    "output": [
      [
        500
      ]
    ],
    "explanation": "Code giữ hai đơn đã thanh toán rồi cộng 300 + 200. Đơn chờ thanh toán không được tính; kết quả 500 có thể dùng trong báo cáo."
  },
  "python-values": {
    "question": "Chuỗi \"100\" nhân 3 khác số 100 nhân 3 thế nào?",
    "columns": [
      "input",
      "type"
    ],
    "input": [
      [
        "100",
        "str"
      ],
      [
        100,
        "int"
      ]
    ],
    "outputColumns": [
      "operation",
      "result"
    ],
    "output": [
      [
        "\"100\" * 3",
        "100100100"
      ],
      [
        "100 * 3",
        300
      ]
    ],
    "explanation": "Nhân chuỗi là lặp chuỗi; nhân số là phép tính. Cần đổi amount sang kiểu số trước khi tính revenue."
  },
  "python-string": {
    "question": "Email thay đổi thế nào qua strip() và lower()?",
    "columns": [
      "raw"
    ],
    "input": [
      [
        " An@EXAMPLE.COM "
      ]
    ],
    "outputColumns": [
      "strip",
      "lower"
    ],
    "output": [
      [
        "An@EXAMPLE.COM",
        "an@example.com"
      ]
    ],
    "explanation": "strip bỏ khoảng trắng đầu/cuối; lower chuyển chữ hoa thành chữ thường. Chuỗi gốc vẫn giữ nguyên nếu chưa gán lại."
  },
  "python-slicing": {
    "question": "Lấy top 2 từ [30, 80, 50, 20] bằng cách nào?",
    "columns": [
      "index",
      "amount"
    ],
    "input": [
      [
        0,
        30
      ],
      [
        1,
        80
      ],
      [
        2,
        50
      ],
      [
        3,
        20
      ]
    ],
    "outputColumns": [
      "sorted DESC",
      "top 2"
    ],
    "output": [
      [
        "80, 50, 30, 20",
        "80, 50"
      ]
    ],
    "explanation": "sorted(..., reverse=True) sắp giảm dần; [:2] giữ index 0 và 1. List đầu vào không bị sửa."
  },
  "python-comprehension": {
    "question": "Điều kiện >= 100 giữ gì trước khi cộng?",
    "columns": [
      "amount"
    ],
    "input": [
      [
        80
      ],
      [
        100
      ],
      [
        250
      ]
    ],
    "outputColumns": [
      "qualified",
      "sum"
    ],
    "output": [
      [
        "100, 250",
        350
      ]
    ],
    "explanation": "80 bị loại; 100 nằm đúng ngưỡng nên được giữ cùng 250. sum nhận hai giá trị và trả 350."
  },
  "python-import": {
    "question": "Một module được dùng qua namespace thế nào?",
    "columns": [
      "module",
      "input"
    ],
    "input": [
      [
        "math",
        16
      ],
      [
        "statistics",
        "10, 20, 30"
      ]
    ],
    "outputColumns": [
      "call",
      "output"
    ],
    "output": [
      [
        "math.sqrt(16)",
        4
      ],
      [
        "mean([10, 20, 30])",
        20
      ]
    ],
    "explanation": "math.sqrt truy cập hàm qua module math. mean được import trực tiếp nên gọi bằng tên mean."
  },
  "python-files": {
    "question": "Amount từ CSV có phải số ngay không?",
    "columns": [
      "channel",
      "amount từ CSV"
    ],
    "input": [
      [
        "Website",
        "100 (str)"
      ],
      [
        "Ứng dụng",
        "200 (str)"
      ]
    ],
    "outputColumns": [
      "sau float()",
      "total"
    ],
    "output": [
      [
        "100.0, 200.0",
        300
      ]
    ],
    "explanation": "CSV cung cấp string. float() đổi sang số trước khi sum; cộng trực tiếp chuỗi không phải phép tính doanh thu."
  },
  "python-errors": {
    "question": "Parse amount không hợp lệ nên tạo gì?",
    "columns": [
      "raw"
    ],
    "input": [
      [
        "100"
      ],
      [
        "oops"
      ],
      [
        "None"
      ]
    ],
    "outputColumns": [
      "parsed"
    ],
    "output": [
      [
        100
      ],
      [
        "None"
      ],
      [
        "None"
      ]
    ],
    "explanation": "Chuỗi số chuyển thành 100.0; oops và None gây exception dự kiến nên trả None. Không biến dữ liệu lỗi thành doanh thu 0."
  },
  "python-datetime": {
    "question": "Timestamp cuối tháng 1 có được giữ không?",
    "columns": [
      "timestamp"
    ],
    "input": [
      [
        "2026-01-31 23:59:59"
      ],
      [
        "2026-02-01 00:00:00"
      ]
    ],
    "outputColumns": [
      "trong [Tháng 1 1, Tháng 2 1)"
    ],
    "output": [
      [
        "True"
      ],
      [
        "False"
      ]
    ],
    "explanation": "Biên đầu được giữ, biên cuối bị loại. Quy tắc này giữ mọi timestamp tháng 1 mà không phải đoán thời điểm cuối ngày."
  },
  "pandas-filter": {
    "question": "Giữ đã thanh toán và amount >= 100 với boolean mask.",
    "columns": [
      "id",
      "amount",
      "status"
    ],
    "input": [
      [
        1,
        150,
        "đã thanh toán"
      ],
      [
        2,
        200,
        "chờ thanh toán"
      ],
      [
        3,
        80,
        "đã thanh toán"
      ]
    ],
    "outputColumns": [
      "id",
      "amount"
    ],
    "output": [
      [
        1,
        150
      ]
    ],
    "explanation": "#2 sai status; #3 dưới ngưỡng. & kết hợp hai mask, loc chọn row đúng và chỉ trả hai column."
  },
  "pandas-clean": {
    "question": "Giữ bản mới nhất của id 1 và parse amount.",
    "columns": [
      "id",
      "amount",
      "updated_at"
    ],
    "input": [
      [
        1,
        "100",
        "Tháng 1 1"
      ],
      [
        1,
        "120",
        "Tháng 1 2"
      ],
      [
        2,
        "oops",
        "Tháng 1 1"
      ]
    ],
    "outputColumns": [
      "id",
      "amount"
    ],
    "output": [
      [
        1,
        120
      ],
      [
        2,
        "NaN"
      ]
    ],
    "explanation": "Sort theo updated_at rồi keep last giữ 120 cho id 1. oops không parse thành số nên là NaN; đây là lỗi cần xem xét, không tự đổi thành 0."
  },
  "pandas-group": {
    "question": "agg và transform khác nhau ở số dòng thế nào?",
    "columns": [
      "channel",
      "amount"
    ],
    "input": [
      [
        "Website",
        300
      ],
      [
        "Website",
        200
      ],
      [
        "Ứng dụng",
        100
      ]
    ],
    "outputColumns": [
      "row gốc",
      "channel_total"
    ],
    "output": [
      [
        "Web/300",
        500
      ],
      [
        "Web/200",
        500
      ],
      [
        "App/100",
        100
      ]
    ],
    "explanation": "agg tạo hai row: Website 500 và Ứng dụng 100. transform giữ ba row, gắn 500 vào cả hai row Website; không cộng lại channel_total để tính tổng doanh thu."
  },
  "pandas-merge": {
    "question": "LEFT merge giữ gì khi customer 20 không có trong dimension?",
    "columns": [
      "order_id",
      "customer_id",
      "amount"
    ],
    "input": [
      [
        1,
        10,
        100
      ],
      [
        2,
        10,
        200
      ],
      [
        3,
        20,
        50
      ]
    ],
    "outputColumns": [
      "order_id",
      "name",
      "_merge"
    ],
    "output": [
      [
        1,
        "An",
        "both"
      ],
      [
        2,
        "An",
        "both"
      ],
      [
        3,
        "NaN",
        "left_only"
      ]
    ],
    "explanation": "Customer 10 có một dòng dimension nên hai order đều nhận An mà không nhân số dòng. Order #3 vẫn được giữ, name missing và _merge là left_only."
  },
  "pandas-reshape": {
    "question": "Đưa channel thành column sẽ tạo bảng gì?",
    "columns": [
      "month",
      "channel",
      "revenue"
    ],
    "input": [
      [
        "Tháng 1",
        "Website",
        100
      ],
      [
        "Tháng 1",
        "Ứng dụng",
        50
      ],
      [
        "Tháng 2",
        "Website",
        200
      ]
    ],
    "outputColumns": [
      "month",
      "Ứng dụng",
      "Website"
    ],
    "output": [
      [
        "Tháng 1",
        50,
        100
      ],
      [
        "Tháng 2",
        "NaN",
        200
      ]
    ],
    "explanation": "Tháng 1 có cả hai channel; Tháng 2 thiếu Ứng dụng nên ô đó missing. Layout wide không tự chứng minh missing nghĩa là doanh thu 0."
  },
  "pandas-time": {
    "question": "Moving average 3 observation xuất hiện từ lúc nào?",
    "columns": [
      "date",
      "revenue"
    ],
    "input": [
      [
        "Tháng 1 1",
        100
      ],
      [
        "Tháng 1 2",
        200
      ],
      [
        "Tháng 1 3",
        300
      ]
    ],
    "outputColumns": [
      "date",
      "ma3"
    ],
    "output": [
      [
        "Tháng 1 1",
        "NaN"
      ],
      [
        "Tháng 1 2",
        "NaN"
      ],
      [
        "Tháng 1 3",
        200
      ]
    ],
    "explanation": "Hai observation đầu chưa đủ min_periods=3. Đến Tháng 1 3, mean = (100 + 200 + 300)/3 = 200; tổng revenue tháng 1 là 600."
  },
  "python-eda": {
    "question": "Mean 56 có đại diện tốt cho phần lớn order không?",
    "columns": [
      "amount"
    ],
    "input": [
      [
        10
      ],
      [
        20
      ],
      [
        20
      ],
      [
        30
      ],
      [
        200
      ]
    ],
    "outputColumns": [
      "count",
      "mean",
      "median",
      "max"
    ],
    "output": [
      [
        5,
        56,
        20,
        200
      ]
    ],
    "explanation": "Bốn order không quá 30 nhưng order 200 kéo mean lên 56. Median 20 giúp thấy mức điển hình khác; chưa đủ bằng chứng để loại 200."
  },
  "pandas": {
    "question": "DataFrame và Series khác nhau thế nào?",
    "columns": [
      "team",
      "score"
    ],
    "input": [
      [
        "A",
        10
      ],
      [
        "B",
        5
      ],
      [
        "A",
        20
      ]
    ],
    "outputColumns": [
      "expression",
      "result"
    ],
    "output": [
      [
        "df.shape",
        "(3, 2)"
      ],
      [
        "df[\"score\"]",
        "Series: 10, 5, 20"
      ],
      [
        "df[[\"score\"]]",
        "DataFrame: 3 rows, 1 column"
      ],
      [
        "df[\"score\"].sum()",
        35
      ]
    ],
    "explanation": "Dataset có 3 row và 2 column. Một tên column trả Series; list tên column trả DataFrame. Tổng score là 10 + 5 + 20 = 35."
  }
}
