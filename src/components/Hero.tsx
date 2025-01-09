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
          <source src="https://pwdwzfydxdpelbsleobt.supabase.co/storage/v1/object/public/videos/Rocket%20Engine.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight glass p-6 rounded-lg backdrop-blur-md"
            animate={{ 
              textShadow: [
                "0 0 4px rgba(155,109,255,0.3)",
                "0 0 6px rgba(155,109,255,0.3)",
                "0 0 4px rgba(155,109,255,0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Juridisk Excellence i
            <span className="gradient-text block mt-1">Digital Tidsalder</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed glass p-4 rounded-lg backdrop-blur-md"
          >
            Specialiseret rådgivning inden for M&A og startup-ventures med innovativ tilgang til moderne forretningsudfordringer.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};