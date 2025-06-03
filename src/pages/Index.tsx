
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Statistics } from "../components/Statistics";
import { Contact } from "../components/Contact";
import { Navbar } from "../components/Navbar";

const Index = () => {
  console.log("Index component rendering...");
  
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Simple background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      <div className="flex flex-col">
        <Hero />
        <Services />
        <About />
        <Statistics />
        <Contact />
        <Navbar />
      </div>
    </main>
  );
};

export default Index;
