import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This app has completely changed how I listen to music. I no longer have to switch between different services!",
      name: "Alex Johnson",
      title: "Music Producer"
    },
    {
      quote: "The AI playlist generation is mind-blowing. It understands my mood and creates the perfect mix every time.",
      name: "Sarah Williams",
      title: "Spotify Premium User"
    },
    {
      quote: "Being able to sync my playlists across services has saved me so much time. This is the future of music streaming.",
      name: "Michael Chen",
      title: "Apple Music Subscriber"
    },
    {
      quote: "The mashup capabilities are incredible. I've created some unique mixes that I couldn't make anywhere else.",
      name: "Jessica Rodriguez",
      title: "DJ & Content Creator"
    },
    {
      quote: "I was skeptical at first, but now I can't imagine going back to using separate apps for my music needs.",
      name: "David Kim",
      title: "YouTube Music User"
    },
  ];

  return (
    <div className="bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">What Our Users Say</h2>
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  );
};

export default TestimonialsSection;