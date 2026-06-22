import { motion } from "framer-motion";

// Terminal-style bracket heading: [ Label ]
const SectionHeading = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex items-center gap-2 font-mono text-sm"
    >
        <span className="text-accent-green">[</span>
        <span className="tracking-wide text-neutral-600 dark:text-neutral-300">{children}</span>
        <span className="text-accent-green">]</span>
    </motion.div>
);

export default SectionHeading;
