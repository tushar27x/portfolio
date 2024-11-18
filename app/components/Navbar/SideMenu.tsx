"use client"

import Link from 'next/link'
import { ModeToggle } from '../ModeToggle'
import download from '@/app/utils/downloadResume'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] mt-6">
          <nav className="flex flex-col space-y-4">
            <NavLink href="#about" onClick={onClose}>About</NavLink>
            <NavLink href="#skills" onClick={onClose}>Skills</NavLink>
            <NavLink href="#project" onClick={onClose}>Projects</NavLink>
            <NavLink href="#contact" onClick={onClose}>Contact</NavLink>
            <NavLink href='#experience' onClick={onClose}>Experience</NavLink>
            <Button variant="ghost" className="justify-start" onClick={() => { download(); onClose(); }}>
              Resume
            </Button>
            <ModeToggle />
          </nav>
        </ScrollArea>
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