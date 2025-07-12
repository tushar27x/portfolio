"use client"

import React from 'react'
import Reveal from '../Reveal';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Reveal>
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ABOUT ME
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Personal Info Card */}
          <Reveal>
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      Tushar Sharma
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      A passionate software engineer with expertise in full-stack web development.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium">Software Engineer at Salescode.ai</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium">Full Stack Developer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium">Problem Solver & Tech Enthusiast</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {/* Skills & Expertise Card */}
          <Reveal>
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    Technical Expertise
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                        Backend Development
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-sm">Java</Badge>
                        <Badge variant="secondary" className="text-sm">Node.js</Badge>
                        <Badge variant="secondary" className="text-sm">Express.js</Badge>
                        <Badge variant="secondary" className="text-sm">Go</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                        Frontend Development
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-sm">React.js</Badge>
                        <Badge variant="secondary" className="text-sm">Next.js</Badge>
                        <Badge variant="secondary" className="text-sm">TypeScript</Badge>
                        <Badge variant="secondary" className="text-sm">JavaScript</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                        Databases & Search
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-sm">SQL</Badge>
                        <Badge variant="secondary" className="text-sm">Elasticsearch</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* Current Role Section */}
        <Reveal>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm mt-8 lg:mt-12 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Current Role
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Currently working as a <strong className="text-primary">Full Stack Developer</strong> at{' '}
                  <strong className="text-primary">Salescode.ai</strong>, where I work with <strong className="text-primary">Java</strong>, <strong className="text-primary">React</strong>, <strong className="text-primary">Elasticsearch</strong>, <strong className="text-primary">MySQL</strong>, and <strong className="text-primary">Node.js</strong> to build KPI dashboards and analytics solutions. 
                  I'm passionate about creating seamless user experiences and embracing new challenges in the tech industry.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <Badge variant="outline" className="text-sm">Problem Solving</Badge>
                  <Badge variant="outline" className="text-sm">User Experience</Badge>
                  <Badge variant="outline" className="text-sm">Innovation</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  )
}

export default About;