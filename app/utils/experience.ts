interface Experience {
  companyName: string,
  logoUrl: string,
  position: string,
  startDate: string,
  endDate: string,
  description: string,
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    companyName: "Salescode.ai",
    logoUrl: "/salescode.png",
    position: "Software Engineer Trainee",
    startDate: "Aug 2024",
    endDate: "Feb 2025",
    description:
      "Joined as a Software Engineer Trainee, learning the analytics platform architecture, Elasticsearch-based KPI systems, and backend development practices while contributing to internal features.",
    responsibilities: [
      "Learned Java-based backend development and analytics workflows used in KPI processing",
      "Assisted in building dashboard features and backend enhancements for internal tools",
      "Worked with MySQL and Elasticsearch queries to understand real-world analytics datasets",
      "Participated in code reviews, sprint planning, and technical discussions with the analytics team",
    ],
  },
  {
    companyName: "Salescode.ai",
    logoUrl: "/salescode.png",
    position: "Software Engineer",
    startDate: "Feb 2025",
    endDate: "Present",
    description:
      "Backend Software Engineer working on SalesLens, a KPI analytics platform, building scalable services and APIs for performance tracking and hierarchical analytics dashboards.",
    responsibilities: [
      "Develop and maintain backend analytics services using Java, MySQL, and Elasticsearch for KPI computation and reporting",
      "Design and optimize Elasticsearch queries and data pipelines to improve dashboard performance and system efficiency",
      "Build RESTful APIs for Manager and Supervisory applications enabling hierarchical KPI monitoring",
      "Manage Jenkins pipelines to automate periodic KPI processing jobs across enterprise clients",
      "Collaborate with analytics and business teams to translate real-world sales data into scalable KPI frameworks",
    ],
  },
];

export default experiences;