"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-50 transition-all duration-300 ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 -translate-y-4 pointer-events-none'
    } bg-background/80 backdrop-blur-md border border-border/50 shadow-lg rounded-2xl`}>
      <div className="flex flex-row justify-center items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#project">Projects</NavLink>
        <NavLink href='#experience'>Experience</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <Button 
        variant="ghost" 
        size="sm"
        className="hover:bg-primary/10 transition-all duration-200 hover:scale-105 text-xs md:text-sm font-medium px-2 md:px-3"
      >
        {children}
      </Button>
    </Link>
  )
}