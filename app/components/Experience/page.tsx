import ExperienceCard from "./ExperienceCard"
import Reveal from '../Reveal';

export default function ExperienceSection() {
  const experiences = [
    {
      companyName: "Salescode.ai",
      logoUrl: "/salescode.png",
      position: "Software Engineer",
      startDate: "Feb 2025",
      endDate: "Present",
      description: "Working on KPI dashboards and analytics solutions, contributing to the development of features that enhance sales team productivity and effectiveness.",
      responsibilities: [
        "Developing and maintaining web applications using Java, React, and Node.js",
        "Building KPI dashboards with Elasticsearch and MySQL",
        "Collaborating with cross-functional teams to implement new features",
        "Participating in code reviews and technical discussions"
      ]
    },
    {
      companyName: "Salescode.ai",
      logoUrl: "/salescode.png",
      position: "Software Engineer Trainee",
      startDate: "Aug 2024",
      endDate: "Feb 2025",
      description: "Started as a trainee, learning the company's tech stack and contributing to development projects while gaining hands-on experience.",
      responsibilities: [
        "Learning and implementing modern JavaScript frameworks",
        "Assisting in web application development and maintenance",
        "Participating in team meetings and technical discussions",
        "Learning best practices in software development"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              EXPERIENCE
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30 transform -translate-x-1/2"></div>
            
            {experiences && experiences.length > 0 ? (
              experiences.map((experience, index) => (
                <Reveal key={index}>
                  <div className="relative mb-8 md:mb-16 flex justify-center">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10 shadow-lg"></div>
                    
                    {/* Card */}
                    <div className="w-full max-w-2xl px-4 md:px-0">
                      <ExperienceCard {...experience} />
                    </div>
                  </div>
                </Reveal>
              ))
            ) : (
              <Reveal>
                <div className="text-center">
                  <p className="text-muted-foreground text-lg">No experience entries found.</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}