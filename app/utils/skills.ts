export interface SkillCategory {
  label: string;
  stack: string[];
}

export const skills: SkillCategory[] = [
  { label: "BACKEND", stack: ["Python", "FastAPI", "Java", "Netty"] },
  { label: "DATA", stack: ["PostgreSQL", "Elasticsearch", "Redis", "Kafka"] },
  { label: "AI / LLM", stack: ["RAG", "Embeddings", "Prompt Eval", "Claude"] }
];

export const detailedSkills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "Go", "SQL"],
  "Backend & APIs": [
    "FastAPI (async)",
    "REST API Design",
    "SQLAlchemy",
    "OAuth2/JWT",
    "Spring Boot",
    "Netty",
    "Microservices"
  ],
  "Data, Messaging & Cloud": [
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Elasticsearch",
    "Kafka",
    "GraphQL",
    "AWS (EC2, S3, DynamoDB)"
  ],
  "AI/LLM Systems": [
    "RAG",
    "Vector Search",
    "Prompt Design & Eval",
    "LLM Orchestration",
    "Multi-provider Failover",
    "Structured Outputs"
  ],
  "DevOps & Practices": [
    "Jenkins CI/CD",
    "Docker",
    "Git",
    "Logging & Monitoring",
    "Root-cause Analysis"
  ],
  Frontend: ["React.js", "Next.js", "Tailwind CSS"],
};

export default skills;
