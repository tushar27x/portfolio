"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { IoMdDownload } from "react-icons/io"
import { Terminal, Cpu, Database, Network, Activity, ShieldCheck } from 'lucide-react'
import download from '@/app/utils/downloadResume'
import Reveal from '../Reveal'

export default function Title() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 lg:pt-20 overflow-hidden">
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.02)_1px,transparent_1px)] bg-[size:30px_30px] lg:bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Right: Technical Avatar Overlay */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-first lg:order-last p-4">
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[450px] aspect-square">
                {/* HUD Elements */}
                <div className="absolute -inset-4 sm:-inset-8 z-20 pointer-events-none">
                  {/* Rotating Outer Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
                  />
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 lg:w-8 lg:h-8 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-0 right-0 w-6 h-6 lg:w-8 lg:h-8 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 lg:w-8 lg:h-8 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 lg:w-8 lg:h-8 border-b-2 border-r-2 border-primary" />

                  {/* Scanning Line */}
                  <motion.div
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-px bg-primary/40 z-30"
                  />
                </div>

                <div className="absolute -inset-6 sm:-inset-10 bg-primary/10 rounded-full blur-[60px] lg:blur-[100px] opacity-20 animate-pulse" />

                <div className="relative z-10 h-full w-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 p-1.5 lg:p-2 bg-black/40 backdrop-blur-xl group">
                  <Avatar className="w-full h-full rounded-[1.5rem] lg:rounded-[2rem] transition-all duration-1000 group-hover:scale-105">
                    <AvatarImage src="/profile-rounded.jpg" alt="Tushar Sharma" className="object-cover" />
                    <AvatarFallback className="text-4xl font-black">TS</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            {/* Left: Branding & Identity */}
            <div className="lg:col-span-7 space-y-8 lg:space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left order-last lg:order-first">
              <div className="space-y-4 lg:space-y-6 w-full">
                <div className="relative">
                  <Reveal delay={0.2}>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] lg:leading-[0.8] uppercase flex flex-col">
                      <span className="block text-foreground">Tushar</span>
                      <span className="block text-primary italic">Sharma</span>
                    </h1>
                  </Reveal>

                  {/* Decorative Background Text */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 -z-10 opacity-[0.03] select-none pointer-events-none hidden lg:block">
                    <span className="text-[15rem] font-black font-mono">TS_27X</span>
                  </div>
                </div>

                <Reveal delay={0.4}>
                  <div className="flex flex-col items-center lg:items-start gap-4 pt-2 lg:pt-4">
                    <div className="px-4 lg:px-6 py-1.5 lg:py-2 bg-foreground text-background font-black text-lg sm:text-xl lg:text-2xl uppercase tracking-tighter rounded-sm transform lg:-skew-x-12">
                      Software Engineer
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] lg:text-[11px] text-muted-foreground min-h-[1.5rem]">
                      <span className="text-primary font-bold">{'>'}</span>
                      <TypeAnimation
                        sequence={[
                          'Building Scalable Systems',
                          2000,
                          'Optimizing Performance',
                          2000,
                          'Decoding Complexity',
                          2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                      />
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.6}>
                <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full max-w-md pt-2 lg:pt-4 px-4 lg:px-0">
                  <div className="space-y-1 lg:space-y-2">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-[9px] lg:text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                      <Activity size={10} className="text-green-500 lg:w-3 lg:h-3" /> System_Status
                    </div>
                    <div className="text-xs lg:text-sm font-bold uppercase tracking-tight">Active_Optimal</div>
                  </div>
                  <div className="space-y-1 lg:space-y-2">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-[9px] lg:text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                      <Database size={10} className="text-primary lg:w-3 lg:h-3" /> Core_Stack
                    </div>
                    <div className="text-xs lg:text-sm font-bold uppercase tracking-tight">Java_React_Python</div>
                  </div>
                </div>
              </Reveal>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 pt-4 lg:pt-6">
                <Button
                  onClick={download}
                  className="relative flex items-center gap-3 lg:gap-4 bg-primary hover:bg-primary/90 text-primary-foreground px-8 lg:px-10 py-6 lg:py-8 rounded-xl lg:rounded-2xl transition-all duration-500 hover:scale-[1.02] shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] lg:shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)] group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="text-xs lg:text-sm font-black tracking-widest relative z-10">COMPILE_PROFILE.EXE</span>
                  <IoMdDownload size={18} className="lg:w-5 lg:h-5 group-hover:translate-y-1 transition-transform relative z-10" />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
