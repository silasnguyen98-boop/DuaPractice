import { useEffect, useEffectEvent, useRef } from 'react'
import { basicSetup } from 'codemirror'
import { python } from '@codemirror/lang-python'
import { sql, SQLite } from '@codemirror/lang-sql'
import { sqlSchema } from './sqlLessons'
import { acceptCompletion } from '@codemirror/autocomplete'
import { indentWithTab } from '@codemirror/commands'
import { HighlightStyle, indentUnit, syntaxHighlighting } from '@codemirror/language'
import { EditorState, Prec } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { tags } from '@lezer/highlight'

const pythonColors = HighlightStyle.define([
  { tag: tags.keyword, color: '#8b3fb0' },
  { tag: [tags.string, tags.special(tags.string)], color: '#23784b' },
  { tag: [tags.number, tags.bool, tags.null], color: '#b66520' },
  { tag: tags.comment, color: '#7c867d', fontStyle: 'italic' },
  { tag: [tags.function(tags.variableName), tags.definition(tags.variableName)], color: '#246baf' },
  { tag: tags.standard(tags.variableName), color: '#246baf' },
  { tag: tags.operator, color: '#a34b46' },
])

type Props = {
  value: string
  onChange?: (value: string) => void
  onRun?: () => void
  readOnly?: boolean
  language?: 'python' | 'sql'
  schema?: Record<string, string[]>
}

export default function PythonEditor({ value, onChange, onRun, readOnly = false, language = 'python', schema = sqlSchema }: Props) {
  const container = useRef<HTMLDivElement>(null)
  const editor = useRef<EditorView | null>(null)
  const initialValue = useRef(value)
  const handleChange = useEffectEvent((code: string) => onChange?.(code))
  const handleRun = useEffectEvent(() => onRun?.())

  useEffect(() => { initialValue.current = value }, [value])

  useEffect(() => {
    if (!container.current) return
    const view = new EditorView({
      parent: container.current,
      doc: initialValue.current,
      extensions: [
        basicSetup,
        language === 'sql' ? sql({ dialect: SQLite, schema, upperCaseKeywords: true }) : python(),
        EditorState.readOnly.of(readOnly),
        indentUnit.of('    '),
        syntaxHighlighting(pythonColors),
        EditorView.contentAttributes.of({
          'aria-label': `${readOnly ? 'Đáp án' : 'Mã'} ${language === 'sql' ? 'SQL' : 'Python'}`,
          spellcheck: 'false',
          autocapitalize: 'off',
          autocorrect: 'off',
        }),
        Prec.highest(keymap.of([
          { key: 'Mod-Enter', run: () => { handleRun(); return true } },
          { key: 'Tab', run: acceptCompletion },
          indentWithTab,
        ])),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) handleChange(update.state.doc.toString())
        }),
      ],
    })
    editor.current = view
    return () => { editor.current = null; view.destroy() }
  }, [readOnly, language, schema])

  useEffect(() => {
    const view = editor.current
    if (view && view.state.doc.toString() !== value) {
      view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: value } })
    }
  }, [value])

  return <div className="editor-area" ref={container} />
}
