import React, { useState, useEffect } from 'react';
import { FiSearch, FiGithub, FiMoon } from 'react-icons/fi';

const Header = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-black/80 backdrop-blur-md border-b border-neutral-800 z-40 flex items-center justify-between px-8">
            {/* Mobile Menu Trigger Placeholder (if needed later) */}
            <div className="md:hidden">
                Menu
            </div>

            <div className="hidden md:flex flex-1 max-w-md">
                {/* Search Placeholder */}
                <div className="flex items-center gap-2 text-neutral-500 bg-neutral-900/50 px-3 py-1.5 rounded-md border border-neutral-800 w-full max-w-[240px]">
                    <FiSearch size={14} />
                    <span className="text-xs">Search sections...</span>
                    <span className="ml-auto text-[10px] border border-neutral-700 rounded px-1">⌘K</span>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 px-2 py-1 rounded-full border border-neutral-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    {time}
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                    <button className="hover:text-white transition-colors"><FiMoon size={18} /></button>
                    <a href="https://github.com/Danish-Devx3" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FiGithub size={18} /></a>
                </div>
            </div>
        </header>
    );
};

export default Header;
