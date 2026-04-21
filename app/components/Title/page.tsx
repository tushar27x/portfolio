"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { IoMdDownload } from "react-icons/io"
import { Terminal, Cpu, Database, Network, Activity } from 'lucide-react'
import download from '@/app/utils/downloadResume'
import Reveal from '../Reveal'

export default function Title() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Right: Technical Avatar Overlay - Moved to top on mobile */}
            <div className="lg:col-span-4 relative flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-square">
                 {/* HUD Frame */}
                 <div className="absolute -inset-4 z-20 pointer-events-none border border-primary/20 rounded-[2.5rem] overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-primary/5" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-primary/5" />
                    
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
                 </div>

                 <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] opacity-20 animate-pulse" />
                 
                 <div className="relative z-10 h-full w-full rounded-[2rem] overflow-hidden border border-white/10 p-2 bg-black/40 backdrop-blur-xl group">
                   <Avatar className="w-full h-full rounded-[1.5rem] transition-all duration-1000 group-hover:scale-105">
                     <AvatarImage src="/profile-rounded.jpg" alt="Tushar Sharma" className="object-cover" />
                     <AvatarFallback className="text-4xl font-black">TS</AvatarFallback>
                   </Avatar>
                 </div>
              </div>
            </div>

            {/* Left: Branding & Heading - Center aligned on mobile */}
            <div className="lg:col-span-8 space-y-12 flex flex-col items-center lg:items-start text-center lg:text-left order-last lg:order-first">
              <Reveal>
                <div className="inline-flex flex-col gap-1 items-center lg:items-start">
                  <div className="flex items-center gap-2 font-mono text-[9px] text-muted-foreground lg:pl-11">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    USER_ID: TS_27X // SHARMA, TUSHAR
                  </div>
                </div>
              </Reveal>

              <div className="space-y-8 w-full">
                <motion.h1 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85] uppercase text-foreground"
                >
                  SOFTWARE <br />
                  <span className="text-stroke">ENGINEER.</span>
                </motion.h1>
                
                <div className="flex flex-col md:flex-row items-center lg:items-start md:justify-center lg:justify-start gap-6 md:gap-12">
                   <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                        <Terminal size={20} className="text-primary" />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Entry_Point</div>
                        <div className="text-base font-black uppercase tracking-tight">Full Stack Developer</div>
                      </div>
                   </div>

                   <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                        <Cpu size={20} className="text-primary" />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Core_Module</div>
                        <div className="text-base font-black uppercase tracking-tight">Scalable Systems</div>
                      </div>
                   </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6">
                 <Button 
                   onClick={download}
                   className="flex items-center gap-4 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-8 rounded-2xl transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_rgba(var(--primary-rgb),0.2)] group"
                 >
                   <span className="text-sm font-black tracking-widest">COMPILE_PROFILE()</span>
                   <IoMdDownload size={20} className="group-hover:translate-y-1 transition-transform" />
                 </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
