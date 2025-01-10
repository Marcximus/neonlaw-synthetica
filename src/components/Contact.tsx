import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "LIFT-OFF!",
      description: "Din besked er sendt!",
      duration: 3000,
    });
  };

  return (
    <section id="contact-section" className="py-16 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/rocket.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">Kontakt Mig</h2>
          <p className="text-gray-400 text-sm sm:text-lg">
            Lad mig vide hvordan jeg kan hjælpe din virksomhed med at nå escape velocity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            className="glass rounded-xl backdrop-blur-lg bg-white/5 border border-white/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Navn</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyberpunk-purple text-sm sm:text-base"
                  placeholder="Dit fulde navn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyberpunk-purple text-sm sm:text-base"
                  placeholder="din@email.dk"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Besked</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyberpunk-purple text-sm sm:text-base"
                  placeholder="Hvordan kan jeg hjælpe dig?"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                FIRE
              </button>
            </form>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Kontor",
                details: "Rådhuspladsen 16, 1550 København"
              },
              {
                icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Telefon",
                details: "+45 12 34 56 78"
              },
              {
                icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Email",
                details: "kontakt@neonlaw.dk"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass p-4 sm:p-6 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-cyberpunk-purple">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};