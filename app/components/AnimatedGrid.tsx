"use client"

import React from 'react'
import { motion } from 'framer-motion'

export const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 h-full w-full stroke-primary/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="geometric-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="-1"
          >
            <path d="M0 40V0M40 0H0" fill="none" />
            <circle cx="0" cy="0" r="1" className="fill-primary/20" />
            <circle cx="40" cy="0" r="1" className="fill-primary/20" />
            <circle cx="0" cy="40" r="1" className="fill-primary/20" />
            <circle cx="40" cy="40" r="1" className="fill-primary/20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#geometric-grid)" />
      </svg>
      
      {/* Subtle moving glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"
      />
    </div>
  )
}
