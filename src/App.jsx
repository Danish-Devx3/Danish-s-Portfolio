import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const THEME_STORAGE_KEY = "theme";

function App() {
    const [theme, setTheme] = useState(() =>
        document.documentElement.classList.contains("dark") ? "dark" : "light"
    );

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

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

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-black dark:text-white font-sans selection:bg-neutral-300 dark:selection:bg-neutral-800 selection:text-neutral-900 dark:selection:text-white transition-colors duration-300">
            <Sidebar />
            <Header theme={theme} onToggleTheme={toggleTheme} />

            <main className="md:ml-64 pt-24 px-6 md:px-12 pb-20 max-w-5xl mx-auto space-y-32">
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Contact />

                <footer className="pt-20 border-t border-neutral-200 dark:border-neutral-900 mt-20 text-sm text-neutral-600 dark:text-neutral-500 flex justify-between">
                    <p>© {new Date().getFullYear()} Built with React & Tailwind</p>
                    <p>Designed by Danish Ansari</p>
                </footer>
            </main>
        </div>
    );
}

export default App;
