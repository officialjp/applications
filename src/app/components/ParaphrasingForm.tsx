"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { OpenAI } from "openai"
import { RefreshCw } from "lucide-react"


const paraphrasingStyles = ["Standard", "Fluency", "Natural", "Formal", "Academic", "Creative"]

interface ParaphrasingFormProps {
  setResult: (result: string) => void
}

export default function ParaphrasingForm({ setResult }: ParaphrasingFormProps) {
  const [text, setText] = useState("")
  const [style, setStyle] = useState("Standard")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})
      const response  = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Paraphrase the following text in a ${style.toLowerCase()} style:\n\n${text}`,
          },
        ],
        temperature: 1.5,
        max_tokens: 4000,
      })
      setResult(response.choices[0].message.content || "")
    } catch (error) {
      console.error("Error paraphrasing text:", error)
      setResult("An error occurred while paraphrasing. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to paraphrase..."
        className="w-full h-32 dark:bg-gray-700 dark:text-white"
        required
      />
      <Select value={style} onValueChange={setStyle}>
        <SelectTrigger className="w-full dark:bg-gray-700 dark:text-white">
          <SelectValue placeholder="Select paraphrasing style" />
        </SelectTrigger>
        <SelectContent>
          {paraphrasingStyles.map((style) => (
            <SelectItem key={style} value={style}>
              {style}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            Paraphrasing...
          </>
        ) : (
          <>
            <RefreshCw className="mr-2 h-4 w-4" />
            Paraphrase
          </>
        )}
      </Button>
    </form>
  )
}

