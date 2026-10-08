import { Expand } from 'lucide-react'
import type { AiArticleImageData } from './aiArticleImages'

export default function AiArticleImage({ image, reference = false }: { image: AiArticleImageData; reference?: boolean }) {
  return <figure className={`ai-article-image${reference ? ' ai-article-reference-image' : ''}`}>
    <a className="ai-article-image-open" href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Mở ảnh lớn: ${image.alt}`}>
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
      <span><Expand size={14} aria-hidden="true" />Mở ảnh lớn</span>
    </a>
    <figcaption><p>{image.caption}</p><small>{image.sourceUrl ? <>Ảnh: <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">{image.sourceLabel}</a></> : image.sourceLabel}</small></figcaption>
  </figure>
}
