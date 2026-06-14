import { motion } from 'motion/react';
import { Map, HardHat, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Map size={32} />,
      title: "Strategic Location",
      description: "Just minutes from Looni Kot Interchange on M-9 Motorway."
    },
    {
      icon: <HardHat size={32} />,
      title: "Rapid Development",
      description: "Well-planned infrastructure with wide roads & modern amenities."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "High Return on Investment",
      description: "Ideal for both living & investment with excellent future prospects."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure & Peaceful Living",
      description: "A safe, gated community for you and your family."
    }
  ];

  return (
    <section className="py-24 bg-navy-800 relative z-10" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">Why Choose New Soldier City?</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Experience the Best in <br/><span className="text-gradient">Modern Living</span></h3>
          <p className="text-gray-400 text-lg">
            New Soldier City offers an unmatched blend of luxury, security, and prime location, making it the perfect choice for your dream home or next big investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy-900 border border-surface-border p-8 rounded-sm group hover:border-gold-500/50 transition-colors"
            >
              <div className="w-16 h-16 bg-navy-800 rounded-sm flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
