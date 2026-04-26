"use client"

import Link from 'next/link'
import { ModeToggle } from '../ModeToggle'
import download from '@/app/utils/downloadResume'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { IoMdDownload } from "react-icons/io";

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] !bg-white dark:!bg-black border-l-primary/20 flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-primary/10">
          <SheetTitle className="text-xl font-black tracking-tighter uppercase">Menu.sys</SheetTitle>
          <ModeToggle />
        </SheetHeader>
        <ScrollArea className="flex-1 mt-6">
          <nav className="flex flex-col space-y-4">
            <NavLink href="#home" onClick={onClose}>00_Home</NavLink>
            <NavLink href="#about" onClick={onClose}>01_About</NavLink>
            <NavLink href="#skills" onClick={onClose}>02_Skills</NavLink>
            <NavLink href="#deep-dive" onClick={onClose}>03_System_Deep_Dive</NavLink>
            <NavLink href="#experience" onClick={onClose}>04_Experience</NavLink>
            <NavLink href="#project" onClick={onClose}>05_Projects</NavLink>
            <NavLink href="#contact" onClick={onClose}>06_Contact</NavLink>
          </nav>
        </ScrollArea>
        
        <div className="pt-6 border-t border-primary/10">
          <Button 
            onClick={download}
            className="w-full flex items-center gap-3 bg-primary text-primary-foreground font-bold"
          >
            <IoMdDownload /> DOWNLOAD_RESUME
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function NavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick}>
      <Button variant="ghost" className="w-full justify-start">
        {children}
      </Button>
    </Link>
  )
}