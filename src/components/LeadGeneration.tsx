import { motion } from 'motion/react';

export default function LeadGeneration() {
  return (
    <section className="py-24 bg-navy-800" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-navy-900 border border-surface-border rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl">
          
          <div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577051939801-9dae4a5bf4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-10 mix-blend-screen"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                Reserve Your Plot Before <span className="text-gradient">Prices Increase</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Limited plots available. Secure your future investment today by scheduling a free consultation with our experts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-gold-500/10 flex items-center justify-center text-gold-500 font-bold border border-gold-500/20">01</div>
                  <div className="text-gray-200">Fill out the form</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-gold-500/10 flex items-center justify-center text-gold-500 font-bold border border-gold-500/20">02</div>
                  <div className="text-gray-200">Get a callback from experts</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-gold-500/10 flex items-center justify-center text-gold-500 font-bold border border-gold-500/20">03</div>
                  <div className="text-gray-200">Secure your plot easily</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-10 lg:p-16 bg-navy-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 font-sans">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-navy-900 border border-surface-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 font-sans">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-navy-900 border border-surface-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="03XX XXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 font-sans">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-navy-900 border border-surface-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 font-sans">Plot Size Interested In</label>
                <select className="w-full bg-navy-900 border border-surface-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                  <option value="">Select Plot Size</option>
                  <option value="80">80 Sq Yard</option>
                  <option value="120">120 Sq Yard</option>
                  <option value="200">200 Sq Yard</option>
                  <option value="240">240 Sq Yard</option>
                  <option value="300">300 Sq Yard</option>
                  <option value="400">400 Sq Yard</option>
                  <option value="500">500 Sq Yard</option>
                  <option value="600">600 Sq Yard</option>
                  <option value="1000">1000 Sq Yard</option>
                </select>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-sm transition-colors text-lg"
              >
                Book Free Consultation
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
