
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { UserMenu } from "./UserMenu";

export const Navbar = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  const checkContactVisibility = useCallback(() => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      setIsContactVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  }, []);

  useEffect(() => {
    // Initial check
    checkContactVisibility();
    
    // Throttle scroll event
    let timeoutId: number;
    const handleScroll = () => {
      if (!timeoutId) {
        timeoutId = window.setTimeout(() => {
          checkContactVisibility();
          timeoutId = 0;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [checkContactVisibility]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Top navbar for user menu */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "h-14 sm:h-16 mt-4 mx-4",
          "flex items-center justify-end px-4",
          "backdrop-blur-lg bg-white/5 border border-white/10",
          "rounded-b-2xl sm:rounded-b-3xl shadow-lg"
        )}
      >
        <UserMenu />
      </motion.nav>

      {/* Bottom navbar for contact button */}
      <AnimatePresence>
        {!isContactVisible && (
          <motion.nav 
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed bottom-0 left-0 right-0 z-50",
              "h-14 sm:h-16 mb-4 mx-4",
              "flex items-center justify-center",
              "backdrop-blur-lg bg-white/5 border border-white/10",
              "rounded-t-2xl sm:rounded-t-3xl shadow-lg overflow-hidden",
              "will-change-transform"
            )}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-black via-yellow-500/20 to-black"
              style={{
                backgroundSize: '200% 100%',
                animation: 'slide 4s linear infinite',
                willChange: 'transform'
              }}
            />
            <motion.button 
              onClick={scrollToContact}
              className="relative z-10 text-white font-bold tracking-wider text-sm sm:text-base cursor-pointer w-full h-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
