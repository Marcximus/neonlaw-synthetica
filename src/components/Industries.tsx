import { motion } from "framer-motion";
import { Building2, ChartBar, MessageSquare } from "lucide-react";

const industries = [
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "Tech Startups",
    description: "Specialiseret rådgivning til teknologivirksomheder i vækstfasen.",
    percentage: 40,
  },
  {
    icon: <ChartBar className="w-12 h-12" />,
    title: "Fintech",
    description: "Ekspertise inden for finansiel teknologi og regulering.",
    percentage: 35,
  },
  {
    icon: <MessageSquare className="w-12 h-12" />,
    title: "E-commerce",
    description: "Omfattende erfaring med online handelsplatforme.",
    percentage: 25,
  },
];

export const Industries = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold mb-16 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Industrier Vi Servicerer
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-xl relative group hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6 text-cyberpunk-blue group-hover:text-cyberpunk-purple transition-colors duration-300">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{industry.title}</h3>
              <p className="text-gray-400 mb-6">{industry.description}</p>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${industry.percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <p className="text-right text-sm text-gray-400 mt-2">{industry.percentage}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};