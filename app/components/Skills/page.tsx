import React from 'react'
import Reveal from '../Reveal';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const skills = {
  "Programming Languages": ["JavaScript", "Java", "C++", "Go"],
  "Frontend Development": ["HTML", "CSS", "React.js", "Next.js"],
  "Backend Development": ["Node.js", "Express.js", "Gin"],
  "Databases & Search": ["MongoDB", "SQL", "Elasticsearch"],
  "Tools & Practices": ["Git", "Docker", "REST APIs", "Agile"]
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Reveal>
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex items-center justify-center gap-4">
              <span className="text-4xl md:text-5xl lg:text-6xl">⚙️</span>
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">SKILLS</span>
              <span className="text-4xl md:text-5xl lg:text-6xl">🛠️</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A comprehensive toolkit of technologies and practices that drive modern software development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto mb-16">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Reveal key={category}>
              <Card className="border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm transition-all duration-500 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                <CardContent className="p-8 relative z-10">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">{category}</h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillList.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="text-sm py-1.5 px-3 rounded-full hover:scale-105 transition-transform duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
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

export default Skills;
