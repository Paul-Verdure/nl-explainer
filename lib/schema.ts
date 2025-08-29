import { z } from 'zod'

export const ExplanationSchema = z.object({
  translation: z.string(),
  wordByWord: z.array(
    z.object({
      word: z.string(),
      meaning: z.string(),
    }),
  ),
  grammarExplanation: z.string(),
})

export type Explanation = z.infer<typeof ExplanationSchema>


export const WordSchema = z.object({
  word: z.string(),
  translations: z.array(z.string()),
  definitions: z.array(
    z.object({
      meaning: z.string(),
      definition: z.string(),
      examples: z.array(z.string()).length(2),
    }),
  ),
})

export type WordExplanation = z.infer<typeof WordSchema>