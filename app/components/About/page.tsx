"use client"
import Link from "next/link"
import Reveal from "../Reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Binary, Cpu, Layers, Workflow } from "lucide-react"
import skills from "@/app/utils/skills"

const About = () => {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] -rotate-90 origin-left">
        <span className="text-[10vw] sm:text-[20vw] font-black font-mono">CORE_ENGINE</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16 justify-center lg:justify-start">
            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center border border-primary/20">
              <Cpu className="text-primary" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase">01_PROFILE.MD</h2>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                COMPILING SYSTEM ARCHITECTURE... 100%
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Main Bio Module */}
          <div className="lg:col-span-8 space-y-8">
            <Reveal>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-primary/5 backdrop-blur-xl">
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
                      DECODING COMPLEXITY. <br />
                      <span className="text-primary italic">SCALING</span> SOLUTIONS.
                    </h3>
                    <div className="h-1 w-20 bg-primary/50 rounded-full" />
                    <p className="text-xl text-muted-foreground leading-relaxed font-mono">
                      <span className="text-primary font-bold">{'>'}</span> I am a Software Engineer who views code as a tool for architectural precision.
                      Focusing on the intersection of <span className="text-foreground font-bold decoration-primary/30">high-performance systems</span> and <span className="text-foreground font-bold decoration-primary/30">scalable user interfaces</span>.
                      Currently engineering the next generation of KPI analytics at <Link href="https://salescode.ai/" target="_blank" className="text-foreground font-bold hover:text-primary transition-colors underline decoration-primary/30">Salescode.ai</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Sub-system grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal delay={0.1}>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="text-primary w-5 h-5" />
                    <h4 className="font-bold uppercase tracking-widest text-sm">Fullstack Architecture</h4>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                    Developing end-to-end ecosystems from low-latency backend microservices to responsive, data-driven frontends.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <Workflow className="text-primary w-5 h-5" />
                    <h4 className="font-bold uppercase tracking-widest text-sm">Data Pipelines</h4>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                    Engineering robust processing pipelines using Kafka and Elasticsearch for real-time hierarchical KPI computation.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={0.3}>
              <div className="p-8 rounded-3xl border border-white/10 bg-primary/5 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Binary size={80} />
                </div>

                <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Technical_Matrix
                </h4>

                <div className="space-y-6 relative z-10">
                  {skills.map((item) => (
                    <div key={item.label} className="space-y-3">
                      <div className="text-[10px] font-bold text-primary tracking-widest">{item.label}</div>
                      <div className="flex flex-wrap gap-2">
                        {item.stack.map(s => (
                          <span key={s} className="px-2 py-1 text-[10px] font-mono border border-white/10 bg-white/5 rounded-md hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-6 rounded-3xl border border-dashed border-white/10 bg-primary/5">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase">Runtime</div>
                    <div className="text-3xl font-black">2024+</div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase">Efficiency</div>
                    <div className="text-3xl font-black text-green-500">99%</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Current Operations - Subsystem View */}
        <Reveal>
          <div className="mt-12 p-1 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-white/10 max-w-5xl mx-auto">
            <div className="p-8 md:p-12 rounded-[calc(1.5rem-1px)] bg-black/10 backdrop-blur-3xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-[0.03]">
                <Cpu size={200} />
              </div>

              <div className="grid md:grid-cols-4 gap-8 items-center">
                <div className="md:col-span-1 border-r border-white/10 pr-8">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Process</h5>
                  <div className="text-2xl font-bold font-mono">CURRENT_OPS</div>
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-mono italic">
                    {'//'} currently deployed at <span className="text-foreground font-bold">Salescode.ai</span> as a
                    <span className="text-foreground font-bold"> Full Stack Developer</span>.
                    optimizing performance across Java backends and React frontends
                    while managing complex data flows with Elasticsearch and MySQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default About
