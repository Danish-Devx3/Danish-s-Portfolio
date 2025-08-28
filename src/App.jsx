import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="text-7xl font-bold">
      <div className="min-h-screen w-full fixed top-0 -z-10 ">
        {/* Aurora Dream Soft Harmony */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
       radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
          }}
        />
        {/* Your content goes here */}
      </div>
      {/* <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]"></div> */}
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
