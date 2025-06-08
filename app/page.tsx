'use client';

import Hero from "@/components/home/hero";
import NavRibbon from "@/components/navigation/nav-ribbon";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hide video when scrolled past 20% of viewport height for more responsive transition
      if (scrolled > windowHeight * 0.2) {
        setShowVideo(false);
      } else {
        setShowVideo(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <section className="min-h-screen relative flex overflow-hidden">
        {/* Background Videos - Only show when showVideo is true */}
        {showVideo && (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 block dark:hidden transition-opacity duration-500"
            >
              <source src="/bg-white.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 hidden dark:block transition-opacity duration-500"
            >
              <source src="/bg-black.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        )}
        
        {/* Fallback background when video is hidden */}
        <div className={`absolute inset-0 bg-background transition-opacity duration-500 ${showVideo ? 'opacity-0' : 'opacity-100'}`}></div>
        
        {/* Optional overlay for better content visibility */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20 z-1"></div>
        
        {/* Left side - 20% with orange stripe and icon */}
        <div className="w-1/5 flex flex-col items-center justify-center relative z-10">
          {/* Orange stripe line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-3/4 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-lg"></div>
          
          {/* Orange round icon in center of stripe */}
          <div 
            className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={scrollToNextSection}
          >
            <ChevronDown className="text-white" />
          </div>
        </div>

        {/* Right side - 80% with just the image */}
        <div className="w-4/5 flex items-start justify-start p-12 relative z-10">
          <Hero/>
        </div>

        {/* Navigation Ribbon - Fixed position */}
        <NavRibbon />
      </section>

      {/* Next Section with Default Background */}
      <section id="next-section" className="min-h-screen bg-background relative">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-8">Next Section</h2>
          <p className="text-lg text-center text-muted-foreground">
            This section has the default app background. Add your content here.
          </p>
        </div>
      </section>
    </div>
  );
}
