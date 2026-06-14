import { motion } from 'motion/react';
import { Shield, Wifi, Route, TrendingUp } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { icon: <Shield />, title: "Gated Community", desc: "A secure and enclosed environment for peace of mind." },
    { icon: <Route />, title: "Wide Road Network", desc: "Spacious boulevards designed for smooth traffic flow." },
    { icon: <Wifi />, title: "Modern Amenities", desc: "World-class facilities for luxury living." },
    { icon: <TrendingUp />, title: "High Investment Potential", desc: "Strategically located for maximum long-term returns." },
  ];

  return (
    <section className="py-24 bg-navy-800" id="amenities">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">Lifestyle Out of the Ordinary</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Project <span className="text-gradient">Features</span></h3>
          <p className="text-gray-400 text-lg">
            Experience a curated lifestyle designed to provide absolute comfort, security, and prestige for you and your family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900 border border-surface-border p-6 rounded-sm hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-sm bg-navy-800 border border-surface-border text-gold-500 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-2 font-sans">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
