import { experiences, education, certifications } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <div className="mb-12">
        <span className="text-neutral-500 text-sm font-mono mb-2 block">&lt; Skills</span>
        <h2 className="text-3xl font-bold text-white tracking-tight">Experience</h2>
      </div>

      <div className="relative border-l border-neutral-800 ml-3 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="pl-8 relative">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neutral-950 border border-neutral-600 rounded-full"></div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-lg font-bold text-white">{exp.company}</h3>
              <span className="text-sm font-mono text-neutral-500">{exp.duration}</span>
            </div>
            <div className="mb-4">
              <p className="text-neutral-300 font-medium">{exp.role}</p>
              <p className="text-sm text-neutral-500">{exp.location}</p>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-400">
              {exp.description.map((desc, i) => (
                <li key={i} className="pl-1">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-8">Education</h2>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div key={index} className="p-6 border border-neutral-800 rounded-xl bg-neutral-900/20">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white text-lg">{edu.institution}</h3>
                <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-1 rounded">{edu.duration}</span>
              </div>
              <p className="text-neutral-300 mb-2">{edu.degree}</p>
              <p className="text-sm text-neutral-500">{edu.description}</p>
            </div>
          ))}
        </div>

        {certifications && certifications.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-white mb-6">Certifications</h2>
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 px-4 py-2 border border-neutral-800 rounded-lg bg-neutral-900/20 text-sm text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
                  <span>{cert.title} <span className="text-neutral-600 ml-1">• {cert.issuer}</span></span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
