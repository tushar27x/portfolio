"use client"
import React from 'react';
import Image from 'next/image';
import Reveal from '../Reveal';
import Link from 'next/link';
import PhotoPop from '../PhotoPop';
import projects from '@/app/utils/projects';
import { Github, ExternalLink, Code2, Boxes, Cpu, Activity, FlaskConical, Binary } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const featuredProjects = projects.filter(p => !p.isTutorial);
  const tutorialProjects = projects.filter(p => p.isTutorial);

  const ProjectCard = ({ project, isMini = false }: { project: any, isMini?: boolean }) => (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      <Card className={`relative border border-black/5 dark:border-white/10 rounded-3xl bg-white/40 dark:bg-black/40 backdrop-blur-xl overflow-hidden group-hover:border-primary/50 transition-all duration-500 h-full flex flex-col shadow-xl dark:shadow-primary/5`}>
        <div className="bg-black/[0.03] dark:bg-white/5 px-6 py-3 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              {project.status?.toUpperCase() || 'STABLE'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href={project.gitHubUrl} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={16} />
            </Link>
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={16} />
              </Link>
            )}
          </div>
        </div>

        <CardContent className="p-0 flex flex-col h-full">
          {!isMini && (
            <div className="relative aspect-video overflow-hidden border-b border-black/5 dark:border-white/10">
              <PhotoPop>
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
              </PhotoPop>
            </div>
          )}

          <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className={`${isMini ? 'text-xl' : 'text-2xl'} font-black tracking-tight uppercase group-hover:text-primary transition-colors`}>
                  {project.title}
                </h3>
                {isMini ? <FlaskConical size={18} className="text-primary/40" /> : <Code2 size={18} className="text-primary/40" />}
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed font-mono italic line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                  {'//'} {project.description}
                </p>
                {project.challenge && (
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 transition-all duration-500">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 flex items-center gap-2">
                      <Binary size={10} /> Technical Challenge
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                      {project.challenge}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-px w-full bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent" />
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t: string) => (
                  <span key={t} className="text-[10px] font-mono font-bold px-2 py-0.5 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/5 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full select-none pointer-events-none opacity-[0.02]">
        <span className="text-[10vw] sm:text-[15vw] font-black font-mono absolute top-0 left-0">SYSTEMS</span>
        <span className="text-[10vw] sm:text-[15vw] font-black font-mono absolute bottom-0 right-0">ENGINEERING</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-20 justify-center lg:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
              <Boxes className="text-primary" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase">03_REPOSITORIES.SYS</h2>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono uppercase">
                Status: Production-Grade Systems Active
              </div>
            </div>
          </div>
        </Reveal>

        {/* Featured Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mb-24">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Labs/Tutorial Section */}
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <FlaskConical size={14} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Labs & Learning</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {tutorialProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} isMini />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 flex justify-center">
            <div className="px-6 py-3 rounded-xl border border-dashed border-white/10 bg-primary/5 flex items-center gap-3">
              <Cpu size={16} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                CONTINUOUS_DEPLOYMENT: OPERATIONAL
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Projects;