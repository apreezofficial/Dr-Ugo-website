import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-[#0A0909]">
       <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-800/50 to-black" />
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold font-playfair-display text-white">
          {title}
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHero;
