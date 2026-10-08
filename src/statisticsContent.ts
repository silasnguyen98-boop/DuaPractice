export type StatFormula = { title: string; math: string; reading: string; symbols: string; condition: string }
export type StatisticsContent = {
  sections: { title: string; text: string }[]; formulas: StatFormula[]
  worked: { title: string; steps: string[]; conclusion: string }
  exercise: string; answer: string
  source: { title: string; url: string }
}

// Locally authored LaTeX; rendered with KaTeX and bundled fonts.
export const statisticsContent: Record<string, StatisticsContent> = {
  "statistics-01": {
    "sections": [
      {
        "title": "Doanh thu tăng: vậy đã là tin tốt chưa?",
        "text": "Bạn mở báo cáo và thấy doanh thu tăng 8%. Trước khi mừng, hãy xem hai kỳ có cùng số ngày không, có tính cả đơn hủy không và mức tăng đến từ nhiều đơn hơn hay chỉ một đơn rất lớn.\n\nThống kê giúp bạn trả lời những câu hỏi như vậy. Nó bắt đầu từ việc hiểu con số được tính ra sao, rồi mới đến công thức."
      },
      {
        "title": "Mô tả điều đã thấy, ước lượng điều chưa biết",
        "text": "Nếu cộng doanh thu của bốn tuần đã qua, bạn đang làm thống kê mô tả. Kết quả nói về bốn tuần đó.\n\nNếu hỏi một nhóm khách để ước lượng mức chi tiêu của toàn bộ khách hàng, bạn đang dùng thống kê suy luận. Nhóm được hỏi gọi là mẫu; toàn bộ nhóm bạn muốn tìm hiểu gọi là tổng thể. Vì chỉ thấy một phần, kết quả sẽ có độ bất định."
      },
      {
        "title": "Đọc con số cùng câu chuyện phía sau",
        "text": "Giả sử doanh thu tăng nhờ một đơn hàng gấp mười lần bình thường. Mức tăng là thật, nhưng chưa đủ để dự đoán tuần sau cũng tốt như vậy.\n\nKhi làm báo cáo, hãy nói rõ đang đo gì, trong kỳ nào và điều gì còn cần kiểm tra. Những thông tin này giúp người đọc dùng kết quả đúng chỗ."
      }
    ],
    "formulas": [
      {
        "title": "Trung bình mẫu",
        "math": "\\bar{x}=\\frac{1}{n}\\sum_{i=1}^{n}x_i",
        "reading": "Cộng n giá trị rồi chia cho n.",
        "symbols": "xᵢ: quan sát thứ i; n: số quan sát; x̄: trung bình mẫu; Σ: phép cộng.",
        "condition": "Các giá trị phải cùng đơn vị và cùng định nghĩa."
      },
      {
        "title": "Thay đổi tương đối",
        "math": "g=\\frac{V_{\\mathrm{new}}-V_{\\mathrm{old}}}{V_{\\mathrm{old}}}",
        "reading": "Chênh lệch chia giá trị kỳ gốc; nhân 100 để viết thành phần trăm.",
        "symbols": "Vnew: giá trị kỳ mới; Vold: giá trị kỳ cũ; g: tỷ lệ thay đổi.",
        "condition": "Kỳ gốc khác 0; hai kỳ có phạm vi so sánh phù hợp."
      }
    ],
    "worked": {
      "title": "Tự tính trước khi đọc báo cáo",
      "steps": [
        "Bốn tuần có doanh thu 980, 1010, 995, 1215 triệu đồng.",
        "Tổng = 4200; trung bình = 4200 / 4 = 1050 triệu mỗi tuần.",
        "Thay đổi tuần cuối so với tuần đầu = 235 / 980 ≈ 23,98%.",
        "Tuần cuối cao hơn chưa cho biết toàn bộ chuỗi có tăng bền vững hay do một đơn lớn."
      ],
      "conclusion": "Đây là mô tả bốn tuần đã quan sát; dự báo cần dữ liệu lịch sử và kiểm tra bổ sung."
    },
    "exercise": "Nếu doanh thu từ 100 xuống 80 rồi trở lại 100, tỷ lệ giảm và tăng có bằng nhau không?",
    "answer": "Không. Giảm (80−100)/100 = −20%; tăng (100−80)/80 = 25%. Mẫu số đã thay đổi.",
    "source": {
      "title": "Đọc thêm · OpenStax · Introductory Statistics",
      "url": "https://openstax.org/books/introductory-statistics-2e/pages/1-introduction"
    }
  },
  "statistics-02": {
    "sections": [
      {
        "title": "Bạn đang muốn hiểu nhóm khách nào?",
        "text": "Muốn biết khách hàng có hài lòng không, bạn cần xác định “khách hàng” ở đây là ai: người vừa mua trong tháng, tất cả người từng mua, hay người đang dùng ứng dụng? Nhóm bạn muốn tìm hiểu là tổng thể — population.\n\nNhững người thực sự được hỏi tạo thành mẫu — sample. Hai nhóm này càng khác nhau, việc dùng câu trả lời của mẫu để nói về tổng thể càng cần thận trọng."
      },
      {
        "title": "Chọn người trả lời ảnh hưởng đến kết quả",
        "text": "Một khảo sát chỉ hiện trong ứng dụng khó tiếp cận người đã bỏ ứng dụng. Nếu nhóm này ít hài lòng hơn, kết quả có thể lạc quan hơn thực tế. Đây là thiên lệch chọn mẫu.\n\nLấy mẫu ngẫu nhiên giúp giảm việc chọn theo ý người khảo sát. Nếu cần đủ khách ở từng khu vực, có thể chia theo khu vực rồi lấy ngẫu nhiên trong mỗi nhóm; cách này gọi là lấy mẫu phân tầng."
      },
      {
        "title": "Hỏi nhiều hơn chưa chắc sửa được mẫu lệch",
        "text": "Hỏi thêm 10000 người đang dùng app vẫn không cho biết người đã rời app nghĩ gì. Bạn có thêm câu trả lời từ cùng một nhóm đang được tiếp cận.\n\nVì vậy, ngoài số người trả lời, hãy ghi nhóm nào được mời, nhóm nào chưa được hỏi và bao nhiêu người không phản hồi. Nếu lấy mẫu theo cửa hàng hoặc lớp học, các thành viên trong cùng nhóm còn có thể giống nhau hơn dự kiến."
      }
    ],
    "formulas": [
      {
        "title": "Tỷ lệ quan sát",
        "math": "\\hat{p}=\\frac{k}{n}",
        "reading": "Số trường hợp có đặc điểm cần đo chia số quan sát hợp lệ.",
        "symbols": "k: số hài lòng; n: số trả lời hợp lệ; p̂: tỷ lệ mẫu.",
        "condition": "Chỉ mô tả nhóm được quan sát nếu thiết kế mẫu không cho phép khái quát."
      },
      {
        "title": "Gộp theo cơ cấu tổng thể",
        "math": "\\hat{p}_w=\\sum_{h=1}^{H}W_h\\hat{p}_h",
        "reading": "Nhân tỷ lệ từng tầng với tỷ trọng tầng trong tổng thể rồi cộng.",
        "symbols": "Wₕ: tỷ trọng tổng thể của tầng h; tổng Wₕ = 1.",
        "condition": "Mỗi tầng cần dữ liệu đủ phù hợp; không sửa được mọi dạng non-response bias."
      }
    ],
    "worked": {
      "title": "Vì sao một tỷ lệ khảo sát có thể quá lạc quan?",
      "steps": [
        "Có 3 khách active: 2 hài lòng, 1 không; một khách churned không hài lòng.",
        "Nếu chỉ hỏi active: tỷ lệ = 2/3 ≈ 66,67%.",
        "Trong toàn bộ nhóm minh họa: tỷ lệ = 2/4 = 50%.",
        "Chênh lệch 16,67 điểm phần trăm đến từ nhóm bị bỏ sót, không phải chỉ do ít người trả lời."
      ],
      "conclusion": "Ở dữ liệu thực, không biết chắc mức hài lòng của nhóm không phản hồi; phải nêu giới hạn thay vì thay họ bằng một giả định thuận tiện."
    },
    "exercise": "Khảo sát 100.000 người tự nguyện có chắc đại diện hơn một mẫu ngẫu nhiên 1000 người không?",
    "answer": "Không chắc. Cần xem khung mẫu, cơ hội được chọn và không phản hồi. Cỡ mẫu không tự sửa selection bias.",
    "source": {
      "title": "Đọc thêm · OpenStax · Introductory Statistics",
      "url": "https://openstax.org/books/introductory-statistics-2e/pages/1-introduction"
    }
  },
  "statistics-03": {
    "sections": [
      {
        "title": "Một cột toàn số có thể chỉ là nhãn",
        "text": "Giả sử Web được ghi là 1, App là 2 và cửa hàng là 3. Các số này giúp phân biệt kênh; cộng chúng hay lấy trung bình không trả lời được một câu hỏi kinh doanh có ích. Đây là dữ liệu phân loại không có thứ tự, hay nominal.\n\nMức hài lòng thấp, vừa, cao cũng là phân loại, nhưng có thứ tự. Loại này gọi là ordinal."
      },
      {
        "title": "Đếm và đo là hai cách tạo ra số",
        "text": "Số đơn hàng là dữ liệu đếm: 0, 1, 2… Thời gian giao hàng là dữ liệu đo: có thể là 10 phút, 10,5 phút hoặc một giá trị khác tùy độ chính xác.\n\nVới mỗi cột, hãy hỏi số này được tạo ra thế nào và có đơn vị gì. Tiền thường được xử lý như dữ liệu liên tục trong phân tích, dù hệ thống vẫn ghi theo đơn vị tiền nhỏ nhất."
      },
      {
        "title": "Số 0 có nghĩa gì?",
        "text": "0 phút nghĩa là không có thời lượng, nên 20 phút gấp đôi 10 phút. Nhưng 0°C không phải “không có nhiệt”; 20°C cũng không có nghĩa nóng gấp đôi 10°C.\n\nSự khác nhau này quyết định phép so sánh nào có ý nghĩa. Trước khi tính, kiểm tra cả các mã đặc biệt như 0 = chưa biết hoặc −1 = chưa trả lời để tránh trộn chúng vào dữ liệu thật."
      }
    ],
    "formulas": [
      {
        "title": "Tỷ trọng một nhóm",
        "math": "p_j=\\frac{n_j}{n}",
        "reading": "Số bản ghi nhóm j chia tổng bản ghi hợp lệ.",
        "symbols": "nⱼ: số bản ghi nhóm j; n: tổng hợp lệ.",
        "condition": "Các nhóm không trùng và bao phủ toàn bộ thì Σpⱼ = 1."
      },
      {
        "title": "Đổi đơn vị tuyến tính",
        "math": "y=ax+b",
        "reading": "Đổi thang đo bằng nhân a và cộng b.",
        "symbols": "a: hệ số đổi đơn vị; b: dịch gốc.",
        "condition": "Tỷ lệ y₁/y₂ không bảo toàn nói chung khi b khác 0, như Celsius → Fahrenheit."
      }
    ],
    "worked": {
      "title": "Tổng hợp đúng theo kiểu biến",
      "steps": [
        "Năm đơn có kênh Web, App, Web, Store, Web.",
        "Web chiếm 3/5 = 60%; App và Store mỗi nhóm 20%.",
        "Mã hóa Web=1, App=2, Store=3 cho mean 1,6 không tạo ra một “kênh trung bình”.",
        "Nếu đổi Web=10, con số mean đổi dù dữ liệu kinh doanh không thay đổi."
      ],
      "conclusion": "Phép tính chạy được không đảm bảo phép tính có ý nghĩa."
    },
    "exercise": "Mức hài lòng 1–5 và số sản phẩm trong đơn đều là số nguyên. Có cùng thang đo không?",
    "answer": "Không. Mức hài lòng thường là ordinal; số sản phẩm là dữ liệu đếm ratio với 0 có nghĩa không có sản phẩm.",
    "source": {
      "title": "Đọc thêm · OpenStax · Introductory Statistics",
      "url": "https://openstax.org/books/introductory-statistics-2e/pages/1-introduction"
    }
  },
  "statistics-04": {
    "sections": [
      {
        "title": "Trung bình có thể bị kéo lên",
        "text": "Hãy nhìn dãy lương 12, 13, 14, 15, 16 và 80 triệu. Cộng lại rồi chia sáu, bạn được 25 triệu. Nhưng năm trong sáu người nhận dưới mức đó.\n\nMean là trung bình cộng. Nó dùng mọi giá trị, nên một mức lương rất cao cũng kéo kết quả lên."
      },
      {
        "title": "Median cho biết vị trí ở giữa",
        "text": "Sắp xếp dãy từ thấp đến cao. Với sáu người, hai vị trí giữa là 14 và 15; median, hay trung vị, là 14,5 triệu.\n\nNếu người nhận 80 triệu được tăng lên 100 triệu, median vẫn là 14,5. Vì vậy median thường hữu ích khi bạn muốn mô tả một giá trị điển hình trong dữ liệu lệch."
      },
      {
        "title": "Dùng chỉ số nào tùy câu hỏi",
        "text": "Muốn dự tính tổng quỹ lương, mean vẫn hữu ích: mean nhân số người bằng tổng. Muốn biết người ở giữa nhận bao nhiêu, dùng median. Muốn tìm giá trị xuất hiện nhiều nhất, dùng mode.\n\nDãy lương này không có giá trị lặp lại, nên không có mode nổi trội. Khi gộp nhiều nhóm, hãy tính lại từ tổng và số người; đừng lấy trung bình các mean nhóm nếu quy mô nhóm khác nhau."
      }
    ],
    "formulas": [
      {
        "title": "Mean và mean có trọng số",
        "math": "\\bar{x}=\\frac{\\sum_{i=1}^{n}x_i}{n}",
        "reading": "Tổng giá trị chia số quan sát; với trọng số dùng Σwᵢxᵢ / Σwᵢ.",
        "symbols": "xᵢ: giá trị; wᵢ: trọng số; n: số giá trị.",
        "condition": "Tất cả giá trị cùng đơn vị; trọng số phải phản ánh đúng ý nghĩa gộp."
      },
      {
        "title": "Median khi n chẵn",
        "math": "\\operatorname{median}(x)=\\frac{x_{(n/2)}+x_{(n/2+1)}}{2}",
        "reading": "Lấy trung bình hai vị trí giữa sau khi sắp xếp.",
        "symbols": "x₍ⱼ₎: quan sát tại vị trí j trong dãy tăng dần.",
        "condition": "Với n lẻ, median là x₍₍ₙ₊₁₎/₂₎."
      }
    ],
    "worked": {
      "title": "Dãy lương 12, 13, 14, 15, 16, 80 triệu",
      "steps": [
        "Tổng = 150; mean = 150/6 = 25 triệu.",
        "Hai giá trị giữa là 14 và 15; median = 14,5 triệu.",
        "Thay 80 bằng 20: mean còn 15, median vẫn 14,5.",
        "Tất cả giá trị đều xuất hiện một lần, nên không có mode nổi trội."
      ],
      "conclusion": "Một mức lương cao kéo mean lên, nhưng không làm phần lớn nhân viên nhận lương cao hơn."
    },
    "exercise": "Nhóm A có 2 đơn AOV 100, nhóm B có 8 đơn AOV 200. AOV chung là bao nhiêu?",
    "answer": "(2×100 + 8×200)/(2+8) = 180, không phải (100+200)/2 = 150.",
    "source": {
      "title": "Đọc thêm · NIST · Measures of Location",
      "url": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm"
    }
  },
  "statistics-05": {
    "sections": [
      {
        "title": "Cùng trung bình nhưng có ổn định như nhau không?",
        "text": "Hai cửa hàng đều bán trung bình 100 sản phẩm mỗi ngày. Một nơi gần như ngày nào cũng bán 100; nơi kia có ngày bán 20, ngày bán 180. Kế hoạch tồn kho của hai nơi sẽ rất khác.\n\nĐộ phân tán cho biết các giá trị nằm gần hay xa trung bình. Variance là phương sai; standard deviation, viết tắt SD, là độ lệch chuẩn."
      },
      {
        "title": "Từ khoảng cách đến độ lệch chuẩn",
        "text": "Lấy từng giá trị trừ trung bình để có độ lệch. Nếu cộng trực tiếp, phần âm và dương triệt tiêu nhau. Ta bình phương các độ lệch rồi tính trung bình theo công thức thích hợp để có variance.\n\nLấy căn bậc hai của variance sẽ được SD. SD có cùng đơn vị với dữ liệu, nên dễ đọc hơn: nếu đang đo phút, SD cũng tính bằng phút."
      },
      {
        "title": "Nhìn thêm phần giữa của dữ liệu",
        "text": "Một vài đơn cực lớn có thể làm SD tăng mạnh. Lúc này, hãy xem thêm Q1 và Q3: các mốc ở khoảng vị trí 25% và 75% của dãy đã sắp. IQR = Q3 − Q1 cho biết phần giữa rộng bao nhiêu.\n\nQuy tắc 1,5 × IQR giúp tìm điểm cần xem lại. Một điểm vượt ngưỡng vẫn có thể là giao dịch thật. Các phần mềm có cách nội suy phân vị khác nhau, nên kết quả đôi khi chênh nhẹ."
      }
    ],
    "formulas": [
      {
        "title": "Variance mẫu",
        "math": "s^2=\\frac{\\sum_{i=1}^{n}(x_i-\\bar{x})^2}{n-1}",
        "reading": "Bình phương các độ lệch so với mean, cộng lại và chia n−1.",
        "symbols": "s²: variance mẫu; n>1; x̄: mean mẫu.",
        "condition": "Ước lượng variance tổng thể từ mẫu độc lập có variance hữu hạn."
      },
      {
        "title": "SD và cận IQR",
        "math": "\\begin{aligned}s&=\\sqrt{s^2}\\\\ \\mathrm{IQR}&=Q_3-Q_1\\end{aligned}",
        "reading": "SD là căn variance; các cận rà soát là Q1−1,5×IQR và Q3+1,5×IQR.",
        "symbols": "Q1: percentile 25%; Q3: percentile 75%.",
        "condition": "Cận IQR là quy tắc mô tả, không phải kiểm định lỗi dữ liệu."
      }
    ],
    "worked": {
      "title": "Tính variance bằng tay với 2, 4, 6",
      "steps": [
        "Mean = 4; các độ lệch là −2, 0, 2.",
        "Bình phương: 4, 0, 4; tổng = 8.",
        "Variance tổng thể = 8/3 ≈ 2,667; SD tổng thể ≈ 1,633.",
        "Variance mẫu = 8/(3−1) = 4; SD mẫu = 2."
      ],
      "conclusion": "Luôn nói rõ bạn đang mô tả tập đầy đủ hay dùng mẫu để ước lượng."
    },
    "exercise": "Nhân mọi giá trị với 10 thì SD và variance thay đổi ra sao?",
    "answer": "SD nhân 10; variance nhân 100. Cộng cùng một hằng số vào mọi giá trị thì cả hai không đổi.",
    "source": {
      "title": "Đọc thêm · NIST · Measures of Scale",
      "url": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm"
    }
  },
  "statistics-06": {
    "sections": [
      {
        "title": "Hai thứ cùng tăng có liên quan không?",
        "text": "Khi chi quảng cáo tăng, doanh thu cũng tăng. Biểu đồ chấm giúp bạn xem các cặp giá trị này có thường đi cùng nhau không. Mỗi chấm nên là một cặp đo ở cùng đơn vị, chẳng hạn cùng một tuần.\n\nPearson r tóm tắt mức liên hệ theo đường thẳng. r gần 1 là đi cùng chiều, gần −1 là ngược chiều; gần 0 là ít liên hệ tuyến tính."
      },
      {
        "title": "Nhìn hình trước khi tin hệ số",
        "text": "Hãy thử chọn Y = X² trong minh họa. Các chấm tạo thành đường cong rõ ràng nhưng Pearson r bằng 0. Vì vậy r gần 0 chưa nói rằng hai biến không liên quan.\n\nMột hệ số cũng có thể bị ảnh hưởng bởi một điểm rất xa hoặc việc gộp nhiều nhóm. Spearman là cách xem liên hệ qua thứ hạng, hữu ích khi quan hệ tăng hoặc giảm đều nhưng không thẳng."
      },
      {
        "title": "Đi cùng nhau chưa nói thứ nào gây ra thứ nào",
        "text": "Mùa mua sắm có thể khiến công ty vừa chi nhiều quảng cáo, vừa bán nhiều hàng. Hoặc công ty tăng ngân sách sau khi thấy bán tốt. Hai tình huống này đều có thể tạo tương quan.\n\nĐể biết quảng cáo tạo thêm bao nhiêu doanh thu, cần một cách so sánh phù hợp, chẳng hạn thử nghiệm có phân nhóm ngẫu nhiên. Riêng hệ số tương quan chưa trả lời được câu đó."
      }
    ],
    "formulas": [
      {
        "title": "Hệ số Pearson",
        "math": "r=\\frac{\\sum_i(x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\sum_i(x_i-\\bar{x})^2}\\sqrt{\\sum_i(y_i-\\bar{y})^2}}",
        "reading": "Tổng tích độ lệch chia tích độ dài của hai dãy độ lệch.",
        "symbols": "xᵢ,yᵢ: cặp quan sát; x̄,ȳ: hai mean.",
        "condition": "Ghép cặp đúng đối tượng; mỗi biến có variance khác 0."
      },
      {
        "title": "Spearman",
        "math": "\\rho_s=\\operatorname{corr}(\\operatorname{rank}(X),\\operatorname{rank}(Y))",
        "reading": "Tính tương quan của thứ hạng thay vì giá trị gốc.",
        "symbols": "rank: thứ hạng, thường lấy hạng trung bình khi đồng hạng.",
        "condition": "Đo liên hệ đơn điệu, không tự chứng minh quan hệ nhân quả."
      }
    ],
    "worked": {
      "title": "Một r hoàn hảo vẫn chưa có cơ chế nhân quả",
      "steps": [
        "X = [1,2,3], Y = [2,4,6]; mean lần lượt 2 và 4.",
        "Tổng tích độ lệch = (−1)(−2)+0+1×2 = 4.",
        "Mẫu số = √(2×8) = 4; r = 1.",
        "Nếu cả hai chỉ cùng tăng theo thời gian do mùa vụ, r = 1 vẫn không xác định tác động của X lên Y."
      ],
      "conclusion": "Hệ số đo cấu trúc quan sát, không kể thay bạn câu chuyện nhân quả."
    },
    "exercise": "r = 0 có chứng minh hai biến độc lập không?",
    "answer": "Không nói chung. Ví dụ Y = X² với X đối xứng quanh 0 có thể có tương quan tuyến tính bằng 0 dù Y phụ thuộc X.",
    "source": {
      "title": "Đọc thêm · NIST · Scatter Plot",
      "url": "https://www.itl.nist.gov/div898/handbook/eda/section3/scatterp.htm"
    }
  },
  "statistics-07": {
    "sections": [
      {
        "title": "Đọc kỹ chữ “khi đã biết”",
        "text": "Gọi A là “giao dịch gian lận”, B là “giao dịch bị gắn cờ”. P(A) là tỷ lệ gian lận trong tất cả giao dịch. P(A | B) là tỷ lệ gian lận trong những giao dịch đã bị gắn cờ.\n\nDấu | đọc là “với điều kiện”. Khi có điều kiện, bạn đã thu hẹp nhóm đang xét, nên mẫu số cũng thay đổi."
      },
      {
        "title": "Vì sao cảnh báo tốt vẫn có nhiều báo động sai?",
        "text": "Giả sử chỉ 1% giao dịch là gian lận. Hệ thống phát hiện được 90% số gian lận, nhưng cũng gắn cờ nhầm 5% giao dịch hợp lệ.\n\nNhóm hợp lệ lớn hơn rất nhiều, nên dù tỷ lệ gắn nhầm nhỏ, số cảnh báo sai vẫn có thể lớn. Ví dụ 10000 giao dịch phía dưới giúp bạn nhìn rõ điều này."
      },
      {
        "title": "Bayes giúp tính lại xác suất sau khi có thông tin",
        "text": "Công thức Bayes kết hợp tỷ lệ nền với khả năng hệ thống tạo ra cảnh báo. Bạn có thể hiểu nó bằng cách đếm: lấy số cờ đúng chia tất cả cờ.\n\nCũng cần phân biệt độc lập với loại trừ nhau. Độc lập nghĩa là biết một việc không đổi xác suất việc kia; loại trừ nhau nghĩa là hai việc không thể cùng xảy ra."
      }
    ],
    "formulas": [
      {
        "title": "Xác suất có điều kiện",
        "math": "P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}",
        "reading": "Xác suất giao A và B chia xác suất B.",
        "symbols": "∩: cả hai cùng xảy ra; |: với điều kiện đã biết.",
        "condition": "P(B)>0."
      },
      {
        "title": "Bayes cho hai khả năng",
        "math": "P(A\\mid B)=\\frac{P(B\\mid A)P(A)}{P(B\\mid A)P(A)+P(B\\mid A^c)P(A^c)}",
        "reading": "Cảnh báo đúng chia tổng cảnh báo đúng và sai.",
        "symbols": "Aᶜ: không A; P(Aᶜ)=1−P(A).",
        "condition": "Hai nhánh A và không A bao phủ toàn bộ; xác suất đầu vào phù hợp population."
      }
    ],
    "worked": {
      "title": "Từ 10000 giao dịch đến xác suất sau cảnh báo",
      "steps": [
        "Tỷ lệ gian lận 1%: có 100 gian lận và 9900 hợp lệ.",
        "Sensitivity 90%: gắn cờ đúng 90 giao dịch gian lận.",
        "False positive rate 5%: gắn cờ sai 495 giao dịch hợp lệ.",
        "Tổng cờ = 585; P(gian lận | cờ) = 90/585 ≈ 15,38%."
      ],
      "conclusion": "90% độ nhạy không có nghĩa 90% cảnh báo là gian lận."
    },
    "exercise": "Nếu tỷ lệ gian lận nền tăng, giữ nguyên sensitivity và false positive rate, tỷ lệ cảnh báo đúng thường thay đổi thế nào?",
    "answer": "Tăng theo công thức Bayes. Có nhiều giao dịch gian lận hơn trong population nên phần cờ đúng trong tất cả cảnh báo tăng.",
    "source": {
      "title": "Đọc thêm · OpenStax · Xác suất",
      "url": "https://openstax.org/books/introductory-statistics-2e/pages/3-1-terminology"
    }
  },
  "statistics-08": {
    "sections": [
      {
        "title": "Trước hết, bạn đang đếm điều gì?",
        "text": "“Có bao nhiêu người mua trong 5 lượt truy cập?” khác với “có bao nhiêu ticket đến trong một giờ?”. Câu đầu có số lượt cố định; câu sau chỉ cố định khoảng thời gian.\n\nPhân phối là cách mô tả các kết quả có thể xảy ra và xác suất của chúng. Chọn theo cách dữ liệu được tạo ra sẽ dễ hơn học thuộc tên."
      },
      {
        "title": "Ba mô hình thường gặp",
        "text": "Binomial đếm số thành công trong n lần thử độc lập, cùng xác suất thành công. Poisson đếm sự kiện trong một khoảng, với tốc độ trung bình phù hợp.\n\nNormal là đường chuông liên tục, đối xứng quanh trung bình. Trong hình Normal, xác suất là diện tích dưới đường trên một khoảng; chiều cao tại một điểm không phải xác suất của điểm đó."
      },
      {
        "title": "Mô hình là cách đơn giản hóa thực tế",
        "text": "Một người ghé website nhiều lần khiến các lượt có thể liên quan nhau. Ticket buổi sáng và ban đêm cũng có thể đến với tốc độ khác nhau. Khi đó mô hình đơn giản cần được xem lại.\n\nHãy dùng công thức để tính trong những giả định đã nêu, rồi đối chiếu với dữ liệu thật. Nhiều quan sát không tự làm dữ liệu có phân phối Normal."
      }
    ],
    "formulas": [
      {
        "title": "Binomial",
        "math": "P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}",
        "reading": "Chọn vị trí k thành công rồi nhân xác suất k thành công và n−k thất bại.",
        "symbols": "C(n,k)=n!/[k!(n−k)!]; n: số thử; p: xác suất thành công.",
        "condition": "n cố định; các thử độc lập và có cùng p."
      },
      {
        "title": "Poisson",
        "math": "P(X=k)=\\frac{e^{-\\lambda}\\lambda^k}{k!}",
        "reading": "e mũ âm lambda nhân lambda mũ k, chia k giai thừa.",
        "symbols": "λ: số sự kiện kỳ vọng trên khoảng; e≈2,718; k=0,1,2,...",
        "condition": "Tốc độ và đơn vị khoảng phù hợp, sự kiện thỏa giả định Poisson."
      },
      {
        "title": "Chuẩn hóa Normal",
        "math": "z=\\frac{x-\\mu}{\\sigma}",
        "reading": "Độ lệch so với mean tính bằng số lần SD.",
        "symbols": "μ: mean; σ>0: SD; z: giá trị chuẩn hóa.",
        "condition": "Nếu X là Normal(μ,σ²), Z là Normal chuẩn."
      }
    ],
    "worked": {
      "title": "Hai bài toán đếm khác nhau",
      "steps": [
        "5 lượt độc lập, p=0,2: xác suất đúng 2 đơn = C(5,2)×0,2²×0,8³.",
        "C(5,2)=10; kết quả Binomial = 0,2048 = 20,48%.",
        "Trung bình 3 ticket/giờ theo mô hình Poisson: P(X=2)=e⁻³×3²/2!.",
        "Kết quả Poisson ≈ 0,2240 = 22,40%."
      ],
      "conclusion": "Cùng hỏi “đúng 2” nhưng số thử cố định và số đến trong khoảng là hai cơ chế khác nhau."
    },
    "exercise": "Một giờ trung bình 3 ticket, hai giờ có λ bằng bao nhiêu nếu tốc độ không đổi?",
    "answer": "λ = 6 cho khoảng hai giờ. Việc nhân theo thời gian chỉ phù hợp khi giả định tốc độ ổn định được giữ.",
    "source": {
      "title": "Đọc thêm · NIST · Normal Distribution",
      "url": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm"
    }
  },
  "statistics-09": {
    "sections": [
      {
        "title": "Lấy nhiều mẫu, bạn sẽ có nhiều trung bình",
        "text": "Tưởng tượng bạn chọn ngẫu nhiên 30 đơn hàng và tính giá trị trung bình. Làm lại lần nữa, trung bình có thể khác. Lặp rất nhiều lần, bạn sẽ có một tập các trung bình mẫu.\n\nCLT, hay định lý giới hạn trung tâm, nói về hình dạng của tập trung bình này. Nó không nói rằng giá trị từng đơn hàng sẽ biến thành đường chuông."
      },
      {
        "title": "Mẫu lớn hơn giúp trung bình ổn định hơn",
        "text": "Trong minh họa, chọn n = 1 rồi tăng lên 5, 30 và 100. Dữ liệu gốc lệch phải, nhưng các trung bình dần tập trung quanh 1 và có hình dạng gần đường chuông hơn.\n\nĐộ dao động của trung bình qua các mẫu gọi là standard error, hay SE. Nó khác SD: SD đo độ khác nhau giữa từng đơn hàng."
      },
      {
        "title": "Tăng mẫu không sửa được mọi vấn đề",
        "text": "Công thức SE = SD / √n dùng trong thiết kế lấy mẫu độc lập thích hợp. Nếu nhiều dòng cùng đến từ một khách, bạn có thể cần cách tính khác.\n\nCũng không có quy tắc “đủ 30 là luôn dùng được”. Dữ liệu quá lệch hoặc có đuôi rất dài cần xem kỹ hơn. Mẫu chọn sai nhóm vẫn có thể cho kết quả lệch dù n lớn."
      }
    ],
    "formulas": [
      {
        "title": "Standard error của mean",
        "math": "\\operatorname{SE}(\\bar{x})=\\frac{\\sigma}{\\sqrt{n}}",
        "reading": "SD tổng thể chia căn cỡ mẫu; thay σ bằng s để ước lượng.",
        "symbols": "σ: SD quan sát; n: cỡ mẫu; SE: SD của mean qua các mẫu.",
        "condition": "Các quan sát độc lập cùng phân phối, variance hữu hạn."
      },
      {
        "title": "Đại lượng chuẩn hóa",
        "math": "Z_n=\\frac{\\bar{x}-\\mu}{\\sigma/\\sqrt{n}}",
        "reading": "Mean mẫu trừ mean tổng thể rồi chia SE.",
        "symbols": "μ: mean tổng thể; x̄: mean mẫu.",
        "condition": "Theo CLT cổ điển, Zₙ tiến về phân phối Normal chuẩn khi n tăng và điều kiện phù hợp."
      }
    ],
    "worked": {
      "title": "Cỡ mẫu tăng không làm SD dữ liệu giảm",
      "steps": [
        "Giả sử thời lượng xử lý có σ=20 phút.",
        "n=25: SE = 20/5 = 4 phút.",
        "n=100: SE = 20/10 = 2 phút.",
        "SD từng thời lượng vẫn là 20 phút; chỉ mean được ước lượng ổn định hơn."
      ],
      "conclusion": "SE giảm phản ánh độ chính xác của ước lượng mean, không phải tính đồng đều của khách hàng."
    },
    "exercise": "Muốn SE giảm từ 2 xuống 1 trong cùng thiết kế độc lập, cần nhân cỡ mẫu lên mấy lần?",
    "answer": "Bốn lần vì SE tỷ lệ với 1/√n. Điều này không tự loại bỏ bias hoặc dependence.",
    "source": {
      "title": "Đọc thêm · OpenStax · Central Limit Theorem",
      "url": "https://openstax.org/books/introductory-statistics-2e/pages/7-1-the-central-limit-theorem-for-sample-means-averages"
    }
  },
  "statistics-10": {
    "sections": [
      {
        "title": "Một tỷ lệ quan sát chưa phải con số chính xác tuyệt đối",
        "text": "Bạn thấy 120 người mua trong 1000 lượt, tức 12%. Nếu lấy một nhóm 1000 lượt khác trong cùng điều kiện, tỷ lệ có thể nhích lên hoặc xuống.\n\nKhoảng tin cậy giúp thể hiện độ bất định đó. Trong ví dụ, ta sẽ tính được một khoảng xấp xỉ từ 10% đến 14% thay vì chỉ báo một điểm 12%."
      },
      {
        "title": "95% là cách đánh giá phương pháp tạo khoảng",
        "text": "Hãy xem minh họa gồm nhiều đường ngang. Mỗi đường là một khoảng tạo từ một mẫu; đường dọc là trung bình thật trong mô phỏng. Một số khoảng chạm đường dọc, một số có thể bỏ lỡ.\n\nPhương pháp có mức tin cậy 95% sẽ tạo khoảng bao phủ giá trị thật khoảng 95% số lần khi lặp lâu dài trong điều kiện phù hợp. Một lần mô phỏng ít mẫu không cần đúng chính xác 95%."
      },
      {
        "title": "Khoảng hẹp có nghĩa gì?",
        "text": "Khoảng hẹp thường cho thấy ước lượng ít dao động hơn theo mô hình đã dùng. Nó không bảo đảm nhóm được hỏi đại diện cho toàn bộ khách hàng.\n\nCông thức tỷ lệ dưới đây là xấp xỉ Wald. Khi ít người mua hoặc tỷ lệ gần 0% hay 100%, nên dùng phương pháp khác, chẳng hạn Wilson. Khi báo cáo, ghi cả số quan sát và phương pháp tính khoảng."
      }
    ],
    "formulas": [
      {
        "title": "Khoảng Wald 95% cho một tỷ lệ",
        "math": "\\hat{p}\\pm 1.96\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}",
        "reading": "Tỷ lệ mẫu cộng/trừ 1,96 lần SE ước lượng.",
        "symbols": "p̂=k/n; n: số phép thử độc lập; 1,96: mức tới hạn hai phía.",
        "condition": "Xấp xỉ large-sample; không dùng máy móc gần biên hoặc với mẫu nhỏ."
      },
      {
        "title": "Khoảng t cho mean",
        "math": "\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\frac{s}{\\sqrt{n}}",
        "reading": "Mean cộng/trừ mức tới hạn t nhân SE.",
        "symbols": "α: xác suất không bao phủ; s: SD mẫu; n−1: bậc tự do.",
        "condition": "Mẫu độc lập; t chính xác dưới Normal, hoặc xấp xỉ khi điều kiện thích hợp."
      }
    ],
    "worked": {
      "title": "120 chuyển đổi trong 1000 lượt độc lập",
      "steps": [
        "p̂ = 120/1000 = 0,12.",
        "SE = √(0,12×0,88/1000) ≈ 0,01028.",
        "Margin ≈ 1,96×0,01028 = 0,02014.",
        "Wald CI ≈ [0,09986; 0,14014] = [9,99%; 14,01%]."
      ],
      "conclusion": "Đây là bất định về tỷ lệ tổng thể theo mô hình, không phải khoảng chứa 95% hành vi người dùng."
    },
    "exercise": "Giữ dữ liệu, tăng mức tin cậy từ 95% lên 99% thì khoảng rộng hay hẹp hơn?",
    "answer": "Rộng hơn vì mức tới hạn lớn hơn. Muốn tăng tin cậy và giữ độ rộng thường cần thêm mẫu hoặc giảm biến động qua thiết kế.",
    "source": {
      "title": "Đọc thêm · NIST · Confidence Intervals",
      "url": "https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm"
    }
  },
  "statistics-11": {
    "sections": [
      {
        "title": "Đặt câu hỏi: nếu thật ra không có khác biệt thì sao?",
        "text": "Hai phiên bản có tỷ lệ mua khác nhau trong mẫu. Khác biệt có thể phản ánh một thay đổi thật, nhưng cũng có thể là dao động giữa các nhóm người được quan sát.\n\nH₀, đọc là “H không”, là giả thuyết dùng làm mốc kiểm tra; trong ví dụ A/B, đó là hai tỷ lệ bằng nhau. H₁ là phương án khác, chẳng hạn hai tỷ lệ không bằng nhau."
      },
      {
        "title": "P-value đo mức bất thường so với mốc đó",
        "text": "P-value trả lời: nếu H₀ và mô hình đúng, kết quả xa mốc ít nhất như kết quả vừa thấy có thường xảy ra không? p nhỏ nghĩa là kết quả như vậy ít gặp dưới H₀.\n\nNó không phải xác suất H₀ đúng, cũng không nói lợi ích lớn bao nhiêu. Hãy đọc p cùng chênh lệch quan sát và khoảng tin cậy."
      },
      {
        "title": "Chọn quy tắc trước khi nhìn kết quả",
        "text": "Alpha là mức dùng để quyết định khi nào bác bỏ H₀, thường chọn trước lúc thu thập dữ liệu. Nếu cứ mở báo cáo rồi dừng ngay lần p nhỏ, quy tắc ban đầu có thể không còn kiểm soát được báo động giả.\n\nCó hai kiểu sai: kết luận có khác biệt khi thực ra không có, hoặc bỏ lỡ một khác biệt thật. Chưa bác bỏ H₀ không đồng nghĩa đã chứng minh hai phiên bản giống nhau."
      }
    ],
    "formulas": [
      {
        "title": "Z-test hai phía trong mô hình Normal",
        "math": "p=2\\left[1-\\Phi\\!\\left(\\lvert z_{\\mathrm{obs}}\\rvert\\right)\\right]",
        "reading": "Gấp đôi diện tích một đuôi ngoài trị tuyệt đối z quan sát.",
        "symbols": "Φ: CDF Normal chuẩn; zobs: thống kê quan sát.",
        "condition": "Chỉ đúng cho thống kê có phân phối Normal chuẩn dưới H₀."
      },
      {
        "title": "Thống kê z minh họa",
        "math": "z=\\frac{\\hat{\\theta}-\\theta_0}{\\operatorname{SE}_0}",
        "reading": "Chênh lệch quan sát tính bằng số lần standard error dưới H₀.",
        "symbols": "θ̂: giá trị ước lượng từ mẫu; θ₀: giá trị giả định theo H₀; SE₀: sai số chuẩn dưới H₀.",
        "condition": "Kiểm tra giả định, alpha và kế hoạch phân tích trước khi kết luận."
      }
    ],
    "worked": {
      "title": "Đọc p-value với z = 2,17",
      "steps": [
        "Với phân phối Normal chuẩn, diện tích đuôi trên 2,17 ≈ 0,0150.",
        "Kiểm định hai phía lấy cả hai đuôi: p ≈ 0,0300.",
        "Nếu alpha=0,05 và kế hoạch hợp lệ, bác bỏ H₀.",
        "Vẫn cần effect size, CI, chi phí và chất lượng thiết kế để ra quyết định."
      ],
      "conclusion": "p ≈ 0,03 không có nghĩa H₀ chỉ có 3% cơ hội đúng."
    },
    "exercise": "p = 0,2 có chứng minh hai phiên bản hiệu quả như nhau không?",
    "answer": "Không. Có thể mẫu chưa đủ power. Muốn kết luận tương đương cần thiết kế equivalence/non-inferiority với biên nghiệp vụ phù hợp.",
    "source": {
      "title": "Đọc thêm · ASA · Statement on P-Values",
      "url": "https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf"
    }
  },
  "statistics-12": {
    "sections": [
      {
        "title": "Bắt đầu từ câu hỏi, không từ tên kiểm định",
        "text": "Bạn muốn so giá trị đơn hàng trung bình, hay tỷ lệ có mua? Dữ liệu là hai nhóm khách khác nhau, hay cùng khách được đo trước và sau?\n\nHai câu trả lời này giúp chọn cách kiểm định. Với cùng khách đo hai lần, cần giữ cặp dữ liệu; không xem hai lần đo như hai nhóm người độc lập."
      },
      {
        "title": "T-test, Chi-square và ANOVA dùng lúc nào?",
        "text": "T-test thường dùng để so hai trung bình; Welch t-test cho phép phương sai hai nhóm khác nhau. Chi-square thường dùng với bảng số đếm, chẳng hạn mua/không mua theo kênh.\n\nANOVA so trung bình của nhiều nhóm cùng lúc. Nếu kết quả cho thấy có khác biệt, vẫn cần phân tích tiếp để biết nhóm nào khác nhóm nào."
      },
      {
        "title": "Vì sao chênh lệch lớn chưa đủ để kết luận?",
        "text": "Mean 20 và 23 có thể rất khác nếu mọi người trong nhóm gần mức đó, nhưng khó phân biệt hơn nếu giá trị trải rất rộng. Kiểm định xem chênh lệch cùng biến động và cỡ mẫu.\n\nMẫu nhỏ, dữ liệu phụ thuộc hoặc bảng đếm quá thưa cần được xem lại trước khi dùng công thức. Phần Python phía dưới tính các ví dụ; kết quả luôn cần đọc cùng cách lấy dữ liệu."
      }
    ],
    "formulas": [
      {
        "title": "Welch t-test",
        "math": "t=\\frac{\\bar{x}_A-\\bar{x}_B}{\\sqrt{s_A^2/n_A+s_B^2/n_B}}",
        "reading": "Chênh lệch mean chia SE của chênh lệch hai nhóm.",
        "symbols": "sA²,sB²: variance mẫu; nA,nB: cỡ mẫu; bậc tự do dùng Welch–Satterthwaite.",
        "condition": "Hai nhóm độc lập; điều kiện phân phối/large-sample thích hợp."
      },
      {
        "title": "Chi-square",
        "math": "\\chi^2=\\sum_{\\mathrm{cells}}\\frac{(O-E)^2}{E}",
        "reading": "Cộng bình phương observed trừ expected rồi chia expected ở từng ô.",
        "symbols": "O: tần suất quan sát; E: tần suất kỳ vọng dưới H₀.",
        "condition": "Dữ liệu đếm độc lập; xấp xỉ chi-square cần tần suất kỳ vọng thích hợp."
      },
      {
        "title": "ANOVA một chiều",
        "math": "F=\\frac{\\mathrm{MS}_{\\mathrm{between}}}{\\mathrm{MS}_{\\mathrm{within}}}",
        "reading": "MS giữa = SS giữa/(k−1); MS trong = SS trong/(N−k).",
        "symbols": "MSbetween: biến động trung bình giữa nhóm; MSwithin: biến động trung bình trong nhóm; F: tỷ số hai đại lượng này.",
        "condition": "ANOVA cổ điển giả định độc lập, phương sai bằng nhau và sai số Normal cho suy luận chính xác."
      }
    ],
    "worked": {
      "title": "Tính t chưa đồng nghĩa có p-value",
      "steps": [
        "A=[18,20,19,21]: n=4, mean=19,5, variance mẫu=1,6667.",
        "B=[22,23,21,24]: n=4, mean=22,5, variance mẫu=1,6667.",
        "SE chênh lệch = √(1,6667/4 + 1,6667/4) ≈ 0,9129.",
        "t ≈ −3,286; cần bậc tự do (ở đây 6) và phân phối t để tính p, đồng thời xem giả định với mẫu rất nhỏ."
      ],
      "conclusion": "Tên kiểm định, thống kê, bậc tự do và giả định phải đi cùng nhau."
    },
    "exercise": "Cùng 50 khách được đo trước và sau. Có dùng t-test hai nhóm độc lập như ví dụ không?",
    "answer": "Không nên bỏ ghép cặp. Phân tích chênh lệch theo từng khách, dùng paired t-test nếu điều kiện phù hợp hoặc phương pháp thay thế.",
    "source": {
      "title": "Đọc thêm · NIST · Two-Sample t-Test",
      "url": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm"
    }
  },
  "statistics-13": {
    "sections": [
      {
        "title": "Bao nhiêu người dùng là đủ?",
        "text": "Câu trả lời phụ thuộc mức thay đổi bạn muốn nhận ra. Phân biệt conversion 10% với 12% thường dễ hơn phân biệt 10% với 10,1%.\n\nTrước khi chạy test, hãy chọn một mức thay đổi đáng để hành động. Mức thay đổi nhỏ nhất bạn muốn thiết kế có thể phát hiện gọi là MDE."
      },
      {
        "title": "Power 80% nghĩa là gì?",
        "text": "Giả sử hiệu ứng đúng bằng mức đã chọn và bạn lặp test nhiều lần. Power 80% nghĩa là phương pháp sẽ phát hiện được hiệu ứng đó khoảng 80% số lần, trong các giả định của thiết kế.\n\nNó không có nghĩa phiên bản mới có 80% khả năng tốt hơn. Nếu hiệu ứng thật nhỏ hơn mức dùng để lập kế hoạch, test thường khó nhận ra hơn."
      },
      {
        "title": "Từ cỡ mẫu đến lịch chạy test",
        "text": "Sau khi có số người cần cho mỗi nhánh, xem mỗi ngày có bao nhiêu người đủ điều kiện và cách chia traffic. Test còn cần bao phủ chu kỳ hoạt động phù hợp.\n\nNếu phân nhóm theo người dùng, không thay số người bằng số phiên. Công thức dài phía dưới là một cách lập kế hoạch sơ bộ; với thiết kế phức tạp, cần công cụ và phương pháp phù hợp hơn."
      }
    ],
    "formulas": [
      {
        "title": "Power",
        "math": "\\operatorname{Power}=1-\\beta",
        "reading": "Một trừ xác suất bỏ lỡ hiệu ứng đã định.",
        "symbols": "β: Type II error tại mức effect size cụ thể.",
        "condition": "Phụ thuộc thiết kế, alpha, cỡ mẫu và hiệu ứng giả định."
      },
      {
        "title": "Cỡ mẫu sơ bộ mỗi nhánh cho hai tỷ lệ",
        "math": "n\\approx\\frac{(z_{1-\\alpha/2}+z_{1-\\beta})^2\\left[p_A(1-p_A)+p_B(1-p_B)\\right]}{(p_B-p_A)^2}",
        "reading": "Bình phương tổng mức tới hạn, nhân tổng variance Bernoulli, chia bình phương chênh lệch.",
        "symbols": "zq: quantile Normal; pA,pB: tỷ lệ kế hoạch; phân bổ hai nhánh bằng nhau.",
        "condition": "Xấp xỉ lập kế hoạch cho tỷ lệ gần nhau và mẫu độc lập; cần xác nhận bằng phương pháp chuyên dụng."
      }
    ],
    "worked": {
      "title": "Từ conversion 10% lên 12%",
      "steps": [
        "pA=0,10; pB=0,12; δ=0,02 (2 điểm phần trăm, tăng 20% tương đối).",
        "Alpha hai phía 0,05: z≈1,960; power 0,80: z≈0,842.",
        "Tổng variance = 0,09+0,1056=0,1956.",
        "n≈(1,960+0,842)²×0,1956/0,02²≈3838,1; làm tròn lên 3839 mỗi nhánh với quantile chính xác."
      ],
      "conclusion": "Đây là số sơ bộ theo công thức của bài, không phải đảm bảo test sẽ thành công."
    },
    "exercise": "Giữ mọi điều kiện tương tự, muốn phát hiện 1 điểm phần trăm thay vì 2 thì mẫu thay đổi khoảng thế nào?",
    "answer": "Xấp xỉ tăng bốn lần theo 1/δ², nhưng variance cũng đổi theo tỷ lệ kế hoạch nên cần tính lại chính xác.",
    "source": {
      "title": "Đọc thêm · NIST · Sample Size for Comparing Means",
      "url": "https://www.itl.nist.gov/div898/handbook/prc/section2/prc222.htm"
    }
  },
  "statistics-14": {
    "sections": [
      {
        "title": "So hai phiên bản bằng cách chia nhóm",
        "text": "Trong A/B test, một nhóm dùng bản A, nhóm kia dùng bản B. Phân nhóm ngẫu nhiên giúp hai nhóm có cơ hội tương đương về các đặc điểm ảnh hưởng đến kết quả.\n\nChốt trước ai được tham gia, phân theo người hay phiên, đo hành động gì và theo dõi bao lâu. Một người xuất hiện nhiều lần không tự trở thành nhiều quan sát độc lập."
      },
      {
        "title": "Đọc đúng mức tăng",
        "text": "A có 120 người mua trên 1000; B có 132 trên 1000. Conversion đi từ 12% lên 13,2%. Chênh lệch là 1,2 điểm phần trăm; mức tăng tương đối là 10%.\n\nHai cách nói đều đúng nhưng trả lời khác nhau. Ví dụ tính tay và hình bên dưới dùng cả hai để bạn đối chiếu."
      },
      {
        "title": "Kiểm tra test rồi mới quyết định",
        "text": "Trước khi đọc p-value, xem nhóm có được chia đúng kế hoạch không, tracking có mất sự kiện không và số người đủ điều kiện có bị lọc lệch không.\n\nSau đó đọc chênh lệch, khoảng tin cậy và các chỉ số cần giữ ổn định, như lỗi thanh toán hoặc hoàn tiền. Với 1000 người mỗi nhánh trong ví dụ này, ước lượng còn khá rộng; chưa đủ để chắc rằng B tốt hơn."
      }
    ],
    "formulas": [
      {
        "title": "Chênh lệch và lift",
        "math": "\\begin{aligned}\\Delta&=\\hat{p}_B-\\hat{p}_A\\\\ \\operatorname{lift}&=\\frac{\\Delta}{\\hat{p}_A}\\end{aligned}",
        "reading": "Chênh lệch tuyệt đối là phép trừ; lift chia thêm tỷ lệ A.",
        "symbols": "p̂A,p̂B: tỷ lệ từng nhánh; Δ: hiệu ứng quan sát.",
        "condition": "Cùng định nghĩa outcome, cửa sổ và đơn vị phân tích."
      },
      {
        "title": "Z-test hai tỷ lệ dưới H₀",
        "math": "z=\\frac{\\hat{p}_B-\\hat{p}_A}{\\sqrt{\\hat{p}_{\\mathrm{pool}}(1-\\hat{p}_{\\mathrm{pool}})(1/n_A+1/n_B)}}",
        "reading": "Chênh lệch chia SE dùng tỷ lệ gộp p̂pool=(kA+kB)/(nA+nB).",
        "symbols": "kA,kB: số thành công; nA,nB: số thử độc lập.",
        "condition": "Large-sample, hai nhóm độc lập; H₀ tỷ lệ bằng nhau."
      },
      {
        "title": "CI 95% cho chênh lệch",
        "math": "\\Delta\\pm1.96\\sqrt{\\frac{\\hat{p}_A(1-\\hat{p}_A)}{n_A}+\\frac{\\hat{p}_B(1-\\hat{p}_B)}{n_B}}",
        "reading": "Chênh lệch cộng/trừ 1,96 lần SE không gộp.",
        "symbols": "Khác với SE dưới H₀ dùng trong z-test.",
        "condition": "Xấp xỉ Wald; cần đủ thành công/thất bại và quan sát độc lập."
      }
    ],
    "worked": {
      "title": "120/1000 so với 132/1000",
      "steps": [
        "p̂A=0,12; p̂B=0,132; Δ=0,012, lift=10%.",
        "p̂pool=252/2000=0,126; SE dưới H₀≈0,01484.",
        "z≈0,809; p hai phía≈0,419, chưa bác bỏ H₀ ở alpha=0,05.",
        "SE không gộp≈0,01484; CI Δ≈[−0,0171;0,0411], tức [−1,71;4,11] điểm phần trăm."
      ],
      "conclusion": "Ước lượng dương nhưng còn bất định; không thể kết luận không có tác động hoặc bảo đảm phiên bản mới tốt hơn."
    },
    "exercise": "Test chưa có ý nghĩa, có nên kéo dài đến khi p<0,05 rồi dừng không?",
    "answer": "Không với kế hoạch fixed-horizon thông thường. Cần tuân thủ cỡ mẫu/thời lượng đã chốt hoặc dùng thiết kế tuần tự kiểm soát lỗi phù hợp.",
    "source": {
      "title": "Đọc thêm · ASA · Đọc p-value cùng thiết kế và bối cảnh",
      "url": "https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf"
    }
  },
  "statistics-15": {
    "sections": [
      {
        "title": "Vẽ một đường để tóm tắt mối liên hệ",
        "text": "Với mỗi mức chi quảng cáo X, bạn quan sát doanh thu Y. Hồi quy tuyến tính tìm một đường thẳng mô tả mối liên hệ giữa chúng.\n\nĐường dự đoán có dạng ŷ = b₀ + b₁x. b₁ cho biết dự đoán Y thay đổi bao nhiêu khi X tăng một đơn vị; b₀ là giá trị dự đoán tại X = 0."
      },
      {
        "title": "Đường fit còn sai bao nhiêu ở từng điểm?",
        "text": "Lấy doanh thu thật trừ doanh thu dự đoán, bạn được phần dư, hay residual. Điểm nằm trên đường có residual dương; nằm dưới có residual âm.\n\nXem hình phần dư giúp nhận ra mô hình bỏ sót đường cong, độ biến động thay đổi hoặc điểm rất khác thường. Đường fit sát một vài điểm chưa bảo đảm sẽ dự đoán tốt những điểm mới."
      },
      {
        "title": "R² cao chưa nói quảng cáo gây ra doanh thu",
        "text": "R² mô tả mô hình tóm tắt được bao nhiêu biến thiên của Y trên tập dữ liệu đang đánh giá. Nó không phải phần trăm doanh thu do quảng cáo tạo ra.\n\nMùa vụ có thể cùng tác động đến chi quảng cáo và doanh thu. Muốn dự đoán, hãy kiểm tra trên dữ liệu chưa dùng để fit; muốn đo tác động nhân quả, cần thiết kế bổ sung. Tránh kéo đường dự đoán quá xa vùng X đã quan sát."
      }
    ],
    "formulas": [
      {
        "title": "Mô hình và dự đoán",
        "math": "\\begin{aligned}Y&=\\beta_0+\\beta_1X+\\varepsilon\\\\ \\hat{y}&=b_0+b_1x\\end{aligned}",
        "reading": "Mean tuyến tính cộng sai số; dự đoán dùng các hệ số đã ước lượng.",
        "symbols": "β: hệ số tổng thể; b: ước lượng; ε: sai số; ŷ: dự đoán.",
        "condition": "Diễn giải trong phạm vi mô hình và miền dữ liệu phù hợp."
      },
      {
        "title": "OLS cho slope và intercept",
        "math": "\\begin{aligned}b_1&=\\frac{\\sum_i(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum_i(x_i-\\bar{x})^2}\\\\ b_0&=\\bar{y}-b_1\\bar{x}\\end{aligned}",
        "reading": "Slope là tổng tích độ lệch chia tổng bình phương độ lệch X.",
        "symbols": "x̄,ȳ: mean; intercept là dự đoán tại X=0.",
        "condition": "X có biến động; diễn giải X=0 chỉ hữu ích nếu nằm trong phạm vi có ý nghĩa."
      },
      {
        "title": "Hệ số xác định",
        "math": "R^2=1-\\frac{\\sum_i(y_i-\\hat{y}_i)^2}{\\sum_i(y_i-\\bar{y})^2}",
        "reading": "Một trừ tổng bình phương residual chia tổng biến thiên Y.",
        "symbols": "Tử số: SSE; mẫu số: SST.",
        "condition": "Y có biến động; R² trong mẫu có intercept không đánh giá được mọi rủi ro ngoài mẫu."
      }
    ],
    "worked": {
      "title": "Fit dữ liệu quảng cáo và doanh thu minh họa",
      "steps": [
        "X=[1,2,3,4,5], Y=[10,13,14,19,21]; x̄=3, ȳ=15,4.",
        "Tổng tích độ lệch =28; tổng bình phương X=10; b₁=2,8.",
        "b₀=15,4−2,8×3=7; dự đoán [9,8;12,6;15,4;18,2;21].",
        "Residual [0,2;0,4;−1,4;0,8;0]; SSE=2,8; SST=81,2; R²≈0,9655."
      ],
      "conclusion": "Mô hình fit tốt trên năm điểm nhưng chưa đánh giá được hiệu năng tương lai hoặc tác động nhân quả."
    },
    "exercise": "R²=0,97 có nghĩa 97% doanh thu là do quảng cáo tạo ra không?",
    "answer": "Không. Đây là phần biến thiên của Y được mô hình tuyến tính giải thích trên tập đánh giá và định nghĩa đang dùng, không phải tỷ lệ doanh thu có nguồn gốc nhân quả từ quảng cáo.",
    "source": {
      "title": "Đọc thêm · NIST · Linear Least Squares",
      "url": "https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd141.htm"
    }
  }
}
