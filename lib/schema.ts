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
