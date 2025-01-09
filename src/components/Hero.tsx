import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Fremtidsrettet
            <br />
            Juridisk Innovation
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Banebrydende M&A og Startup-Rådgivning i den Digitale Tidsalder
          </p>
          <button className="glass px-8 py-4 rounded-lg text-cyberpunk-blue hover:text-white hover:bg-cyberpunk-blue/20 transition-all duration-300">
            Book Konsultation
          </button>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyberpunk-blue/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyberpunk-purple/10 rounded-full blur-[100px]" />
      </div>
    </section>
  );
};