import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Testimonials } from "../components/Testimonials";
import { Process } from "../components/Process";
import { Industries } from "../components/Industries";
import { Navbar } from "../components/Navbar";
import { InteractiveBackground } from "../components/InteractiveBackground";

const Index = () => {
  return (
    <main className="min-h-screen">
      <InteractiveBackground />
      <Hero />
      <Services />
      <About />
      <Process />
      <Industries />
      <Testimonials />
      <Contact />
      <Navbar />
    </main>
  );
};

export default Index;