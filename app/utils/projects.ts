interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    gitHubUrl: string;
    liveUrl?: string;
    tech: string[];
    category: 'backend' | 'frontend' | 'fullstack' | 'cli';
    status: 'completed' | 'in-progress' | 'archived';
}

const projects: Project[] = [
    {
        id: 9,
        title: 'InsightsHub',
        description: 'An AI-powered GitHub analytics platform using FastAPI and async processing. Integrated Redis caching and optimized GraphQL API usage, significantly reducing redundant calls and lowering response times.',
        imageUrl: '/insight_hub.png',
        gitHubUrl: 'https://github.com/tushar27x/insight_hub',
        liveUrl: 'https://insight-hub-nu.vercel.app/',
        tech: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "GraphQL", "LLM Integration", "OAuth2"],
        category: 'fullstack',
        status: 'completed'
    },
    {
        id: 8,
        title: 'Real-Time Event Processing Platform',
        description: 'Architected a high-throughput event-driven system with Kafka-based pipelines. Optimized data flow and processing efficiency, improving throughput and reducing processing latency under load. Integrated Prometheus/Grafana for real-time monitoring.',
        imageUrl: '/realtime.png',
        gitHubUrl: 'https://github.com/tushar27x/kafka-event-processing-platform',
        tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Prometheus", "Grafana"],
        category: 'backend',
        status: 'completed'
    },
    {
        id: 2,
        title: 'Music Library API',
        description: 'A production-grade RESTful API managing music libraries with JWT authentication, fuzzy search, and CRUD operations. Features complete Swagger documentation and Docker containerization.',
        imageUrl: '/music-lib-api.png',
        gitHubUrl: 'https://github.com/tushar27x/music-lib-api',
        tech: ["Go", "Gin", "GORM", "PostgreSQL", "Swagger", "JWT", "Docker"],
        category: 'backend',
        status: 'completed'
    },
    {
        id: 6,
        title: 'Personal Shell',
        description: 'A custom CLI built in Go implementing low-level system programming concepts including command history, file system navigation, and process management.',
        imageUrl: '/go-shell.png',
        gitHubUrl: 'https://github.com/tushar27x/go-CLI',
        tech: ["Go", "System Programming", "Unix Shell", "File I/O"],
        category: 'cli',
        status: 'completed'
    },
];

export default projects;