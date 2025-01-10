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
      <div className="flex flex-col">
        <Hero />
        <Services />
        <About />
        <Contact />
        <Navbar />
      </div>
    </main>
  );
};

export default Index;