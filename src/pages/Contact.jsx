import React from "react";
import { HiMail } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { personalDetails } from "../data";

const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-32">
      <h2 className="text-3xl font-bold mb-8 text-neutral-100 tracking-tight">Get in touch</h2>
      <p className="text-neutral-400 mb-8 max-w-lg text-lg">
        Have a project in mind? I'm always open to discussing new ideas and opportunities.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={`mailto:${personalDetails.email}`}
          className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto justify-center"
        >
          <HiMail size={20} />
          Email Me
        </a>

        <a
          href={personalDetails.bookCallUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-neutral-900 text-neutral-200 px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors border border-neutral-800 w-full sm:w-auto justify-center"
        >
          <BiCalendar size={20} />
          Book a Call
        </a>
      </div>
    </section>
  );
};

export default Contact;
