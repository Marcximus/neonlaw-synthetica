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

    if (isDeleting) {
      timeout = window.setTimeout(() => {
        setText(text.slice(0, -1));
        setDelta(50); // Faster when deleting
      }, delta);

      if (text === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setDelta(500); // Pause before typing next word
      }
    } else {
      const fullText = titles[currentIndex];
      if (text !== fullText) {
        timeout = window.setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
          setDelta(150); // Normal typing speed
        }, delta);
      } else {
        timeout = window.setTimeout(() => {
          setIsDeleting(true);
          setDelta(2000); // Pause before deleting
        }, 2000);
      }
    }

    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  return (
    <span className="relative inline-flex min-w-[280px] h-[40px] items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="marcus-glow absolute left-0"
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};