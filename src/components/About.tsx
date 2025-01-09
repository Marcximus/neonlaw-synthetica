import { motion } from "framer-motion";
import { Shield, Lightbulb, Users } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Om Os</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Vi kombinerer juridisk ekspertise med teknologisk innovation for at levere 
            fremtidssikrede løsninger til moderne virksomheder.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-12 h-12" />,
              title: "Pålidelig Ekspertise",
              description: "Over 15 års erfaring med komplekse juridiske udfordringer i tech-sektoren."
            },
            {
              icon: <Lightbulb className="w-12 h-12" />,
              title: "Innovativ Tilgang",
              description: "Vi udvikler kreative løsninger der matcher moderne virksomheders behov."
            },
            {
              icon: <Users className="w-12 h-12" />,
              title: "Klientfokuseret",
              description: "Tæt samarbejde og personlig rådgivning tilpasset din virksomheds vision."
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass p-8 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyberpunk-purple/10 mb-6">
                <div className="text-cyberpunk-purple">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};