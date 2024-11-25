import ExperienceCard from "./ExperienceCard"

export default function ExperienceSection() {
  const experiences = [
    {
      companyName: "Salescode.ai",
      logoUrl: "/salescode.png",
      position: "Software Engineer Trainee",
      startDate: "Aug 2023",
      endDate: "Present",
      description: "Working on cutting-edge AI-powered sales solutions and contributing to the development of innovative features that enhance sales team productivity and effectiveness.",
      responsibilities: [
        "Developing and maintaining web applications using modern JavaScript frameworks",
        "Collaborating with cross-functional teams to implement new features",
        "Participating in code reviews and technical discussions",
        "Learning and implementing best practices in software development"
      ]
    }
  ]

  return (
    <div >
      <div className='flex items-center flex-col gap-5 px-20 lg:px-[10rem] lg:py-[5rem] md:py-[2rem] md:px-[1rem] py-10'>
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">Experience</h2>
        {experiences && experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))
        ) : (
          <p className="text-muted-foreground">No experience entries found.</p>
        )}
      </div>
    </div>
  )
}