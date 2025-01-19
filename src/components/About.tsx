import { motion } from "framer-motion";
import { TypewriterEffect } from "./TypewriterEffect";

export const About = () => {
  return (
    <section className="relative overflow-hidden mb-6">
      {/* Video Background with optimized playback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        style={{ transform: 'translate3d(0,0,0)' }}
      >
        <source src="/rocket.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-[90rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center mb-8">
            <div className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white w-full">
              <div className="flex items-center justify-center">
                <span className="whitespace-nowrap px-2 sm:px-4 translate-y-[1px] sm:translate-y-[-4px] ml-[2%] sm:ml-[35%] text-2xl sm:text-2xl md:text-2xl lg:text-3xl">Mød din</span>
                <TypewriterEffect />
              </div>
            </div>
          </div>

          {/* Image Container with optimized transforms */}
          <motion.div 
            className="mb-12 backdrop-blur-lg bg-white/5 border border-white/10 p-2 rounded-full max-w-[240px] mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            style={{ willChange: 'transform' }}
          >
            <a 
              href="https://www.linkedin.com/in/marcus-alexander-svendsen-624618b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square rounded-full overflow-hidden transition-transform hover:scale-105"
              style={{ willChange: 'transform' }}
            >
              <img
                src="https://pwdwzfydxdpelbsleobt.supabase.co/storage/v1/object/public/pictures/IMG_0576.jpg?t=2025-01-09T23%3A03%3A33.731Z"
                alt="Marcus Alexander Svendsen - Professional headshot"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </a>
          </motion.div>

          <motion.div 
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 mb-8 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyberpunk-blue/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            style={{ willChange: 'transform' }}
          >
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-justify mb-6">
              Jeg er en tidligere advokat med solid erfaring inden for M&A, selskabsret og venturejura. Nu hjælper jeg startups, business angels og ventureselskaber med at navigere i de juridiske forhold, der følger med vækst og investeringer.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-justify">
              Jeg har dedikeret min karriere til at hjælpe innovative virksomheder med at navigere i den digitale tidsalder. Med en dyb forståelse for både traditionel jura og den nye teknologiske virkelighed, bygger jeg bro mellem disse verdener. Jeg yder rådgivning, der ikke bare løser dagens udfordringer, men også forbereder din virksomhed på i morgen.
            </p>
          </motion.div>

          {/* Specialer and CV grid with optimized animations */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
            <motion.div 
              className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyberpunk-purple/5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              style={{ willChange: 'transform' }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyberpunk-purple">Specialer</h3>
              <ul className="space-y-2 text-gray-300 text-[12px] sm:text-sm">
                <li className="whitespace-nowrap">M&A og Erhvervsret</li>
                <li className="whitespace-nowrap">Startup Rådgivning</li>
                <li className="whitespace-nowrap">Tech & AI Jura</li>
                <li className="whitespace-nowrap">Venture Capital</li>
              </ul>
            </motion.div>
            <motion.div 
              className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyberpunk-blue/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              style={{ willChange: 'transform' }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyberpunk-blue">CV</h3>
              <ul className="space-y-2 text-gray-300 text-[12px] sm:text-sm">
                <li className="whitespace-nowrap">Advokat fra Accura</li>
                <li className="whitespace-nowrap">Officer i Hæren</li>
                <li className="whitespace-nowrap">Københavns Universitet</li>
                <li className="whitespace-nowrap">Hong Kong University</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};