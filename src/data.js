
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGithub, FaPython, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiExpress, SiJavascript, SiSocketdotio, SiPostman, SiNginx, SiVercel, SiNetlify } from "react-icons/si";
import { HiMail } from "react-icons/hi";

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
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: FaNodeJs },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Docker", icon: FaDocker },
    { name: "AWS", icon: FaAws },
    { name: "Socket.io", icon: SiSocketdotio },
    { name: "Postman", icon: SiPostman },
    { name: "Nginx", icon: SiNginx },
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
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
