"use client"

import { useState, useEffect } from "react"
import { FileText, Users, Zap } from "lucide-react"

export default function Footer() {
  const [stats, setStats] = useState({
    paraphrases: 0,
    users: 0,
    uptime: 0,
  })

  useEffect(() => {
    // Simulating fetching stats from an API
    const fetchStats = () => {
      setStats({
        paraphrases: Math.floor(Math.random() * 10000),
        users: Math.floor(Math.random() * 1000),
        uptime: Math.floor(Math.random() * 100),
      })
    }

    fetchStats()
    const interval = setInterval(fetchStats, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
      <div className="flex flex-wrap justify-between items-center">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Paraphrasing App. All rights reserved.
        </div>
        <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            {stats.paraphrases.toLocaleString()} Paraphrases
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            {stats.users.toLocaleString()} Users
          </div>
          <div className="flex items-center">
            <Zap className="mr-2 h-4 w-4" />
            {stats.uptime}% Uptime
          </div>
        </div>
      </div>
    </footer>
  )
}

