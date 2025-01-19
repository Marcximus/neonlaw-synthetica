import { motion } from "framer-motion";
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

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const tick = () => {
      const fullText = titles[currentIndex];
      
      if (isDeleting) {
        // Delete one character
        setText(prev => prev.slice(0, -1));
        timeout = setTimeout(tick, 50); // Fast deletion speed
      } else {
        // Type one character
        setText(prev => fullText.slice(0, prev.length + 1));
        timeout = setTimeout(tick, 150); // Normal typing speed
      }

      // Check if we need to switch states
      if (!isDeleting && text === fullText) {
        // Finished typing, wait before deleting
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setIsDeleting(true);
          tick();
        }, 2000);
      } else if (isDeleting && text === "") {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        clearTimeout(timeout);
        timeout = setTimeout(tick, 500);
      }
    };

    timeout = setTimeout(tick, 50);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  return (
    <div className="min-w-[280px] h-[40px] flex items-center">
      <span className="text-cyberpunk-blue relative">
        {text}
        <span className="absolute -right-[4px] animate-pulse">|</span>
      </span>
    </div>
  );
};