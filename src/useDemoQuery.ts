import { useEffect, useEffectEvent } from 'react'

export default function useDemoQuery(query: string, onQueryChange: (query: string) => void) {
  const notify = useEffectEvent(onQueryChange)
  useEffect(() => { notify(query) }, [query])
}
