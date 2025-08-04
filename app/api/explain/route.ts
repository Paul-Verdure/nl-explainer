import { NextResponse } from 'next/server'

import { openai } from '@/lib/openai'

export async function POST(req: Request) {
  try {
    const { sentence } = await req.json()

    if (!sentence) {
      return NextResponse.json(
        { error: 'No sentence provided' },
        { status: 400 },
      )
    }

    const systemPrompt = `
You are a Dutch language teacher.
A student provides you a sentence in Dutch. Return:
- An English translation
- A word-by-word breakdown
- A short grammar explanation (max 3 lines).
Format it as Markdown.
`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: sentence },
      ],
    })

    const result = completion.choices[0]?.message.content

    return NextResponse.json({ result })
  } catch (err) {
    console.error('API error', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
