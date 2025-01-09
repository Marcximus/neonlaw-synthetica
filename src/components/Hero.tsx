import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient overlay */}
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
          <source src="https://pwdwzfydxdpelbsleobt.supabase.co/storage/v1/object/public/videos/Rocket%20Engine.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div 
            className="inline-block glass rounded-xl p-6 mb-6 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              animate={{ 
                textShadow: [
                  "0 0 4px rgba(0,240,255,0.3)",
                  "0 0 8px rgba(0,240,255,0.3)",
                  "0 0 4px rgba(0,240,255,0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Juridisk Excellence i
              <span className="gradient-text block mt-2">Digital Tidsalder</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass rounded-lg p-4 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Specialiseret rådgivning inden for M&A og startup-ventures med innovativ tilgang til moderne forretningsudfordringer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};