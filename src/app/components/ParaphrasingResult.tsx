interface ParaphrasingResultProps {
  result: string
}

export default function ParaphrasingResult({ result }: ParaphrasingResultProps) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2 dark:text-white">Paraphrased Text:</h2>
      <p className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md dark:text-white">{result}</p>
    </div>
  )
}

