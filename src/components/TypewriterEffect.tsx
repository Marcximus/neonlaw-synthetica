import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Juridiske Rådgiver",
  "Partner In Law",
  "Fixer",
  "Sparringspartner",
  "Legal Counsel",
  "Strategirådgiver",
  "Trusted Advisor",
  "Krisekaptajn",
  "Kontraktspecialist",
  "Rainmaker",
  "Risikoekspert"
];

export const TypewriterEffect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    let timeout: number;

    const tick = () => {
      const fullText = titles[currentIndex];
      
      if (isDeleting) {
        // Deleting text
        setText(prev => prev.slice(0, -1));
        setDelta(50); // Faster when deleting
      } else {
        // Typing text
        setText(prev => fullText.slice(0, prev.length + 1));
        setDelta(150); // Normal typing speed
      }

      // Handle state changes
      if (!isDeleting && text === fullText) {
        // Finished typing, wait before starting to delete
        setDelta(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setDelta(500);
      }
    };

    timeout = window.setTimeout(tick, delta);
    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, delta]);

  return (
    <div className="inline-flex items-center justify-start min-w-[280px] h-[40px]">
      <motion.span
        key={text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="marcus-glow whitespace-nowrap text-left"
      >
        {text}
        <span className="animate-pulse">|</span>
      </motion.span>
    </div>
  );
};