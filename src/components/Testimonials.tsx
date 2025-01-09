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
    <section className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold mb-16 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Klient Udtalelser
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-xl relative group hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};