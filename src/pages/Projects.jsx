const ProjectCard = ({ image, title, description, githubLink, demoLink }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
      
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      
      <div className="p-6">
        <h3 className="text-[#ff9999] text-2xl mb-3">Gemini Clone</h3>
        <p className="text-white mb-6">
          {description}
        </p>

        
        <div className="flex gap-4">
          <a 
            href={githubLink} 
            target="_blank" 
            className="px-6 py-2 rounded-md border-2 border-[#00bfff] text-[#00bfff] hover:bg-[#00bfff] hover:text-white transition-colors duration-300"
          >
            Github
          </a>
          <a 
            href={demoLink} 
            target="_blank" 
            className="px-6 py-2 rounded-md bg-[#ff9999] text-white hover:bg-[#ff7777] transition-colors duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      image: "/Screenshot (2).png",
      title: "Gemini Clone",
      description: "A Gemini Clone powered by React, Context API, and Gemini API, providing AI-driven conversations with real-time responses. Seamlessly integrates a user-friendly chat interface for interactive AI assistance. 🚀",
      githubLink: "https://github.com/Danish-Devx3/Gemini-clone",
      demoLink: "https://danish-gemini.netlify.app/"
    },
    {
      image: "/Screenshot (41).png",
      title: "Know Your Screen Size",
      description: "A Know Your Screen Size web app built with React that instantly displays your device's screen width, height, and real-time window resizing updates. Perfect for developers testing responsive designs! 🚀",
      githubLink: "https://github.com/Danish-Devx3/Know-Your-Screen-Size",
      demoLink: "https://know-your-screen-size-by-danish.netlify.app/"
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-16">
      
      <div className="text-center mb-16">
        <h3 className="text-[#ff9999] text-2xl mb-4">Explore Recent Innovations</h3>
        <h2 className="text-white text-5xl font-bold underline">Projects</h2>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 