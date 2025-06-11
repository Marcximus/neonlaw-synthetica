
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Statistics } from "../components/Statistics";
import { Contact } from "../components/Contact";
import { Navbar } from "../components/Navbar";
import { InteractiveBackground } from "../components/InteractiveBackground";
import { LogoutButton } from "../components/auth/LogoutButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <InteractiveBackground />
      <LogoutButton />
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
