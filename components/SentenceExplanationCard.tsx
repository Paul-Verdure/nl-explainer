import { speakDutch } from '@/lib/speak'

export default function ExplanationCard({
  explanation,
  originalDutchSentence,
}: {
  explanation: {
    translation: string
    wordByWord: { word: string; meaning: string }[]
    grammarExplanation: string
  }
  originalDutchSentence: string
}) {
  return (
    <div className="space-y-4 rounded-md border bg-gray-50 p-4">
      <button
        onClick={() => speakDutch(originalDutchSentence)}
        className="rounded bg-gray-200 px-2 py-1 text-sm"
      >
        🔊 Hear Dutch
      </button>
      <section>
        <h2 className="font-semibold">📖 Translation</h2>
        <p>{explanation.translation}</p>
      </section>

      <section>
        <h2 className="font-semibold">🔍 Word-by-Word</h2>
        <ul className="list-disc pl-4">
          {explanation.wordByWord.map((item, idx) => (
            <li key={idx}>
              <strong>{item.word}</strong>: {item.meaning}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold">🧠 Grammar Explanation</h2>
        <p>{explanation.grammarExplanation}</p>
      </section>
    </div>
  )
}
