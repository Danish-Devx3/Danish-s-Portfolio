const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-16">
      <div className="text-center mb-16">
        <h3 className="text-[#ff9999] text-2xl mb-4">Know About Me</h3>
        <h2 className="text-white text-5xl font-bold underline">About Myself</h2>
      </div>

      <div className="flex gap-16 items-center">
        <div className="w-1/2">
          <img 
            src="/wt-MoAvAmN0.webp" 
            alt="Developer Illustration" 
            className="w-full max-w-[500px]"
          />
        </div>

        <div className="w-1/2">
          <h3 className="text-[#ff9999] text-2xl mb-6">Hi I'm Danish Ansari</h3>
          
          <p className="text-white text-lg leading-relaxed">
            I'm a dedicated React Developer with a passion for creating responsive and user-friendly web applications. 
            With hands-on experience in web technologies such as HTML, CSS, JavaScript, and React JS, I have built a solid 
            foundation in developing functional and dynamic web applications.
          </p>
          
          <p className="text-white text-lg leading-relaxed mt-4">
            I specialize in modern frontend development practices including React hooks, state management with Redux, 
            and component-based architecture. Additionally, I have experience with Next.js, Tailwind CSS, and various 
            other modern web technologies. I am passionate about solving complex problems, continuously learning new skills, 
            and applying my knowledge through real-world projects. My goal is to contribute effectively to a dynamic team 
            and deliver impactful solutions.
          </p>

          <div className="mt-8">
            <h4 className="text-[#ff9999] text-xl mb-4">Get To Know More</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#1e1e1e] p-6 rounded-lg">
                <h5 className="text-white text-lg font-semibold mb-2">Experience</h5>
                <p className="text-gray-300">0.6 years</p>
                <p className="text-gray-300">Frontend Development</p>
              </div>
              <div className="bg-[#1e1e1e] p-6 rounded-lg">
                <h5 className="text-white text-lg font-semibold mb-2">Education</h5>
                <p className="text-gray-300">BCA</p>
                <p className="text-gray-300">Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 