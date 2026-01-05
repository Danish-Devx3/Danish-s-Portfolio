import { experiences, education, certifications } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-xl font-bold mb-6 text-neutral-100">Work Experience</h2>
      <div className="space-y-8 mb-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden border border-neutral-700">
                {exp.logo && !exp.logo.includes("placeholder") ? (
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs font-bold text-neutral-400">{exp.company[0]}</span>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <h3 className="font-semibold text-neutral-200">{exp.company}</h3>
                  <p className="text-sm text-neutral-400">{exp.role}</p>
                </div>
                <span className="text-xs text-neutral-500">{exp.duration}</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {education && education.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-6 text-neutral-100">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden border border-neutral-700">
                    <span className="text-xs font-bold text-neutral-400">{edu.institution[0]}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-2">
                    <div>
                      <h3 className="font-semibold text-neutral-200">{edu.institution}</h3>
                      <p className="text-sm text-neutral-400">{edu.degree}</p>
                    </div>
                    <span className="text-xs text-neutral-500">{edu.duration}</span>
                  </div>
                  <p className="text-sm text-neutral-500">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
          {certifications && certifications.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-6 text-neutral-100 mt-12">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-neutral-600 mt-1"></div>
                    <div>
                      <h3 className="font-semibold text-neutral-200">{cert.title}</h3>
                      <p className="text-sm text-neutral-500">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Experience;
