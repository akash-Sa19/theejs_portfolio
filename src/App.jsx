import Navbar from "./section/navbar";
import Hero from "./section/Hero";
import About from "./section/About";

const App = () => {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
