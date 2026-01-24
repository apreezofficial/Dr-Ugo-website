import React from "react";
import Image from "next/image";

const Education: React.FC = () => {
  const educations = [
    {
      school: "MIT Sloan School of Management",
      program: "Advanced Management Program",
      description:
        "Ugo is a Graduate of the Advance Advanced Management Program of MIT.",
      type: "Executive Education",
      logo: "/mit-logo.png",
    },
    {
      school: "Harvard Business School",
      program: "Executive Education",
      description:
        "Ugo is a graduate of the Owner/President Management (OPM) 45.",
      type: "Executive Education",
      logo: "/harvard-logo.png",
    },
    {
      school: "Vanderbilt University School of Law",
      program: "Juris Doctor (JD)",
      description:
        "Comprehensive legal education with distinction, providing foundational expertise in corporate law, regulatory frameworks, and governance structures essential for energy sector leadership.",
      type: "Professional Degree",
      awards: ["Dean’s List", "Scholastic Excellence Award"],
      logo: "/vanderbilt-logo.png",
    },
    {
      school: "University of Nigeria, Nsukka",
      program: "",
      description: "",
      type: "",
      logo: "/nsukka-logo.jpg",
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-[#F7F7F7]">
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
                <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base max-w-2xl">
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

              {/* Divider */}
              {edu.type && (
                <div className="border-t border-gray-200 mt-6 pt-4">
                  <span className="text-xs font-semibold tracking-wide text-[#D7AA5F]">
                    {edu.type}
                  </span>
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

// import React from "react";
// import Image from "next/image";

// const Education: React.FC = () => {
//   const educations = [
//     {
//       school: "MIT Sloan School of Management",
//       program: "Advanced Management Program",
//       description:
//         "Ugo is a Graduate of the Advance Advanced Management Program of MIT.",
//       type: "Executive Education",
//       logo: "/mit-logo.png",
//     },
//     {
//       school: "Harvard Business School",
//       program: "Executive Education",
//       description:
//         "Ugo is a graduate of the Owner/President Management (OPM) 45.",
//       type: "Executive Education",
//       logo: "/harvard-logo.png",
//     },
//     {
//       school: "Vanderbilt University School of Law",
//       program: "Juris Doctor (JD)",
//       description:
//         "Comprehensive legal education with distinction, providing foundational expertise in corporate law, regulatory frameworks, and governance structures essential for energy sector leadership.",
//       type: "Professional Degree",
//       awards: ["Dean’s List", "Scholastic Excellence Award"],
//       logo: "/vanderbilt-logo.png",
//     },
//     {
//       school: "University of Nigeria, Nsukka",
//       program: "",
//       description: "",
//       type: "",
//       logo: "/nsukka-logo.jpg",
//     },
//   ];

//   return (
//     <section id="education" className="py-24 bg-[#F7F7F7]">
//       <div className="container mx-auto px-4 max-w-5xl">
//         {/* Header */}
//         <div className="flex flex-col items-center mb-16">
//           <p className="text-sm tracking-widest font-roboto w-50 mb-2 bg-[#D7AA5F]/30 px-5 py-1 text-[#D7AA5F] rounded-2xl">
//             Academic Excellence
//           </p>
//           <h2 className="text-4xl font-playfair-display font-bold text-[#202020]">
//             Education & Credentials
//           </h2>
//         </div>

//         {/* Education Cards */}
//         <div className="space-y-12">
//           {educations.map((edu, idx) => (
//             <div key={idx} className="bg-white rounded-xl px-8 py-12 text-left">
//               {/* Logo */}
//               <div className="w-16 h-16 relative mb-6">
//                 <Image
//                   src={edu.logo}
//                   alt={edu.school}
//                   // width={80}
//                   // height={80}
//                   fill
//                   className="object-contain"
//                 />
//               </div>

//               {/* <span className="absolute bg-[#D7AA5F] h-[2px] w-7 mt-4" /> */}

//               {/* School */}
//               <h3 className="text-xl font-playfair-display font-bold text-[#202020]">
//                 {edu.school}
//               </h3>

//               {/* Program */}
//               <p className="text-sm font-semibold text-[#444444] mt-2">
//                 {edu.program}
//               </p>

//               {/* Description */}
//               <p className="text-gray-600 mt-4 leading-relaxed max-w-2xl">
//                 {edu.description}
//               </p>

//               {/* Awards */}
//               {edu.awards && (
//                 <div className="flex flex-wrap justify-start gap-3 mt-6">
//                   {edu.awards.map((award, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-3 py-1 rounded-full bg-[#D7AA5F]/15 text-[#8A6A2F]"
//                     >
//                       {award}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Divider */}
//               <div className="border-t border-gray-200 mt-8 pt-4">
//                 <span className="text-xs font-semibold tracking-wide text-[#D7AA5F]">
//                   {edu.type}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
