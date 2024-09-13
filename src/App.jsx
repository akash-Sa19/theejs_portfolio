import {
  About,
  Clients,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Project,
} from "./section";
const App = () => {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
