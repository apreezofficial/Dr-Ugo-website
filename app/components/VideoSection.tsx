import React, { useState } from "react";
import Image from "next/image";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "5_C4PRYg5dc";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-sm tracking-widest font-roboto mb-2 bg-[#D7AA5F]/20 px-5 py-1 text-[#D7AA5F] inline-block rounded-2xl">
              Featured Appearance
            </p>
            <h2 className="text-4xl font-bold text-[#202020] font-playfair-display leading-tight">
              Ugo Okafor’s Participation at the 2026 Nigerian International Energy Summit
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Explore key insights from the 2026 Summit, where Dr. Ugo Okafor 
              discusses the future of Nigeria&apos;s energy landscape and strategic 
              operational frameworks.
            </p>
          </div>

          {/* Video/Thumbnail Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group cursor-pointer">
              {!isPlaying ? (
                <div className="relative w-full h-full" onClick={() => setIsPlaying(true)}>
                  {/* Thumbnail */}
                  <Image 
                    src={`https://img.youtube.com{videoId}/maxresdefault.jpg`}
                    alt="Video Thumbnail"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                  />
                  
                  {/* Pulsing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      {/* Pulse Rings */}
                      <span className="absolute inline-flex h-20 w-20 animate-ping rounded-full bg-[#D7AA5F] opacity-75"></span>
                      <span className="absolute inline-flex h-24 w-24 animate-pulse rounded-full bg-[#D7AA5F]/30"></span>
                      
                      {/* Central Button */}
                      <button className="relative z-10 bg-[#D7AA5F] text-white p-6 rounded-full hover:bg-[#c49850] transition-colors shadow-xl">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com{videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
