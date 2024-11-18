"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { ModeToggle } from '../ModeToggle'
import download from '@/app/utils/downloadResume'
import SideMenu from './SideMenu'
import { IoMdCodeDownload } from "react-icons/io"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
        <div className="flex w-full flex-row justify-between items-center px-6 py-4">
          <div className='brand'>
            <Link href="#title"><h1 className='text-3xl font-extrabold'>TS</h1></Link>
          </div>
          <div className='hidden md:flex flex-row justify-between items-center gap-6'>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#project">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <NavLink href='#experience'>Experience</NavLink>

            <Button 
              variant="ghost"
              onClick={download}
              className='flex items-center gap-2'
            >
              Resume<IoMdCodeDownload size={20}/>
            </Button>
            <ModeToggle />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSideMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </nav>
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
      <div className="pt-16">
        {/* Your page content goes here */}
      </div>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <Button variant="ghost">{children}</Button>
    </Link>
  )
}