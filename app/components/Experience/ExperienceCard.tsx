import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { CalendarRange, Building2 } from 'lucide-react'

interface ExperienceCardProps {
  companyName: string;
  logoUrl: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
}

const ExperienceCard = ({
  companyName,
  logoUrl,
  position,
  startDate,
  endDate,
  description,
  responsibilities
}: ExperienceCardProps) => {
  return (
    <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
      <CardHeader className="p-6 pb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-16 h-16 relative flex-shrink-0 rounded-xl overflow-hidden shadow-md">
            <Image
              src={logoUrl}
              alt={`${companyName} logo`}
              className="object-cover"
              fill
            />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground font-medium">{companyName}</span>
            </div>
            <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
              {position}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarRange className="w-4 h-4" />
              <span>{startDate} - {endDate}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 pt-0">
        <div className="space-y-4">
          <div>
            <p className="text-base text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {responsibilities.map((responsibility, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-3">
            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Technologies Used
            </h5>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'Elasticsearch', 'Java', 'SQL', 'MySQL'].map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="text-xs hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ExperienceCard;