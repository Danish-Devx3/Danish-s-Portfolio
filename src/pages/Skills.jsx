const SkillCard = ({ title, description, position = 'left' }) => {
  return (
    <div className={`flex items-center ${position === 'left' ? 'justify-end' : 'justify-start'} w-1/2 ${position === 'right' && 'ml-auto'}`}>
      <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[400px] transform hover:scale-105 border border-gray-800">
        <h3 className="text-[#ff9999] text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      description: "Proficient in creating structured, semantic markup and implementing accessibility best practices.",
      position: "left"
    },
    {
      title: "CSS",
      description: "Strong understanding of responsive design, flexbox, grid, and modern CSS features.",
      position: "right"
    },
    {
      title: "JavaScript",
      description: "Expert in ES6+, DOM manipulation, async programming, and modern JavaScript practices.",
      position: "left"
    },
    {
      title: "React JS",
      description: "Advanced knowledge of React hooks, context API, state management, and component lifecycle.",
      position: "right"
    },
    {
      title: "Tailwind CSS",
      description: "Expert in utility-first CSS and rapid UI development with Tailwind.",
      position: "left"
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 md:px-16 bg-[#121212]">
      <div className="text-center mb-16">
        <h3 className="text-[#ff9999] text-xl md:text-2xl mb-4">What I Know</h3>
        <h2 className="text-white text-4xl md:text-5xl font-bold underline">My Skills</h2>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#1e1e1e] p-4 rounded-xl shadow-lg border border-gray-800">
            <h3 className="text-[#ff9999] text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-300 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>
        <div className="relative">
          {skills.map((skill, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#ff9999]"></div>
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 