import { motion } from 'motion/react';
import { ShieldCheck, MapPin, TrendingUp, Gem } from 'lucide-react';

export default function Hero() {
  const badges = [
    { icon: <ShieldCheck size={20} />, text: "Gated Community" },
    { icon: <Gem size={20} />, text: "Modern Amenities" },
    { icon: <MapPin size={20} />, text: "Prime Location" },
    { icon: <TrendingUp size={20} />, text: "High ROI" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Background Image with Parallax & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-navy-900/80 bg-gradient-to-t from-navy-900 via-navy-900/60 to-navy-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12 md:pt-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-surface-dark border border-gold-500/30 text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6">
              A Wish Full of Desire
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Build Your Future.<br />
              <span className="text-gradient">Live Your Dream.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Secure your plot in a premium gated community with modern facilities, prime connectivity, and a promising future on the Karachi – Hyderabad M-9 Motorway.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#contact" className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 text-center font-semibold rounded-sm transition-all text-lg flex-1 sm:flex-none">
                Book Your Plot Today
              </a>
              <a href="#payment-plan" className="px-8 py-4 bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500/10 text-center font-semibold rounded-sm transition-all text-lg flex-1 sm:flex-none">
                Download Payment Plan
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((badge, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 bg-surface-dark border border-surface-border p-3 rounded-sm backdrop-blur-sm"
                >
                  <div className="text-gold-500">
                    {badge.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-200">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
