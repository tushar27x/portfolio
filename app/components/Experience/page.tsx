"use client"

import React from 'react'
import Reveal from '../Reveal'
import experiences from '@/app/utils/experience'
import { History, GitCommit, ChevronRight, Binary } from 'lucide-react'
import Image from 'next/image'

export default function ExperienceSection() {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Decorative Tech Element */}
      <div className="absolute top-1/4 right-0 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[15vw] font-black font-mono">HISTORY_LOG</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-20 justify-center lg:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
              <History className="text-primary" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-black tracking-tighter uppercase">02_EXPERIENCE.EXE</h2>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                PARSING DEPLOYMENT HISTORY... SUCCESS
              </div>
            </div>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative grid md:grid-cols-12 gap-8 group">
                {/* Timeline Connector */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[23px] top-[60px] bottom-[-60px] w-px bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
                )}

                {/* Left: Date & Status */}
                <div className="md:col-span-3 pt-2">
                  <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-1">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-black/[0.02] dark:bg-black/40 border border-black/5 dark:border-white/10 flex items-center justify-center relative shadow-sm dark:shadow-none">
                        <Image 
                          src={exp.logoUrl} 
                          alt={exp.companyName}
                          width={32}
                          height={32}
                          className="opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full blur-[2px] animate-pulse" />
                      </div>
                      <div className="md:hidden">
                        <div className="text-xs font-bold text-primary uppercase font-mono">{exp.startDate} - {exp.endDate}</div>
                        <div className="text-sm font-black">{exp.companyName}</div>
                      </div>
                    </div>
                    <div className="hidden md:block space-y-1 mt-4">
                       <div className="text-[10px] font-bold text-primary uppercase font-mono tracking-widest">
                         {exp.startDate} — {exp.endDate}
                       </div>
                       <div className="text-xl font-black text-foreground uppercase leading-none">
                         {exp.companyName}
                       </div>
                    </div>
                  </div>
                </div>

                {/* Right: Content Card */}
                <div className="md:col-span-9 relative">
                   <div className="absolute top-0 left-[-35px] w-4 h-4 rounded-full border-2 border-primary bg-background z-20 hidden md:block group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
                   
                   <div className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl group-hover:border-primary/30 transition-all duration-500 shadow-xl dark:shadow-none relative overflow-hidden">
                      {/* Sub-decorative binary */}
                      <div className="absolute top-4 right-4 text-[8px] font-mono text-primary/5 select-none leading-none">
                        {Array(5).fill('01011001').join('\n')}
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-2">
                           <h3 className="text-2xl font-black tracking-tight text-foreground uppercase">
                             {exp.position}
                           </h3>
                           <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed font-mono italic">
                          {'//'} {exp.description}
                        </p>

                        <div className="grid sm:grid-cols-1 gap-3 pt-2">
                          {exp.responsibilities.map((resp, i) => (
                            <div key={i} className="flex gap-3 items-start group/resp">
                              <ChevronRight size={14} className="mt-1 text-primary group-hover/resp:translate-x-1 transition-transform" />
                              <span className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                {resp}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing Status */}
        <Reveal>
          <div className="mt-20 flex justify-center">
            <div className="px-6 py-3 rounded-xl border border-dashed border-white/10 bg-primary/5 flex items-center gap-3">
              <Binary size={16} className="text-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                CONTINUOUS_INTEGRATION: IN_PROGRESS
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
