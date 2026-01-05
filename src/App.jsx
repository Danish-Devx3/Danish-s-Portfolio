import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import GitHubActivity from "./components/GitHubActivity";
import TimeOnEarth from "./components/TimeOnEarth";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-neutral-800 selection:text-white">
      <div className="max-w-2xl mx-auto px-6 pb-20">
        <Navbar />
        <main className="mt-12 space-y-20">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <GitHubActivity />
          <Blogs />
          <TimeOnEarth />
          <Contact />
        </main>

        <footer className="mt-20 text-center text-sm text-neutral-500 pb-10">
          <p className="mt-2 text-xs">Designed & Developed by Danish Ansari. &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
