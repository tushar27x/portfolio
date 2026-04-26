export interface SkillCategory {
  label: string;
  stack: string[];
}

export const skills: SkillCategory[] = [
  { label: "BACKEND", stack: ["Java", "Netty", "Python", "FastAPI"] },
  { label: "FRONTEND", stack: ["React.js", "Next.js", "TypeScript", "Tailwind"] },
  { label: "DATA", stack: ["Elasticsearch", "Kafka", "Redis", "PostgreSQL"] }
];

export const detailedSkills = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  "Backend & Systems": [
    "Netty",
    "Kafka",
    "Elasticsearch",
    "FastAPI",
    "REST APIs",
    "Redis",
    "Async Processing"
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Tools & DevOps": [
    "Jenkins",
    "Docker",
    "Git",
    "CI/CD",
    "Prometheus",
    "Grafana"
  ],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "UI/UX Design"],
};

export default skills;
