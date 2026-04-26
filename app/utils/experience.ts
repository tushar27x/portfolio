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
      "Backend Engineer for SalesLens (KPI analytics platform). Focused on optimizing Java/Netty services and Elasticsearch retrieval systems for real-time monitoring.",
    responsibilities: [
      "Reduced query latency by 30% through Elasticsearch indexing strategies and query refactoring of KPI engines.",
      "Automated KPI batch processing via Jenkins, reducing manual effort by 40% for high-volume data ingestion.",
      "Built hierarchical analytics frameworks for 50+ teams to enable precise performance tracking.",
      "Developed high-concurrency RESTful services using Netty, maintaining 99.9% reliability for mission-critical metrics.",
      "Improved dashboard responsiveness by 25% through backend data aggregation and MySQL schema optimization.",
    ],
    skills: ["Java", "Netty", "Elasticsearch", "MySQL", "Jenkins", "REST APIs", "CI/CD", "Redis"]
  },
];

export default experiences;