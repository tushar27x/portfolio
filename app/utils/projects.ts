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
        id: 1,
        title: 'InsightsHub',
        description: 'A pixel-art habit tracker that turns your GitHub commit streak into a D&D hero that gains XP when you code and loses a heart when you don\'t.',
        challenge: 'Keeping a daily game honest on top of GitHub\'s lagging, timezone-blind contribution data (branch scans, DST-safe day windows, private-count leaks) while running reliable AI features and a full-stack deploy on a 1 GB free-tier budget.',
        imageUrl: '/insights_hub.png',
        gitHubUrl: 'https://github.com/tushar27x/insightsHubV2',
        liveUrl: 'https://insights-hub-v2-one.vercel.app/',
        tech: ["Java 21", "Spring Boot", "Spring AI", "PostgreSQL", "Redis", "LLM Integration", "GraphQL", "Next.js"],
        category: 'fullstack',
        status: 'completed',
        featured: true
    },
    {
        id: 2,
        title: 'Socratese',
        description: 'A Socratic tutor over Obsidian notes: a local RAG pipeline grounds an LLM that only asks questions, never answers, forcing you to reconstruct your own notes from memory.',
        challenge: 'Resolved 6-turn question loops by moving stall detection into deterministic code after 3 measured prompt fixes failed (1 made adherence worse); shipped 249 mutation-verified tests with the TUI driven headlessly under strict pyright.',
        imageUrl: '/socratese.png',
        gitHubUrl: 'https://github.com/tushar27x/socratese-cli',
        tech: ["Python", "Typer", "Textual", "RAG", "OpenAI Embeddings", "Chroma", "Anthropic Claude", "SQLite"],
        category: 'cli',
        status: 'completed',
        featured: true
    },
    {
        id: 3,
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
        id: 4,
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
        id: 5,
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