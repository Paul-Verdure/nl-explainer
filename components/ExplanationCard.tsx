export default function ExplanationCard({ explanation }: {
  explanation: {
    translation: string;
    wordByWord: { word: string; meaning: string }[];
    grammarExplanation: string;
  };
}) {
  return (
    <div className="p-4 border rounded-md space-y-4 bg-gray-50">
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
  );
}
