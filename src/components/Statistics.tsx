import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "2019", value: 45 },
  { name: "2020", value: 85 },
  { name: "2021", value: 125 },
  { name: "2022", value: 180 },
  { name: "2023", value: 250 },
];

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="glass p-4 sm:p-8 rounded-xl order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[250px] sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <XAxis dataKey="name" stroke="#9B6DFF" />
                  <YAxis stroke="#9B6DFF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(155,109,255,0.2)' 
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00F0FF"
                    strokeWidth={2}
                    dot={{ fill: '#9B6DFF' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
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
                <h3 className="text-2xl sm:text-4xl font-bold mb-2 gradient-text">{stat.value}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};