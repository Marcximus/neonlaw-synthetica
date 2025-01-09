import { motion } from "framer-motion";
import { FileCheck, Users, Scale, Rocket } from "lucide-react";

const steps = [
  {
    icon: <FileCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Due Diligence",
    description: "Grundig gennemgang af alle juridiske og finansielle aspekter.",
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Forhandling",
    description: "Strategisk forhandling med fokus på dine interesser.",
  },
  {
    icon: <Scale className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Dokumentation",
    description: "Præcis udarbejdelse af alle nødvendige juridiske dokumenter.",
  },
  {
    icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Afslutning",
    description: "Sikker gennemførelse af transaktionen.",
  },
];

export const Process = () => {
  return (
    <section className="py-16 sm:py-32 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Vores Process
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 sm:p-8 rounded-xl relative group hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4 sm:mb-6 text-cyberpunk-purple group-hover:text-cyberpunk-blue transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};