import { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const AnimatedCounter = ({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Investment() {
  const stats = [
    { value: 2, suffix: " Min", label: "From Interchange" },
    { value: 9, suffix: "", label: "Plot Categories" },
    { value: 59, suffix: "", label: "Months Installment" },
    { value: 100, suffix: "%", label: "High ROI Potential" },
  ];

  const reasons = [
    "Rapidly Growing Location",
    "Future Commercial Growth",
    "Easy Monthly Installments",
    "High Appreciation Potential",
    "Secure Investment",
    "Modern Infrastructure"
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-navy-900 border-t border-surface-border">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold-500 scale-150">
           <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
           <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
           <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">Maximize Returns</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Why Invest <span className="text-gradient">Now?</span></h3>
            <p className="text-gray-400 text-lg mb-8">
              New Soldier City isn't just a place to live; it's a rapidly appreciating asset. Positioned in the prime growth corridor of Karachi-Hyderabad, early investors secure the highest equity gains.
            </p>

            <ul className="space-y-4 mb-10">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-200">
                  <div className="w-2 h-2 bg-gold-500 rounded-full" />
                  <span className="font-medium text-lg font-sans">{reason}</span>
                </li>
              ))}
            </ul>

            <button className="px-8 py-4 bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 font-bold rounded-sm transition-all focus:ring-4 focus:ring-gold-500/20">
              Talk to an Investment Advisor
            </button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-navy-800 border border-surface-border p-8 rounded-sm text-center flex flex-col justify-center min-h-[200px]"
              >
                <div className="text-4xl md:text-6xl font-bold text-gold-500 mb-2 font-serif">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-400 tracking-wider uppercase font-semibold font-sans">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
