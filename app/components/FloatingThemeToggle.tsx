"use client"

import { ModeToggle } from './ModeToggle'

export default function FloatingThemeToggle() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-background/80 backdrop-blur-md border border-border/50 shadow-lg rounded-full p-2">
        <ModeToggle />
      </div>
    </div>
  )
} 