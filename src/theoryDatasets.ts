import type { SqlTable } from './sqlLessons'

const customers: SqlTable = { name: 'customers', columns: ['id', 'name', 'city', 'email', 'phone', 'amount'], rows: [[1, 'An', 'Hà Nội', ' An@EXAMPLE.COM ', '0123456789', '300'], [2, 'Bình', 'Đà Nẵng', null, '0987654321', '200'], [3, 'Chi', 'Hà Nội', 'chi@example.com', '0912345678', '100']] }
const columns = ['id', 'customer_id', 'customer', 'channel', 'amount', 'status', 'discount', 'quantity', 'created_at']
const base: SqlTable = { name: 'orders', columns, rows: [[1, 1, 'An', 'Website', 300, 'đã thanh toán', null, 2, '2026-01-01 00:00:00'], [2, 1, 'An', 'Website', 250, 'đã thanh toán', 10, 1, '2026-01-31 23:59:59'], [3, 2, 'Bình', 'Ứng dụng', 200, 'đã thanh toán', 0, 0, '2026-02-01 00:00:00'], [4, 2, 'Bình', 'Ứng dụng', 800, 'chờ thanh toán', 0, 2, '2026-01-15 10:00:00']] }
function orders(rows: SqlTable['rows']): SqlTable { return { name: 'orders', columns, rows } }
export function theoryTables(topicId: string): SqlTable[] {
  let table = base
  if (topicId === 'sql-intro' || topicId === 'sql-kpi') table = orders([[1, 1, 'An', 'Website', 300, 'đã thanh toán', null, 2, '2026-01-03'], [2, 2, 'Bình', 'Website', 200, 'đã thanh toán', 0, 1, '2026-01-04'], [3, 3, 'Chi', 'Website', 100, 'chờ thanh toán', 0, 0, '2026-01-05']])
  if (topicId === 'sorting') table = orders([[3, 1, 'An', 'Website', 50, 'đã thanh toán', 0, 1, '2026-01-01'], [2, 2, 'Bình', 'Ứng dụng', 80, 'đã thanh toán', 0, 1, '2026-01-02'], [1, 1, 'An', 'Website', 80, 'đã thanh toán', 0, 1, '2026-01-03'], [4, 3, 'Chi', 'Cửa hàng', 30, 'đã thanh toán', 0, 1, '2026-01-04']])
  if (topicId === 'window') table = orders([[1, 1, 'An', 'Website', 400, 'đã thanh toán', 0, 1, '2026-01-01'], [2, 2, 'Bình', 'Ứng dụng', 300, 'đã thanh toán', 0, 1, '2026-01-02'], [3, 3, 'Chi', 'Website', 200, 'đã thanh toán', 0, 1, '2026-01-03'], [4, 1, 'An', 'Website', 400, 'đã thanh toán', 0, 1, '2026-01-04'], [5, 2, 'Bình', 'Ứng dụng', 100, 'đã thanh toán', 0, 1, '2026-01-05'], [6, 3, 'Chi', 'Ứng dụng', 300, 'đã thanh toán', 0, 1, '2026-01-06']])
  if (topicId === 'cte') table = orders([[1, 1, 'An', 'Website', 300, 'đã thanh toán', 0, 1, '2026-01-01'], [2, 2, 'Bình', 'Website', 200, 'đã thanh toán', 0, 1, '2026-01-02'], [3, 1, 'An', 'Website', 250, 'đã thanh toán', 0, 1, '2026-01-03'], [4, 3, 'Chi', 'Ứng dụng', 700, 'đã thanh toán', 0, 1, '2026-01-04'], [5, 2, 'Bình', 'Ứng dụng', 150, 'đã thanh toán', 0, 1, '2026-01-05']])
  if (topicId === 'sql-lag') table = orders([[1, 1, 'An', 'Website', 100, 'đã thanh toán', 0, 1, '2026-01-01'], [2, 1, 'An', 'Website', 120, 'đã thanh toán', 0, 1, '2026-02-01'], [3, 1, 'An', 'Website', 90, 'đã thanh toán', 0, 1, '2026-03-01']])
  if (topicId === 'sql-exists') table = orders([[1, 1, 'An', 'Website', 100, 'đã thanh toán', 0, 1, '2026-01-01'], [2, 1, 'An', 'Website', 200, 'đã thanh toán', 0, 1, '2026-01-02'], [3, 2, 'Bình', 'Ứng dụng', 50, 'chờ thanh toán', 0, 1, '2026-01-03']])
  if (topicId === 'sql-quality') table = orders([[1, 1, 'An', 'Website', 100, 'đã thanh toán', 0, 1, '2026-01-01'], [2, 2, 'Bình', 'Ứng dụng', 200, 'đã thanh toán', 0, 1, '2026-01-02']])
  const tables = [table, customers,
    { name: 'order_items', columns: ['order_id', 'item_id'], rows: [[1, 'A'], [1, 'B'], [2, 'C'], [2, 'D']] },
    { name: 'Products', columns: ['ID', 'Product'], rows: [[1, 'Ghế'], [2, 'Bàn'], [3, 'Máy tính xách tay'], [4, 'Điện thoại'], [5, 'USB']] },
    { name: 'Prices', columns: ['ID', 'Price'], rows: [[1, 80], [2, 120], [4, 799], [6, 99]] },
    { name: 'web_orders', columns: ['id', 'amount'], rows: [[1, 100], [2, 200]] },
    { name: 'app_orders', columns: ['id', 'amount'], rows: [[1, 200], [2, 300]] },
  ] satisfies SqlTable[]
  const names = topicId === 'sql-quality' ? ['orders', 'order_items'] : topicId === 'join' ? ['Products', 'Prices'] : topicId === 'sql-union' ? ['web_orders', 'app_orders'] : topicId === 'sql-exists' ? ['customers', 'orders'] : topicId === 'sql-cleaning' ? ['customers'] : topicId === 'sql-null' || topicId === 'sql-pattern' ? ['orders', 'customers'] : ['orders']
  return tables.filter(item => names.includes(item.name))
}
