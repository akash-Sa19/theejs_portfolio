import Navbar from "./section/navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Project from "./section/Project";

const App = () => {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </main>
  );
};

export default App;
