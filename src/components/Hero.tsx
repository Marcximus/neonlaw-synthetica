import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10" />
      
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://pwdwzfydxdpelbsleobt.supabase.co/storage/v1/object/public/videos/rocket.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 text-white tracking-tight"
            animate={{ 
              textShadow: [
                "0 0 8px rgba(155,109,255,0.3)",
                "0 0 12px rgba(155,109,255,0.3)",
                "0 0 8px rgba(155,109,255,0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Juridisk Excellence i
            <br />
            <span className="gradient-text">Digital Tidsalder</span>
          </motion.h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Specialiseret rådgivning inden for M&A og startup-ventures med innovativ tilgang til moderne forretningsudfordringer.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button 
              className="px-8 py-4 bg-cyberpunk-purple text-white rounded-lg text-lg font-medium hover:bg-cyberpunk-purple/90 transition-all duration-300 neon-border"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Udforsk Services
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-black/30 backdrop-blur-lg border border-white/10 text-white rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Lær Mere
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};