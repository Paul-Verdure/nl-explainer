'use client'

import { useState } from 'react'

import ExplanationCard from '@/components/SentenceExplanationCard'
import SentenceForm from '@/components/SentenceForm'

export default function SentencePage() {
  const [explanation, setExplanation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [sentence, setSentence] = useState('')

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
    <div className="space-y-6">
      <h1 className="text-center text-2xl font-bold">Sentence Explainer 🇳🇱</h1>
      <SentenceForm
        onExplain={handleExplain}
        loading={loading}
        setSentence={setSentence}
      />
      {explanation && (
        <ExplanationCard
          explanation={explanation}
          originalDutchSentence={sentence}
        />
      )}
    </div>
  )
}
