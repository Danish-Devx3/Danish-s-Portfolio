import React from "react";
import { HiMail } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { personalDetails } from "../data";

const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-32 border-t border-neutral-900 mt-20">
      <div className="mb-8">
        <span className="text-neutral-500 text-sm font-mono mb-2 block">&lt; Experience</span>
        <h2 className="text-3xl font-bold text-white tracking-tight">Contact</h2>
      </div>

      <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl font-bold text-white mb-4">Let's work together!</h3>
        <p className="text-neutral-400 mb-8 max-w-xl text-lg leading-relaxed">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`mailto:${personalDetails.email}`}
            className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors w-max"
          >
            <HiMail size={20} />
            Send an Email
          </a>

          <a
            href={personalDetails.bookCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-neutral-800 text-neutral-200 px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 transition-colors border border-neutral-700 w-max"
          >
            <BiCalendar size={20} />
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
