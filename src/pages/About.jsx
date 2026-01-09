import React from "react";
import { personalDetails } from "../data";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <span className="text-neutral-500 text-sm font-mono mb-2 block">&lt; Introduction</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                        About {personalDetails.name.split(" ")[0]}
                    </h1>
                    <h2 className="text-xl text-neutral-400 font-medium mb-8">
                        More than just a title—let's dive deeper!
                    </h2>

                    <div className="space-y-6 text-neutral-400 text-lg leading-relaxed max-w-3xl">
                        <p>
                            I am a passionate {personalDetails.role} with a knack for building full-stack web applications using modern technologies.
                            My journey in tech began with a curiosity for solving real-world problems through innovative solutions.
                        </p>
                        <p>
                            {personalDetails.about}
                        </p>
                        <p>
                            Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions.
                        </p>
                    </div>

                    <div className="mt-12 flex justify-end">
                        <a href="#projects" className="text-sm font-mono text-white hover:text-neutral-300 flex items-center gap-2">
                            Projects &gt;
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
