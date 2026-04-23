"use client"
import React from "react";
import Reveal from "../Reveal";
import { detailedSkills } from "@/app/utils/skills";
import {
  Terminal as TerminalIcon,
  Code2,
  FileCode,
  Hash,
  Activity,
  Box
} from "lucide-react";

const Skills = () => {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background ID Watermark */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[12vw] sm:text-[25vw] font-black font-mono leading-none">TECH.EXE</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-20 justify-center lg:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
              <Code2 className="text-primary" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase font-mono">04_SYSTEM_DEPENDENCIES</h2>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                $ ls -la /usr/local/bin/skills/
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {Object.entries(detailedSkills).map(([category, skillList], index) => {
            const fileName = category.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_') + '.config';

            return (
              <Reveal key={category} delay={index * 0.05}>
                <div className="group h-[320px]">
                  <div className="relative h-full border border-black/10 dark:border-white/10 rounded-xl bg-white/5 dark:bg-black/40 backdrop-blur-xl overflow-hidden group-hover:border-primary/50 transition-all duration-300 shadow-xl dark:shadow-primary/5 flex flex-col">

                    {/* Terminal Header */}
                    <div className="bg-black/10 dark:bg-white/5 px-4 py-2 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                      </div>
                      <div className="flex items-center gap-2">
                        <FileCode size={10} className="text-muted-foreground" />
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{fileName}</span>
                      </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 font-mono text-xs md:text-sm flex-1">
                      <div className="flex gap-4 mb-4">
                        <span className="text-muted-foreground/30 select-none">01</span>
                        <p><span className="text-primary">export const</span> <span className="text-blue-400">{category.split(' ')[0]}</span> = [</p>
                      </div>

                      {/* Skill List with Hover Scroll */}
                      <div className="flex-1 overflow-hidden group-hover:overflow-y-auto pr-2 custom-scrollbar">
                        {skillList.map((skill, i) => (
                          <div key={skill} className="flex gap-4 group/line">
                            <span className="text-muted-foreground/30 select-none">{String(i + 2).padStart(2, '0')}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-primary/40 group-hover/line:text-primary transition-colors">•</span>
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors">&apos;{skill}&apos;</span>
                              <span className="text-muted-foreground/30">,</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-4 mt-2 shrink-0">
                        <span className="text-muted-foreground/30 select-none">{String(skillList.length + 2).padStart(2, '0')}</span>
                        <p>];</p>
                      </div>

                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* System Footer */}
        <Reveal>
          <div className="mt-20 flex justify-center">
            <div className="px-6 py-3 rounded-xl border border-dashed border-black/10 dark:border-white/10 bg-primary/5 flex items-center gap-3">
              <Box size={14} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                ALL_SYSTEMS_GO // HASH: 0xTS27A
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
