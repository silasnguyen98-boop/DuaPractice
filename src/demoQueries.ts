export type DemoQueryProps = { onQueryChange: (query: string) => void }
export function lagQuery(mode: 'LAG' | 'LEAD'): string {
  const name = mode === 'LAG' ? 'previous_revenue' : 'next_revenue'
  return `WITH monthly AS (\n  SELECT STRFTIME('%Y-%m', created_at) AS month,\n         SUM(amount) AS revenue\n  FROM orders\n  WHERE status = 'đã thanh toán'\n  GROUP BY STRFTIME('%Y-%m', created_at)\n), compared AS (\n  SELECT month, revenue,\n         ${mode}(revenue) OVER (ORDER BY month) AS ${name}\n  FROM monthly\n)\nSELECT month, revenue, ${name}${mode === 'LAG' ? ',\n       1.0 * (revenue - previous_revenue)\n         / NULLIF(previous_revenue, 0) AS growth_rate' : ''}\nFROM compared\nORDER BY month;`
}
export function unionQuery(all: boolean): string {
  return `SELECT amount FROM web_orders\nUNION${all ? ' ALL' : ''}\nSELECT amount FROM app_orders\nORDER BY amount;`
}
export function existsQuery(negated: boolean): string {
  return `SELECT c.id, c.name\nFROM customers AS c\nWHERE ${negated ? 'NOT ' : ''}EXISTS (\n  SELECT 1\n  FROM orders AS o\n  WHERE o.customer_id = c.id\n    AND o.status = 'đã thanh toán'\n)\nORDER BY c.id;`
}
export const sortingQuery = 'SELECT id, amount\nFROM orders\nORDER BY amount DESC, id ASC\nLIMIT 2;'
export const qualityQuery = `SELECT o.id AS order_id, i.item_id, o.amount AS order_amount\nFROM orders AS o\nJOIN order_items AS i ON i.order_id = o.id\nORDER BY o.id, i.item_id;\n\nSELECT SUM(amount) AS correct_order_total\nFROM orders;\n\nSELECT COUNT(*) AS rows_after_join,\n       COUNT(DISTINCT o.id) AS unique_orders,\n       SUM(o.amount) AS wrong_sum\nFROM orders AS o\nJOIN order_items AS i ON i.order_id = o.id;`
