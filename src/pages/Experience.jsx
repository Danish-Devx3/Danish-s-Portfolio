import { experiences, education, certifications } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <h2 className="text-3xl font-bold mb-8 text-neutral-100 tracking-tight">Experience</h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l border-neutral-800 last:border-l-0">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-neutral-600 border border-neutral-900" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
              <h3 className="text-xl font-semibold text-neutral-200">{exp.company}</h3>
              <span className="text-sm font-medium text-neutral-500">{exp.duration}</span>
            </div>

            <div className="mb-4">
              <p className="text-base text-neutral-400 font-medium">{exp.role}</p>
              <p className="text-sm text-neutral-500 mt-0.5">{exp.location}</p>
            </div>

            <ul className="space-y-2 text-neutral-400 text-sm leading-relaxed">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-600 shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {(education.length > 0) && (
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-neutral-100 tracking-tight">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="group flex gap-4 items-start">
                {/* Icon placeholder or minimal bullet */}
                <div className="mt-1.5 w-1 h-1 rounded-full bg-neutral-500 shrink-0" />

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors">{edu.institution}</h3>
                    <span className="text-sm text-neutral-500">{edu.duration}</span>
                  </div>
                  <p className="text-neutral-400 mt-1">{edu.degree}</p>
                  <p className="text-sm text-neutral-500 mt-1">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {(certifications && certifications.length > 0) && (
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-neutral-100 tracking-tight">Certifications</h2>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 rounded-lg bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/50 transition-colors w-full sm:w-[48%]">
                <h3 className="font-medium text-neutral-200">{cert.title}</h3>
                <p className="text-sm text-neutral-500 mt-1">{cert.issuer} • {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
