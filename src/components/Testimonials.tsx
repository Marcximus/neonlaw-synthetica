import { motion } from "framer-motion";
import { User } from "lucide-react";

const testimonials = [
  {
    name: "Anders Jensen",
    position: "CEO, TechStart ApS",
    content: "Exceptionel juridisk rådgivning gennem vores Series A funding. Deres ekspertise var uvurderlig.",
  },
  {
    name: "Marie Nielsen",
    position: "Founder, FinTech Solutions",
    content: "Professionel håndtering af vores M&A proces. Resultatet oversteg vores forventninger.",
  },
  {
    name: "Peter Madsen",
    position: "CTO, Digital Ventures",
    content: "Deres forståelse for tech-startups og juridiske udfordringer er enestående.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 sm:py-32 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Klient Udtalelser
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 sm:p-8 rounded-xl relative group hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue flex items-center justify-center">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-300 italic text-sm sm:text-base">"{testimonial.content}"</p>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};