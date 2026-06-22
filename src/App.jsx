import { useEffect, useState, useRef } from "react";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import GithubActivity from "./pages/GithubActivity";
import Projects from "./pages/Projects";
import Thoughts from "./pages/Thoughts";
import Contact from "./pages/Contact";
import { personalDetails } from "./data";

const THEME_STORAGE_KEY = "theme";

function App() {
    const [theme, setTheme] = useState(() =>
        document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
    const glowRef = useRef(null);

    const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        root.style.colorScheme = theme;
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

    // Cursor spotlight: feed pointer position into CSS vars (rAF-throttled).
    useEffect(() => {
        const el = glowRef.current;
        if (!el) return undefined;
        let raf = 0;
        const onMove = (e) => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                el.style.setProperty("--mx", `${e.clientX}px`);
                el.style.setProperty("--my", `${e.clientY}px`);
            });
        };
        window.addEventListener("pointermove", onMove);
        return () => {
            window.removeEventListener("pointermove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="relative min-h-screen">
            <div className="bg-grid pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
            <div ref={glowRef} className="cursor-glow pointer-events-none fixed inset-0 z-0" aria-hidden="true" />

            <main className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6 pt-20 pb-32 space-y-24 md:space-y-28">
                <About />
                <GithubActivity theme={theme} />
                <Skills />
                <Experience />
                <Projects />
                <Thoughts />
                <Contact />

                <footer className="pt-12 border-t border-neutral-200 dark:border-white/10 text-center space-y-3">
                    <p className="font-mono text-sm italic text-neutral-500 dark:text-neutral-400">
                        &quot;Nothing is perfect — but you can make it better.&quot;
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-500">
                        Designed &amp; Built with <span className="text-red-500">♥</span> by {personalDetails.name}
                    </p>
                    <p className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
                        © {new Date().getFullYear()} — All rights reserved
                    </p>
                </footer>
            </main>

            <Navbar theme={theme} onToggleTheme={toggleTheme} />
        </div>
    );
}

export default App;
