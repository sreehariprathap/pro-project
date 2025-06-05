import Hero from "@/components/home/hero";
import NavRibbon from "@/components/navigation/nav-ribbon";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex">
      {/* Left side - 20% with orange stripe and icon */}
      <div className="w-1/5 flex flex-col items-center justify-center relative">
        {/* Orange stripe line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-3/4 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-lg"></div>
        
        {/* Orange round icon in center of stripe */}
        <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
          <ChevronDown className="text-white" />
        </div>
      </div>

      {/* Right side - 80% with just the image */}
      <div className="w-4/5 flex items-center justify-center p-12 relative">
        <Hero/>
      </div>

      {/* Navigation Ribbon - Fixed position */}
      <NavRibbon />
    </div>
  );
}
