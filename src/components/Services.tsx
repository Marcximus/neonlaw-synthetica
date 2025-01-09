import { motion } from "framer-motion";
import { Rocket, Scale, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Startup Rådgivning",
    description: "Strategisk vejledning til innovative startups gennem etablering og vækst.",
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "M&A Strategi",
    description: "Professionel navigation gennem komplekse fusioner og virksomhedsopkøb.",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Juridisk Innovation",
    description: "Moderne juridiske løsninger tilpasset den digitale økonomi.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Vores Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6 text-cyberpunk-purple">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};