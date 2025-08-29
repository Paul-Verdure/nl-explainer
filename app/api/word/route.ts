import { NextResponse } from 'next/server'

import { openai } from '@/lib/openai'
import { WordSchema } from '@/lib/schema'

export async function POST(req: Request) {
  const { word } = await req.json()

  if (!word) {
    return NextResponse.json({ error: 'No word provided' }, { status: 400 })
  }

  const systemPrompt = `
You are a Dutch language assistant. 
You must always return output that strictly matches the given JSON schema. 
Do not include any extra commentary or text.

Schema (WordExplanation):
{
  "word": string,                // the input word
  "translations": string[],      // list of English translations
  "definitions": [               // list of possible definitions
    {
      "meaning": string,         // concise English gloss
      "definition": string,      // a short explanatory note
      "examples": string[]       // exactly 2 Dutch example sentences
    }
  ]
}
`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: word },
    ],
  })

  const raw = completion.choices[0]?.message.content

  try {
    const parsed = JSON.parse(raw ?? '{}')
    const validated = WordSchema.parse(parsed)

    return NextResponse.json(validated)
  } catch (err) {
    console.error('Failed to parse or validate response', err, raw)
    return NextResponse.json(
      { error: 'Failed to generate explanation' },
      { status: 500 },
    )
  }
}
