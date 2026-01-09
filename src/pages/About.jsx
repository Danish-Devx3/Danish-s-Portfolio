import React from "react";
import { personalDetails } from "../data";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="pt-20 mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
            >
                {/* Profile Header */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            {personalDetails.name}
                        </h1>
                        <p className="text-lg text-neutral-400 mt-2 font-medium">
                            {personalDetails.role}
                        </p>

                        <div className="flex gap-4 mt-6">
                            {personalDetails.socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-neutral-900 rounded-full -ml-2"
                                >
                                    <social.icon size={22} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-xl">
                            <img
                                src="https://avatars.githubusercontent.com/u/183054297?v=4"
                                alt={personalDetails.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                    </div>
                </div>

                {/* About Text */}
                <div className="mt-4">
                    <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl">
                        {personalDetails.about}
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
