import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-16 sm:py-32 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center gradient-text">Mød Din Nye Partner</h2>
          
          {/* Image Container */}
          <motion.div 
            className="mb-12 glass p-2 rounded-xl max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="https://pwdwzfydxdpelbsleobt.supabase.co/storage/v1/object/public/pictures/IMG_0576.jpg?t=2025-01-09T23%3A03%3A33.731Z"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="glass p-6 sm:p-8 rounded-xl space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Som advokat med fokus på M&A og startups hjælper jeg virksomheder med at navigere gennem juridiske udfordringer. Min erfaring omfatter både traditionel erhvervsjura og moderne teknologiret.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Jeg holder mig opdateret med den nyeste udvikling inden for AI og blockchain for at kunne give den bedste rådgivning til fremtidsorienterede virksomheder.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="glass p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-cyberpunk-purple">Specialer</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• M&A og Virksomhedsoverdragelser</li>
                  <li>• Startup Rådgivning</li>
                  <li>• Tech & AI Jura</li>
                  <li>• Venture Capital</li>
                </ul>
              </div>
              <div className="glass p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-cyberpunk-blue">Værdier</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Innovation & Udvikling</li>
                  <li>• Hurtig Responstid</li>
                  <li>• Klar Prissætning</li>
                  <li>• Digital Ekspertise</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};