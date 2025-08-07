'use client'

import { useState } from 'react'

import ExplanationCard from '@/components/ExplanationCard'
import SentenceForm from '@/components/SentenceForm'

export default function Home() {
  const [explanation, setExplanation] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleExplain = async (sentence: string) => {
    setLoading(true)
    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sentence }),
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
    <main className="mx-auto max-w-2xl space-y-6 p-6">
      <h1 className="text-2xl font-bold text-center">Dutch Sentence Explainer 🇳🇱</h1>
      <SentenceForm onExplain={handleExplain} loading={loading} />
      {explanation && <ExplanationCard explanation={explanation} />}
    </main>
  )
}
