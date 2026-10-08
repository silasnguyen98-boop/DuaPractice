# Python Lab

Ứng dụng học Python bằng tiếng Việt với bài học ngắn, trình soạn thảo trực tiếp, chạy code và chấm test tự động ngay trong trình duyệt.

## Chạy ứng dụng

Cần Node.js 20.19+ hoặc 22.12+.

```bash
npm install
npm run dev
```

Mở địa chỉ local mà Vite in ra trên terminal. Build production bằng `npm run build`; kiểm tra lint bằng `npm run lint`.

## Thực hành

Chọn bài ở thanh bên, sửa code mẫu, rồi chọn **Chạy thử** hoặc **Kiểm tra bài**. Code và tiến độ được lưu trong local storage của trình duyệt hiện tại. Python được thực thi phía client bằng Pyodide; lần đầu chạy cần kết nối mạng để tải runtime từ jsDelivr.

## Bài học hiện có

- Hàm và giá trị trả về
- Điều kiện `if`
- Vòng lặp qua danh sách
- Các phương thức xử lý chuỗi

### Learning routes

- `/theory/statistics`: 15 expanded statistics articles with native MathML formulas, symbol/assumption explanations, SVG illustrations (interactive where useful), worked calculations, exercises and runnable Python examples. Editorial notes: `docs/statistics-editorial-sources.md`.

- `/theory/da101`: 16 Vietnamese Data Analytics Fundamentals articles in five groups (3/4/3/4/2), with business examples, exercises, role/KPI tables, interactive revenue decomposition and a revenue decline case study. Editorial notes: `docs/da101-editorial-sources.md`.

- `/theory/python` and `/theory/sql`: theory library.
- `/practice/python` and `/practice/sql`: the only available practice labs.
- `/theory/ai`: 20 Vietnamese AI reading lessons in five groups (6 foundations, 4 working methods, 4 analysis applications, 2 quality/responsibility, 4 workflows), with a tool comparison table. Power BI remains a theory subject. Editorial sources are maintained in `docs/ai-editorial-sources.md`.
- `/theory/google-sheets`: 14 Vietnamese Google Sheets lessons in four groups, with formulas, downloadable sample CSVs, exercises and a sales analysis case study. `/theory/excel` redirects to this series. Editorial sources: `docs/google-sheets-editorial-sources.md`.
- Legacy `/practice/ai`, `/practice/power-bi`, and `/practice/excel` links redirect in the client to `/practice/sql`.
- `/` redirects in the client to `/practice/python`; `/theory` and `/practice` default to Python.

Navigation uses browser history, supports Back/Forward and opening links in new tabs.
For production hosting, serve `dist/index.html` for application routes that do not match a static file (SPA fallback). This allows direct links and page refreshes on nested routes. Keep `/assets/*` served as static files. Vite dev and preview provide this fallback automatically.

## Chạy bằng Docker

Cần Docker và Docker Compose.

```bash
docker compose up -d --build
```

Mở http://localhost:8080. Container build frontend rồi phục vụ bằng Nginx; các route `/theory/sql`, `/practice/python` và `/certification/sql` có thể mở trực tiếp hoặc tải lại trang.

Đổi cổng nếu cần:

```bash
HTTP_PORT=3000 docker compose up -d --build
```

Xem log và dừng ứng dụng:

```bash
docker compose logs -f web
docker compose down
```

Nếu dùng Docker trực tiếp:

```bash
docker build -t dua-datalab:local .
docker run --rm -p 8080:8080 dua-datalab:local
```

Health check: `http://localhost:8080/health`. Python vẫn chạy trong trình duyệt và cần mạng để tải Pyodide/thư viện lần đầu. Code và tiến độ học được lưu trong local storage của trình duyệt; container không cần database hay volume dữ liệu.

### Production

Cấu hình production dùng project `dua-datalab-prod`, image `dua-datalab:production` và mặc định cổng 8080:

```bash
docker compose -f compose.production.yaml up -d --build
```

Có thể đặt `HTTP_PORT` để đổi cổng. Quản lý bản production:

```bash
docker compose -f compose.production.yaml ps
docker compose -f compose.production.yaml logs -f web
docker compose -f compose.production.yaml down
```

### Domain production

Ứng dụng đang phục vụ tại https://learn.duadata.net. Cấu hình `compose.production.yaml` kết nối network ngoài `duadata_duadata-net` của reverse proxy hiện có trên server. Trên server mới, cần tạo/cấu hình network tương ứng trước khi dùng cấu hình này.

Server block mẫu nằm trong `docker/learn.duadata.net.conf`, được thêm vào `/home/ubuntu/Duadata/nginx.conf`. Certificate riêng được quản lý bằng Certbot của project Duadata; cron `/etc/cron.d/dua-datalab-certbot` chạy script `docker/renew-learn-certificate.sh` hai lần mỗi ngày để gia hạn và reload Nginx.
