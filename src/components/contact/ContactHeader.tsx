
import { motion } from "framer-motion";
import { LegalServicesMarquee } from "./LegalServicesMarquee";

export const ContactHeader = () => {
  return (
    <motion.div 
      className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">Kontakt Mig</h2>
      <p className="text-gray-400 text-sm sm:text-lg">
        <span className="block lg:inline">Lad mig vide hvordan jeg kan hjælpe din</span>{" "}
        <span className="block lg:inline">virksomhed med at nå escape velocity.</span><br />
        <span className="subtle-glow inline-block text-cyberpunk-blue">Det er 100% gratis.</span>
      </p>
      
      <LegalServicesMarquee />
    </motion.div>
  );
};
