import React from "react";
import Image from "next/image";

interface EducationProps {
  id?: string;
}

const Education: React.FC<EducationProps> = ({ id }) => {
  const educations = [
    {
      school: "MIT Sloan School of Management",
      program: "Advanced Management Program",
      description:
        "Ugo is a Graduate of the Advance Advanced Management Program of MIT.",
      logo: "/mit-logo.png",
    },
    {
      school: "Harvard Business School",
      program: "Executive Education",
      description:
        "Ugo is a graduate of the Owner/President Management Program (OPM) 45.",
      logo: "/harvard-logo.png",
    },
    {
      school: "Vanderbilt University School of Law",
      program: "",
      description:
        "Comprehensive legal education with distinction, providing foundational expertise in corporate law, regulatory frameworks, and governance structures essential for energy sector leadership.",
      awards: ["Dean’s List", "Scholastic Excellence Award"],
      logo: "/vanderbilt-logo.png",
    },
    {
      school: "University of Nigeria, Nsukka (Enugu Campus)",
      program: "Bachelor of Laws (LL.B)",
      description:
        "Academic foundation at Nigeria's first indigenous law faculty. The program provided a rigorous grounding in the pillars of Nigerian Jurisprudence, Commercial Law, and Statutory Frameworks. Establishing a strong analytical basis for corporate and energy sector leadership.",
      logo: "/nsukka-logo.jpg",
    },
    {
      school: "Nigerian Law School",
      program: "Barrister at Law (B.L)",
      description:
        "Professional qualification and Call to the Nigerian Bar. Specialized training in Corporate Law Practice, Legal Drafting, and Regulatory Compliance, ensuring the expert navigation of the complex legal and statutory landscape of Nigeria's upstream oil and gas industry.",
      logo: "/nigerian-law-school-logo.png",
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
          <p className="text-xs md:text-sm tracking-widest font-roboto mb-2 bg-[#D7AA5F]/30 px-5 py-1 text-[#D7AA5F] rounded-2xl">
            Academic Excellence
          </p>
          <h2 className="text-3xl md:text-4xl font-playfair-display font-bold text-[#202020]">
            Education & Credentials
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-8 md:space-y-12">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="
                bg-white rounded-xl
                px-6 py-8
                md:px-8 md:py-12
                mx-auto
                max-w-xl md:max-w-none
              "
            >
              {/* Logo */}
              <div className="w-14 h-14 md:w-16 md:h-16 relative mb-5">
                <Image
                  src={edu.logo}
                  alt={edu.school}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 120px, 160px"
                />
              </div>

              {/* School */}
              <h3 className="text-lg md:text-xl font-playfair-display font-bold text-[#202020]">
                {edu.school}
              </h3>

              {/* Program */}
              {edu.program && (
                <p className="text-sm font-semibold text-[#444444] mt-2">
                  {edu.program}
                </p>
              )}

              {/* Description */}
              {edu.description && (
                <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
                  {edu.description}
                </p>
              )}

              {/* Awards */}
              {edu.awards && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {edu.awards.map((award, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-[#D7AA5F]/15 text-[#8A6A2F]"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
