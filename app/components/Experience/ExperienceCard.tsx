import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { CalendarRange, Building2, TrendingUp, MapPin, Mountain } from "lucide-react"

interface ExperienceCardProps {
  companyName: string
  logoUrl: string
  position: string
  startDate: string
  endDate: string
  description: string
  responsibilities: string[]
  milestone?: string
  elevation?: string
  timelinePosition?: number
}

const ExperienceCard = ({
  companyName,
  logoUrl,
  position,
  startDate,
  endDate,
  description,
  responsibilities,
  milestone,
  elevation,
  timelinePosition,
}: ExperienceCardProps) => {
  return (
    <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      {/* Adventure Progress Indicator */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/50"></div>

      {/* Adventure Trail Decoration */}
      <div className="absolute top-4 right-4 text-primary/20 text-2xl">{timelinePosition === 1 ? "🎯" : "🏆"}</div>

      <CardHeader className="p-6 pb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-16 h-16 relative flex-shrink-0 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200 ring-2 ring-primary/20">
            <Image src={logoUrl || "/placeholder.svg"} alt={`${companyName} logo`} className="object-cover" fill />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground font-medium">{companyName}</span>
              {milestone && (
                <div className="flex items-center gap-1 ml-auto">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-xs text-primary font-medium">{milestone}</span>
                </div>
              )}
            </div>
            <CardTitle className="text-xl md:text-2xl font-bold text-foreground">{position}</CardTitle>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarRange className="w-4 h-4" />
                <span>
                  {startDate} - {endDate}
                </span>
              </div>
              {elevation && (
                <div className="flex items-center gap-1 text-xs text-primary">
                  <Mountain className="w-3 h-3" />
                  <span className="font-medium">{elevation}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="space-y-4">
          <div>
            <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Achievements
            </h4>
            <ul className="space-y-2">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3">
            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
              <span>⚙️</span>
              Skills
            </h5>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Elasticsearch", "Java", "SQL", "MySQL"].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs hover:scale-105 transition-transform duration-200 hover:bg-primary/10"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Adventure Timeline Badge */}
          <div className="pt-3 border-t border-primary/10">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Checkpoint</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-primary font-medium">
                  {timelinePosition === 1 ? "Journey Begins" : "Current Position"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ExperienceCard
