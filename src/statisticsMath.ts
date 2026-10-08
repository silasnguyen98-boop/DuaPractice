// Deterministic simulations keep illustrations reproducible across devices.
export function seededRandom(seed: number) {
  let state = seed >>> 0
  return () => { state = (1664525 * state + 1013904223) >>> 0; return (state + 0.5) / 4294967296 }
}
export function normalRandom(random: () => number) { return Math.sqrt(-2 * Math.log(random())) * Math.cos(2 * Math.PI * random()) }
export function mean(values: number[]) { return values.reduce((a,b)=>a+b,0)/values.length }
export function correlation(x: number[], y: number[]) {
  const mx=mean(x), my=mean(y)
  return x.reduce((s,v,i)=>s+(v-mx)*(y[i]-my),0)/Math.sqrt(x.reduce((s,v)=>s+(v-mx)**2,0)*y.reduce((s,v)=>s+(v-my)**2,0))
}
export function normalCdf(x: number) {
  const a=Math.abs(x), t=1/(1+0.2316419*a)
  const tail=Math.exp(-a*a/2)/Math.sqrt(2*Math.PI)*(0.319381530*t-0.356563782*t**2+1.781477937*t**3-1.821255978*t**4+1.330274429*t**5)
  return x>=0 ? 1-tail : tail
}
export function sampleMeans(n: number, repetitions=1200) {
  const random=seededRandom(20261008)
  return Array.from({length:repetitions},()=>mean(Array.from({length:n},()=>-Math.log(random()))))
}
export function binomial(n: number,p: number,k: number) {
  let c=1; for(let i=1;i<=k;i++) c=c*(n-i+1)/i
  return c*p**k*(1-p)**(n-k)
}
export function poisson(lambda: number,k: number) {
  let factorial=1; for(let i=2;i<=k;i++) factorial*=i
  return Math.exp(-lambda)*lambda**k/factorial
}
export function abResult(n: number) {
  const a=0.12,b=0.132,delta=b-a,pooled=(a+b)/2
  const seNull=Math.sqrt(pooled*(1-pooled)*2/n)
  const se=Math.sqrt((a*(1-a)+b*(1-b))/n)
  return {a,b,delta,z:delta/seNull,p:2*(1-normalCdf(Math.abs(delta/seNull))),low:delta-1.96*se,high:delta+1.96*se}
}
