import { motion } from "framer-motion";
import { Rocket, Scale, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Rocket className="w-8 h-8 text-cyberpunk-blue" />,
    title: "Startup Rådgivning",
    description: "Vejledning af innovative startups gennem etablering, finansiering og vækst.",
  },
  {
    icon: <Scale className="w-8 h-8 text-cyberpunk-purple" />,
    title: "M&A Strategi",
    description: "Ekspert navigation gennem komplekse fusioner og opkøb.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-cyberpunk-pink" />,
    title: "Juridisk Innovation",
    description: "Banebrydende juridiske løsninger til den digitale økonomi.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 cyber-grid">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center gradient-text"
          animate={{ 
            textShadow: [
              "0 0 10px rgba(0,240,255,0.5)",
              "0 0 20px rgba(0,240,255,0.5)",
              "0 0 10px rgba(0,240,255,0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
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
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="neon-border glass p-8 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <motion.div 
                className="mb-6"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-cyberpunk-blue">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};