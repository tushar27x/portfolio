"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export const CursorTrail = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const nextId = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY, id: nextId.current++ }
      setTrail((prev) => [...prev.slice(-15), newPoint])
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute w-2 h-2 bg-primary rounded-full"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 15px 5px rgba(var(--primary-rgb), 0.5)',
            filter: 'blur(2px)',
          }}
        />
      ))}
      {/* The main glow cursor - reduced to 0 size but keeping position for trail logic if needed elsewhere */}
      {trail.length > 0 && (
        <div 
          className="absolute w-0 h-0 border-0 border-primary rounded-full blur-[2px] shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]"
          style={{
            left: trail[trail.length - 1].x,
            top: trail[trail.length - 1].y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </div>
  )
}
