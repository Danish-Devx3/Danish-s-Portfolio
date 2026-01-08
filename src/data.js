
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin, FaTwitter, FaGitAlt, FaMobileAlt, FaShieldAlt, FaTasks, FaCode, FaPuzzlePiece, FaHandshake } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiExpress, SiJavascript, SiPostman, SiNginx, SiVercel, SiNetlify, SiGraphql, SiJsonwebtokens, SiSupabase, SiFirebase, SiPrisma, SiJest, SiCypress, SiVitest, SiReactquery, SiZod, SiGithubactions, SiGoogle } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { GiBearFace } from "react-icons/gi";
import { TbApi } from "react-icons/tb";

export const personalDetails = {
    name: "Danish Ansari",
    role: "Full Stack Developer",
    email: "danish.devx3@gmail.com",
    socials: [
        { name: "GitHub", url: "https://github.com/Danish-Devx3", icon: FaGithub },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/danishansaridev", icon: FaLinkedin },
        { name: "Twitter", url: "https://twitter.com/Danish_Devx3", icon: FaTwitter }, // Assuming handle from prev info, text didn't specify twitter handle explicitly but referenced "danish.devx3" often
        { name: "Email", url: "mailto:danish.devx3@gmail.com", icon: HiMail },
    ],
    bookCallUrl: "https://calendar.google.com/calendar/u/0/r/eventedit?text=Book+a+Call+with+Danish+Ansari&details=Let%27s+discuss+your+project+ideas!",
    about: "I am a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js, with expertise in building REST APIs, designing scalable architectures, and developing responsive front-end applications. Skilled in JavaScript, TypeScript, Tailwind CSS, and API testing with Postman, I also bring experience with Docker, GitHub Actions, and CI/CD pipelines to ensure reliable and efficient deployments on Vercel, Netlify, and Nginx.",
    birthDate: "2002-01-01", // Approximate based on College start 2023 (assuming ~21y/o then? or 18? Defaulting to year 2000-2004 range if not specified. Text says 'Time on Earth' counter wanted.)
};

export const experiences = [
    {
        company: "noDevBuild",
        role: "Full-Stack Developer Intern",
        duration: "Nov 2025 - Present",
        location: "Noida, Uttar Pradesh, India",
        logo: "/placeholder-logo.png", // Replace if available
        description: [
            "Working on full-stack development tasks.",
            "Building scalable architectures and responsive front-end applications.",
        ],
    },
    {
        company: "Zwishh",
        role: "Back End Developer",
        duration: "Apr 2025 - Jun 2025",
        location: "Remote/Hybrid", // Not specified in snippet, assumed based on context or add if known. Text says just dates. content says "Back End Developer".
        logo: "/placeholder-logo.png",
        description: [
            "Worked on both frontend and backend tasks to build and maintain production-grade web features.",
            "Developed RESTful APIs for user authentication using Node.js and Express.js.",
            "Wrote automated API testing scripts using Postman to ensure reliability and reduce bugs.",
            "Built responsive landing page components using React.js, improving user experience and performance.",
        ],
    },
];

export const education = [
    {
        institution: "Magadh University",
        degree: "Bachelor's in Computer Applications (BCA)",
        duration: "July 2023 - August 2026",
        description: "Computer and Information Sciences and Support Services"
    }
];

export const projects = [
    {
        id: 4,
        title: "Notive 📝",
        description: "A modern, feature-rich note-taking application built with Next.js 15, featuring secure authentication, rich text editing, and a beautiful user interface.",
        technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "Tiptap", "Neon DB", "Drizzle ORM", "Better Auth"],
        github: "https://github.com/Danish-Devx3/notive",
        live: "https://notive-manage-note.vercel.app/",
        image: "/project1.webp",
    },
    {
        id: 5,
        title: "Archi-Text",
        description: "Visualize chaos. Instantly convert natural language, code, and raw data into professional diagrams using local AI.",
        technologies: ["Next.js 16", "React 19", "Tailwind CSS 4", "Mermaid.js", "Ollama", "Lucide React"],
        github: "https://github.com/Danish-Devx3/archi-text",
        live: "", // Add live link if available
        image: "/archi-text.png",
    },
    {
        id: 1,
        title: "Shotsy – AI Video Generator",
        description: "An AI-powered short video generator integrating Google Gemini, AssemblyAI, and Murf AI.",
        technologies: ["Next.js", "Tailwind CSS", "Gemini API", "AssemblyAI", "Murf AI"],
        github: "https://github.com/Danish-Devx3/Shotsy-Short-Video-GenAi",
        live: "",
        image: "/project1.webp",
    },
    {
        id: 2,
        title: "CodeDrop",
        description: "A snippet-sharing platform with JWT authentication and MongoDB aggregation queries.",
        technologies: ["Next.js", "Node.js", "MongoDB", "JWT"],
        github: "https://github.com/Danish-Devx3/CodeDrop",
        live: "https://code-drop-five.vercel.app/",
        image: "/project2.webp",
    },
    {
        id: 3,
        title: "Dev-Chatty",
        description: "An AI chatbot leveraging Google Generative AI with real-time conversations.",
        technologies: ["React", "Vite", "Google Gemini", "Netlify"],
        github: "https://github.com/Danish-Devx3/Dev-Chatty",
        live: "",
        image: "/project3.webp",
    },
];

export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React.js", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
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
            { name: "Mongoose", icon: SiMongodb, color: "#880000" }, // Reusing MongoDB icon with Mongoose red
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        ]
    },
    {
        category: "DevOps & Deployment",
        items: [
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
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
    // Placeholder blog data can remain or be updated if user provides blog info. Keeping previous placeholders for now.
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
        title: "Node.js Certified",
        issuer: "Certification Authority", // Replace if known
        date: "2024", // Replace if known
    },
    {
        title: "React Certified",
        issuer: "Certification Authority",
        date: "2024",
    }
];
