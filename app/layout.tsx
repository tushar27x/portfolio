import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "./components/theme-provider"
import { AnimatedGrid } from "./components/AnimatedGrid"
import { CursorTrail } from "./components/CursorTrail"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Tushar Sharma',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} font-mono min-h-screen bg-background text-foreground antialiased selection:bg-primary/30`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <div className="relative z-0">
          <AnimatedGrid />
          <CursorTrail />
          {children}
        </div>
      </ThemeProvider>
      </body>
    </html>
  )
}
