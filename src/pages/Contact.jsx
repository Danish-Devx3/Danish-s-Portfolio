import { motion } from "framer-motion";
import { FiMail, FiDownload } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { personalDetails } from "../data";

const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-24">
            <SectionHeading>Let&apos;s Connect</SectionHeading>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="glass glow-hover relative overflow-hidden rounded-2xl p-8 text-center sm:p-10"
            >
                <div className="pointer-events-none absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent-purple/10 blur-3xl" aria-hidden="true" />

                <div className="relative">
                    <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                        Let&apos;s Build Something Together
                    </h2>
                    <p className="mx-auto mt-3 max-w-md leading-relaxed text-neutral-600 dark:text-neutral-400">
                        Have a project in mind, an opportunity to share, or just want to say hi? My inbox is always open.
                    </p>

                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                        <a
                            href={`mailto:${personalDetails.email}`}
                            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
                        >
                            <FiMail size={16} /> Email Me
                        </a>
                        <a
                            href={personalDetails.resumeUrl}
                            download={personalDetails.resumeFileName}
                            className="glass inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-accent-blue/50 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
                        >
                            <FiDownload size={16} /> Resume
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2">
                        {personalDetails.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.name}
                                className="glass grid h-10 w-10 place-items-center rounded-lg text-neutral-600 transition-all hover:-translate-y-0.5 hover:border-accent-purple/50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
