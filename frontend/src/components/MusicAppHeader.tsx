import React from 'react';
import { FloatingNav } from './ui/floating-navbar';
import { Music, Home, Search, Library, User } from 'lucide-react';

const MusicAppHeader = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4" />
    },
    {
      name: "Discover",
      link: "/discover",
      icon: <Search className="h-4 w-4" />
    },
    {
      name: "Library",
      link: "/library",
      icon: <Library className="h-4 w-4" />
    },
    {
      name: "Profile",
      link: "/profile",
      icon: <User className="h-4 w-4" />
    }
  ];

  return (
    <FloatingNav navItems={navItems} />
  );
};

export default MusicAppHeader;