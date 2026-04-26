"use client"

import React from 'react'
import Reveal from '../Reveal'
import { Cpu, Database, Network, Zap, ShieldCheck, Activity, Binary } from 'lucide-react'

export default function SystemDeepDive() {
  return (
    <div className="py-24 relative overflow-hidden bg-black/5">
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16 justify-center lg:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
              <Cpu className="text-primary" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase">01_SYSTEM_DEEP_DIVE.SYS</h2>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                SUBJECT: SCALING_SALESLENS_KPI_ENGINE
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left: Architecture & Flow */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.2}>
              <div className="p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  <Network size={120} />
                </div>
                
                <h3 className="text-xl font-bold uppercase tracking-tight mb-6 flex items-center gap-2 text-primary">
                   <Zap size={18} /> [ARCHITECTURE_OVERVIEW]
                </h3>
                
                <div className="space-y-6 relative z-10">
                  <p className="text-muted-foreground leading-relaxed italic font-mono text-sm">
                    {"//"} High-concurrency data pipeline processing 1M+ daily data points for 50+ enterprise teams.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest">[THE_FLOW]</div>
                    <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
                      <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md">Ingestion (Netty)</div>
                      <div className="text-primary font-bold">→</div>
                      <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md">Streaming (Kafka)</div>
                      <div className="text-primary font-bold">→</div>
                      <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md">Storage (ES)</div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                     <div className="text-[10px] font-bold text-primary uppercase tracking-widest">[KEY_OPTIMIZATIONS]</div>
                     <ul className="space-y-3">
                        <li className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">RESOLVED:</strong> Query bottlenecks by refactoring nested aggregations into flattened composite indices in Elasticsearch.
                          </span>
                        </li>
                        <li className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">IMPLEMENTED:</strong> Redis-based deduplication for exactly-once processing in high-concurrency Netty services.
                          </span>
                        </li>
                     </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Technical Stats & Meta */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.4}>
              <div className="p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl relative overflow-hidden group h-full">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-6 flex items-center gap-2 text-primary">
                   <Activity size={18} /> [SYSTEM_HEALTH]
                </h3>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Latency_Improvement</div>
                      <div className="text-2xl font-black text-primary">-30%</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Uptime_Reliability</div>
                      <div className="text-2xl font-black text-primary">99.9%</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Throughput_Scale</div>
                      <div className="text-2xl font-black text-primary">1M+/DAY</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Response_Speed</div>
                      <div className="text-2xl font-black text-primary">+25%</div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 space-y-4">
                     <p className="text-sm text-muted-foreground leading-relaxed">
                       This system bridges raw sales telemetry and actionable business intelligence, handling data-intensive retrieval for mission-critical enterprise decision making.
                     </p>
                     <div className="flex flex-wrap gap-2">
                        {["Java", "Netty", "Kafka", "Elasticsearch", "Redis"].map(tech => (
                          <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">
                            {tech}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Binary Footer Decor */}
        <Reveal delay={0.6}>
          <div className="mt-16 flex justify-center opacity-10">
            <div className="font-mono text-[8px] flex gap-4 uppercase tracking-[0.3em]">
               <span>01001000 01001001 01000111 01001000 01011111 01010011 01000011 01000001 01001100 01000101</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
