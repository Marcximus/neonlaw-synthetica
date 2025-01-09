import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-black/95 via-black to-black/95">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Kontakt Os</h2>
          <p className="text-gray-400 text-lg">
            Lad os diskutere hvordan vi kan hjælpe din virksomhed med at nå sine mål.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="glass p-8 rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Navn</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyberpunk-purple"
                  placeholder="Dit fulde navn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyberpunk-purple"
                  placeholder="din@email.dk"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Besked</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyberpunk-purple"
                  placeholder="Fortæl os om dit projekt..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Besked
              </button>
            </form>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Kontor",
                details: "Rådhuspladsen 16, 1550 København"
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Telefon",
                details: "+45 12 34 56 78"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                details: "kontakt@neonlaw.dk"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass p-6 rounded-xl flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-cyberpunk-purple">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};