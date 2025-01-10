import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Kontor",
    details: "Rådhuspladsen 16, 1550 København"
  },
  {
    icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Telefon",
    details: "+45 28 29 98 63",
    href: "tel:+4528299863"
  },
  {
    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Email",
    details: "ms@corporateconsulting.dk",
    href: "mailto:ms@corporateconsulting.dk"
  }
];

export const ContactInfo = () => {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:gap-8"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {contactItems.map((item, index) => (
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
            {item.href ? (
              <a 
                href={item.href}
                className="text-gray-400 text-sm sm:text-base hover:text-white transition-colors"
              >
                {item.details}
              </a>
            ) : (
              <p className="text-gray-400 text-sm sm:text-base">{item.details}</p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};