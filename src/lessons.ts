export type TestCase = {
  expression: string
  expected: unknown
  label: string
}

export type Lesson = {
  id: string
  track: string
  number: string
  title: string
  unit: string
  duration: string
  concept: string
  prompt: string
  instruction: string
  hint: string
  answer: string
  starter: string
  tests: TestCase[]
  columns: string[]
  rows: string[][]
  goal: string
  packages?: string[]
  plotting?: boolean
  difficulty?: string
  constraints?: string[]
  explanation?: string
  complexity?: string
}

export const tracks = [
  {
    "id": "python",
    "title": "Python cơ bản",
    "short": "Python",
    "description": "Luyện biến, hàm, điều kiện, vòng lặp và dictionary để viết Python vững hơn."
  },
  {
    "id": "logic",
    "title": "Tư duy logic",
    "short": "Logic",
    "description": "Luyện chia nhỏ vấn đề, nhận ra quy luật và xử lý trường hợp biên qua các bài ngắn."
  },
  {
    "id": "libraries",
    "title": "Thư viện & biểu đồ DA",
    "short": "Thư viện DA",
    "description": "Dùng NumPy, pandas và Matplotlib để xử lý dữ liệu, tổng hợp và vẽ biểu đồ."
  },
  {
    "id": "cases",
    "title": "Giải case",
    "short": "Giải case",
    "description": "Giải bài kiểu LeetCode với ví dụ, ràng buộc, kiểm thử và phân tích độ phức tạp."
  },
  {
    "id": "ml",
    "title": "Machine Learning nhập môn",
    "short": "ML nhập môn",
    "description": "Làm quen chia dữ liệu train/test, hồi quy tuyến tính và đánh giá dự đoán với scikit-learn."
  }
]

export const lessons: Lesson[] = [
  {
    "id": "py-functions",
    "number": "01",
    "title": "Biến & hàm",
    "track": "python",
    "unit": "Python cơ bản",
    "duration": "12 phút",
    "concept": "Biến lưu dữ liệu; `def` khai báo hàm và `return` trả kết quả. Dùng f-string để đưa giá trị biến vào chuỗi.",
    "prompt": "Biến & hàm",
    "instruction": "Viết greet(name), trả về lời chào theo mẫu \"Xin chào, Python!\" khi name là \"Python\".",
    "hint": "Dùng return f\"Xin chào, {name}!\".",
    "starter": "def greet(name):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(greet(\"Python\"))",
    "answer": "def greet(name):\n    return f\"Xin chào, {name}!\"\n\nprint(greet(\"Python\"))",
    "tests": [
      {
        "expression": "greet(\"Python\")",
        "expected": "Xin chào, Python!",
        "label": "Tên Python"
      },
      {
        "expression": "greet(\"An\")",
        "expected": "Xin chào, An!",
        "label": "Tên An"
      },
      {
        "expression": "greet(\"\")",
        "expected": "Xin chào, !",
        "label": "Chuỗi rỗng"
      }
    ],
    "columns": [
      "name",
      "Kết quả"
    ],
    "rows": [
      [
        "Python",
        "Xin chào, Python!"
      ],
      [
        "An",
        "Xin chào, An!"
      ]
    ],
    "goal": "Hiểu đầu vào, đầu ra và cách gọi lại một hàm."
  },
  {
    "id": "py-conditions",
    "number": "02",
    "title": "Điều kiện if / else",
    "track": "python",
    "unit": "Python cơ bản",
    "duration": "12 phút",
    "concept": "Toán tử `%` lấy phần dư. So sánh `==` tạo giá trị boolean `True` hoặc `False`; `if` chọn nhánh theo điều kiện.",
    "prompt": "Điều kiện if / else",
    "instruction": "Viết is_even(number), trả về True nếu số nguyên number là số chẵn, ngược lại trả về False.",
    "hint": "Kiểm tra number % 2 == 0.",
    "starter": "def is_even(number):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(is_even(12))",
    "answer": "def is_even(number):\n    if number % 2 == 0:\n        return True\n    return False\n\nprint(is_even(12))",
    "tests": [
      {
        "expression": "is_even(12)",
        "expected": true,
        "label": "Số chẵn"
      },
      {
        "expression": "is_even(7)",
        "expected": false,
        "label": "Số lẻ"
      },
      {
        "expression": "is_even(0)",
        "expected": true,
        "label": "Số 0"
      },
      {
        "expression": "is_even(-4)",
        "expected": true,
        "label": "Số âm"
      }
    ],
    "columns": [
      "number",
      "Kết quả"
    ],
    "rows": [
      [
        "12",
        "True"
      ],
      [
        "7",
        "False"
      ]
    ],
    "goal": "Luyện biểu thức điều kiện và trả về boolean."
  },
  {
    "id": "py-loops",
    "number": "03",
    "title": "List & vòng lặp",
    "track": "python",
    "unit": "Python cơ bản",
    "duration": "12 phút",
    "concept": "`list` lưu nhiều giá trị. Dùng `for` để duyệt từng phần tử và biến tích lũy để cộng dồn.",
    "prompt": "List & vòng lặp",
    "instruction": "Viết sum_list(numbers), tính tổng danh sách số bằng vòng lặp for. Danh sách rỗng trả về 0.",
    "hint": "Bắt đầu total = 0, cộng từng number vào total rồi return total.",
    "starter": "def sum_list(numbers):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(sum_list([2, 4, 6]))",
    "answer": "def sum_list(numbers):\n    total = 0\n    for number in numbers:\n        total += number\n    return total\n\nprint(sum_list([2, 4, 6]))",
    "tests": [
      {
        "expression": "sum_list([2,4,6])",
        "expected": 12,
        "label": "Ba số"
      },
      {
        "expression": "sum_list([-2,2,5])",
        "expected": 5,
        "label": "Có số âm"
      },
      {
        "expression": "sum_list([])",
        "expected": 0,
        "label": "Danh sách rỗng"
      }
    ],
    "columns": [
      "numbers",
      "Kết quả"
    ],
    "rows": [
      [
        "[2, 4, 6]",
        "12"
      ],
      [
        "[]",
        "0"
      ]
    ],
    "goal": "Vòng lặp là nền tảng cho thao tác xử lý từng dòng dữ liệu."
  },
  {
    "id": "py-dicts",
    "number": "04",
    "title": "Dictionary & đếm tần suất",
    "track": "python",
    "unit": "Python cơ bản",
    "duration": "12 phút",
    "concept": "`dict` lưu cặp khóa–giá trị. Phương thức `get(key, 0)` lấy giá trị hiện tại, dùng 0 khi khóa chưa tồn tại.",
    "prompt": "Dictionary & đếm tần suất",
    "instruction": "Viết count_items(items), trả về dict đếm số lần xuất hiện của từng chuỗi. Giữ nguyên chữ hoa, chữ thường; danh sách rỗng trả về {}.",
    "hint": "Với mỗi item: counts[item] = counts.get(item, 0) + 1.",
    "starter": "def count_items(items):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(count_items([\"online\", \"store\", \"online\"]))",
    "answer": "def count_items(items):\n    counts = {}\n    for item in items:\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n\nprint(count_items([\"online\", \"store\", \"online\"]))",
    "tests": [
      {
        "expression": "count_items([\"online\",\"store\",\"online\"])",
        "expected": {
          "online": 2,
          "store": 1
        },
        "label": "Giá trị lặp"
      },
      {
        "expression": "count_items([])",
        "expected": {},
        "label": "Danh sách rỗng"
      },
      {
        "expression": "count_items([\"A\",\"a\",\"A\"])",
        "expected": {
          "A": 2,
          "a": 1
        },
        "label": "Phân biệt hoa thường"
      }
    ],
    "columns": [
      "items",
      "Kết quả"
    ],
    "rows": [
      [
        "online, store, online",
        "online: 2, store: 1"
      ]
    ],
    "goal": "Dùng bảng đếm để tổng hợp dữ liệu theo nhóm."
  },
  {
    "id": "logic-palindrome",
    "number": "05",
    "track": "logic",
    "unit": "Tư duy logic",
    "title": "Chuỗi đối xứng",
    "duration": "12 phút",
    "concept": "Một chuỗi đối xứng đọc xuôi hay ngược đều giống nhau. Dùng `[::-1]` đảo chuỗi, hoặc so sánh ký tự từ hai đầu.",
    "prompt": "Chuỗi đối xứng",
    "instruction": "Viết is_palindrome(text), bỏ khoảng trắng ở hai đầu và chuyển chữ thường trước khi kiểm tra đối xứng. Khoảng trắng bên trong và dấu câu được giữ nguyên. Chuỗi rỗng trả về True.",
    "hint": "cleaned = text.strip().lower(); so sánh cleaned với cleaned[::-1].",
    "starter": "def is_palindrome(text):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(is_palindrome(\"  Madam  \"))",
    "answer": "def is_palindrome(text):\n    cleaned = text.strip().lower()\n    return cleaned == cleaned[::-1]\n\nprint(is_palindrome(\"  Madam  \"))",
    "tests": [
      {
        "expression": "is_palindrome(\"  Madam  \")",
        "expected": true,
        "label": "Chuẩn hóa đầu vào"
      },
      {
        "expression": "is_palindrome(\"python\")",
        "expected": false,
        "label": "Không đối xứng"
      },
      {
        "expression": "is_palindrome(\"\")",
        "expected": true,
        "label": "Chuỗi rỗng"
      },
      {
        "expression": "is_palindrome(\"a b a\")",
        "expected": true,
        "label": "Giữ khoảng trắng bên trong"
      }
    ],
    "columns": [
      "input",
      "output"
    ],
    "rows": [
      [
        "  Madam  ",
        "True"
      ],
      [
        "python",
        "False"
      ]
    ],
    "goal": "Xác định chính xác quy tắc chuẩn hóa trước khi viết thuật toán."
  },
  {
    "id": "logic-unique",
    "number": "06",
    "track": "logic",
    "unit": "Tư duy logic",
    "title": "Loại trùng, giữ thứ tự",
    "duration": "12 phút",
    "concept": "`set` tra cứu giá trị đã gặp. Kết hợp một set và một list để loại trùng mà vẫn giữ thứ tự xuất hiện đầu tiên.",
    "prompt": "Loại trùng, giữ thứ tự",
    "instruction": "Viết unique_in_order(values), trả về danh sách số nguyên không trùng, giữ thứ tự xuất hiện đầu tiên. Danh sách rỗng trả về [].",
    "hint": "Duyệt values; chỉ thêm vào result nếu value chưa có trong seen.",
    "starter": "def unique_in_order(values):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(unique_in_order([3, 1, 3, 2, 1]))",
    "answer": "def unique_in_order(values):\n    seen = set()\n    result = []\n    for value in values:\n        if value not in seen:\n            seen.add(value)\n            result.append(value)\n    return result\n\nprint(unique_in_order([3, 1, 3, 2, 1]))",
    "tests": [
      {
        "expression": "unique_in_order([3,1,3,2,1])",
        "expected": [
          3,
          1,
          2
        ],
        "label": "Giữ thứ tự"
      },
      {
        "expression": "unique_in_order([])",
        "expected": [],
        "label": "Mảng rỗng"
      },
      {
        "expression": "unique_in_order([0,-1,0,-1,2])",
        "expected": [
          0,
          -1,
          2
        ],
        "label": "Số âm và 0"
      },
      {
        "expression": "unique_in_order([5,5,5])",
        "expected": [
          5
        ],
        "label": "Tất cả trùng"
      }
    ],
    "columns": [
      "values",
      "output"
    ],
    "rows": [
      [
        "[3, 1, 3, 2, 1]",
        "[3, 1, 2]"
      ]
    ],
    "goal": "Phân biệt yêu cầu loại trùng với yêu cầu sắp xếp dữ liệu."
  },
  {
    "id": "logic-missing",
    "number": "07",
    "track": "logic",
    "unit": "Tư duy logic",
    "title": "Tìm số bị thiếu",
    "duration": "12 phút",
    "concept": "Danh sách chứa các số từ 0 đến n, thiếu đúng một số và không có số trùng. Hiệu giữa tổng dãy đầy đủ và tổng thực tế là số bị thiếu.",
    "prompt": "Tìm số bị thiếu",
    "instruction": "Viết missing_number(nums). Với n = len(nums), nums gồm n số nguyên khác nhau thuộc [0, n], thiếu đúng một số. Trả về số đó; danh sách rỗng trả về 0.",
    "hint": "Tổng 0 đến n là n * (n + 1) // 2.",
    "starter": "def missing_number(nums):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(missing_number([3, 0, 1]))",
    "answer": "def missing_number(nums):\n    n = len(nums)\n    return n * (n + 1) // 2 - sum(nums)\n\nprint(missing_number([3, 0, 1]))",
    "tests": [
      {
        "expression": "missing_number([3,0,1])",
        "expected": 2,
        "label": "Thiếu ở giữa"
      },
      {
        "expression": "missing_number([0,1])",
        "expected": 2,
        "label": "Thiếu số cuối"
      },
      {
        "expression": "missing_number([1,2])",
        "expected": 0,
        "label": "Thiếu số 0"
      },
      {
        "expression": "missing_number([])",
        "expected": 0,
        "label": "Mảng rỗng"
      }
    ],
    "columns": [
      "nums",
      "output"
    ],
    "rows": [
      [
        "[3, 0, 1]",
        "2"
      ]
    ],
    "goal": "Dùng quy luật toán học để giảm số bước xử lý."
  },
  {
    "id": "logic-brackets",
    "number": "08",
    "track": "logic",
    "unit": "Tư duy logic",
    "title": "Kiểm tra dấu ngoặc",
    "duration": "12 phút",
    "concept": "Stack hoạt động theo nguyên tắc vào sau, ra trước. Khi gặp ngoặc đóng, kiểm tra nó có khớp ngoặc mở gần nhất hay không.",
    "prompt": "Kiểm tra dấu ngoặc",
    "instruction": "Viết valid_brackets(text) cho chuỗi chỉ chứa các ký tự ()[]{}. Trả về True nếu mọi dấu ngoặc được đóng đúng loại và đúng thứ tự. Chuỗi rỗng hợp lệ.",
    "hint": "Dùng stack; dict pairs ánh xạ ngoặc đóng sang ngoặc mở. Cuối cùng stack phải rỗng.",
    "starter": "def valid_brackets(text):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(valid_brackets(\"{[()]}\"))",
    "answer": "def valid_brackets(text):\n    stack = []\n    pairs = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n    for char in text:\n        if char in \"([{\":\n            stack.append(char)\n        elif not stack or stack.pop() != pairs[char]:\n            return False\n    return not stack\n\nprint(valid_brackets(\"{[()]}\"))",
    "tests": [
      {
        "expression": "valid_brackets(\"{[()]}\")",
        "expected": true,
        "label": "Ngoặc lồng nhau"
      },
      {
        "expression": "valid_brackets(\"([)]\")",
        "expected": false,
        "label": "Sai thứ tự"
      },
      {
        "expression": "valid_brackets(\"((\")",
        "expected": false,
        "label": "Chưa đóng ngoặc"
      },
      {
        "expression": "valid_brackets(\")\")",
        "expected": false,
        "label": "Không có ngoặc mở"
      },
      {
        "expression": "valid_brackets(\"\")",
        "expected": true,
        "label": "Chuỗi rỗng"
      }
    ],
    "columns": [
      "text",
      "output"
    ],
    "rows": [
      [
        "{[()]}",
        "True"
      ],
      [
        "([)]",
        "False"
      ]
    ],
    "goal": "Theo dõi trạng thái từng bước để phát hiện lỗi cấu trúc.",
    "difficulty": "Vừa"
  },
  {
    "id": "logic-second",
    "number": "09",
    "track": "logic",
    "unit": "Tư duy logic",
    "title": "Số lớn thứ hai",
    "duration": "12 phút",
    "concept": "Cần phân biệt số lớn thứ hai với phần tử đứng thứ hai sau khi sắp xếp. Giá trị trùng chỉ được tính một lần.",
    "prompt": "Số lớn thứ hai",
    "instruction": "Viết second_largest(nums), trả về giá trị lớn thứ hai khác biệt trong danh sách số nguyên. Nếu có ít hơn hai giá trị khác biệt, trả về None.",
    "hint": "Loại trùng bằng set(), sắp xếp giảm dần rồi lấy phần tử thứ hai nếu có.",
    "starter": "def second_largest(nums):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(second_largest([5, 5, 3, 1]))",
    "answer": "def second_largest(nums):\n    values = sorted(set(nums), reverse=True)\n    return values[1] if len(values) >= 2 else None\n\nprint(second_largest([5, 5, 3, 1]))",
    "tests": [
      {
        "expression": "second_largest([5,5,3,1])",
        "expected": 3,
        "label": "Giá trị lớn nhất trùng"
      },
      {
        "expression": "second_largest([-1,-4,-2])",
        "expected": -2,
        "label": "Toàn số âm"
      },
      {
        "expression": "second_largest([5,5])",
        "expected": null,
        "label": "Một giá trị khác biệt"
      },
      {
        "expression": "second_largest([])",
        "expected": null,
        "label": "Mảng rỗng"
      }
    ],
    "columns": [
      "nums",
      "output"
    ],
    "rows": [
      [
        "[5, 5, 3, 1]",
        "3"
      ]
    ],
    "goal": "Luyện đọc đúng yêu cầu và xác định trường hợp không có đáp án."
  },
  {
    "id": "lib-numpy",
    "number": "10",
    "title": "NumPy: thống kê mảng",
    "track": "libraries",
    "unit": "Thư viện & biểu đồ DA",
    "duration": "12 phút",
    "concept": "NumPy xử lý dữ liệu số bằng mảng. `np.mean()` tính trung bình, `np.median()` tính trung vị — trung vị ít bị ảnh hưởng bởi giá trị quá lớn.",
    "prompt": "NumPy: thống kê mảng",
    "instruction": "Viết describe_values(values), trả về dict {\"mean\": ..., \"median\": ...}, làm tròn mỗi giá trị 2 chữ số. Với danh sách rỗng, trả về cả hai giá trị bằng 0.",
    "hint": "Tạo np.array(values, dtype=float), dùng float() để chuyển số NumPy về số Python.",
    "starter": "import numpy as np\n\ndef describe_values(values):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(describe_values([100, 120, 130, 150, 1000]))",
    "answer": "import numpy as np\n\ndef describe_values(values):\n    if not values:\n        return {\"mean\": 0, \"median\": 0}\n    data = np.array(values, dtype=float)\n    return {\"mean\": round(float(np.mean(data)), 2),\n            \"median\": round(float(np.median(data)), 2)}\n\nprint(describe_values([100, 120, 130, 150, 1000]))",
    "tests": [
      {
        "expression": "describe_values([100,120,130,150,1000])",
        "expected": {
          "mean": 300,
          "median": 130
        },
        "label": "Có giá trị rất lớn"
      },
      {
        "expression": "describe_values([])",
        "expected": {
          "mean": 0,
          "median": 0
        },
        "label": "Mảng rỗng"
      },
      {
        "expression": "describe_values([1,2,3,4])",
        "expected": {
          "mean": 2.5,
          "median": 2.5
        },
        "label": "Số phần tử chẵn"
      }
    ],
    "columns": [
      "values"
    ],
    "rows": [
      [
        "100"
      ],
      [
        "120"
      ],
      [
        "130"
      ],
      [
        "150"
      ],
      [
        "1000"
      ]
    ],
    "goal": "So sánh trung bình và trung vị để nhận ra tác động của giá trị ngoại lệ.",
    "packages": [
      "numpy"
    ]
  },
  {
    "id": "lib-pandas-clean",
    "number": "11",
    "title": "pandas: làm sạch DataFrame",
    "track": "libraries",
    "unit": "Thư viện & biểu đồ DA",
    "duration": "12 phút",
    "concept": "`DataFrame` là bảng dữ liệu của pandas. `dropna()` bỏ dòng thiếu và `drop_duplicates()` loại dòng trùng theo các cột chỉ định.",
    "prompt": "pandas: làm sạch DataFrame",
    "instruction": "Viết clean_customers(records), tạo DataFrame từ danh sách dict có cột id và name. Bỏ dòng thiếu name, bỏ khoảng trắng ở hai đầu name, bỏ tên rỗng; sau đó giữ dòng đầu tiên cho mỗi id. Trả về list dict với id và name. Danh sách rỗng trả về [].",
    "hint": "Dùng pd.DataFrame(records, columns=[\"id\", \"name\"]), dropna(subset=[\"name\"]), .str.strip(), lọc name != \"\", rồi drop_duplicates(subset=[\"id\"]).",
    "starter": "import pandas as pd\n\nrecords = [\n    {\"id\": 1, \"name\": \"  An \"},\n    {\"id\": 1, \"name\": \"An\"},\n    {\"id\": 2, \"name\": None},\n    {\"id\": 3, \"name\": \"Linh\"},\n]\n\ndef clean_customers(records):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(clean_customers(records))",
    "answer": "import pandas as pd\n\nrecords = [\n    {\"id\": 1, \"name\": \"  An \"},\n    {\"id\": 1, \"name\": \"An\"},\n    {\"id\": 2, \"name\": None},\n    {\"id\": 3, \"name\": \"Linh\"},\n]\n\ndef clean_customers(records):\n    df = pd.DataFrame(records, columns=[\"id\", \"name\"])\n    df = df.dropna(subset=[\"name\"]).copy()\n    df[\"name\"] = df[\"name\"].str.strip()\n    df = df[df[\"name\"] != \"\"]\n    return df.drop_duplicates(subset=[\"id\"])[[\"id\", \"name\"]].to_dict(\"records\")\n\nprint(clean_customers(records))",
    "tests": [
      {
        "expression": "clean_customers(records)",
        "expected": [
          {
            "id": 1,
            "name": "An"
          },
          {
            "id": 3,
            "name": "Linh"
          }
        ],
        "label": "Thiếu & trùng dữ liệu"
      },
      {
        "expression": "clean_customers([])",
        "expected": [],
        "label": "Bảng rỗng"
      },
      {
        "expression": "clean_customers([{\"id\":1,\"name\":\" \"},{\"id\":1,\"name\":\" Mai \"}])",
        "expected": [
          {
            "id": 1,
            "name": "Mai"
          }
        ],
        "label": "Lọc tên rỗng trước khi bỏ trùng"
      }
    ],
    "columns": [
      "id",
      "name"
    ],
    "rows": [
      [
        "1",
        "  An "
      ],
      [
        "1",
        "An"
      ],
      [
        "2",
        "None"
      ],
      [
        "3",
        "Linh"
      ]
    ],
    "goal": "Một khách hàng chỉ xuất hiện một lần trong bảng đã làm sạch.",
    "packages": [
      "pandas"
    ]
  },
  {
    "id": "lib-pandas-group",
    "number": "12",
    "title": "pandas: groupby & tổng hợp",
    "track": "libraries",
    "unit": "Thư viện & biểu đồ DA",
    "duration": "12 phút",
    "concept": "`groupby()` gom dòng theo nhóm, `sum()` cộng giá trị trong từng nhóm. `to_dict()` chuyển Series kết quả thành dict.",
    "prompt": "pandas: groupby & tổng hợp",
    "instruction": "Viết pandas_revenue(records), tạo DataFrame từ list dict có channel và amount, tổng hợp tổng amount theo channel rồi trả về dict. Các dòng đầu vào đã hợp lệ; danh sách rỗng trả về {}.",
    "hint": "pd.DataFrame(records, columns=[\"channel\", \"amount\"]).groupby(\"channel\")[\"amount\"].sum().to_dict()",
    "starter": "import pandas as pd\n\nrecords = [\n    {\"channel\": \"online\", \"amount\": 450},\n    {\"channel\": \"store\", \"amount\": 300},\n    {\"channel\": \"online\", \"amount\": 750},\n]\n\ndef pandas_revenue(records):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(pandas_revenue(records))",
    "answer": "import pandas as pd\n\nrecords = [\n    {\"channel\": \"online\", \"amount\": 450},\n    {\"channel\": \"store\", \"amount\": 300},\n    {\"channel\": \"online\", \"amount\": 750},\n]\n\ndef pandas_revenue(records):\n    if not records:\n        return {}\n    df = pd.DataFrame(records)\n    return df.groupby(\"channel\")[\"amount\"].sum().to_dict()\n\nprint(pandas_revenue(records))",
    "tests": [
      {
        "expression": "pandas_revenue(records)",
        "expected": {
          "online": 1200,
          "store": 300
        },
        "label": "Hai kênh bán hàng"
      },
      {
        "expression": "pandas_revenue([])",
        "expected": {},
        "label": "Bảng rỗng"
      },
      {
        "expression": "pandas_revenue([{\"channel\":\"app\",\"amount\":10.5},{\"channel\":\"app\",\"amount\":20}])",
        "expected": {
          "app": 30.5
        },
        "label": "Giá trị thập phân"
      }
    ],
    "columns": [
      "channel",
      "amount"
    ],
    "rows": [
      [
        "online",
        "450"
      ],
      [
        "store",
        "300"
      ],
      [
        "online",
        "750"
      ]
    ],
    "goal": "Thay thao tác cộng dồn thủ công bằng phép tổng hợp bảng trong pandas.",
    "packages": [
      "pandas"
    ]
  },
  {
    "id": "lib-matplotlib",
    "number": "13",
    "title": "Matplotlib: vẽ biểu đồ",
    "track": "libraries",
    "unit": "Thư viện & biểu đồ DA",
    "duration": "12 phút",
    "concept": "`plt.subplots()` tạo Figure và Axes. Dùng `ax.bar()` để vẽ biểu đồ cột, thêm tiêu đề và nhãn trục để người đọc hiểu số liệu.",
    "prompt": "Matplotlib: vẽ biểu đồ",
    "instruction": "Viết plot_revenue(channels, revenues), trả về Figure có một biểu đồ cột: mỗi kênh một cột đúng chiều cao; tiêu đề \"Revenue by channel\", trục X \"Channel\", trục Y \"Revenue\". Không gọi plt.close() trong hàm. Bấm Chạy thử để xem biểu đồ bên dưới.",
    "hint": "fig, ax = plt.subplots(); ax.bar(channels, revenues); đặt set_title, set_xlabel, set_ylabel rồi return fig.",
    "starter": "import matplotlib.pyplot as plt\n\ndef plot_revenue(channels, revenues):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nfig = plot_revenue([\"online\", \"store\", \"app\"], [1200, 300, 600])",
    "answer": "import matplotlib.pyplot as plt\n\ndef plot_revenue(channels, revenues):\n    fig, ax = plt.subplots(figsize=(6, 3.5))\n    ax.bar(channels, revenues, color=\"#19765c\")\n    ax.set_title(\"Revenue by channel\")\n    ax.set_xlabel(\"Channel\")\n    ax.set_ylabel(\"Revenue\")\n    fig.tight_layout()\n    return fig\n\nfig = plot_revenue([\"online\", \"store\", \"app\"], [1200, 300, 600])",
    "tests": [
      {
        "expression": "list(fig.axes[0].get_title() for _ in [0])",
        "expected": [
          "Revenue by channel"
        ],
        "label": "Tiêu đề biểu đồ"
      },
      {
        "expression": "[[float(bar.get_height()) for bar in fig.axes[0].patches], [tick.get_text() for tick in fig.axes[0].get_xticklabels()]]",
        "expected": [
          [
            1200,
            300,
            600
          ],
          [
            "online",
            "store",
            "app"
          ]
        ],
        "label": "Nhãn & chiều cao cột"
      },
      {
        "expression": "[fig.axes[0].get_xlabel(), fig.axes[0].get_ylabel()]",
        "expected": [
          "Channel",
          "Revenue"
        ],
        "label": "Nhãn hai trục"
      },
      {
        "expression": "[float(bar.get_height()) for bar in plot_revenue([\"other\"], [42]).axes[0].patches]",
        "expected": [
          42
        ],
        "label": "Đầu vào khác"
      }
    ],
    "columns": [
      "channel",
      "revenue"
    ],
    "rows": [
      [
        "online",
        "1200"
      ],
      [
        "store",
        "300"
      ],
      [
        "app",
        "600"
      ]
    ],
    "goal": "Biểu đồ cột giúp so sánh doanh thu giữa các kênh.",
    "packages": [
      "matplotlib"
    ],
    "plotting": true
  },
  {
    "id": "case-two-sum",
    "number": "14",
    "title": "Case 01 · Two Sum",
    "track": "cases",
    "unit": "Giải case",
    "duration": "12 phút",
    "concept": "Dùng bảng tra cứu `dict` để tìm phần bù target - value khi duyệt mảng một lần. Không dùng cùng một phần tử hai lần.",
    "prompt": "Case 01 · Two Sum",
    "instruction": "Viết two_sum(nums, target), trả về hai chỉ số [i, j] với i < j và nums[i] + nums[j] == target. Dữ liệu có tối đa một cặp đáp án. Nếu không có cặp phù hợp, trả về [].",
    "hint": "Lưu chỉ số đã gặp trong seen. Nếu target - value có trong seen, trả về [seen[target - value], index].",
    "starter": "def two_sum(nums, target):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(two_sum([2, 7, 11, 15], 9))",
    "answer": "def two_sum(nums, target):\n    seen = {}\n    for index, value in enumerate(nums):\n        complement = target - value\n        if complement in seen:\n            return [seen[complement], index]\n        seen[value] = index\n    return []\n\nprint(two_sum([2, 7, 11, 15], 9))",
    "tests": [
      {
        "expression": "two_sum([2,7,11,15],9)",
        "expected": [
          0,
          1
        ],
        "label": "Cặp ở đầu mảng"
      },
      {
        "expression": "two_sum([3,3],6)",
        "expected": [
          0,
          1
        ],
        "label": "Hai giá trị giống nhau"
      },
      {
        "expression": "two_sum([-3,4,3,90],0)",
        "expected": [
          0,
          2
        ],
        "label": "Giá trị âm"
      },
      {
        "expression": "two_sum([1,2,3],10)",
        "expected": [],
        "label": "Không có cặp"
      },
      {
        "expression": "two_sum([],0)",
        "expected": [],
        "label": "Mảng rỗng"
      }
    ],
    "columns": [
      "nums",
      "target",
      "output"
    ],
    "rows": [
      [
        "[2, 7, 11, 15]",
        "9",
        "[0, 1]"
      ]
    ],
    "goal": "Luyện bảng tra cứu và tư duy tối ưu từ O(n²) xuống O(n).",
    "difficulty": "Dễ",
    "constraints": [
      "0 ≤ len(nums) ≤ 10.000",
      "nums và target là số nguyên; tối đa một cặp đáp án."
    ],
    "explanation": "nums[0] + nums[1] = 2 + 7 = 9, vì vậy trả về [0, 1].",
    "complexity": "Thời gian O(n), bộ nhớ O(n)."
  },
  {
    "id": "case-ranking",
    "number": "15",
    "title": "Case 02 · Top khách hàng",
    "track": "cases",
    "unit": "Giải case",
    "duration": "12 phút",
    "concept": "Gộp doanh thu theo khách hàng rồi sắp xếp theo nhiều tiêu chí. Dùng `sorted()` với khóa (-doanh_thu, tên) để xử lý trường hợp bằng nhau.",
    "prompt": "Case 02 · Top khách hàng",
    "instruction": "Viết top_customers(orders, k), trả về tối đa k tên khách hàng có tổng amount lớn nhất. Nếu bằng doanh thu, xếp tên theo thứ tự từ điển Python tăng dần. k = 0 hoặc không có đơn trả về []. Tên khách hàng là chuỗi ASCII; amount không âm.",
    "hint": "Cộng dồn amount theo customer, sorted(totals, key=lambda name: (-totals[name], name)) rồi lấy [:k].",
    "starter": "orders = [\n    {\"customer\": \"An\", \"amount\": 100},\n    {\"customer\": \"Binh\", \"amount\": 250},\n    {\"customer\": \"An\", \"amount\": 200},\n    {\"customer\": \"Chi\", \"amount\": 300},\n]\n\ndef top_customers(orders, k):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(top_customers(orders, 2))",
    "answer": "orders = [\n    {\"customer\": \"An\", \"amount\": 100},\n    {\"customer\": \"Binh\", \"amount\": 250},\n    {\"customer\": \"An\", \"amount\": 200},\n    {\"customer\": \"Chi\", \"amount\": 300},\n]\n\ndef top_customers(orders, k):\n    totals = {}\n    for order in orders:\n        name = order[\"customer\"]\n        totals[name] = totals.get(name, 0) + order[\"amount\"]\n    return sorted(totals, key=lambda name: (-totals[name], name))[:k]\n\nprint(top_customers(orders, 2))",
    "tests": [
      {
        "expression": "top_customers(orders,2)",
        "expected": [
          "An",
          "Chi"
        ],
        "label": "Đồng hạng doanh thu"
      },
      {
        "expression": "top_customers([],3)",
        "expected": [],
        "label": "Không có đơn"
      },
      {
        "expression": "top_customers(orders,0)",
        "expected": [],
        "label": "k bằng 0"
      },
      {
        "expression": "top_customers(orders,10)",
        "expected": [
          "An",
          "Chi",
          "Binh"
        ],
        "label": "k vượt số khách"
      },
      {
        "expression": "top_customers([{\"customer\":\"Z\",\"amount\":10},{\"customer\":\"A\",\"amount\":10}],1)",
        "expected": [
          "A"
        ],
        "label": "Quy tắc xếp đồng hạng"
      }
    ],
    "columns": [
      "customer",
      "amount"
    ],
    "rows": [
      [
        "An",
        "100"
      ],
      [
        "Binh",
        "250"
      ],
      [
        "An",
        "200"
      ],
      [
        "Chi",
        "300"
      ]
    ],
    "goal": "Áp dụng nhóm dữ liệu và xếp hạng vào bài toán phân tích khách hàng.",
    "difficulty": "Vừa",
    "constraints": [
      "0 ≤ len(orders) ≤ 10.000; 0 ≤ k ≤ 10.000",
      "Mỗi đơn có customer và amount; một khách có thể có nhiều đơn."
    ],
    "explanation": "An và Chi cùng có 300; An đứng trước Chi theo tên. Với k = 2, kết quả là [\"An\", \"Chi\"].",
    "complexity": "Thời gian O(n + m log m), bộ nhớ O(m), m là số khách hàng."
  },
  {
    "id": "case-streak",
    "number": "16",
    "title": "Case 03 · Chuỗi tăng trưởng",
    "track": "cases",
    "unit": "Giải case",
    "duration": "12 phút",
    "concept": "Theo dõi độ dài đoạn hiện tại và đoạn dài nhất. Khi doanh thu không tăng nghiêm ngặt, bắt đầu lại đoạn với độ dài 1.",
    "prompt": "Case 03 · Chuỗi tăng trưởng",
    "instruction": "Viết longest_growth(revenues), trả về số ngày của đoạn liên tiếp có doanh thu tăng nghiêm ngặt dài nhất. Hai ngày bằng nhau làm ngắt chuỗi. Danh sách rỗng trả về 0, một ngày trả về 1.",
    "hint": "Duyệt từ ngày thứ hai, nếu revenues[i] > revenues[i - 1] thì tăng current, ngược lại đặt current = 1; cập nhật best.",
    "starter": "def longest_growth(revenues):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(longest_growth([100, 120, 110, 130, 150, 160]))",
    "answer": "def longest_growth(revenues):\n    if not revenues:\n        return 0\n    current = best = 1\n    for index in range(1, len(revenues)):\n        current = current + 1 if revenues[index] > revenues[index - 1] else 1\n        best = max(best, current)\n    return best\n\nprint(longest_growth([100, 120, 110, 130, 150, 160]))",
    "tests": [
      {
        "expression": "longest_growth([100,120,110,130,150,160])",
        "expected": 4,
        "label": "Chuỗi ở cuối"
      },
      {
        "expression": "longest_growth([])",
        "expected": 0,
        "label": "Mảng rỗng"
      },
      {
        "expression": "longest_growth([100])",
        "expected": 1,
        "label": "Một ngày"
      },
      {
        "expression": "longest_growth([5,5,5])",
        "expected": 1,
        "label": "Doanh thu bằng nhau"
      },
      {
        "expression": "longest_growth([5,4,3])",
        "expected": 1,
        "label": "Liên tục giảm"
      },
      {
        "expression": "longest_growth([1,2,3,0,1])",
        "expected": 3,
        "label": "Chuỗi ở đầu"
      }
    ],
    "columns": [
      "Ngày",
      "Doanh thu"
    ],
    "rows": [
      [
        "1",
        "100"
      ],
      [
        "2",
        "120"
      ],
      [
        "3",
        "110"
      ],
      [
        "4",
        "130"
      ],
      [
        "5",
        "150"
      ],
      [
        "6",
        "160"
      ]
    ],
    "goal": "Tìm giai đoạn tăng trưởng liên tiếp mà không bỏ qua ngày giảm.",
    "difficulty": "Vừa",
    "constraints": [
      "0 ≤ len(revenues) ≤ 100.000",
      "Doanh thu là số không âm, thứ tự danh sách là thứ tự ngày."
    ],
    "explanation": "Đoạn [110, 130, 150, 160] có 4 ngày tăng liên tiếp. Không được bỏ qua ngày 110 để nối với đoạn trước.",
    "complexity": "Thời gian O(n), bộ nhớ O(1)."
  },
  {
    "id": "ml-split",
    "number": "17",
    "track": "ml",
    "unit": "Machine Learning nhập môn",
    "title": "Chia dữ liệu train / test",
    "duration": "12 phút",
    "concept": "Dữ liệu train dùng để học, dữ liệu test dùng để đánh giá. Không đánh giá mô hình bằng chính dữ liệu đã dùng huấn luyện. `random_state` giúp tái lập phép chia.",
    "prompt": "Chia dữ liệu train / test",
    "instruction": "Viết split_dataset(X, y), dùng train_test_split với test_size=0.3 và random_state=42. Trả về dict chứa X_train, X_test, y_train, y_test dưới dạng list Python. X là list các hàng đặc trưng, y là list nhãn cùng độ dài; đầu vào có ít nhất 4 mẫu.",
    "hint": "train_test_split(X, y, test_size=0.3, random_state=42) trả về 4 tập theo thứ tự X_train, X_test, y_train, y_test.",
    "starter": "from sklearn.model_selection import train_test_split\n\nX = [[i] for i in range(10)]\ny = [2 * i + 1 for i in range(10)]\n\ndef split_dataset(X, y):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(split_dataset(X, y))",
    "answer": "from sklearn.model_selection import train_test_split\n\nX = [[i] for i in range(10)]\ny = [2 * i + 1 for i in range(10)]\n\ndef split_dataset(X, y):\n    X_train, X_test, y_train, y_test = train_test_split(\n        X, y, test_size=0.3, random_state=42)\n    return {\"X_train\": X_train, \"X_test\": X_test,\n            \"y_train\": y_train, \"y_test\": y_test}\n\nprint(split_dataset(X, y))",
    "tests": [
      {
        "expression": "[len(split_dataset(X,y)[\"X_train\"]), len(split_dataset(X,y)[\"X_test\"])]",
        "expected": [
          7,
          3
        ],
        "label": "Tỷ lệ 70 / 30"
      },
      {
        "expression": "split_dataset(X,y) == split_dataset(X,y)",
        "expected": true,
        "label": "Kết quả tái lập"
      },
      {
        "expression": "sorted(row[0] for row in split_dataset(X,y)[\"X_test\"])",
        "expected": [
          1,
          5,
          8
        ],
        "label": "random_state = 42"
      },
      {
        "expression": "all(label == 2 * row[0] + 1 for subset in [\"train\",\"test\"] for row,label in zip(split_dataset(X,y)[\"X_\"+subset],split_dataset(X,y)[\"y_\"+subset]))",
        "expected": true,
        "label": "Đặc trưng khớp với nhãn"
      },
      {
        "expression": "len(split_dataset([[0],[1],[2],[3]], [1,3,5,7])[\"X_test\"])",
        "expected": 2,
        "label": "Đầu vào nhỏ hơn"
      }
    ],
    "columns": [
      "X: đặc trưng",
      "y: nhãn"
    ],
    "rows": [
      [
        "[0]",
        "1"
      ],
      [
        "[1]",
        "3"
      ],
      [
        "[2]",
        "5"
      ],
      [
        "…",
        "…"
      ],
      [
        "[9]",
        "19"
      ]
    ],
    "goal": "Giữ tập test độc lập để tránh đánh giá mô hình quá lạc quan.",
    "packages": [
      "scikit-learn"
    ],
    "constraints": [
      "len(X) = len(y) ≥ 4.",
      "Mỗi hàng X có cùng số đặc trưng; dữ liệu không thiếu."
    ]
  },
  {
    "id": "ml-regression",
    "number": "18",
    "track": "ml",
    "unit": "Machine Learning nhập môn",
    "title": "Hồi quy tuyến tính",
    "duration": "12 phút",
    "concept": "Hồi quy dự đoán giá trị số. `LinearRegression().fit(X, y)` học quan hệ từ dữ liệu train; `predict()` dự đoán trên đầu vào mới.",
    "prompt": "Hồi quy tuyến tính",
    "instruction": "Viết predict_linear(X_train, y_train, X_new), huấn luyện LinearRegression rồi trả về list dự đoán cho X_new, mỗi giá trị làm tròn 2 chữ số. X_train có ít nhất 2 mẫu và cùng số đặc trưng với X_new.",
    "hint": "model = LinearRegression(); model.fit(X_train, y_train); chuyển model.predict(X_new) sang list số Python đã round().",
    "starter": "from sklearn.linear_model import LinearRegression\n\nX_train = [[1], [2], [3], [4]]\ny_train = [3, 5, 7, 9]\nX_new = [[5], [6]]\n\ndef predict_linear(X_train, y_train, X_new):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(predict_linear(X_train, y_train, X_new))",
    "answer": "from sklearn.linear_model import LinearRegression\n\nX_train = [[1], [2], [3], [4]]\ny_train = [3, 5, 7, 9]\nX_new = [[5], [6]]\n\ndef predict_linear(X_train, y_train, X_new):\n    model = LinearRegression()\n    model.fit(X_train, y_train)\n    return [round(float(value), 2) for value in model.predict(X_new)]\n\nprint(predict_linear(X_train, y_train, X_new))",
    "tests": [
      {
        "expression": "predict_linear(X_train,y_train,X_new)",
        "expected": [
          11,
          13
        ],
        "label": "Quan hệ y = 2x + 1"
      },
      {
        "expression": "predict_linear([[1],[2],[3]], [3,6,9], [[4]])",
        "expected": [
          12
        ],
        "label": "Quan hệ y = 3x"
      },
      {
        "expression": "predict_linear([[0],[1],[2]], [5,5,5], [[3],[4]])",
        "expected": [
          5,
          5
        ],
        "label": "Nhãn không đổi"
      },
      {
        "expression": "predict_linear([[0],[2]], [0,1], [[1]])",
        "expected": [
          0.5
        ],
        "label": "Dự đoán thập phân"
      }
    ],
    "columns": [
      "X_train",
      "y_train"
    ],
    "rows": [
      [
        "[1]",
        "3"
      ],
      [
        "[2]",
        "5"
      ],
      [
        "[3]",
        "7"
      ],
      [
        "[4]",
        "9"
      ]
    ],
    "goal": "Mẫu này có quan hệ tuyến tính chính xác; dữ liệu thực thường có nhiễu và cần đánh giá trên tập test.",
    "packages": [
      "scikit-learn"
    ]
  },
  {
    "id": "ml-metrics",
    "number": "19",
    "track": "ml",
    "unit": "Machine Learning nhập môn",
    "title": "Đánh giá dự đoán",
    "duration": "12 phút",
    "concept": "Accuracy là tỷ lệ nhãn dự đoán đúng của bài toán phân loại. Nó có thể gây hiểu nhầm khi dữ liệu mất cân bằng; cần xem thêm precision, recall và confusion matrix khi học sâu hơn.",
    "prompt": "Đánh giá dự đoán",
    "instruction": "Viết accuracy_percent(y_true, y_pred), tính accuracy_score và trả về phần trăm làm tròn 2 chữ số. Hai danh sách có cùng độ dài, nhãn là 0 hoặc 1. Nếu cả hai rỗng, trả về 0.",
    "hint": "Dùng round(float(accuracy_score(y_true, y_pred)) * 100, 2), xử lý danh sách rỗng trước.",
    "starter": "from sklearn.metrics import accuracy_score\n\ny_true = [1, 0, 1, 1]\ny_pred = [1, 0, 0, 1]\n\ndef accuracy_percent(y_true, y_pred):\n    # Hoàn thiện phần xử lý tại đây\n    pass\n\nprint(accuracy_percent(y_true, y_pred))",
    "answer": "from sklearn.metrics import accuracy_score\n\ny_true = [1, 0, 1, 1]\ny_pred = [1, 0, 0, 1]\n\ndef accuracy_percent(y_true, y_pred):\n    if not y_true:\n        return 0\n    return round(float(accuracy_score(y_true, y_pred)) * 100, 2)\n\nprint(accuracy_percent(y_true, y_pred))",
    "tests": [
      {
        "expression": "accuracy_percent(y_true,y_pred)",
        "expected": 75,
        "label": "Đúng 3 / 4 mẫu"
      },
      {
        "expression": "accuracy_percent([],[])",
        "expected": 0,
        "label": "Chưa có mẫu"
      },
      {
        "expression": "accuracy_percent([1,1],[0,0])",
        "expected": 0,
        "label": "Sai tất cả"
      },
      {
        "expression": "accuracy_percent([0,1,0],[0,1,1])",
        "expected": 66.67,
        "label": "Làm tròn phần trăm"
      }
    ],
    "columns": [
      "y_true",
      "y_pred"
    ],
    "rows": [
      [
        "1",
        "1"
      ],
      [
        "0",
        "0"
      ],
      [
        "1",
        "0"
      ],
      [
        "1",
        "1"
      ]
    ],
    "goal": "Accuracy áp dụng cho phân loại. Với hồi quy, dùng chỉ số như MAE hoặc RMSE thay vì accuracy.",
    "packages": [
      "scikit-learn"
    ]
  }
]
