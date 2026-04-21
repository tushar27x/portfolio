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
        description: 'An AI-powered web app that transforms your GitHub activity into a cinematic, story-style dashboard with insights, analytics, and witty developer roasts.',
        imageUrl: '/insight_hub.png',
        gitHubUrl: 'https://github.com/tushar27x/insight_hub',
        liveUrl: 'https://insight-hub-nu.vercel.app/',
        tech: ["Python", "Fast API", "PostgreSQL", "Redis", "Kafka", "Groq", "Gemini", "GraphQL", "Next.js"],
        category: 'fullstack',
        status: 'completed'
    },
    {
        id: 8,
        title: 'Event Processing Platform',
        description: 'A production-style Kafka-based event processing system built with Spring Boot, PostgreSQL, Redis, Prometheus, and Grafana.',
        imageUrl: '/realtime.png',
        gitHubUrl: 'https://github.com/tushar27x/kafka-event-processing-platform',
        tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "Prometheus", "Grafana"],
        category: 'backend',
        status: 'completed'
    },
    {
        id: 2,
        title: 'Music Library API',
        description: 'A comprehensive RESTful API for managing music libraries with albums, songs, and playlists. Features JWT authentication, fuzzy search, CRUD operations, and complete Swagger documentation. Built with Go, Gin framework, and PostgreSQL.',
        imageUrl: '/music-lib-api.png',
        gitHubUrl: 'https://github.com/tushar27x/music-lib-api',
        liveUrl: 'https://independent-carlene-tushar27x-a3461680.koyeb.app/swagger/index.html',
        tech: ["Go", "Gin", "GORM", "PostgreSQL", "Swagger", "JWT", "Docker"],
        category: 'backend',
        status: 'completed'
    },
    {
        id: 6,
        title: 'Personal Shell',
        description: 'A custom command-line interface built in Go. Features include command history, file system navigation, process management, and custom command execution. Demonstrates low-level system programming concepts.',
        imageUrl: '/go-shell.png',
        gitHubUrl: 'https://github.com/tushar27x/go-CLI',
        tech: ["Go", "CLI", "System Programming", "File I/O"],
        category: 'cli',
        status: 'completed'
    },
];

export default projects;