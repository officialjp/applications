"use server"

const apiKey = process.env.API_KEY

export async function paraphraseText(text: string, category: string) {
  // Simulate API call or processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, you would call an AI service or use a more sophisticated algorithm here
  const paraphrased = `${category} paraphrase of: ${text}`

  return paraphrased
}

