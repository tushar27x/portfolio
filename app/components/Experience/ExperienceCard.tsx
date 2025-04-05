import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { CalendarRange } from 'lucide-react'

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
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="w-16 h-16 relative flex-shrink-0 rounded-md overflow-hidden">
          <Image
            src={logoUrl}
            alt={`${companyName} logo`}
            className="object-cover"
            fill
          />
        </div>
        <div>
          <CardTitle className="text-2xl">{position}</CardTitle>
          <p className="text-lg text-muted-foreground">{companyName}</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarRange className="w-4 h-4 mr-2" />
          <span>{startDate} - {endDate}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div>
          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {['React', 'TypeScript', 'Node.js', 'Elasticsearch', 'Java', 'SQL', 'Go'].map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ExperienceCard;