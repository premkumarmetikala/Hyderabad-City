/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Programs } from './components/Programs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Awards } from './components/Awards';
import { Testimonial } from './components/Testimonial';
import { Faqs } from './components/Faqs';
import { Footer } from './components/Footer';
import { GetStartedModal } from './components/GetStartedModal';
import { BackgroundAnimation } from './components/BackgroundAnimation';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState('Tech & Startup Innovation');

  const handleOpenGetStarted = (interest = 'Tech & Startup Innovation') => {
    setSelectedInterest(interest);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen text-white selection:bg-white selection:text-black">
      <BackgroundAnimation />
      {/* 1. Navigation */}
      <Navbar onOpenGetStarted={() => handleOpenGetStarted('Tech & Startup Innovation')} />

      <main className="w-full">
        {/* 2. Hero Section */}
        <Hero onOpenGetStarted={() => handleOpenGetStarted('Tech & Startup Innovation')} />

        {/* 3. About Us Section */}
        <AboutUs onOpenGetStarted={() => handleOpenGetStarted('Heritage & Architectural Conservation')} />

        {/* 4. Programs Section */}
        <Programs onOpenGetStarted={() => handleOpenGetStarted('Arts, Crafts & Gastronomy')} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Awards Section */}
        <Awards />

        {/* 7. Testimonials Section */}
        <Testimonial />

        {/* 8. FAQs Section */}
        <Faqs />
      </main>

      {/* 9. Footer Section */}
      <Footer />

      {/* Interactive Modal */}
      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialInterest={selectedInterest}
      />
    </div>
  );
}
