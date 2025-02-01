"use client"

import { useState } from "react"
import ParaphrasingForm from "./components/ParaphrasingForm"
import ParaphrasingResult from "./components/ParaphrasingResult"
import ThemeToggle from "./components/ThemeToggle"
import Footer from "./components/Footer"
import { NavigationMenu } from "@/components/ui/navigation-menu"

export default function ParaphrasingApp() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [result, setResult] = useState<string | null>(null)

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <div className="container mx-auto p-4 bg-white dark:bg-gray-800 min-h-screen">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Paraphrasing App</h1>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </header>
        <main>
          <ParaphrasingForm setResult={setResult} />
          {result && <ParaphrasingResult result={result} />}
          <Footer />
        </main>
      </div>
    </div>
  )
}

