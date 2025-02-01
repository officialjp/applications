import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
}

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full w-9 h-9 dark:text-white"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

