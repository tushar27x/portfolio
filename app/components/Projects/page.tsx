"use client"
import React from 'react';
import Image from 'next/image';
import Reveal from '../Reveal';
import Link from 'next/link';
import PhotoPop from '../PhotoPop';
import projects from '@/app/utils/projects';
import { Github, ExternalLink, Code2, Boxes, Cpu, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectProps {
  id: number | string,
  title: string,
  imageUrl: string,
  gitHubUrl: string,
  liveUrl?: string,
  tech: string[]
  category: string
  status: string
}

const Projects = () => {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full select-none pointer-events-none opacity-[0.02]">
        <span className="text-[10vw] sm:text-[15vw] font-black font-mono absolute top-0 left-0">REPOS</span>
        <span className="text-[10vw] sm:text-[15vw] font-black font-mono absolute bottom-0 right-0">BUILD</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-20 justify-center lg:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
              <Boxes className="text-primary" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase">03_REPOSITORIES.SYS</h2>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                SCANNING LOCAL_STORAGE... {projects.length} PROJECTS FOUND
              </div>
            </div>
          </div>
        </Reveal>
        ...

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {projects.map((project: any, index: number) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <div className="group relative">
                {/* Project Frame */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                <Card className="relative border border-black/5 dark:border-white/10 rounded-3xl bg-white/40 dark:bg-black/40 backdrop-blur-xl overflow-hidden group-hover:border-primary/50 transition-all duration-500 h-full flex flex-col shadow-xl dark:shadow-primary/5">
                  {/* Top Bar / Header */}
                  <div className="bg-black/[0.03] dark:bg-white/5 px-6 py-3 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        Status: {project.status?.toUpperCase() || 'STABLE'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        href={project.gitHubUrl}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                      </Link>
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={16} />
                        </Link>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Image Section with Overlay */}
                    <div className="relative aspect-video overflow-hidden border-b border-black/5 dark:border-white/10">
                      <PhotoPop>
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />
                      </PhotoPop>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/20 backdrop-blur-md text-primary border-primary/20 text-[8px] font-mono uppercase tracking-widest text-white">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-black tracking-tight uppercase group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <Code2 size={18} className="text-primary/40" />
                        </div>
                        <div className="relative">
                          <p className="text-sm text-muted-foreground leading-relaxed font-mono italic line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                            {'//'} {project.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="h-px w-full bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent" />
                        <div className="flex flex-wrap gap-2">
                          {project.tech?.slice(0, 5).map((t: string) => (
                            <span
                              key={t}
                              className="text-[10px] font-mono font-bold px-2 py-0.5 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/5 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-all"
                            >
                              {t}
                            </span>
                          ))}
                          {project.tech?.length > 5 && (
                            <div className="group/tech relative">
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 border border-primary/20 bg-primary/5 text-primary cursor-pointer hover:bg-primary/20 transition-all">
                                +{project.tech.length - 5} MORE
                              </span>
                              <div className="absolute bottom-full left-0 mb-2 p-3 rounded-xl bg-black/90 border border-white/10 backdrop-blur-xl opacity-0 group-hover/tech:opacity-100 pointer-events-none transition-opacity z-50 min-w-[200px] flex flex-wrap gap-2 shadow-2xl">
                                {project.tech.slice(5).map((t: string) => (
                                  <span key={t} className="text-[10px] font-mono text-primary whitespace-nowrap">{t}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Status Footer */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2">
                            <Activity size={10} className="text-primary animate-pulse" />
                            <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest">Diagnostic_Check: Passed</span>
                          </div>
                          <div className="text-[8px] font-mono text-primary/40 uppercase tracking-widest">Optimized</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing Status */}
        <Reveal>
          <div className="mt-20 flex justify-center">
            <div className="px-6 py-3 rounded-xl border border-dashed border-white/10 bg-primary/5 flex items-center gap-3">
              <Cpu size={16} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                SYSTEM_OPTIMIZATION: COMPLETE
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Projects;
