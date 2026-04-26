interface Project {
    id: number;
    title: string;
    description: string;
    challenge?: string;
    imageUrl: string;
    gitHubUrl: string;
    liveUrl?: string;
    tech: string[];
    category: 'backend' | 'frontend' | 'fullstack' | 'cli';
    status: 'completed' | 'in-progress' | 'archived';
    featured?: boolean;
    isTutorial?: boolean;
}

const projects: Project[] = [
    {
        id: 9,
        title: 'InsightsHub',
        description: 'An AI-powered GitHub analytics engine transforming activity into narrative insights using LLMs and async data pipelines.',
        challenge: 'Managed high-volume API rate limiting and data consistency by implementing a Redis-backed asynchronous queue and GraphQL batching.',
        imageUrl: '/insight_hub.png',
        gitHubUrl: 'https://github.com/tushar27x/insight_hub',
        liveUrl: 'https://insight-hub-nu.vercel.app/',
        tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "LLM Integration", "GraphQL", "Next.js"],
        category: 'fullstack',
        status: 'completed',
        featured: true
    },
    {
        id: 8,
        title: 'Event Processing Platform',
        description: 'A production-grade event-driven system implementing idempotent consumers and comprehensive observability pipelines with Prometheus and Grafana.',
        challenge: 'Ensured exactly-once processing using Redis-based deduplication and built a resilient architecture with Dead Letter Queue (DLQ) handling and real-time Kafka consumer lag monitoring.',
        imageUrl: '/realtime.png',
        gitHubUrl: 'https://github.com/tushar27x/kafka-event-processing-platform',
        tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Prometheus", "Grafana"],
        category: 'backend',
        status: 'completed',
        featured: true
    },
    {
        id: 2,
        title: 'Music Library API',
        description: 'A RESTful API for managing music libraries with JWT authentication and fuzzy search.',
        imageUrl: '/music-lib-api.png',
        gitHubUrl: 'https://github.com/tushar27x/music-lib-api',
        tech: ["Go", "Gin", "PostgreSQL", "JWT", "Docker"],
        category: 'backend',
        status: 'completed',
        isTutorial: true
    },
    {
        id: 6,
        title: 'Personal Shell',
        description: 'A custom command-line interface exploring low-level system programming and process management.',
        imageUrl: '/go-shell.png',
        gitHubUrl: 'https://github.com/tushar27x/go-CLI',
        tech: ["Go", "CLI", "System Programming"],
        category: 'cli',
        status: 'completed',
        isTutorial: true
    },
];

export default projects;