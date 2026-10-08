import { useEffect, useState } from 'react'
import { normalizeRoute, parseRoute, routePath, type LearningRoute } from './routeModel'

export default function useLearningRoute() {
  const [route, setRoute] = useState(() => parseRoute(window.location.pathname))
  useEffect(() => {
    const readLocation = () => {
      const next = parseRoute(window.location.pathname)
      const canonical = routePath(next)
      if (window.location.pathname !== canonical) window.history.replaceState(null, '', canonical + window.location.search + window.location.hash)
      setRoute(next)
    }
    readLocation()
    window.addEventListener('popstate', readLocation)
    return () => window.removeEventListener('popstate', readLocation)
  }, [])
  const navigate = (requested: LearningRoute) => {
    const next = normalizeRoute(requested)
    const path = routePath(next)
    if (path === window.location.pathname) return
    window.history.pushState(null, '', path)
    setRoute(next)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  return {
    ...route,
    setLanguage: (language: LearningRoute['language']) => navigate({ ...route, language }),
    setSection: (section: LearningRoute['section']) => navigate({ ...route, section }),
  }
}
