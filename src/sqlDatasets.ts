import { sqlTables, sqlFixtures, type SqlLesson, type SqlTable } from './sqlLessons'
export type SqlDataset = { id: string; title: string; description: string; tables: SqlTable[]; relations: string[]; units: string }
export const sqlDomains: SqlDataset[] = [
 { id: 'mkt', title: 'Tiếp thị', description: 'Đánh giá ngân sách quảng cáo, chuyển đổi và doanh thu của các chiến dịch.', units: 'spend và revenue: triệu đồng; ROAS = doanh thu / chi phí.', relations: ['channels.id → campaigns.channel_id','campaigns.id → spends.campaign_id','campaigns.id → leads.campaign_id','leads.id → conversions.lead_id'], tables: [
  {name:'channels',columns:['id','name'],rows:[[1,'Tìm kiếm'],[2,'Mạng xã hội'],[3,'Email']]},
  {name:'campaigns',columns:['id','name','channel_id'],rows:[[1,'Tìm kiếm thương hiệu',1],[2,'Mạng xã hội mùa hè',2],[3,'Email chăm sóc khách hàng',3],[4,'Ra mắt sản phẩm',2]]},
  {name:'spends',columns:['id','campaign_id','date','spend'],rows:[[1,1,'2026-09-01',10],[2,1,'2026-09-02',15],[3,2,'2026-09-01',20],[4,3,'2026-09-01',0]]},
  {name:'leads',columns:['id','campaign_id','created_at'],rows:[[1,1,'2026-09-01'],[2,1,'2026-09-02'],[3,2,'2026-09-01'],[4,2,'2026-09-02'],[5,3,'2026-09-01']]},
  {name:'conversions',columns:['id','lead_id','revenue','status'],rows:[[1,1,80,'đã thanh toán'],[2,2,20,'đã thanh toán'],[3,3,30,'đã thanh toán'],[4,4,10,'đã hủy'],[5,5,25,'đã thanh toán']]},
 ]},
 { id:'hr',title:'Human Resources',description:'Phân tích nhân sự đang làm việc, quỹ lương, ngày vắng và đánh giá hiệu suất.',units:'salary: triệu đồng/tháng; score: thang 1–5; mỗi dòng attendance là một ngày.',relations:['departments.id → employees.department_id','employees.id → salaries.employee_id','employees.id → attendance.employee_id','employees.id → reviews.employee_id'],tables:[
  {name:'departments',columns:['id','name'],rows:[[1,'Tiếp thị'],[2,'Kỹ thuật'],[3,'Nhân sự']]},
  {name:'employees',columns:['id','name','department_id','status'],rows:[[1,'An',1,'đang làm việc'],[2,'Bình',1,'đang làm việc'],[3,'Chi',2,'đang làm việc'],[4,'Dũng',2,'đã nghỉ']]},
  {name:'salaries',columns:['id','employee_id','effective_date','salary'],rows:[[1,1,'2026-01-01',20],[2,1,'2026-09-01',25],[3,2,'2026-09-01',18],[4,3,'2026-09-01',35],[5,4,'2026-01-01',30]]},
  {name:'attendance',columns:['id','employee_id','date','status'],rows:[[1,1,'2026-09-01','có mặt'],[2,1,'2026-09-02','vắng mặt'],[3,2,'2026-09-01','vắng mặt'],[4,3,'2026-09-01','có mặt'],[5,4,'2026-09-01','vắng mặt']]},
  {name:'reviews',columns:['id','employee_id','review_date','score'],rows:[[1,1,'2026-06-01',4],[2,1,'2026-09-01',5],[3,2,'2026-09-01',3],[4,3,'2026-09-01',4]]},
 ]},
]
export function getSqlDataset(lesson: SqlLesson): SqlDataset {
 const domain = sqlDomains.find((item)=>item.id===lesson.datasetId)
 if(domain) return domain
 const tables=lesson.track==='sql-basic' ? sqlTables.filter((table)=>table.name===(lesson.id==='sql-select'?'customers':'orders')) : sqlTables
 return {id:tables.length===1?tables[0].name:'commerce',title:tables.length===1?'Bảng '+tables[0].name:'Khách hàng & đơn hàng',description:tables.length===1?'Thực hành xử lý dữ liệu trên một bảng.':'Kết hợp dữ liệu khách hàng và đơn hàng.',tables,relations:tables.length===1?[]:['customers.id → orders.customer_id'],units:'amount: nghìn đồng.'}
}
export function getSqlFixtures(lesson: SqlLesson) {
 const dataset=getSqlDataset(lesson)
 if(!lesson.datasetId) return sqlFixtures.map(fixture=>({...fixture,tables:fixture.tables.filter(table=>dataset.tables.some(item=>item.name===table.name))}))
 const changed=dataset.tables.map(table=>({...table,rows:table.rows.map(row=>row.map((cell,index)=>typeof cell==='number' && ['spend','revenue','salary','score'].includes(table.columns[index])?cell+(table.columns[index]==='score'?-1:7):cell))}))
 if(lesson.datasetId==='mkt') {
  changed.find(table=>table.name==='spends')!.rows.push([50,4,'2026-09-03',30])
  changed.find(table=>table.name==='conversions')!.rows.push([50,1,15,'đã thanh toán'])
 } else {
  changed.find(table=>table.name==='employees')!.rows.push([50,'Mai',3,'đang làm việc'])
  changed.find(table=>table.name==='salaries')!.rows.push([50,2,'2026-09-01',40])
  changed.find(table=>table.name==='reviews')!.rows.push([50,2,'2026-09-01',4])
  changed.find(table=>table.name==='attendance')!.rows.push([50,1,'2026-09-03','vắng mặt'])
 }
 const facts=['spends','leads','conversions','salaries','attendance','reviews']
 return [{label:'Dataset '+dataset.title,tables:dataset.tables},{label:'Giá trị khác & lịch sử',tables:changed},{label:'Không có phát sinh',tables:dataset.tables.map(table=>({...table,rows:facts.includes(table.name)?[]:table.rows}))}]
}
const schemaCache = new Map<string, Record<string,string[]>>()
export function getSqlSchema(lesson: SqlLesson) {
 const dataset=getSqlDataset(lesson)
 if(!schemaCache.has(dataset.id)) schemaCache.set(dataset.id,Object.fromEntries(dataset.tables.map(table=>[table.name,table.columns])))
 return schemaCache.get(dataset.id)!
}
