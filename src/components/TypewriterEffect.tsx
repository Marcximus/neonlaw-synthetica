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
        setText(prev => prev.slice(0, -1));
        timeout = setTimeout(tick, 50);
      } else {
        setText(prev => fullText.slice(0, prev.length + 1));
        timeout = setTimeout(tick, 150);
      }

      if (!isDeleting && text === fullText) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setIsDeleting(true);
          tick();
        }, 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        clearTimeout(timeout);
        timeout = setTimeout(tick, 500);
      }
    };

    timeout = setTimeout(tick, 50);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  // Find the longest title to set the minimum width
  const maxLength = Math.max(...titles.map(title => title.length));

  return (
    <div className="relative flex-1 min-w-0 max-w-[70%] sm:max-w-[80%]">
      <div 
        className="text-cyberpunk-blue whitespace-nowrap overflow-hidden"
        style={{ minHeight: '1.5em' }} // Maintain consistent height
      >
        <span className="inline-block min-w-[1ch]">{text}</span>
        <span className="absolute top-0 animate-pulse">|</span>
      </div>
    </div>
  );
};