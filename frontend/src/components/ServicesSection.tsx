import React from 'react';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import { Tabs } from './ui/tabs';

const ServicesSection = () => {
  const services = [
    {
      title: "Spotify",
      value: "spotify",
      content: (
        <CardContainer className="inter-var">
          <CardBody className="bg-green-600 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Spotify Integration
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-sm max-w-sm mt-2"
            >
              Connect your Spotify account to access your playlists, liked songs, and listening history. Our app seamlessly integrates with Spotify's API to provide a unified experience.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Spotify visualization"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
              >
                Connect Account
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
              >
                Learn More
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ),
    },
    {
      title: "Apple Music",
      value: "apple",
      content: (
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-br from-pink-500 to-purple-500 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Apple Music Integration
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-sm max-w-sm mt-2"
            >
              Link your Apple Music account to bring your entire library into our unified platform. Access your playlists, albums, and artists all in one place.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Apple Music visualization"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
              >
                Connect Account
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
              >
                Learn More
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ),
    },
    {
      title: "YouTube Music",
      value: "youtube",
      content: (
        <CardContainer className="inter-var">
          <CardBody className="bg-red-600 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              YouTube Music Integration
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-sm max-w-sm mt-2"
            >
              Connect to YouTube Music to access your playlists, liked videos, and subscriptions. Our platform makes it easy to bring your YouTube music experience into one unified app.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="YouTube Music visualization"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
              >
                Connect Account
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
              >
                Learn More
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ),
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Supported Services</h2>
        <div className="flex justify-center">
          <Tabs tabs={services} />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;