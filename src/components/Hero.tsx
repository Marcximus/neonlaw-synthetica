import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10" />
      
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
      
      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col min-h-screen">
        <div className="flex-1 flex items-start justify-center -mt-[15vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <motion.div className="flex flex-col items-center gap-4">
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold gradient-text mb-2">
                Jura
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wider mb-4">
                for virksomheder med <span className="text-[#F97316] subtle-glow">fart</span> på
              </h2>
            </motion.div>
          </motion.div>
        </div>

        <div className="-mt-96 mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Slut med vanvittige regninger og sløv respons.<br />
            Lad mig håndtere det juridiske, og lad os<br />
            sammen skalere din virksomhed.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 font-medium mt-4"
          >
            Prepare for takeoff
          </motion.p>
        </div>
      </div>
    </section>
  );
};