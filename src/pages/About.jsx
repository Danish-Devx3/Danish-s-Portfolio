import React from "react";
import { personalDetails } from "../data";

const About = () => {
    return (
        <section id="about" className="mb-16 relative">
            {/* Header Banner */}
            <div className="h-48 w-full rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-neutral-800 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                {/* You can replace this with an actual image: <img src="/banner.jpg" className="w-full h-full object-cover grayscale opacity-60" /> */}
            </div>

            {/* Profile Info */}
            <div className="px-4 md:px-8 -mt-16 relative z-10">
                <div className="flex flex-col md:flex-row gap-6 md:items-end">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-neutral-950 bg-neutral-900 overflow-hidden shrink-0">
                        <img
                            src="https://avatars.githubusercontent.com/u/183054297?v=4" // Using actual github avatar if possible, or placeholder
                            alt={personalDetails.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="pb-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-neutral-100">{personalDetails.name}</h1>
                        <p className="text-neutral-400 font-medium mt-1">{personalDetails.role}</p>
                        <div className="flex gap-4 mt-3 text-neutral-400">
                            {personalDetails.socials.map((social, idx) => (
                                <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100 transition-colors">
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <h2 className="text-xl font-bold text-neutral-100">About</h2>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl">
                        {personalDetails.about}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
