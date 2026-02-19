'use client'
import React from "react";
import Image from "next/image";

const NIESVideoSection = () => {
  // SharePoint Stream URL provided by the user
  const videoUrl = "https://suntrustoil-my.sharepoint.com/personal/hanyele_suntrustoil_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhanyele%5Fsuntrustoil%5Fcom%2FDocuments%2FSunTrust%20AE%20Rebranding%2FWebsite%20Pictures%2FWebsite%20Corrections%2FVID%2D20250226%2DWA0033%20copy%2Ewebm&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ee2467cac%2D1c77%2D47c4%2Dade8%2Dd876a2708bb9";

  const handlePlayClick = () => {
    // Opens the video in a new tab
    window.open(videoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          
          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm tracking-widest font-roboto mb-2 bg-[#D7AA5F]/20 px-5 py-1 text-[#D7AA5F] inline-block rounded-2xl w-fit">
                Energy News
              </p>
              <p className="text-[#D7AA5F] font-semibold text-sm">May 19, 2025</p>
            </div>

            <h2 className="text-4xl font-bold text-[#202020] font-playfair-display leading-tight">
              SunTrust Atlantic at NIES 2025
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Dr. Ugo Okafor, SunTrust Atlantic&apos;s Chief Executive, shared his insights during a panel session 
              at the Nigeria International Energy Summit (NIES). Explore the strategic vision and 
              operational frameworks discussed during this landmark event.
            </p>
            
            <a 
              href="https://www.suntrustatlantic.com/blog/68a1e06c1d9de07ee68b9f6d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#D7AA5F] font-bold hover:underline gap-2 group"
            >
              Read Full Article 
              <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Video Side */}
          <div className="w-full lg:w-1/2">
            <div 
              onClick={handlePlayClick}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a1a] group cursor-pointer border border-[#D7AA5F]/10"
            >
              <div className="relative w-full h-full">
                {/* Thumbnail Placeholder */}
                <Image
                  src="/industry-impact-image.png"
                  alt="NIES 2025 Energy Summit"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Pulse Rings */}
                    <span className="absolute inline-flex h-20 w-20 animate-ping rounded-full bg-[#D7AA5F] opacity-75"></span>
                    <span className="absolute inline-flex h-24 w-24 animate-pulse rounded-full bg-[#D7AA5F]/30"></span>

                    {/* Button */}
                    <div className="relative z-10 bg-[#D7AA5F] text-white p-6 rounded-full group-hover:bg-[#c49850] transition-colors shadow-xl">
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Caption on Thumbnail */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/90 text-sm font-roboto tracking-wide uppercase">Watch Session Highlights</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NIESVideoSection;
