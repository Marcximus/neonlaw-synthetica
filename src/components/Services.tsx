import { motion } from "framer-motion";
import { Rocket, Scale, Briefcase } from "lucide-react";
import { P5Wrapper } from "./P5Wrapper";
import p5 from 'p5';

const services = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: {
      prefix: "Hvidglødende",
      suffix: "Effektivitet"
    },
    description: "Nogen gange skal det gå rigtig stærk. Den nye verden er præget af søvnløs AI og skarp konkurrence. Derfor er jeg available 24/7.",
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Kommerciel Tilgang",
    description: "Selskaber skal i stigende grad finde fleksible løsninger, og være smidge i deres tankegang. Defor anvender jeg konservativ jura med et moderne mindset.",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Markedets Bedste Pris",
    description: "Det sidste man gider benytte sit cashflow på, er at betale dyre advokatregninger. Derfor er det altid gratis at ringe til mig.",
  },
];

const glowingTextSketch = (p: p5) => {
  let opacity = 0;
  let increasing = true;

  p.setup = () => {
    p.createCanvas(200, 50);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(20);
    p.frameRate(30);
  };

  p.draw = () => {
    p.clear();
    p.noStroke();
    
    // Create multiple layers of text with different sizes and opacities for the glow effect
    for (let i = 5; i >= 0; i--) {
      const alpha = opacity * (1 - i/6);
      p.fill(255, 255, 255, alpha * 255);
      p.textSize(20 + i);
      p.text("Hvidglødende", p.width/2, p.height/2);
    }

    // Base text
    p.fill(255);
    p.textSize(20);
    p.text("Hvidglødende", p.width/2, p.height/2);

    // Update opacity for pulsing effect
    if (increasing) {
      opacity += 0.05;
      if (opacity >= 1) {
        increasing = false;
      }
    } else {
      opacity -= 0.05;
      if (opacity <= 0.5) {
        increasing = true;
      }
    }
  };
};

export const Services = () => {
  return (
    <section className="py-16 sm:py-32 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl sm:text-5xl font-bold mb-12 sm:mb-24 text-white text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Du får
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-cyberpunk-purple flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight">
                {typeof service.title === 'object' ? (
                  <div className="flex flex-col items-center">
                    <div className="h-[50px] w-[200px] mb-2">
                      <P5Wrapper sketch={glowingTextSketch} />
                    </div>
                    <span className="text-white">{service.title.suffix}</span>
                  </div>
                ) : (
                  <span className="text-white">{service.title}</span>
                )}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};