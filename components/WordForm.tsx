'use client'

import { useState } from 'react'

import { Loader2Icon } from 'lucide-react'

import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { MAX_CHARACTERS_INPUT } from '@/app/constants/formConstants'

export default function wordForm({
  onExplain,
  loading,
  setWord
}: {
  onExplain: (word: string) => void
  loading: boolean
  setWord: (word: string) => void
}) {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    onExplain(input.trim())
    setWord(input.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Textarea
        value={input}
        onChange={(e) => {
          if (e.target.value.length <= MAX_CHARACTERS_INPUT) setInput(e.target.value)
        }}
        placeholder="Enter a Dutch word..."
        className="flex-1 rounded-md border p-2"
        maxLength={MAX_CHARACTERS_INPUT}
      />
      <div className="text-right text-sm text-gray-500">{input.length}/{MAX_CHARACTERS_INPUT}</div>
      <Button
        type="submit"
        disabled={loading}
        className="rounded-md bg-blue-600 px-4 py-2 text-white"
      >
        {loading ? (
          <div className="flex items-center gap-2">
            Please wait
            <Loader2Icon className="animate-spin" />
          </div>
        ) : (
          'Explain'
        )}
      </Button>
    </form>
  )
}
