import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const AnimatedValue = ({ value }: { value: string }) => {
  const baseNumber = parseInt(value.replace(/\D/g, ""));
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, baseNumber, {
      duration: 2,
      ease: "easeOut",
    });

    return animation.stop;
  }, [baseNumber, count]);

  return (
    <motion.span className="gradient-text">
      {rounded.get()}
      {value.includes("+") ? "+" : value.includes("%") ? "%" : ""}
    </motion.span>
  );
};

export const Statistics = () => {
  return (
    <section className="py-16 sm:py-32 relative overflow-hidden bg-gradient-to-b from-black/95 via-black to-black/95">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Vores Resultater
        </motion.h2>
        
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {[
            { label: "Succesfulde M&As", value: "250+" },
            { label: "Startup Exits", value: "120+" },
            { label: "Klient Tilfredshed", value: "98%" },
            { label: "Årlig Vækst", value: "40%" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass p-4 sm:p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl sm:text-4xl font-bold mb-2">
                <AnimatedValue value={stat.value} />
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};