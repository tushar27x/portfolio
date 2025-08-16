interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    gitHubUrl: string;
    liveUrl?: string;
    tech: string[];
    category: 'backend' | 'frontend' | 'fullstack' | 'cli';
    featured: boolean;
    status: 'completed' | 'in-progress' | 'archived';
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Personal Portfolio',
        description: 'A modern, responsive portfolio website built with Next.js and TypeScript. Features include dark/light mode, smooth animations, project showcase, and contact form. Demonstrates clean code architecture and modern web development practices.',
        imageUrl: '/portfolio.png',
        gitHubUrl: 'https://github.com/tushar27x/portfolio',
        liveUrl: 'https://tushar27x-portfolio.vercel.app/',
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
        category: 'frontend',
        featured: true,
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
        featured: true,
        status: 'completed'
    },
    {
        id: 3,
        title: 'Online Code Editor',
        description: 'A real-time collaborative code editor inspired by CodePen. Features live preview, syntax highlighting, multiple language support, and responsive design. Perfect for prototyping and sharing code snippets.',
        imageUrl: '/codepen.png',
        gitHubUrl: 'https://github.com/Tushar27x/codepen-clone',
        liveUrl: 'https://codepen-clone-tushar27x.vercel.app/',
        tech: ["React.js", "JavaScript", "Material-UI", "Monaco Editor", "Vercel"],
        category: 'frontend',
        featured: true,
        status: 'completed'
    },
    {
        id: 4,
        title: 'Blog Platform',
        description: 'A full-stack blog platform with user authentication, real-time updates, and rich text editing. Features include user profiles, article publishing, comments, and responsive design.',
        imageUrl: '/blogs.png',
        gitHubUrl: 'https://github.com/Tushar27x/medium-clone',
        liveUrl: 'https://medium-clone-tushar27x.vercel.app/',
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"],
        category: 'fullstack',
        featured: true,
        status: 'completed'
    },
    {
        id: 5,
        title: 'Personal Shell',
        description: 'A custom command-line interface built in Go. Features include command history, file system navigation, process management, and custom command execution. Demonstrates low-level system programming concepts.',
        imageUrl: '/go-shell.png',
        gitHubUrl: 'https://github.com/tushar27x/go-CLI',
        tech: ["Go", "CLI", "System Programming", "File I/O"],
        category: 'cli',
        featured: false,
        status: 'completed'
    },
    {
        id: 6,
        title: 'Airbnb Clone',
        description: 'A full-stack Airbnb clone with property listings, user authentication, booking system, and interactive maps. Features responsive design, real-time updates, and comprehensive property management.',
        imageUrl: '/airbnb-clone.png',
        gitHubUrl: 'https://github.com/Tushar27x/airbnb',
        liveUrl: 'https://airbnb-clone-tushar27x.vercel.app/',
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma", "NextAuth"],
        category: 'fullstack',
        featured: true,
        status: 'completed'
    }
];

export default projects;