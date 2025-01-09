import { motion } from "framer-motion";
import { Rocket, Scale, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Startup Rådgivning",
    description: "Strategisk vejledning til innovative startups gennem etablering og vækst.",
  },
  {
    icon: <Scale className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "M&A Strategi",
    description: "Professionel navigation gennem komplekse fusioner og virksomhedsopkøb.",
  },
  {
    icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Juridisk Innovation",
    description: "Moderne juridiske løsninger tilpasset den digitale økonomi.",
  },
];

export const Services = () => {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Vores Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4 sm:mb-6 text-cyberpunk-purple">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};