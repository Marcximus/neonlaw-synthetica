import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Statistics } from "../components/Statistics";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Testimonials } from "../components/Testimonials";
import { Process } from "../components/Process";
import { Industries } from "../components/Industries";
import { Navbar } from "../components/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Statistics />
      <Process />
      <Industries />
      <Testimonials />
      <About />
      <Contact />
      <Navbar />
    </main>
  );
};

export default Index;