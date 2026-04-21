export interface SkillCategory {
  label: string;
  stack: string[];
}

export const skills: SkillCategory[] = [
  { label: "BACKEND", stack: ["Java", "Go", "Python", "Spring Boot"] },
  { label: "FRONTEND", stack: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { label: "DATA", stack: ["PostgreSQL", "Kafka", "Redis", "Elasticsearch"] }
];

export const detailedSkills = {
  Languages: ["Java", "Go (Golang)", "Python", "JavaScript", "TypeScript"],
  "Backend & APIs": [
    "Spring Boot",
    "FastAPI",
    "Gin",
    "REST APIs",
    "GraphQL",
    "JWT Authentication",
    "GORM",
    "Swagger",
  ],
  "Databases & Search": ["PostgreSQL", "MySQL", "Redis", "Elasticsearch", "SQLite"],
  "Data & Messaging": [
    "Apache Kafka",
    "Real-time Event Processing",
    "Analytics Pipelines",
  ],
  "AI & Cloud": ["Gemini AI", "Groq", "Prompt Engineering"],
  Frontend: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  "Tools & DevOps": [
    "Docker",
    "Prometheus",
    "Grafana",
    "Jenkins",
    "Git",
    "CI/CD",
    "CLI/System Programming",
  ],
};

export default skills;
