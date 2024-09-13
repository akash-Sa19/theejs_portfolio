import Navbar from "./section/navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Project from "./section/Project";
import Clients from "./section/Clients";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

const App = () => {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
