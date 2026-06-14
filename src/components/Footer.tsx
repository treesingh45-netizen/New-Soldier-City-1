import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-surface-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-gradient mb-6">New Soldier City</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              A premium gated community offering modern living and exceptional investment opportunities on the Karachi-Hyderabad M-9 Motorway. A Wish Full of Desire.
            </p>
            <div className="text-sm">
              <span className="text-gray-500 font-medium">Marketing Partner: </span>
              <span className="text-gold-500 font-bold tracking-wider">SAS Marketing</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-sans text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Features', 'Location', 'Amenities', 'Payment Plan'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-sans text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="text-gold-500 shrink-0 mt-0.5" size={16} />
                <span>0311 600 00 19</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="text-gold-500 shrink-0 mt-0.5" size={16} />
                <span>Office #51, 3rd Floor, RJ Shopping Mall, Gulshan-e-Iqbal Block-10, Karachi</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400 mt-6 pt-4 border-t border-surface-border">
                <MapPin className="text-gold-500 shrink-0 mt-0.5" size={16} />
                <span>Site Address: Karachi – Hyderabad M-9 Motorway</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="bg-navy-800 p-4 rounded-sm border border-surface-border mb-8 overflow-hidden h-[300px]">
          {/* Embedded Google Map */}
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0 }} 
            src="https://maps.google.com/maps?q=RJ%20Shopping%20Mall,%20Gulshan-e-Iqbal%20Block-10,%20Karachi&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </div>

        <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} New Soldier City. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="text-gray-500 hover:text-gold-500">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gold-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
