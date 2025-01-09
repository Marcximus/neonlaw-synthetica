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
      
      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col min-h-screen justify-center">
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
            <div className="text-xl sm:text-3xl text-gray-300 font-light tracking-wider flex flex-wrap justify-center gap-2">
              <span>Nemt.</span>
              <span>Hurtigt.</span>
              <span>Billigt.</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-auto mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Slut med vanvittige regninger og sløv respons. Lad mig håndtere det juridiske, og lad os sammen skalere din virksomhed.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-gray-300 font-medium mt-4"
          >
            Prepare for takeoff
          </motion.p>
        </div>
      </div>
    </section>
  );
};