export type JoinKind = 'INNER' | 'LEFT' | 'RIGHT' | 'FULL'
export const joinProducts = [{ id: 1, product: 'Ghế' }, { id: 2, product: 'Bàn' }, { id: 3, product: 'Máy tính xách tay' }, { id: 4, product: 'Điện thoại' }, { id: 5, product: 'USB' }]
export const joinPrices = [{ id: 1, price: 80 }, { id: 2, price: 120 }, { id: 4, price: 799 }, { id: 6, price: 99 }]
export type JoinedRow = { aId: number | null; product: string | null; bId: number | null; price: number | null; reason: string }
export function buildJoinRows(kind: JoinKind): JoinedRow[] {
  const rows: JoinedRow[] = []
  for (const product of joinProducts) {
    const matches = joinPrices.filter((price) => price.id === product.id)
    for (const price of matches) rows.push({ aId: product.id, product: product.product, bId: price.id, price: price.price, reason: `ID ${product.id} có ở cả A và B: ghép ${product.product} với giá $${price.price}.` })
    if (!matches.length && (kind === 'LEFT' || kind === 'FULL')) rows.push({ aId: product.id, product: product.product, bId: null, price: null, reason: `ID ${product.id} chỉ có ở A. ${kind} JOIN giữ ${product.product} và điền NULL cho các cột của B.` })
  }
  if (kind === 'RIGHT' || kind === 'FULL') for (const price of joinPrices) {
    if (!joinProducts.some((product) => product.id === price.id)) rows.push({ aId: null, product: null, bId: price.id, price: price.price, reason: `ID ${price.id} chỉ có ở B. ${kind} JOIN giữ giá $${price.price} và điền NULL cho các cột của A.` })
  }
  return rows
}

export function joinQuery(kind: JoinKind): string {
  return `SELECT a.ID, a.Product, b.ID, b.Price\nFROM Products AS a\n${kind === 'FULL' ? 'FULL OUTER' : kind} JOIN Prices AS b\nON a.ID = b.ID;`
}
