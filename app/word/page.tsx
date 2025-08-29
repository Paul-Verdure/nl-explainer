'use client'

import { useState } from 'react'

import WordExplanationCard from '@/components/WordExplanationCard'
import WordForm from '@/components/WordForm'

export default function WordPage() {
  const [explanation, setExplanation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [word, setWord] = useState('')

  const handleExplain = async (word: string) => {
    setLoading(true)
    try {
      const res = await fetch('/api/word', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word }),
      })

      const data = await res.json()
      setExplanation(data)
    } catch (err) {
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="space-y-6">
      <h1 className="text-center text-2xl font-bold">Word Explainer 🇳🇱</h1>
      <WordForm
        onExplain={handleExplain}
        loading={loading}
        setWord={setWord}
      />
      {explanation && (
        <WordExplanationCard
          data={explanation}
        />
      )}
    </div>
  )
}
