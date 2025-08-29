type WordExplanationCardProps = {
  data: {
    word: string
    translations: string[]
    definitions: {
      meaning: string
      definition: string
      examples: string[]
    }[]
  } | null
}

export default function WordExplanationCard({
  data,
}: WordExplanationCardProps) {
  if (!data) return null

  return (
    <div className="mt-4 space-y-4 rounded-xl bg-white p-4 shadow">
      <h2 className="text-xl font-bold">Word: {data.word}</h2>

      <div>
        <h3 className="font-semibold">Translations</h3>
        <ul className="list-inside list-disc">
          {data.translations.map((t: string, i: number) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Definitions</h3>
        {data.definitions.map((def: any, i: number) => (
          <div key={i} className="mt-2 border-t pt-2">
            <p className="font-medium">{def.meaning}</p>
            <p className="text-gray-600">{def.definition}</p>
            <ul className="mt-1 list-inside list-disc text-sm">
              {def.examples.map((ex: string, j: number) => (
                <li key={j}>{ex}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
