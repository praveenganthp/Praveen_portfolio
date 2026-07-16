import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Education } from "./components/sections/Education";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-background)", color: "var(--color-foreground)" }}>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
