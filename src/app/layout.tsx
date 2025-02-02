import type { Metadata } from 'next'
import './globals.css'
import PlausibleProvider from 'next-plausible'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <PlausibleProvider domain="paraphrasing-tool-eosin.vercel.app">
      <html className="dark:bg-gray-900" lang="en">
        <body>{children}</body>
      </html>
    </PlausibleProvider>
  )
}
