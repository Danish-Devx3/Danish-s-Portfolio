import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-white selection:text-black">
            <div className="max-w-2xl mx-auto px-6 pb-32 pt-10">
                <Navbar />
                <main className="space-y-32">
                    <About />
                    <Projects />
                    <Experience />
                    <Skills />
                    <Contact />
                </main>

                <footer className="mt-20 text-center text-sm text-neutral-600 pb-10">
                    <p className="mt-2 text-xs">Different by Design. &copy; {new Date().getFullYear()}</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
