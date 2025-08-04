'use client'

import React from 'react'

import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

export default function SentenceForm() {
  const [inputText, setInputText] = React.useState('')
  const [explanation, setExplanation] = React.useState('')

  const getExplanation = async (sentence: string) => {
    if (!sentence) {
      return 'Please provide a sentence.'
    }
    const res = await fetch('/api/explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sentence }),
    })

    const data = await res.json()
    setExplanation(data.result)
    if (res.status !== 200) {
      return `Error: ${data.error || 'Something went wrong'}`
    }
    return data.result
  }

  return (
    <section className="flex flex-col items-center justify-between px-4 py-8 sm:px-8 sm:py-24">
      <h1 className="mb-6 text-center text-2xl font-bold sm:mb-8 sm:text-4xl">
        Welcome to NL Explainer
      </h1>
      <p className="mb-4 text-center text-base sm:text-lg">
        Paste below your text and get a detailed explanation.
      </p>
      <Textarea
        className="mb-6 min-h-[120px] w-full max-w-md"
        placeholder="Type or paste your text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className="mt-4 flex w-full max-w-md justify-center">
        <Button
          className="w-full bg-blue-500 text-white hover:bg-blue-600 sm:w-auto"
          onClick={() => {
            getExplanation(inputText).then(setExplanation)
          }}
        >
          Generate Explanation
        </Button>
        {explanation && (
          <div className="mt-4 w-full max-w-md">
            <h2 className="mb-2 text-lg font-bold">Explanation:</h2>
            <p>{explanation}</p>
          </div>
        )}
      </div>
    </section>
  )
}
