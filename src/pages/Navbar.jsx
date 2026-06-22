import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiUser, HiBriefcase, HiCode, HiCog, HiMail, HiChartBar } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";

const links = [
    { href: "#about", icon: HiUser, label: "About" },
    { href: "#activity", icon: HiChartBar, label: "Activity" },
    { href: "#skills", icon: HiCog, label: "Skills" },
    { href: "#experience", icon: HiBriefcase, label: "Experience" },
    { href: "#projects", icon: HiCode, label: "Projects" },
    { href: "#contact", icon: HiMail, label: "Contact" },
];

const Navbar = ({ theme, onToggleTheme }) => {
    const [active, setActive] = useState("about");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );
        links.forEach((link) => {
            const el = document.getElementById(link.href.slice(1));
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
            <motion.nav
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass flex items-center gap-0.5 rounded-full px-2 py-1.5 shadow-2xl shadow-black/20 dark:shadow-black/60"
            >
                {links.map((link) => {
                    const isActive = active === link.href.slice(1);
                    return (
                        <a
                            key={link.href}
                            href={link.href}
                            aria-label={link.label}
                            aria-current={isActive ? "true" : undefined}
                            className={`group relative grid h-9 w-9 place-items-center rounded-full transition-colors ${
                                isActive
                                    ? "bg-accent-green/15 text-accent-green"
                                    : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
                            }`}
                        >
                            <link.icon size={18} />
                            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:text-black">
                                {link.label}
                            </span>
                        </a>
                    );
                })}

                <span className="mx-1 h-5 w-px bg-neutral-300 dark:bg-white/10" aria-hidden="true" />

                <button
                    type="button"
                    onClick={onToggleTheme}
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                    className="grid h-9 w-9 place-items-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
                >
                    {theme === "dark" ? <FiSun size={17} /> : <FiMoon size={17} />}
                </button>
            </motion.nav>
        </div>
    );
};

export default Navbar;
