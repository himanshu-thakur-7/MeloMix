import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import { Music, Share2, Shuffle, Radio, Layers, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Multi-Platform Integration",
      description: "Connect Spotify, Apple Music, YouTube Music and more with secure OAuth authentication.",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Unified Library",
      description: "View and manage all your music from different services in one intuitive interface.",
      icon: <Music className="h-6 w-6" />,
    },
    {
      title: "Playlist Migration",
      description: "One-click migration and continuous syncing of playlists between services.",
      icon: <Share2 className="h-6 w-6" />,
    },
    {
      title: "AI-Powered Playlists",
      description: "Generate mood-specific playlists using natural language and AI analysis.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: "Seamless Playback",
      description: "Stream music directly in the app without switching between services.",
      icon: <Radio className="h-6 w-6" />,
    },
    {
      title: "Mashup Capabilities",
      description: "Create unique mashups and remixes with AI-powered audio tools.",
      icon: <Shuffle className="h-6 w-6" />,
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <HoverEffect items={features} />
      </div>
    </div>
  );
};

export default FeaturesSection;