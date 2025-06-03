
import { InteractiveBackground } from "../components/InteractiveBackground";

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <InteractiveBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Corporate Consulting
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 white-glow">
            Marcus Alexander Svendsen
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Specialiseret juridisk rådgivning for startups, business angels og ventureselskaber. 
            Ekspertise inden for M&A, selskabsret og venturejura.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-[#F97316] hover:bg-[#ea384c] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Kontakt os
            </button>
            <button className="glass border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Læs mere
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
