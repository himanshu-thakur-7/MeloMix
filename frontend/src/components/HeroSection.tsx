import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { Button } from './ui/button';
import { Music, Headphones } from 'lucide-react';

const HeroSection = () => {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Unify Your Music Experience
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
          Connect multiple streaming services, manage your library, and create AI-powered playlists in one seamless experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-full flex items-center gap-2">
            <Music className="h-5 w-5" />
            Get Started
          </Button>
          <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full flex items-center gap-2">
            <Headphones className="h-5 w-5" />
            Learn More
          </Button>
        </div>
      </div>
    </WavyBackground>
  );
};

export default HeroSection;