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
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div className="flex flex-col items-center gap-4 px-4 sm:px-0">
            <h1 className="text-6xl sm:text-7xl font-bold gradient-text mb-4">
              Jura
            </h1>
            <div className="text-xl sm:text-3xl text-gray-300 space-y-2 sm:space-y-0 sm:space-x-2 font-light tracking-wider">
              <span className="block sm:inline">Nemt.</span>
              <span className="block sm:inline">Hurtigt.</span>
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 4px rgba(249, 115, 22, 0.4)",
                    "0 0 8px rgba(249, 115, 22, 0.6)",
                    "0 0 4px rgba(249, 115, 22, 0.4)"
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-orange-500 font-medium block sm:inline"
              >
                Billigt.
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};