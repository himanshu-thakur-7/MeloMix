import React from 'react';
import { TextRevealCard } from './ui/text-reveal-card';
import { Spotlight } from './ui/spotlight';
import { MovingBorder } from './ui/moving-border';

const AIPlaylistSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">AI-Powered Playlist Generation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Spotlight className="h-full">
              <TextRevealCard
                text="Ask for the perfect playlist"
                revealText="Create a chill, late-night vibe mix with some jazz influences"
                className="h-[300px] w-full"
              >
                <div className="h-full flex items-center justify-center">
                  <p className="text-base text-white/80 max-w-xs text-center">
                    Our AI understands natural language and creates the perfect playlist based on your mood, preferences, and music history.
                  </p>
                </div>
              </TextRevealCard>
            </Spotlight>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="p-6 bg-gray-800 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">Natural Language Prompts</h3>
              <p className="text-gray-300">
                Simply describe the vibe you want, and our AI will generate a custom playlist that matches your mood.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">Collaborative Input</h3>
              <p className="text-gray-300">
                Invite friends to influence the playlist creation, combining everyone's music taste into one perfect mix.
              </p>
            </div>
            
            <MovingBorder className="p-6">
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-3">Cross-Platform Analysis</h3>
                <p className="text-gray-300">
                  Our AI analyzes your listening habits across all connected platforms to create truly personalized recommendations.
                </p>
              </div>
            </MovingBorder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPlaylistSection;