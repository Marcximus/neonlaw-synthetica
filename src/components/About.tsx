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
          
          {/* Image Container with neon border effect */}
          <motion.div 
            className="mb-12 neon-border glass p-2 rounded-full max-w-[240px] mx-auto relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-square rounded-full overflow-hidden relative z-10">
              <img
                src="https://pwdwzfydxdpelbsleobt.supabase.co/storage/v1/object/public/pictures/IMG_0576.jpg?t=2025-01-09T23%3A03%3A33.731Z"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="glass p-6 sm:p-8 rounded-xl space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Jeg er en tidligere advokat med solid erfaring inden for M&A, selskabsret og venturejura. Nu hjælper jeg startups og ventureselskaber med at navigere i de juridiske forhold, der følger med vækst og investeringer.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Jeg har dedikeret min karriere til at hjælpe innovative virksomheder med at navigere i den digitale tidsalder. Med en dyb forståelse for både traditionel jura og den nye teknologiske virkelighed, bygger jeg bro mellem disse verdener. Jeg yder rådgivning, der ikke bare løser dagens udfordringer, men også forbereder din virksomhed på i morgen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="glass p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-cyberpunk-purple">Specialer</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• M&A og Erhvervsret</li>
                  <li>• Startup Rådgivning</li>
                  <li>• Tech & AI Jura</li>
                  <li>• Venture Capital</li>
                </ul>
              </div>
              <div className="glass p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-cyberpunk-blue">Værdier</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Innovation & Fremsynethed</li>
                  <li>• Tilgængelighed 24/7</li>
                  <li>• Transparent Prissætning</li>
                  <li>• Teknologisk Indsigt</li>
                </ul>
              </div>
              <div className="glass p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-cyberpunk-pink">CV</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Advokat fra Accura</li>
                  <li>• Officer i Hæren</li>
                  <li>• Københavns Universitet</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};