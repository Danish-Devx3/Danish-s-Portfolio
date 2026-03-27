
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin, FaTwitter, FaGitAlt, FaMobileAlt, FaShieldAlt, FaTasks, FaCode, FaPuzzlePiece, FaHandshake } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiExpress, SiPostman, SiNginx, SiVercel, SiNetlify, SiGraphql, SiJsonwebtokens, SiSupabase, SiPrisma, SiJest, SiCypress, SiVitest, SiReactquery, SiZod, SiGithubactions, SiGoogle, SiRedux, SiVuedotjs, SiAngular, SiWebpack, SiBabel, SiAmazonwebservices, SiGooglecloud } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { GiBearFace } from "react-icons/gi";
import { TbApi } from "react-icons/tb";

export const personalDetails = {
    name: "Danish Ansari",
    role: "Full-Stack Developer",
    email: "danish.devx3@gmail.com",
    socials: [
        { name: "GitHub", url: "https://github.com/Danish-Devx3", icon: FaGithub },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/danishansaridev", icon: FaLinkedin },
        { name: "Twitter", url: "https://twitter.com/Danish_Devx3", icon: FaTwitter },
        { name: "Email", url: "mailto:danish.devx3@gmail.com", icon: HiMail },
    ],
    bookCallUrl: "https://calendar.google.com/calendar/u/0/r/eventedit?text=Book+a+Call+with+Danish+Ansari&details=Let%27s+discuss+your+project+ideas!",
    about: "Full-Stack MERN Developer experienced in building scalable, responsive production web applications using React.js, Node.js, Express, and MongoDB. Strong expertise in reusable UI systems, secure RESTful APIs, JWT-based authentication, and performance optimization across devices and browsers.",
};

export const experiences = [
    {
        company: "noDevBuild",
        role: "Full-Stack Developer Intern",
        duration: "Oct 2025 - Present",
        location: "Remote",
        logo: "/placeholder-logo.png",
        description: [
            "Developed scalable MERN stack applications for venture studio portfolio companies.",
            "Built reusable React components and modular front-end libraries to keep architecture maintainable.",
            "Translated Figma wireframes into pixel-perfect, responsive UIs optimized for cross-browser support.",
            "Designed secure RESTful APIs with JWT-based authentication and role-based access control.",
            "Optimized application performance using query tuning, indexing, and reduced unnecessary re-renders.",
        ],
    },
    {
        company: "BYTECOMMERCE PVT LTD",
        role: "Backend Developer Intern",
        duration: "Apr 2025 - Jun 2025",
        location: "Remote",
        logo: "/placeholder-logo.png",
        description: [
            "Built and optimized high-traffic REST APIs using Node.js and Express.js.",
            "Designed scalable MongoDB schemas and indexing strategies for 5,000+ users.",
            "Implemented secure authentication and authorization with JWT, OAuth, and email verification.",
            "Authored Postman collections and API docs across 20+ endpoints to improve integration speed.",
        ],
    },
    {
        company: "Primeox",
        role: "Frontend Developer (Freelance)",
        duration: "Jan 2025 - Mar 2025",
        location: "Remote",
        logo: "/placeholder-logo.png",
        description: [
            "Built responsive, accessible React.js interfaces using hooks and Zustand state management.",
            "Improved load performance via caching, lazy loading, and component-level optimization.",
            "Delivered SEO-optimized, mobile-first landing pages with improved organic engagement.",
            "Conducted cross-browser testing and performance benchmarking across web-capable devices.",
        ],
    },
];

export const education = [
    {
        institution: "Magadh University",
        degree: "Bachelor's in Computer Applications (BCA)",
        duration: "July 2023 - August 2026",
        description: "Computer and Information Sciences and Support Services",
    }
];

export const projects = [
    {
        id: 1,
        title: "ReviewyAI",
        description: "AI code review platform with modular full-stack architecture, secure APIs, and production-focused performance.",
        technologies: ["Next.js", "Node.js", "Prisma", "Pinecone", "Inngest"],
        github: "https://github.com/Danish-Devx3/ReviewyAI",
        live: "https://reviewy-ai.vercel.app/",
        image: "/ReviewyAI.png",
    },
    {
        id: 2,
        title: "Notive",
        description: "Collaborative note-taking platform with secure authentication, OAuth flows, and optimized query performance.",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Better Auth"],
        github: "https://github.com/Danish-Devx3/notive",
        live: "https://notive-manage-note.vercel.app/",
        image: "/Notive.png",
    },
    {
        id: 3,
        title: "Shotsy – AI Video Generator",
        description: "Platform that converts text prompts into short-form AI videos with containerized deployment and CI/CD.",
        technologies: ["Next.js", "Remotion", "Docker", "AI APIs", "GitHub Actions"],
        github: "https://github.com/Danish-Devx3/Shotsy-Short-Video-GenAi",
        live: "",
        image: "/Shotsy.webp",
    },
    {
        id: 4,
        title: "CodeDrop",
        description: "MERN code snippet sharing platform with JWT auth, RBAC, and optimized MongoDB aggregation workflows.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"],
        github: "https://github.com/Danish-Devx3/CodeDrop",
        live: "https://code-drop-five.vercel.app/",
        image: "/CodeDrop.webp",
    },
];

export const skills = [
    {
        category: "Languages",
        items: [
            { name: "JavaScript (ES6+)", icon: FaCode, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "HTML5", icon: FaCode, color: "#E34F26" },
            { name: "CSS3", icon: FaCode, color: "#1572B6" },
            { name: "SQL", icon: TbApi, color: "#336791" },
            { name: "Python", icon: FaCode, color: "#3776AB" },
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "React.js", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "Redux", icon: SiRedux, color: "#764ABC" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
            { name: "Angular", icon: SiAngular, color: "#DD0031" },
            { name: "Zustand", icon: GiBearFace, color: "#f3d05d" },
            { name: "Zod", icon: SiZod, color: "#3068b7" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
            { name: "Responsive Design", icon: FaMobileAlt, color: "#2fa4d9" },
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "Express.js", icon: SiExpress, color: "#ffffff" },
            { name: "REST APIs", icon: TbApi, color: "#005571" },
            { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
            { name: "JWT Auth", icon: SiJsonwebtokens, color: "#D63AFF" },
            { name: "OAuth", icon: SiGoogle, color: "#4285F4" },
            { name: "Better Auth", icon: FaShieldAlt, color: "#5C2D91" },
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
            { name: "Drizzle ORM", icon: SiPrisma, color: "#C5F74F" },
            { name: "Mongoose", icon: SiMongodb, color: "#880000" },
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        ]
    },
    {
        category: "DevOps & Deployment",
        items: [
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
            { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
            { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
            { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
            { name: "Babel", icon: SiBabel, color: "#F9DC3E" },
            { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
            { name: "CI/CD", icon: FaTasks, color: "#4B32C3" },
            { name: "Vercel", icon: SiVercel, color: "#ffffff" },
            { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
            { name: "Nginx", icon: SiNginx, color: "#009639" },
        ]
    },
    {
        category: "Testing",
        items: [
            { name: "Jest", icon: SiJest, color: "#C21325" },
            { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
            { name: "Cypress", icon: SiCypress, color: "#69D3A7" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        ]
    },
    {
        category: "AI (Project Experience)",
        items: [
            { name: "Pinecone", icon: TbApi, color: "#2E8B57" },
            { name: "RAG", icon: TbApi, color: "#8A2BE2" },
            { name: "OpenAI API", icon: TbApi, color: "#10A37F" },
            { name: "Google Gemini API", icon: SiGoogle, color: "#4285F4" },
        ]
    },
    {
        category: "Tools & Practices",
        items: [
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "GitHub", icon: FaGithub, color: "#ffffff" },
            { name: "Agile", icon: FaTasks, color: "#0052CC" },
            { name: "Code Review", icon: FaCode, color: "#ADFF2F" },
            { name: "Problem Solving", icon: FaPuzzlePiece, color: "#FFD700" },
            { name: "Collaboration", icon: FaHandshake, color: "#FF69B4" },
        ]
    }
];

export const blogs = [
    {
        id: 1,
        title: "Building Real-time Apps with Socket.io",
        date: "Dec 12, 2024",
        link: "#",
        description: "A deep dive into WebSockets and how to scale them for production.",
    },
    {
        id: 2,
        title: "Optimizing Next.js Performance",
        date: "Nov 28, 2024",
        link: "#",
        description: "Tips and tricks to get those 100 lighthouse scores.",
    },
];

export const certifications = [
    {
        title: "React Certified Developer",
        issuer: "Scaler Academy",
        date: "2024",
    },
    {
        title: "Node.js Certified Developer",
        issuer: "Scaler Academy",
        date: "2024",
    }
];
