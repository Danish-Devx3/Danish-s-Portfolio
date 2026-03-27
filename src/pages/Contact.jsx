import { HiMail } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { personalDetails } from "../data";

const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-32 border-t border-neutral-200 dark:border-neutral-900 mt-20 text-center">
      <div className="mb-8">
        <span className="text-neutral-500 dark:text-neutral-500 text-sm font-mono mb-2 block">&lt; Experience</span>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">Contact</h2>
      </div>

      <div className="bg-white/70 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-12 transition-colors duration-300">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Let&apos;s work together!</h3>
        <p className="text-neutral-700 dark:text-neutral-400 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
          I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`mailto:${personalDetails.email}`}
            className="flex items-center gap-3 bg-neutral-900 text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors w-max"
          >
            <HiMail size={20} />
            Send an Email
          </a>

          <a
            href={personalDetails.bookCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-300 dark:border-neutral-700 w-max"
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
