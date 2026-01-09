import { motion } from "framer-motion";
import { HiHome, HiUser, HiBriefcase, HiCode, HiMail } from "react-icons/hi";

const Navbar = () => {
    const links = [
        { href: "#about", icon: HiUser, label: "About" },
        { href: "#experience", icon: HiBriefcase, label: "Experience" },
        { href: "#projects", icon: HiCode, label: "Projects" },
        { href: "#contact", icon: HiMail, label: "Contact" },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <motion.nav
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-1 bg-neutral-900/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl shadow-neutral-950/50"
            >
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="p-3 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all duration-300 relative group"
                        aria-label={link.label}
                    >
                        <link.icon size={20} />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {link.label}
                        </span>
                    </a>
                ))}
            </motion.nav>
        </div>
    );
};

export default Navbar;
