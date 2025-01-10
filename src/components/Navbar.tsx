import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Navbar = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed bottom-0 left-0 right-0 z-50",
      "h-14 sm:h-16 mb-4 mx-4",
      "flex items-center justify-center",
      "backdrop-blur-lg bg-white/5 border border-white/10",
      "rounded-t-2xl sm:rounded-t-3xl shadow-lg overflow-hidden",
      "transition-all duration-300"
    )}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-yellow-500/20 to-black animate-[slide_4s_linear_infinite]" 
           style={{
             backgroundSize: '200% 100%',
             animation: 'slide 4s linear infinite',
           }}
      />
      <motion.button 
        onClick={scrollToContact}
        className="relative z-10 text-white font-bold tracking-wider text-sm sm:text-base cursor-pointer"
        whileHover={{ scale: 1.05 }}
        animate={{
          color: ['#ffffff', '#fbbf24', '#ffffff'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        LAUNCH
      </motion.button>
    </nav>
  );
};