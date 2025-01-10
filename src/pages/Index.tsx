import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Navbar } from "../components/Navbar";
import { InteractiveBackground } from "../components/InteractiveBackground";

const Index = () => {
  return (
    <main className="min-h-screen">
      <InteractiveBackground />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Navbar />
    </main>
  );
};

export default Index;