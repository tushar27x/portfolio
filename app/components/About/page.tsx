"use client"
import Reveal from "../Reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Reveal>
          <div className="text-center mb-16">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-3xl md:text-4xl lg:text-5xl">👨‍💻</span>
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                ABOUT ME
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl">🎯</span>
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
          {/* Personal Info Card */}
          <Reveal>
            <div className="border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 h-full flex shadow-md rounded-lg">
              <div className="p-6 h-full flex flex-col flex-1">
                <div className="space-y-6 flex-1">
                  <div className="text-center lg:text-left">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">Tushar Sharma</h2>
                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">
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
              </div>
            </div>
          </Reveal>

          {/* Skills & Expertise Card */}
          <Reveal>
            <div className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl rounded-lg transition-all duration-300 h-full flex">
              <div className="p-6 h-full flex flex-col flex-1">
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Technical Expertise</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                        Backend Development
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-sm">
                          Java
                        </Badge>
                        <Badge variant="secondary" className="text-sm">
                          Node.js
                        </Badge>
                        <Badge variant="secondary" className="text-sm">
                          Express.js
                        </Badge>
                        <Badge variant="secondary" className="text-sm">
                          Go
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                        Frontend Development
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-sm">
                          React.js
                        </Badge>
                        <Badge variant="secondary" className="text-sm">
                          Next.js
                        </Badge>
                        <Badge variant="secondary" className="text-sm">
                          TypeScript
                        </Badge>
                        <Badge variant="secondary" className="text-sm">
                          JavaScript
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                        Databases & Search
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-sm">
                          SQL
                        </Badge>
                        <Badge variant="secondary" className="text-sm">
                          Elasticsearch
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Current Role Section */}
        <Reveal>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm mt-12 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Current Role</h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Currently working as a <strong className="text-primary">Full Stack Developer</strong> at{" "}
                  <strong className="text-primary">Salescode.ai</strong>, where I work with{" "}
                  <strong className="text-primary">Java</strong>, <strong className="text-primary">React</strong>,{" "}
                  <strong className="text-primary">Elasticsearch</strong>,{" "}
                  <strong className="text-primary">MySQL</strong>, and <strong className="text-primary">Node.js</strong>{" "}
                  to build KPI dashboards and analytics solutions. I&apos;m passionate about creating seamless user
                  experiences and embracing new challenges in the tech industry.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <Badge variant="outline" className="text-sm">
                    Problem Solving
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    User Experience
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Innovation
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  )
}

export default About