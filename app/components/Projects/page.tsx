"use client"
import React from 'react';
import Image from 'next/image';
import Reveal from '../Reveal';
import Link from 'next/link';
import PhotoPop from '../PhotoPop';
import projects from '@/app/utils/projects';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
interface ProjectProps {
  id: number | string,
  title: string,
  imageUrl: string,
  gitHubUrl: string,
  liveUrl?: string,
  tech: string[] 
}
const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold flex items-center justify-center gap-4">
              <span className="text-4xl md:text-5xl lg:text-6xl">🚀</span>
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">PROJECTS</span>
              <span className="text-4xl md:text-5xl lg:text-6xl">💻</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {projects.map((project: ProjectProps) => (
            <Reveal key={project.id}>
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full group">
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="flex gap-3">
                      <Link 
                        href={project.gitHubUrl} 
                        target="_blank"
                        className="p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                      >
                        <Github size={20} className="text-foreground hover:text-primary transition-colors" />
                      </Link>
                      {project?.liveUrl && (
                        <Link 
                          href={project.liveUrl} 
                          target="_blank"
                          className="p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                        >
                          <ExternalLink size={20} className="text-foreground hover:text-primary transition-colors" />
                        </Link>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 pt-0">
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-lg border border-border/50">
                      <PhotoPop>
                        <div className="relative aspect-video overflow-hidden">
                          <Image 
                            src={project.imageUrl} 
                            alt={`${project.title} screenshot`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </PhotoPop>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                    {project.tech?.map(t => {
                        return(
                            <Badge variant="outline" className="text-xs">{t}</Badge>
                        )
                    })
                    }
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects