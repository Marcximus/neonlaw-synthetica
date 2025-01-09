import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-10" />
      
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/lovable-uploads/rocket.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center sm:text-left"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white"
            animate={{ 
              textShadow: [
                "0 0 5px rgba(155,109,255,0.5)",
                "0 0 15px rgba(155,109,255,0.5)",
                "0 0 5px rgba(155,109,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Juridisk Excellence i
            <br className="hidden sm:block" />
            Digital Tidsalder
          </motion.h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto sm:mx-0">
            Specialiseret rådgivning inden for M&A og startup-ventures med innovativ tilgang til moderne forretningsudfordringer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <motion.button 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-cyberpunk-purple text-white rounded-full text-base sm:text-lg font-medium hover:bg-cyberpunk-purple/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Udforsk Services
            </motion.button>
            <motion.button 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/20 text-white rounded-full text-base sm:text-lg font-medium hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lær Mere
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};