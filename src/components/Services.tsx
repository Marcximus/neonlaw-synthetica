import { motion } from "framer-motion";
import { Rocket, Scale, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />,
    title: {
      first: "Hvidglødende",
      second: "Effektivitet"
    },
    description: (
      <>
        Nogen gange skal det gå rigtig stærk. Den nye verden er præget af søvnløs AI og skarp konkurrence. Derfor er jeg{' '}
        <span className="text-cyberpunk-blue animate-pulse">tilgængelig 24/7</span>
        {' '}(også i weekenden).
      </>
    ),
  },
  {
    icon: <Scale className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />,
    title: "Kommerciel Tilgang",
    description: (
      <>
        Selskaber skal i stigende grad finde{' '}
        <span className="text-cyberpunk-blue animate-pulse">fleksible</span>
        {' '}
        <span className="text-cyberpunk-blue animate-pulse">løsninger</span>
        , og være smidige i deres tankegang. Defor anvender jeg konservativ jura med et moderne mindset.
      </>
    ),
  },
  {
    icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />,
    title: "Markedets Bedste Pris",
    description: (
      <>
        Det sidste man gider benytte sit cashflow på er at betale dyre advokatregninger. Derfor er det altid{' '}
        <span className="text-cyberpunk-blue animate-pulse">gratis</span>
        {' '}at ringe til mig.
      </>
    ),
  },
];

export const Services = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Corporate Consulting
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            forretning før regulering
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ 
                once: true, 
                margin: "-50px",
                amount: 0.3 
              }}
              className="glass p-4 sm:p-6 md:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center transform-gpu will-change-transform"
            >
              <div className="mb-4 sm:mb-6 text-cyberpunk-purple flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 tracking-tight whitespace-normal px-2">
                {typeof service.title === 'object' ? (
                  <span className="inline-block">
                    <span className="subtle-glow inline-block">{service.title.first}</span>
                    {" "}
                    <span className="text-white">{service.title.second}</span>
                  </span>
                ) : (
                  <span className="text-white">{service.title}</span>
                )}
              </h3>
              <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};