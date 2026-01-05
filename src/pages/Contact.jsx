import React from "react";
import { HiMail } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { personalDetails } from "../data";

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <div className="bg-neutral-900/50 rounded-2xl p-8 md:p-12 text-center border border-neutral-800">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-4">Let's work together</h2>
        <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
          Have a project in mind? I'm always open to discussing new ideas and opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Placeholder for Book a Call - can be a link to Calendly */}
          <a
            href="#"
            className="flex items-center gap-2 bg-neutral-100 text-neutral-900 px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto justify-center"
          >
            <BiCalendar size={20} />
            Book a Call
          </a>

          <a
            href={`mailto:${personalDetails.email} `}
            className="flex items-center gap-2 bg-neutral-800 text-neutral-200 px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 transition-colors border border-neutral-700 w-full sm:w-auto justify-center"
          >
            <HiMail size={20} />
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
