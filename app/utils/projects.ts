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
        id: 4,
        title: 'URL Shortener',
        description: 'A lightweight and efficient URL shortening service built with Go and Gin framework. Features include generating unique short codes for long URLs, redirect handling, and prevention of duplicate entries by mapping the same long URL to a consistent short code. The project uses SQLite with GORM for persistence and includes a simple frontend for easy usage.',
        imageUrl: '/urlshortener.png',
        gitHubUrl: 'https://github.com/tushar27x/url-shortner',
        liveUrl: 'https://shorturl-1b4q.onrender.com/',
        tech: ["Go", "Gin", "GORM", "SQLite", "HTML", "CSS"],
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