import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col">
      {/* HERO TOP (80vh) */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-background.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/90 via-gray-500/50 to-black" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-6 md:px-16">
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center text-white">
            <h1 className="font-playfair-display text-[42px] md:text-[64px] font-semibold mb-4">
              Dr. Ugo Okafor
            </h1>

            <p className="font-roboto text-base md:text-lg tracking-wide">
              Chief Executive, SunTrust Atlantic Energies Limited
            </p>
            <div className="w-[85%] h-[2px] bg-yellow-600 mb-4"></div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-end justify-end">
            <div className="relative h-full w-[320px] md:w-[420px]">
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

      {/* STATS BAR (20vh) */}
      <div className="h-[20vh] bg-white flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
          <div className="flex items-center divide-x divide-yellow-600">
            <Stat value="20+" label="Years Experience" />
            <Stat value="3" label="Board Positions" />
            <Stat value="2" label="Major Fields" />
            <Stat value="100%" label="Commitment" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex-1 flex flex-col items-center justify-center py-6">
    <span className="text-2xl font-semibold text-black">{value}</span>
    <span className="text-sm text-gray-600 tracking-wide">{label}</span>
  </div>
);

export default Hero;
