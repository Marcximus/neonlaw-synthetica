import { motion } from "framer-motion";
import { InteractiveBackground } from "./InteractiveBackground";

export const About = () => {
  return (
    <section className="py-16 sm:py-32 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      <InteractiveBackground />
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center gradient-text">Mød Din Nye Partner</h2>
          
          {/* Image Container - Made smaller and circular */}
          <motion.div 
            className="mb-12 glass p-2 rounded-full max-w-[240px] mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-square rounded-full overflow-hidden">
              <img
                src="https://pwdwzfydxdpelbsleobt.supabase.co/storage/v1/object/public/pictures/IMG_0576.jpg?t=2025-01-09T23%3A03%3A33.731Z"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="glass p-6 sm:p-8 rounded-xl mb-8">
            <p className="text-gray-300 leading-relaxed text-base">
              Slut med vanvittige regninger og sløv respons.{"\n"}
              Lad mig håndtere det juridiske, og lad os{"\n"}
              samen skalere din virksomhed.
            </p>
          </div>

          {/* Specialer and CV grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyberpunk-purple">Specialer</h3>
              <ul className="space-y-2 text-gray-300 text-[11px] sm:text-base">
                <li>• M&A og Erhvervsret</li>
                <li>• Startup Rådgivning</li>
                <li>• Tech & AI Jura</li>
                <li>• Venture Capital</li>
              </ul>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyberpunk-blue">CV</h3>
              <ul className="space-y-2 text-gray-300 text-[11px] sm:text-base">
                <li>• Advokat fra Accura</li>
                <li>• Officer i Hæren</li>
                <li>• Københavns Universitet</li>
                <li>• Hong Kong University</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};