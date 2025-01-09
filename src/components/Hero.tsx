import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(0,240,255,0.5)",
                "0 0 20px rgba(0,240,255,0.5)",
                "0 0 10px rgba(0,240,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Fremtidsrettet
            <br />
            Juridisk Innovation
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Banebrydende M&A og Startup-Rådgivning i den Digitale Tidsalder
          </p>
          <motion.button 
            className="neon-border glass px-8 py-4 rounded-lg text-cyberpunk-blue hover:text-white hover:bg-cyberpunk-blue/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Konsultation
          </motion.button>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyberpunk-blue/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyberpunk-purple/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </section>
  );
};