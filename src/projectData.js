import project1 from "/project1.webp";
import project2 from "/project2.webp";


export const projectData = [
  {
    id: 4,
    image: project1,
    title: "Shotsy – AI Video Generator",
    description:
      "A web app that converts text into AI-powered short videos. Integrates Murf AI, AssemblyAI, and Gemini API with CI/CD pipelines and Dockerized deployment support.",
    link: "https://github.com/yourusername/shotsy",
    technologies: ["Next.js", "Tailwind CSS", "Remotion", "Docker", "GitHub Actions"],
  },
  {
    id: 5,
    image: project2,
    title: "CodeDrop",
    description:
      "A code snippet sharing platform with authentication, search, and like features. Built with Next.js and Node.js, using MongoDB aggregation queries for fast results.",
    link: "https://github.com/yourusername/codedrop",
    technologies: ["Next.js", "Node.js", "Express.js", "TypeScript", "MongoDB"],
  },
  {
    id: 6,
    image: "",
    title: "Dev-Chatty",
    description:
      "An AI chatbot with real-time conversations and responsive UI. Uses Google Gemini for natural interactions and deployed on Netlify with modern CI/CD workflows.",
    link: "https://github.com/yourusername/dev-chatty",
    technologies: ["React", "Vite", "Context API", "Google Gemini", "Netlify"],
  },
]