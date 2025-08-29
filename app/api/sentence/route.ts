import { NextResponse } from 'next/server'

import { openai } from '@/lib/openai'
import { ExplanationSchema } from '@/lib/schema'

export async function POST(req: Request) {
  const { sentence } = await req.json()

  if (!sentence) {
    return NextResponse.json({ error: 'No sentence provided' }, { status: 400 })
  }

  const systemPrompt = `
You are a Dutch language teacher.

You will receive a sentence in Dutch. Respond strictly in the following JSON format:

{
  "translation": "English translation of the sentence",
  "wordByWord": [
    { "word": "DutchWord1", "meaning": "English meaning" },
    { "word": "DutchWord2", "meaning": "English meaning" }
  ],
  "grammarExplanation": "Short grammar explanation in English"
}

Do not include any other text.
Ensure it's valid JSON.
`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: sentence },
    ],
  })

  const raw = completion.choices[0]?.message.content

  try {
    const parsed = JSON.parse(raw ?? '{}')
    const validated = ExplanationSchema.parse(parsed)

    return NextResponse.json(validated)
  } catch (err) {
    console.error('Failed to parse or validate response', err, raw)
    return NextResponse.json(
      { error: 'Failed to generate explanation' },
      { status: 500 },
    )
  }
}
