import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col">
      {/* HERO TOP */}
      <div className="relative h-[85vh] md:h-[80vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-background.png"
            alt="Hero Background"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/90 via-gray-500/50 to-black" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-6 md:px-16">
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center text-white pt-20 md:pt-0">
            <h1 className="font-playfair-display text-[36px] sm:text-[42px] md:text-[64px] font-semibold mb-4">
              Dr. Ugo Okafor
            </h1>

            <p className="font-roboto text-sm sm:text-base md:text-lg tracking-wide max-w-md">
              Founder/Chief Executive, SunTrust Atlantic Energies Limited
            </p>

            <div className="w-[100%] h-[2px] bg-yellow-600 mt-4"></div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-end justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative h-[320px] sm:h-[380px] md:h-full w-[260px] sm:w-[320px] md:w-[420px]">
              <Image
                src="/dr-ugo-okafor-hero-image.svg"
                alt="Dr. Ugo Okafor"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="bg-white py-6 md:h-[20vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x sm:divide-x divide-yellow-600">
            <Stat value="20+" label="Years Experience" />
            <Stat value="Various" label="Board Positions" />
            <Stat value="2" label="Major Oil Fields" />
            <Stat value="100%" label="Commitment" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center py-4">
    <span className="text-xl sm:text-2xl font-semibold text-black">
      {value}
    </span>
    <span className="text-xs sm:text-sm text-gray-600 tracking-wide text-center">
      {label}
    </span>
  </div>
);

export default Hero;
