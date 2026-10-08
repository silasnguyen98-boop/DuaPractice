// Export original teaching examples as PNG. Requires Playwright and a Chromium browser.
// PLAYWRIGHT_MODULE and BROWSER_EXECUTABLE_PATH optionally point to an existing installation.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const output = path.join(root, 'public/images/ai')
await fs.mkdir(output, { recursive: true })
const font = await fs.readFile(path.join(root, 'public/fonts/ibm-plex-sans-400.ttf'))
const bold = await fs.readFile(path.join(root, 'public/fonts/ibm-plex-sans-600.ttf'))
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')
const card = (title, content, tone='') => `<section class="card ${tone}"><h2>${esc(title)}</h2>${content}</section>`
const text = s => `<p>${esc(s)}</p>`
const badge = (s, tone='') => `<span class="badge ${tone}">${esc(s)}</span>`
const table = (heads, rows) => `<table><thead><tr>${heads.map(s=>`<th>${esc(s)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(s=>`<td>${esc(s)}</td>`).join('')}</tr>`).join('')}</tbody></table>`
const code = s => `<pre>${esc(s)}</pre>`
const chat = (who,s,tone='') => `<div class="chat ${tone}"><small>${esc(who)}</small>${text(s)}</div>`
const metric = (label,value,sub='') => `<div class="metric"><small>${esc(label)}</small><strong>${esc(value)}</strong><span>${esc(sub)}</span></div>`
const metrics = (...items) => `<div class="metrics">${items.join('')}</div>`
const check = (s, state='ok') => `<div class="check ${state}"><b>${state==='ok'?'✓':state==='bad'?'!':'→'}</b><span>${esc(s)}</span></div>`
const bars = () => `<div class="bars"><div><span>Trực tuyến</span><i style="width:70%"></i><b>420</b></div><div><span>Cửa hàng</span><i style="width:80%"></i><b>480</b></div></div>`
const scenes = [
 ['overview','Từ câu hỏi đến báo cáo','AI hỗ trợ thao tác; người phân tích kiểm tra ý nghĩa.',
 card('Câu hỏi của quản lý',chat('YÊU CẦU','Doanh thu tháng 5 giảm ở kênh nào?')+table(['Kênh','Tháng 4','Tháng 5'],[['Trực tuyến','600','420'],['Cửa hàng','400','480'],['Tổng','1.000','900']]))+
 card('Cách chia việc',check('Bạn chọn thời gian và cách tính doanh thu')+check('AI giúp tạo bảng và viết bản nháp')+check('Bạn đối chiếu số và chọn phần cần xem tiếp')+chat('NHẬN XÉT','Tổng giảm 10%. Kênh trực tuyến giảm nhiều nhất.','green'))],
 ['generative-ai','Nghe hợp lý chưa chắc đã đúng','Ví dụ: AI đoán tên cột khi chưa được cung cấp dữ liệu.',
 card('Câu trả lời có vẻ hợp lý',chat('BẠN','Viết SQL tính doanh thu từ orders.')+code('SELECT SUM(revenue)\nFROM orders;')+badge('Cột revenue chưa được cung cấp','bad'))+
 card('Đối chiếu bảng thật',table(['Tên cột','Ý nghĩa'],[['id','Mã đơn'],['amount','Số tiền'],['status','Trạng thái']])+code('SELECT SUM(amount)\nFROM orders\nWHERE status = \'paid\';')+badge('Kiểm tra cột và cách tính trước khi dùng'))],
 ['context','Cùng một câu hỏi, thông tin rõ hơn','Context là thông tin đi kèm để AI hiểu đúng việc cần làm.',
 card('Câu hỏi còn thiếu',chat('BẠN','Tính doanh thu tháng 5.')+check('Dùng ngày đặt hàng hay thanh toán?','wait')+check('Có tính đơn hủy không?','wait')+check('Tiền tính bằng đồng hay nghìn đồng?','wait'))+
 card('Bổ sung thông tin',chat('BẠN','Bảng orders: mỗi dòng là một đơn. Chỉ lấy đơn đã thanh toán; dùng ngày paid_at. Tiền tính bằng đồng. Trả bảng doanh thu theo kênh.','green')+badge('Bảng · ý nghĩa · cách tính · kết quả'))],
 ['ai-assistants','Thử công cụ bằng cùng một đề bài','Chọn theo kết quả thực tế, không chỉ theo tên sản phẩm.',
 card('Một bài thử nhỏ',table(['Dữ liệu','Yêu cầu'],[['Tệp bán hàng','Tìm dòng trùng'],['Cùng cách tính','Cộng doanh thu theo tháng'],['Đã biết tổng đúng','Viết 3 nhận xét']])+chat('ĐỀ BÀI','Dùng cùng tệp và cùng yêu cầu cho mỗi công cụ.'))+
 card('Những điểm cần xem',check('Tổng doanh thu có đúng không?')+check('Có xem lại các bước tính không?')+check('Mất bao lâu để kiểm tra và sửa?')+badge('Chọn công cụ phù hợp với công việc của bạn'))],
 ['rag','Tìm tài liệu trước khi trả lời','RAG giúp AI có thêm thông tin cần thiết của công ty.',
 card('Tài liệu nội bộ',badge('QUY ĐỊNH MINH HỌA')+text('Khách đang hoạt động')+`<blockquote>Có ít nhất một giao dịch thành công trong 30 ngày.</blockquote>`+text('Tài liệu cung cấp định nghĩa; không chứa doanh thu hôm nay.'))+
 card('Câu hỏi và câu trả lời',chat('BẠN','Công ty tính khách đang hoạt động thế nào?')+chat('AI ĐỌC ĐOẠN TÀI LIỆU','Theo định nghĩa đã cung cấp, đó là khách có giao dịch thành công trong 30 ngày.','green')+check('Xem tài liệu có đang được áp dụng không'))],
 ['agents','Trợ lý có công cụ để làm việc','Agent có thể lấy dữ liệu và chọn bước tiếp theo.',
 card('Nhiệm vụ',chat('BẠN','Tóm tắt doanh thu tuần trước.')+table(['Công cụ được cấp','Được làm gì?'],[['Đọc bảng doanh thu','Xem số liệu'],['Kiểm tra ngày','Xem đủ tuần chưa'],['Soạn nhận xét','Tạo bản nháp']]))+
 card('Một lần thực hiện',check('Đọc bảng doanh thu')+check('Có đủ 7 ngày')+check('So tổng với bảng nguồn')+check('Soạn bản nháp để người phụ trách duyệt')+badge('Thiếu dữ liệu thì dừng hoặc hỏi lại'))],
 ['tools','Chọn công cụ theo việc cần làm','Một sản phẩm có thể hỗ trợ nhiều kiểu công việc.',
 card('Hỏi và tính',chat('GIẢI THÍCH','Vì sao câu lệnh này cộng lặp tiền đơn?')+badge('Trợ lý trò chuyện')+chat('PHÂN TÍCH TỆP','Đọc bảng, cộng số và tạo biểu đồ.')+badge('Công cụ có khả năng chạy phép tính'))+
 card('Bảng tính và tự động hóa',chat('TRONG EXCEL / SHEETS','Viết công thức, kiểm tra vùng ô, chọn biểu đồ.')+badge('Làm ngay trên bảng tính')+chat('LẶP LẠI HẰNG TUẦN','Chương trình lấy số rồi nhờ AI viết nhận xét.')+badge('API và công cụ tự động hóa'))],
 ['prompting','Một yêu cầu rõ có bốn phần','Không cần dài; cần đủ để hiểu đúng cách làm.',
 card('Yêu cầu mẫu',chat('BẠN','Tính doanh thu theo tháng từ bảng orders. Mỗi dòng là một đơn. Cộng amount của đơn status = paid, theo paid_at. Trả SQL và giải thích cách tính. Nếu thiếu thông tin, hãy hỏi lại.','green'))+
 card('Tách từng phần',table(['Phần','Thông tin đã nêu'],[['Việc cần làm','Doanh thu theo tháng'],['Dữ liệu','orders; một dòng là một đơn'],['Cách tính','Đã thanh toán; dùng paid_at'],['Kết quả','SQL và giải thích']]))],
 ['business-context','Tên cột chưa quyết định cách tính','Khách mới được tính theo lần mua đầu, không theo ngày đăng ký.',
 card('Một khách trong hai tháng',metrics(metric('Tháng 4','Đăng ký','Tạo tài khoản'),metric('Tháng 5','Mua lần đầu','Thanh toán đơn đầu tiên'))+table(['Cách định nghĩa','Tháng được tính'],[['Theo ngày đăng ký','Tháng 4'],['Theo lần mua đầu','Tháng 5']]))+
 card('Quy tắc của công ty',chat('ĐỊNH NGHĨA','Khách mới trong tháng là người có đơn thanh toán đầu tiên thuộc tháng đó.','green')+check('Lấy lịch sử đơn đã thanh toán')+check('Tìm ngày mua đầu tiên của từng khách')+check('Xem ngày đó thuộc tháng nào'))],
 ['api','Chương trình gửi yêu cầu đến AI','API giúp lặp lại một việc mà không cần gõ tay mỗi lần.',
 card('Thông tin gửi đi',table(['Kênh','Doanh thu tháng 5'],[['Trực tuyến','420 triệu'],['Cửa hàng','480 triệu']])+chat('HƯỚNG DẪN','Viết nhận xét ngắn. Chỉ dùng số đã cho; không đoán nguyên nhân.'))+
 card('Kết quả chương trình nhận',code('{\n  "summary": "Tổng 900 triệu",\n  "observations": [\n    "Cửa hàng đạt 480 triệu"\n  ],\n  "missing_information": []\n}')+badge('Đúng cấu trúc vẫn cần kiểm tra số liệu'))],
 ['sql-python','Nối bảng có thể làm tiền bị lặp','JOIN nối hai bảng; tiền cả đơn có thể xuất hiện nhiều lần.',
 card('Bảng đơn hàng ban đầu',table(['Mã đơn','Tiền đơn'],[['101','300'],['102','200']])+metrics(metric('Tổng đúng','500','Nghìn đồng')))+
 card('Sau khi nối với sản phẩm',table(['Mã đơn','Sản phẩm','Tiền cả đơn'],[['101','Bàn','300'],['101','Ghế','300'],['102','Đèn','200']])+metrics(metric('Cộng cả 3 dòng','800','Sai vì đơn 101 bị cộng hai lần')),'warn')],
 ['files','Tách dòng lỗi để không mất dấu số tiền','Ngày 31/04 không tồn tại; cần tra lại ngày đúng.',
 card('Tệp bán hàng mẫu',table(['Mã đơn','Ngày','Tiền'],[['101','01/05/2026','100'],['102','02/05/2026','200'],['103','31/04/2026','300'],['104','01/05/2026','400']])+badge('4 dòng · tổng 1.000 nghìn đồng'))+
 card('Sau khi kiểm tra ngày',metrics(metric('Dòng hợp lệ','700','3 dòng'),metric('Cần xem lại','300','1 dòng'))+check('700 + 300 = 1.000')+chat('LƯU Ý','700 là tổng phần hợp lệ, chưa phải toàn bộ doanh thu thật.','amber'))],
 ['data-analysis','Ít đơn hơn hay tiền mỗi đơn thấp hơn?','Tách doanh thu thành hai phần để biết cần xem tiếp ở đâu.',
 card('Hai tháng cần so sánh',table(['Chỉ số','Tháng 4','Tháng 5'],[['Số đơn','1.000','700'],['Tiền trung bình / đơn','600 nghìn','600 nghìn'],['Doanh thu','600 triệu','420 triệu']])+badge('Doanh thu = số đơn × tiền trung bình / đơn'))+
 card('Điều đã biết và chưa biết',metrics(metric('Số đơn','−30%'),metric('Tiền / đơn','Giữ nguyên'))+chat('NHẬN XÉT','Doanh thu giảm do số đơn giảm. Chưa biết vì sao ít đơn hơn.','green')+check('Xem số đơn theo kênh hoặc nhóm khách'))],
 ['storytelling','Viết nhận xét đi cùng bằng chứng','Quan sát thay đổi trước, tìm nguyên nhân sau.',
 card('Doanh thu tháng 5',metrics(metric('Tổng','900 triệu','Tháng 4: 1.000 triệu'))+bars()+text('Đơn vị biểu đồ: triệu đồng.'))+
 card('Nhận xét cho báo cáo',chat('CÓ CĂN CỨ','Tổng giảm 10%. Trực tuyến giảm 180 triệu; cửa hàng tăng 80 triệu, bù một phần mức giảm.','green')+chat('CẦN THÊM DỮ LIỆU','Chưa đủ căn cứ để nói khách đã chuyển từ trực tuyến sang cửa hàng.','amber'))],
 ['validation','Tỷ lệ chung phải tính từ số lượt','Hai kênh có lượng truy cập khác nhau.',
 card('Bảng số liệu gốc',table(['Kênh','Tạo đơn','Truy cập','Tỷ lệ'],[['A','10','100','10%'],['B','90','300','30%'],['Tổng','100','400','25%']])+badge('Tỷ lệ = lượt tạo đơn / lượt truy cập'))+
 card('So hai cách gộp',chat('CÁCH SAI','(10% + 30%) / 2 = 20%','amber')+chat('CÁCH ĐÚNG','(10 + 90) / (100 + 300) = 25%','green')+check('Giữ số lượt để tính lại được tỷ lệ'))],
 ['privacy','Giữ phần cần, bỏ phần không liên quan','Ví dụ tìm lỗi nối bảng không cần thông tin cá nhân.',
 card('Tệp có nhiều thông tin',table(['Cột','Có cần để thử lỗi?'],[['Tên khách','Không'],['Email','Không'],['Mã đơn','Có'],['Số tiền','Có'],['Mã sản phẩm','Có']]))+
 card('Mẫu hoàn toàn giả lập',table(['Mã đơn','Tiền','Sản phẩm'],[['101','300','Bàn'],['101','300','Ghế'],['102','200','Đèn']])+badge('Dữ liệu tự tạo để học')+check('Dùng dữ liệu thật theo quyền được phép'))],
 ['automation','Dừng trước khi viết báo cáo thiếu ngày','Kiểm tra số trước, rồi mới nhờ AI soạn nhận xét.',
 card('Dữ liệu chưa đủ',metrics(metric('Tuần trước','7/7 ngày'),metric('Tuần này','5/7 ngày'))+chat('KẾT QUẢ KIỂM TRA','Thiếu hai ngày: chưa thể so hai tuần đầy đủ.','amber'))+
 card('Quy trình xử lý',check('Lấy bảng số liệu')+check('Kiểm tra đủ ngày','bad')+check('Dừng và báo phần còn thiếu','wait')+text('Chưa chuyển sang bước AI viết nhận xét.'))],
 ['business-dashboard','Màn hình trả lời một câu hỏi cụ thể','Doanh thu tháng 5 giảm ở kênh nào?',
 card('Doanh thu tháng 5',metrics(metric('Doanh thu','900 triệu'),metric('So tháng 4','−10%'))+bars()+text('Đơn vị biểu đồ: triệu đồng.'))+
 card('Thông tin cần nhìn thấy',check('Tổng doanh thu và tháng đang xem')+check('So với tháng trước')+check('Tách theo kênh bán')+chat('CÂU HỎI TIẾP','Trực tuyến ít đơn hơn hay tiền trung bình mỗi đơn thấp hơn?','green'))],
 ['scheduled-reports','Báo cáo tuần từ bảng đã kiểm tra','Một bản cho mỗi tuần; có người xem lại trước khi gửi.',
 card('Lịch và điều kiện',badge('THỨ HAI · TUẦN ĐÃ KẾT THÚC')+check('Nguồn có đủ dữ liệu 7 ngày')+check('Tổng khớp với bảng gốc')+check('Chưa có báo cáo gửi cho cùng tuần')+text('Thiếu một điều kiện: dừng và báo lý do.'))+
 card('Bản nháp nhận xét',chat('DOANH THU TUẦN','Tổng: 900 triệu\nTuần trước: 1.000 triệu\nChênh lệch: giảm 10%','green')+badge('Người phụ trách kiểm tra trước khi phát hành'))],
 ['analyst-assistant','Một trợ lý biết trả lời và hỏi lại','Trợ lý chỉ có dữ liệu doanh thu theo kênh.',
 card('Bảng cung cấp cho trợ lý',table(['Kênh','Tháng 4','Tháng 5'],[['Trực tuyến','600','420'],['Cửa hàng','400','480']])+text('Đơn vị: triệu đồng. Chưa có dữ liệu quảng cáo.'))+
 card('Hai câu hỏi khác nhau',chat('CÂU HỎI TRẢ LỜI ĐƯỢC','Kênh nào giảm nhiều nhất? → Trực tuyến, giảm 180 triệu.','green')+chat('CÂU HỎI CẦN THÊM DỮ LIỆU','Quảng cáo nào gây giảm? → Cần số liệu từng chiến dịch.','amber'))],
]
const css = `@font-face{font-family:Plex;src:url(data:font/ttf;base64,${font.toString('base64')})} @font-face{font-family:Plex;src:url(data:font/ttf;base64,${bold.toString('base64')});font-weight:600} *{box-sizing:border-box}body{margin:0;font-family:Plex,sans-serif;color:#223e33;background:#fff}.art{width:1200px;padding:44px;background:radial-gradient(ellipse at 90% 0%,#e3eee6,transparent 65%),#f7f8f2;border:1px solid #d7e4d9}.eyebrow{display:flex;justify-content:space-between;font-size:14px;font-weight:600;letter-spacing:1.5px;color:#477862}.eyebrow span:last-child{letter-spacing:.4px;font-weight:400;color:#6a7c71}h1{font-size:36px;line-height:1.22;letter-spacing:-.6px;margin:24px 0 10px}header>p{font-size:21px;color:#637b6b;margin:0 0 28px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}.card{padding:26px;background:#fff;border:1px solid #d6e2d8;border-radius:14px;box-shadow:0 4px 0 #e4ece3;min-width:0}.card.warn{border-color:#e0c9a6}h2{font-size:23px;margin:0 0 20px;font-weight:600}p{font-size:20px;line-height:1.5;margin:12px 0}table{width:100%;border-collapse:collapse;font-size:18px;text-align:left}th{font-weight:600;color:#5c7567;font-size:15px;background:#f3f6f0}td,th{padding:13px 12px;border-bottom:1px solid #e4eae2;line-height:1.3}tbody tr:last-child td{border-bottom:0}.badge{display:inline-block;background:#e9f3e9;color:#397153;padding:9px 12px;border-radius:5px;font-size:15px;margin-top:16px}.badge.bad{background:#f9eae3;color:#995329}.chat{padding:18px 20px;background:#f4f5f0;border-left:3px solid #bdcbbf;margin:14px 0;border-radius:0 8px 8px 0}.chat small{font-size:13px;letter-spacing:.8px;color:#667c6b}.chat p{margin:7px 0 0;font-size:20px;white-space:pre-line}.green{background:#edf5ec;border-color:#4d8a65}.amber{background:#fcf4e7;border-color:#c39c61}pre{padding:20px;font:18px/1.55 monospace;white-space:pre-wrap;overflow-wrap:anywhere;color:#cfe3d1;background:#223c32;border-radius:9px;margin:16px 0}.metrics{display:flex;gap:20px;margin:18px 0}.metric{flex:1;min-width:0}.metric small{display:block;font-size:15px;color:#6d7e71}.metric strong{display:block;font-size:32px;line-height:1.25;color:#216b4d;margin:6px 0}.metric span{font-size:15px;color:#6d7e71}.check{display:flex;align-items:flex-start;gap:12px;padding:14px 0;border-bottom:1px solid #e7ece4;font-size:19px;line-height:1.4}.check:last-child{border:0}.check b{color:#397d57}.check.bad b{color:#a97442}.check.wait b{color:#8a9b8c}blockquote{margin:20px 0;padding:20px 0;font-size:29px;line-height:1.4;color:#2c694a;border-block:1px solid #dce7da}.bars{margin:26px 0}.bars div{display:grid;grid-template-columns:105px 1fr 45px;gap:12px;align-items:center;margin:18px 0;font-size:17px}.bars i{display:block;height:28px;background:#498363;border-radius:3px}.bars div+div i{background:#98b49b}footer{display:flex;justify-content:space-between;margin-top:30px;padding-top:18px;border-top:1px solid #d9e3d5;font-size:14px;color:#768775}`
const browser = await chromium.launch({ ...(process.env.BROWSER_EXECUTABLE_PATH ? {executablePath:process.env.BROWSER_EXECUTABLE_PATH} : {}), args:['--no-sandbox'] })
const page = await browser.newPage({viewport:{width:1200,height:1000},deviceScaleFactor:1})
try {
 for (const [id,title,description,content] of scenes) {
  await page.setContent(`<!doctype html><html lang="vi"><meta charset="utf-8"><style>${css}</style><body><main class="art"><header><div class="eyebrow"><span>DUA EDU · AI CHO NGƯỜI PHÂN TÍCH</span><span>Ví dụ học tập</span></div><h1>${esc(title)}</h1><p>${esc(description)}</p></header><div class="grid">${content}</div><footer><span>Minh họa do DUA Edu biên soạn · Dữ liệu và tình huống giả lập</span><span>${String(scenes.findIndex(s=>s[0]===id)+1).padStart(2,'0')} / 20</span></footer></main></body></html>`)
  await page.evaluate(()=>document.fonts.ready)
  const art = page.locator('.art')
  const box = await art.boundingBox()
  await art.screenshot({path:path.join(output,`${id}-example.png`)})
  console.log(`${id}: 1200 × ${Math.ceil(box.height)}`)
 }
} finally { await browser.close() }
