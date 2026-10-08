export type LearningRoute = { section: 'knowledge' | 'practice' | 'certification' | 'roadmap' | 'community' | 'courses'; language: 'python' | 'sql' | 'power-bi' | 'ai' | 'google-sheets' | 'statistics' | 'da101' }
export const defaultRoute: LearningRoute = { section: 'practice', language: 'python' }


export function normalizeRoute(route: LearningRoute): LearningRoute {
  if (route.section === 'practice' && route.language !== 'sql' && route.language !== 'python') return { ...route, language: route.language === 'statistics' ? 'python' : 'sql' }
  return route
}

export function routePath(route: LearningRoute): string {
  const { section, language } = normalizeRoute(route)
  if (section === 'roadmap' || section === 'community' || section === 'courses') return `/${section}`
  return `/${section === 'knowledge' ? 'theory' : section === 'certification' ? 'certification' : 'practice'}/${language}`
}

export function parseRoute(pathname: string): LearningRoute {
  const general = /^\/(roadmap|community|courses)\/?$/.exec(pathname)
  if (general) return { section: general[1] as LearningRoute['section'], language: 'python' }
  const match = /^\/(theory|practice|certification)(?:\/(python|sql|power-bi|ai|google-sheets|excel|statistics|da101))?\/?$/.exec(pathname)
  if (!match) return defaultRoute
  return normalizeRoute({ section: match[1] === 'theory' ? 'knowledge' : match[1] === 'certification' ? 'certification' : 'practice', language: (match[2] === 'excel' ? 'google-sheets' : match[2] ?? 'python') as LearningRoute['language'] })
}
