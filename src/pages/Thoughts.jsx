import { motion } from "framer-motion";
import { FiArrowUpRight, FiEdit3 } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const Thoughts = () => {
    return (
        <section id="thoughts" className="scroll-mt-24">
            <SectionHeading>Thoughts in words</SectionHeading>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="glass flex flex-col items-center rounded-2xl p-8 text-center"
            >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-neutral-200 bg-neutral-100 text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    <FiEdit3 size={20} />
                </div>
                <p className="text-neutral-700 dark:text-neutral-300">
                    I write about building products, the MERN stack, and lessons from shipping real software.
                </p>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">Blog is in the works — in the meantime, let&apos;s talk.</p>
                <a href="#contact" className="group mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-accent-blue transition-all">
                    Get in touch <FiArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
            </motion.div>
        </section>
    );
};

export default Thoughts;
