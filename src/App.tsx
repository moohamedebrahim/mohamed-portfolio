import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#08090b] text-white">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Contact />

      <Footer />

    </main>
  );
}

export default App;