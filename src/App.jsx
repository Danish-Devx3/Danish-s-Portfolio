import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-neutral-800 selection:text-white">
            <Sidebar />
            <Header />

            <main className="md:ml-64 pt-24 px-6 md:px-12 pb-20 max-w-5xl mx-auto space-y-32">
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Contact />

                <footer className="pt-20 border-t border-neutral-900 mt-20 text-sm text-neutral-500 flex justify-between">
                    <p>© {new Date().getFullYear()} Built with React & Tailwind</p>
                    <p>Designed by Danish Ansari</p>
                </footer>
            </main>
        </div>
    );
}

export default App;
