import React from "react";
import Image from "next/image";

const LeadershipCareer: React.FC = () => {
  const timeline = [
    {
      period: "2000s – Present",
      role: "Chief Executive Officer",
      organization: "SunTrust Atlantic Energies Limited",
      description:
        "Leading strategic direction and operational excellence for an upstream oil and gas company with active petroleum licenses and production operations in Nigeria’s energy sector.",
      points: [
        "Executes corporate strategy and long-term growth objectives as defined by the Board of SunTrust Atlantic Energies.",
        "Oversees upstream asset development and portfolio expansion",
        "Ensures strong governance, risk management, and partner alignment",
        "Drives operational excellence and sustainable value creation as defined by the Board of SunTrust Atlantic Energies",
      ],
    },
    {
      period: "Since Inception",
      role: "Operating & Management Committee Member",
      organization: "Umusadege Field (PML 22) Joint Venture",
      description:
        "Provides sustained leadership oversight across SunTrust Atlantic’s participation in the Umusadege Field, supporting efficient production and disciplined operational performance.",
      points: [
        "Represents SunTrust Atlantic On Operating And Management Committees",
        "Guides Engagement Across The Full Production Value Chain as articulated by the Board of SunTrust Atlantic Energies",
        "•Supports Development Planning, Production Optimization, And Cost Discipline",
        "Maintains Strong Joint-Venture Governance And Performance Standards",
      ],
    },
    {
      period: "2020",
      role: "Lead Executive, Marginal Field Acquisition",
      organization: "PPL 202 (Formerly OML 23)",
      description:
        "Led the successful acquisition of a 35.82% participating interest in PML 66 during Nigeria's 2020 bid round, strengthening SunTrust Atlantic’s asset base.",
      points: [
        "Directed bid strategy and partner coordination",
        "Secured a significant equity position in a high-potential asset",
        "Expanded the company's long-term production and growth pipeline",
      ],
    },
    {
      period: "2020 – Early Development Phase",
      role: "Inaugural Chairman, Operating Committee",
      organization: "PPL 202 Joint Venture",
      description:
        "Established the early governance and operational framework required to transition PPL 202 from acquisition to development.",
      points: [
        "Chaired operating committee deliberations and strategic decisions",
        "Aligned joint-venture partners on development priorities",
        "Set operational standards and performance expectations",
        "Supported early-stage planning and execution readiness",
      ],
    },
  ];

  return (
    <section id="leadershipCareer" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-sm tracking-widest font-roboto mb-2 bg-[#D7AA5F]/30 px-5 py-1 text-[#D7AA5F] rounded-2xl">
            Professional Timeline
          </p>
          <h2 className="text-4xl font-playfair-display font-bold text-[#202020]">
            Leadership & Career
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-10">
              {/* Timeline Dot */}
              <span className="absolute left-[-75] top-0 w-7 h-7 rounded-full bg-[#D7AA5F]" />
              <span className="absolute left-[-63] mt-10 top-0 w-[2px] h-70 bg-[#D7AA5F]" />

              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 h-[342px]">
                <p className="text-xs text-[#D7AA5F] font-roboto mb-3 tracking-wide w-48 text-start rounded-2xl ">
                  {item.period}
                </p>
                <h3 className="text-xl font-playfair-display font-bold text-[#202020]">
                  {item.role}
                </h3>
                <p className="font-roboto text-sm text-[#D7AA5F] mb-2 mt-1">
                  {item.organization}
                </p>
                <p className="text-[#6D6D6D] mb-4 h-16">{item.description}</p>
                <ul className="list-disc list-inside space-y-1 h-32 text-[#767676] bg-[#F7F7F7] p-2 flex flex-col justify-center">
                  {item.points.map((point, i) => (
                    <li className="text-md" key={i}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Attribute Cards */}
      <div className="flex items-center justify-center mt-20 mx-2">
        {/* Leadership */}
        {/* <div className="bg-gray-100 rounded-xl p-6 text-center">
            <h3 className="font-playfair-display text-xl font-bold mb-3">
              Leadership
            </h3>
            <p className="text-[#4D4D4D]">
              A seasoned executive with over two decades of experience in
              management, strategy, and Nigeria’s upstream oil and gas sector.
            </p>
          </div> */}

        {/* Leadership */}
        <div className="relative mx-4 h-[731px] w-[400px] rounded-[50px] bg-[#F3F3F3] overflow-hidden p-8">
          {/* Text */}
          <div className="z-10 relative">
            <p className="font-roboto text-2xl font-bold mb-3 text-black tracking-wider">
              Leadership
            </p>
            <p className="text-[#4D4D4D] leading-relaxed font-roboto">
              A seasoned executive with over two decades of experience in
              management, strategy, and Nigeria’s upstream oil and gas sector.
            </p>
          </div>

          {/* Image */}
          <div className="absolute bottom-0 left-0 w-full h-[520px]">
            <Image
              src="/dr-ugo-okafor-hero-image.svg"
              alt="Leadership portrait"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Industry Impact */}
        <div className="relative rounded-[50px] mx-4 overflow-hidden h-[731px] w-[400px]">
          <Image
            src="/industry-impact-image.png"
            alt="Industry Impact"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-start p-6">
            <div>
              <p className="font-roboto text-2xl font-bold text-white mb-2 tracking-wider">
                Industry Impact
              </p>
              <p className="text-[#FDFDFD] leading-relaxed font-roboto">
                Plays a central role in the development and management of key
                upstream assets, including the Umusadege and Egbolom Fields.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Stewardship */}
        <div className="relative rounded-[50px] mx-4 overflow-hidden h-[731px] w-[400px]">
          <Image
            src="/vision-and-stewardship-image.png"
            alt="Vision & Stewardship"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0  flex items-start p-6">
            <div>
              <p className="font-roboto text-2xl font-bold mb-3 text-black tracking-wider">
                Vision & Stewardship
              </p>
              <p className="text-[#4D4D4D] leading-relaxed font-roboto">
                Dr. Okafor continues to steer SunTrust Atlantic Energies toward
                sustainable growth, responsible energy development, and enduring
                impact within Nigeria’s energy landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Stewardship */}
        {/* <div className="relative mx-4 h-[731px] w-[400px] rounded-[50px] bg-[#FFF3DB] overflow-hidden p-8">
          Text
          <div className="z-10 relative">
            <h3 className="font-playfair-display text-2xl font-bold mb-3 text-black">
              Vision & Stewardship
            </h3>
            <p className="text-[#4D4D4D] leading-relaxed">
              Dr. Okafor continues to steer SunTrust Atlantic Energies toward
              sustainable growth, responsible energy development, and enduring
              impact within Nigeria’s energy landscape.
            </p>
          </div> */}

        {/* Illustration */}
        {/* <div className="absolute bottom-0 left-0 w-full h-[420px]">
            <Image
              src="/vision-and-stewardship-image.png"
              alt="Vision & Stewardship"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div> */}

        {/* Vision & Stewardship */}
        {/* <div className="bg-[#FFF3DB] rounded-xl p-6">
            <h3 className="font-playfair-display text-xl font-bold mb-3">
              Vision & Stewardship
            </h3>
            <p className="text-[#4D4D4D]">
              Dr. Okafor continues to steer SunTrust Atlantic Energies toward
              sustainable growth, responsible energy development, and enduring
              impact within Nigeria’s energy landscape.
            </p>
          </div> */}
      </div>
    </section>
  );
};

export default LeadershipCareer;
