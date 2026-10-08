import type { ReactNode } from 'react'

export default function RouteLink({ href, onNavigate, disabled = false, active, className, children }: { href: string; onNavigate: () => void; disabled?: boolean; active: boolean; className: string; children: ReactNode }) {
  return <a href={disabled ? undefined : href} className={className} aria-current={active ? 'page' : undefined} aria-disabled={disabled || undefined} onClick={event => {
    if (disabled) { event.preventDefault(); return }
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    onNavigate()
  }}>{children}</a>
}
