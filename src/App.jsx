import Navbar from "./section/navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Project from "./section/Project";
import Clients from "./section/Clients";
import Contact from "./section/Contact";

const App = () => {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Clients />
      <Contact />
    </main>
  );
};

export default App;
