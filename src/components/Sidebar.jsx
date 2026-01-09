import React from 'react';
import { personalDetails } from '../data';

const Sidebar = () => {
    const sections = [
        { name: "About Me", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills & Tools", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 border-r border-neutral-800 bg-black hidden md:flex flex-col p-6 z-50">
            <div className="mb-8 flex items-center gap-2">
                <span className="font-bold text-lg text-white tracking-tight">{personalDetails.name}</span>
            </div>

            <div className="mb-6">
                <h3 className="text-sm font-semibold text-neutral-500 mb-2">Sections</h3>
                <nav className="flex flex-col gap-1">
                    {sections.map((section) => (
                        <a
                            key={section.name}
                            href={section.href}
                            className="text-sm text-neutral-400 hover:text-white py-1.5 px-2 -ml-2 rounded transition-colors hover:bg-neutral-900 border-l border-transparent hover:border-neutral-700"
                        >
                            {section.name}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="mt-auto">
                <div className="flex gap-4 text-xs text-neutral-500">
                    <a href="https://github.com/Danish-Devx3" target="_blank" className="hover:text-white">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" className="hover:text-white">LinkedIn</a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
