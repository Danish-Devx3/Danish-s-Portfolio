import { useState, useEffect } from 'react';
import { FiSearch, FiGithub, FiMoon, FiSun } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const Header = ({ theme, onToggleTheme }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 z-40 flex items-center justify-between px-8 transition-colors duration-300">
            <div className="md:hidden">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Menu</span>
            </div>

            <div className="hidden md:flex flex-1 max-w-md">
                <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-900/50 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 w-full max-w-[240px] transition-colors duration-300">
                    <FiSearch size={14} />
                    <span className="text-xs">Search sections...</span>
                    <span className="ml-auto text-[10px] border border-neutral-300 dark:border-neutral-700 rounded px-1">⌘K</span>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    {time}
                </div>

                <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                    <button
                        type="button"
                        onClick={onToggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                        className="p-1 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                    </button>
                    <a
                        href="https://www.linkedin.com/in/danishansaridev"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        <FaLinkedin size={18} />
                    </a>
                    <a
                        href="https://github.com/Danish-Devx3"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        <FiGithub size={18} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
