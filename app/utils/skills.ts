export interface SkillCategory {
  label: string;
  stack: string[];
}

export const skills: SkillCategory[] = [
  { label: "BACKEND", stack: ["Java", "Go", "Python", "Spring Boot", "FastAPI"] },
  { label: "FRONTEND", stack: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { label: "DATA", stack: ["PostgreSQL", "Kafka", "Redis", "Elasticsearch"] }
];

export const detailedSkills = {
  Languages: ["Java", "Go", "Python", "JavaScript", "TypeScript"],
  "Backend & APIs": [
    "Spring Boot",
    "FastAPI",
    "Gin",
    "REST APIs",
    "GraphQL",
    "GORM",
    "Swagger",
  ],
  "Databases & Search": ["PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
  "AI": ["Gemini AI", "Groq", "Prompt Engineering"],
  Frontend: ["Next.js", "Tailwind CSS", "HTML/CSS"],
  "Tools & DevOps": [
    "Docker",
    "Jenkins",
    "Git",
    "CI/CD"
  ],
};

export default skills;
