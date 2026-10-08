import { useMemo } from 'react'
import { python } from '@codemirror/lang-python'
import { sql, SQLite } from '@codemirror/lang-sql'
import { highlightTree, tagHighlighter, tags } from '@lezer/highlight'

const highlighter = tagHighlighter([
  { tag: tags.keyword, class: 'code-keyword' },
  { tag: [tags.string, tags.special(tags.string)], class: 'code-string' },
  { tag: [tags.number, tags.bool, tags.null], class: 'code-number' },
  { tag: tags.comment, class: 'code-comment' },
  { tag: [tags.function(tags.variableName), tags.definition(tags.variableName), tags.standard(tags.variableName)], class: 'code-function' },
  { tag: tags.operator, class: 'code-operator' },
])
const parsers = { python: python().language.parser, sql: sql({ dialect: SQLite }).language.parser }

export default function CodeBlock({ code, language = 'sql', className = '' }: { code: string; language?: 'sql' | 'python'; className?: string }) {
  const pieces = useMemo(() => {
    const result: { text: string; className?: string }[] = []
    let cursor = 0
    highlightTree(parsers[language].parse(code), highlighter, (from, to, tokenClass) => {
      if (from > cursor) result.push({ text: code.slice(cursor, from) })
      result.push({ text: code.slice(from, to), className: tokenClass })
      cursor = to
    })
    if (cursor < code.length) result.push({ text: code.slice(cursor) })
    return result
  }, [code, language])
  return <pre className={`knowledge-code ${className}`}><code>{pieces.map((piece, index) => piece.className ? <span key={index} className={piece.className}>{piece.text}</span> : piece.text)}</code></pre>
}
