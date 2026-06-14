import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';

export default function PaymentPlan() {
  const plots = [
    { size: "80 Sq. Yard", booking: "Rs. 5,600", installment: "Rs. 5,600 × 59", possession: "Rs. 100,000", total: "Rs. 4,36,000", numericPrice: 436000 },
    { size: "120 Sq. Yard", booking: "Rs. 8,500", installment: "Rs. 8,500 × 59", possession: "Rs. 100,000", total: "Rs. 6,10,000", numericPrice: 610000 },
    { size: "200 Sq. Yard", booking: "Rs. 14,000", installment: "Rs. 14,000 × 59", possession: "Rs. 150,000", total: "Rs. 9,90,000", numericPrice: 990000 },
    { size: "240 Sq. Yard", booking: "Rs. 17,000", installment: "Rs. 17,000 × 59", possession: "Rs. 200,000", total: "Rs. 12,20,000", numericPrice: 1220000 },
    { size: "300 Sq. Yard", booking: "Rs. 23,000", installment: "Rs. 23,000 × 59", possession: "Rs. 250,000", total: "Rs. 16,30,000", numericPrice: 1630000 },
    { size: "400 Sq. Yard", booking: "Rs. 28,000", installment: "Rs. 28,000 × 59", possession: "Rs. 300,000", total: "Rs. 19,80,000", numericPrice: 1980000 },
    { size: "500 Sq. Yard", booking: "Rs. 34,000", installment: "Rs. 34,000 × 59", possession: "Rs. 350,000", total: "Rs. 23,90,000", numericPrice: 2390000 },
    { size: "600 Sq. Yard", booking: "Rs. 41,000", installment: "Rs. 41,000 × 59", possession: "Rs. 400,000", total: "Rs. 28,60,000", numericPrice: 2860000 },
    { size: "1000 Sq. Yard", booking: "Rs. 69,000", installment: "Rs. 69,000 × 59", possession: "Rs. 500,000", total: "Rs. 46,40,000", numericPrice: 4640000 },
  ];

  const [selectedPlot, setSelectedPlot] = useState(plots[1].numericPrice);
  const [months, setMonths] = useState(59);

  const calculateEMI = () => {
    return Math.round(selectedPlot / months).toLocaleString();
  };

  return (
    <section className="py-24 bg-navy-900 border-t border-surface-border" id="payment-plan">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">Make It Yours</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Residential Plots – <span className="text-gradient">Payment Plan</span></h3>
          <p className="text-gray-400 text-lg">
            Invest in your future with flexible and accommodating installment plans options perfectly crafted for your needs.
          </p>
        </div>

        <div className="grid xl:grid-cols-4 gap-12">
          
          {/* Detailed Pricing Table */}
          <div className="xl:col-span-3 overflow-x-auto rounded-sm border border-surface-border shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-navy-800 text-gold-500 font-sans tracking-wide">
                  <th className="p-4 border-b border-surface-border font-semibold whitespace-nowrap">Plot Size</th>
                  <th className="p-4 border-b border-surface-border font-semibold whitespace-nowrap">Booking</th>
                  <th className="p-4 border-b border-surface-border font-semibold whitespace-nowrap">Installment (59 Months)</th>
                  <th className="p-4 border-b border-surface-border font-semibold whitespace-nowrap">On Possession Time</th>
                  <th className="p-4 border-b border-surface-border font-semibold whitespace-nowrap">Total Value</th>
                  <th className="p-4 border-b border-surface-border font-semibold whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {plots.map((plot, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-surface-border/50 hover:bg-navy-800 transition-colors bg-navy-900/50"
                  >
                    <td className="p-4 text-gray-200 font-medium whitespace-nowrap">{plot.size}</td>
                    <td className="p-4 text-gray-300 font-medium whitespace-nowrap">{plot.booking}</td>
                    <td className="p-4 text-gray-300 font-medium whitespace-nowrap">{plot.installment}</td>
                    <td className="p-4 text-gray-300 font-medium whitespace-nowrap">{plot.possession}</td>
                    <td className="p-4 text-gold-400 font-bold whitespace-nowrap">{plot.total}</td>
                    <td className="p-4 whitespace-nowrap">
                      <button 
                        onClick={() => setSelectedPlot(plot.numericPrice)}
                        className="text-xs px-4 py-2 border border-gold-500/50 hover:bg-gold-500 hover:text-navy-900 text-gold-500 transition-colors rounded-sm"
                      >
                        Calculate EMI
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* EMI Calculator Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy-800 border border-surface-border p-8 rounded-sm sticky top-24 h-fit xl:col-span-1 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-surface-border pb-4">
              <Calculator className="text-gold-500" />
              <h4 className="text-2xl font-bold font-sans">EMI Estimator</h4>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Total Amount (Rs.)</label>
                <div className="text-3xl font-bold text-white mb-4">
                  {selectedPlot.toLocaleString()}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 flex justify-between">
                  <span>Duration</span>
                  <span className="text-gold-500 font-bold">{months} Months</span>
                </label>
                <input 
                  type="range" 
                  min="12" 
                  max="60" 
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full accent-gold-500 h-2 bg-navy-900 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="bg-navy-900 p-6 rounded-sm border border-gold-500/20 mt-8">
                <div className="text-sm text-gray-400 mb-1">Estimated Monthly Installment</div>
                <div className="text-3xl font-bold text-gold-400 mb-2 whitespace-nowrap">
                  <span className="text-lg">Rs.</span> {calculateEMI()}
                </div>
                <div className="text-xs text-gray-500">*Exclusive of development charges and taxes</div>
              </div>

              <button className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-sm mt-4 transition-colors">
                Request Details
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
