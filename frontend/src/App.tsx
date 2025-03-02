import React from 'react';
import MusicAppHeader from './components/MusicAppHeader';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AIPlaylistSection from './components/AIPlaylistSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <MusicAppHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <AIPlaylistSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;