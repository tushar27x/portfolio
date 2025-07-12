import React from 'react'
import Reveal from '../Reveal';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const skills = {
  "Programming Languages": ["JavaScript", "TypeScript", "Java", "C++", "Go"],
  "Frontend Development": ["HTML", "CSS", "React.js", "Next.js"],
  "Backend Development": ["Node.js", "Express.js", "Gin"],
  "Databases & Search": ["MongoDB", "SQL", "Elasticsearch"],
  "Tools & Practices": ["Git", "DevOps", "Functional Programming", "DSA"]
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              SKILLS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Reveal key={category}>
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        {category}
                      </h3>
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

        {/* Skills Summary Card */}
        <Reveal>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm mt-12 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Technical Expertise Overview
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Proficient in full-stack development with expertise spanning from frontend frameworks to backend technologies, 
                  database management, and modern development practices. Continuously learning and adapting to new technologies.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <Badge variant="outline" className="text-sm">Full Stack</Badge>
                  <Badge variant="outline" className="text-sm">Problem Solving</Badge>
                  <Badge variant="outline" className="text-sm">Continuous Learning</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  )
}

export default Skills;
