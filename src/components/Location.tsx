import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  const routes = [
    { time: "02 Mins Away", desc: "Looni Kot Interchange" },
    { time: "15 Mins Away", desc: "Nooriabad" },
    { time: "20 Mins Away", desc: "Bahria Town Phase-2" },
    { time: "30 Mins Away", desc: "DHA City" },
    { time: "30 Mins Away", desc: "Malir Expressway Link" },
  ];

  const landmarks = [
    "Mehran University", "Police Station Looni Kot", "Looni Kot Interchange", "Humara Ghar NPF", 
    "Bholari Airbase", "Nooriabad", "DHA City", "Malir Expressway Link", "Bahria Town Phase-2"
  ];

  return (
    <section className="py-24 bg-navy-900" id="location">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">Prime Location</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Connected to <span className="text-gradient">Everything</span></h3>
            <p className="text-gray-400 text-lg mb-10">
              Situated on the Karachi – Hyderabad M-9 Motorway, New Soldier City places you at the heart of future development with seamless access to major landmarks.
            </p>

            <div className="mb-10">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Navigation className="text-gold-500" /> Distance from New Soldier City
              </h4>
              <div className="space-y-4">
                {routes.map((route, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-surface-border pb-3">
                    <span className="text-gray-300 font-medium">{route.desc}</span>
                    <span className="text-gold-400 font-bold bg-gold-500/10 px-3 py-1 rounded-sm text-sm">
                      {route.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 font-sans">Nearby Landmarks</h4>
              <div className="flex flex-wrap gap-2">
                {landmarks.map((landmark, idx) => (
                  <span key={idx} className="bg-navy-800 border border-surface-border px-4 py-2 rounded-sm text-sm text-gray-300 flex items-center gap-2">
                    <MapPin size={14} className="text-gold-500"/> {landmark}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map/Graphic Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-sm overflow-hidden border border-surface-border bg-navy-800"
          >
            {/* We use a stylized map placeholder image with an overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-navy-900/60"></div>
            
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8 z-10">
              <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                  <MapPin className="text-navy-900" size={24} />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">Located on:</h3>
              <p className="text-gold-400 text-lg uppercase tracking-widest font-semibold font-sans">Karachi – Hyderabad M-9 Motorway</p>
            </div>
            
            {/* Animated Route Lines Placeholder */}
            <svg className="absolute w-full h-full z-0 opacity-30" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100 500 Q 250 100 500 300 T 800 100" stroke="#D4AF37" strokeWidth="2" fill="transparent" strokeDasharray="10,10">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
              </path>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
