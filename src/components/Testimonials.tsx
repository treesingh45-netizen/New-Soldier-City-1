import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Raza",
      role: "Real Estate Investor",
      text: "New Soldier City represents one of the most promising investment opportunities on the M-9 Motorway today. The development pace is highly impressive.",
      rating: 5
    },
    {
      name: "Fatima Ali",
      role: "Future Resident",
      text: "Security and environment were my top priorities. The enclosed perimeter and rapid infrastructure development gave me the confidence to secure a plot here.",
      rating: 5
    },
    {
      name: "Zain Khan",
      role: "Business Owner",
      text: "The payment plan is incredibly flexible. Being just 2 minutes from the interchange makes it highly accessible. Highly recommended for long-term gains.",
      rating: 5
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-navy-900 border-t border-surface-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-navy-800/50">
        <Quote size={400} />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-16">What Investors Say</h2>
        
        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="px-8"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="text-gold-500 fill-gold-500" size={20} />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-serif text-white mb-8 leading-relaxed">
                "{testimonials[current].text}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-gold-500">{testimonials[current].name}</h4>
                <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-surface-border flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-colors"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-surface-border flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-colors"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
