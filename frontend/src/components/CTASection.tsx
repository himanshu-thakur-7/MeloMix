import React from 'react';
import { AnimatedGradient } from './ui/animated-gradient';
import { Button } from './ui/button';
import { Music, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <AnimatedGradient className="py-20" containerClassName="bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Music Experience?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Join thousands of music lovers who have unified their listening experience across platforms. Get started today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black text-white hover:bg-black/90 text-lg px-8 py-6 rounded-full flex items-center gap-2">
            <Music className="h-5 w-5" />
            Get Started Free
          </Button>
          <Button className="bg-transparent border-2 border-black text-black hover:bg-black/5 text-lg px-8 py-6 rounded-full flex items-center gap-2">
            See Pricing
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </AnimatedGradient>
  );
};

export default CTASection;