interface Experience {
  companyName: string,
  logoUrl: string,
  position: string,
  startDate: string,
  endDate: string,
  description: string,
  responsibilities: string[],
  skills: string[]
}

const experiences: Experience[] = [
  {
    companyName: "Salescode.ai",
    logoUrl: "/salescode.png",
    position: "Software Engineer",
    startDate: "Aug 2024",
    endDate: "Present",
    description:
      "Core Backend Engineer architecting SalesLens, an enterprise KPI analytics platform. Focused on building high-performance services and optimizing data pipelines for real-time hierarchical monitoring.",
    responsibilities: [
      "Optimized KPI analytics systems using Java, MySQL, and Elasticsearch, achieving a 20-30% improvement in dashboard load times and ~30% reduction in query latency.",
      "Collaborated with business stakeholders to design KPI frameworks for 50+ teams, enhancing decision-making efficiency across the organization.",
      "Automated KPI batch processing via Jenkins CI/CD pipelines, reducing manual effort by 30-40% and significantly improving data processing reliability.",
      "Developed hierarchical analytics dashboards using Java and Elasticsearch to enable granular performance tracking for Manager and Supervisor roles.",
      "Contributed to React.js-based dashboard UI development, enhancing data visualization and usability for complex performance metrics.",
    ],
    skills: ["Java", "MySQL", "Elasticsearch", "Jenkins", "Spring Boot", "REST APIs", "CI/CD", "React.js"]
  },
];

export default experiences;