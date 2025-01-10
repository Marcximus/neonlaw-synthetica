import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase.functions.invoke("send-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "LIFT-OFF! 🚀",
        description: "Din besked er sendt!",
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Fejl",
        description: "Der opstod en fejl ved afsendelse af beskeden. Prøv igen senere.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="glass rounded-xl backdrop-blur-lg bg-white/5 border border-white/10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Navn</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyberpunk-purple text-sm sm:text-base"
            placeholder="Dit fulde navn"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyberpunk-purple text-sm sm:text-base"
            placeholder="din@email.dk"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Besked</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyberpunk-purple text-sm sm:text-base"
            placeholder="Hvordan kan jeg hjælpe dig?"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-black via-yellow-500/20 to-black"
            style={{
              backgroundSize: '200% 100%',
              animation: 'slide 4s linear infinite',
            }}
          />
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="relative z-10 w-full px-6 sm:px-8 py-3 sm:py-4 text-white font-bold tracking-wider text-sm sm:text-base disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            animate={{
              color: ['#ffffff', '#fbbf24', '#ffffff'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {isSubmitting ? "SENDER..." : "FIRE"}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};