import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Statistics } from "../components/Statistics";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Statistics />
      <About />
      <Contact />
    </main>
  );
};

export default Index;