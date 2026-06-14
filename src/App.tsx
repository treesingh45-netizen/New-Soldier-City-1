/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Location from './components/Location';
import Amenities from './components/Amenities';
import PaymentPlan from './components/PaymentPlan';
import Investment from './components/Investment';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import LeadGeneration from './components/LeadGeneration';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 border-x-8 border-gold-500/10 layout-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Location />
        <Amenities />
        <PaymentPlan />
        <Investment />
        <Gallery />
        <Testimonials />
        <LeadGeneration />
      </main>
      <Footer />
    </div>
  );
}
