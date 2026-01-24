import React from "react";
import Image from "next/image";

const Biography: React.FC = () => {
  return (
    <section id="biography" className="pt-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-sm tracking-widest font-roboto mb-2 bg-[#D7AA5F]/30 px-5 py-1 text-[#D7AA5F] rounded-2xl">
            Professional Biography
          </p>
          <h2 className="text-3xl font-bold text-[#202020] text-center font-playfair-display max-w-2xl">
            Professional Biography
          </h2>
        </div>

        {/* Biography Content */}
        <div className="space-y-8 flex flex-col items-center justify-center mb-16">
          <div className="bg-white w-[57%] p-10 rounded-lg space-y-6">
            <h3 className="text-xl font-bold font-playfair-display mb-2 tracking-wide text-[#202020]">
              Executive Summary
            </h3>
            <p className="text-[#202020] pt-4 leading-relaxed tracking-wide">
              Dr. Ugo Okafor is a distinguished energy executive with over two
              decades of exemplary leadership in Nigeria&apos;s upstream oil and
              gas sector. As Chief Executive of SunTrust Atlantic Energies
              Limited, he has demonstrated exceptional acumen in asset
              acquisition, field development, and strategic portfolio
              management.
            </p>
            <p className="text-[#202020] pt-4 leading-relaxed tracking-wide">
              His career is marked by significant achievements in securing and
              developing critical energy assets, including the Umusadege Field
              (PML 22) and Egbolom Field (PPL 66). Dr. Okafor&apos;s success in
              the competitive marginal field award process underscores his
              strategic capabilities and deep understanding of Nigeria&apos;s
              regulatory and operational landscape.
            </p>
          </div>

          <div className="bg-white w-[57%] p-8 rounded-lg space-y-6">
            <h3 className="text-xl font-bold font-playfair-display mb-2 tracking-wide text-[#202020]">
              Professional Journey
            </h3>
            <p className="text-[#202020] pt-4 leading-relaxed tracking-wide">
              Dr. Okafor&apos;s professional trajectory reflects a consistent
              pattern of achievement and advancement. His leadership philosophy
              emphasizes operational excellence, sustainable development, and
              value creation for all stakeholders. Throughout his career, he has
              successfully navigated complex regulatory environments, built
              high-performing teams, and delivered results in challenging market
              conditions.
            </p>
            <p className="text-[#202020] pt-4 leading-relaxed tracking-wide">
              At SunTrust Atlantic Energies Limited, Dr. Okafor has overseen the
              transformation of marginal field awards into productive assets,
              demonstrating the technical and commercial expertise required for
              success in Nigeria&apos;s competitive upstream sector. His
              approach combines rigorous technical analysis with strategic
              financial planning and stakeholder management.
            </p>
          </div>

          <div className="bg-white w-[57%] p-8 rounded-lg space-y-6">
            <h3 className="text-xl font-bold font-playfair-display mb-2 tracking-wide text-[#202020]">
              Leadership Philosophy
            </h3>
            <p className="text-[#202020] pt-4 leading-relaxed tracking-wide">
              Dr. Okafor&apos;s leadership philosophy centers on the principle
              that sustainable value creation in the energy sector requires
              simultaneous attention to operational performance, regulatory
              compliance, stakeholder relationships, and long-term
              infrastructure development.
            </p>
            <p className="text-[#202020] pt-4 leading-relaxed tracking-wide">
              He advocates for data-driven decision-making supported by robust
              governance frameworks, believing that institutional strength
              provides the foundation for both risk management and opportunity
              capitalization. This approach has guided strategic investments in
              production capacity, pipeline infrastructure, and organizational
              capability development.
            </p>
            <p className="text-[#202020] pt-4 leading-relaxed tracking-wide">
              His commitment to industry advancement extends beyond corporate
              boundaries through active participation in sector forums, policy
              dialogue, and professional knowledge sharing that contributes to
              the broader development of Nigeria&apos;s energy industry.
            </p>
          </div>
        </div>
      </div>

      {/* Image & Quote */}
      <div className="flex flex-col md:flex-row w-full min-h-[55vh] bg-[#0F0344]">
        {/* Image Side */}
        <div className="relative w-full md:w-2/5 h-[55vh] overflow-hidden top-2.5 ml-27.5">
          <Image
            src="/Dr_Ugo-removebg.png"
            alt="Dr Ugo Okafor"
            fill
            priority
            className="absolute w-[66%] object-cover object-[55%_21%] scale-95 mix-blend-luminosity"
          />
        </div>

        {/* Quote Side */}
        <div className="w-full md:w-3/5 bg-[#0F0344] flex items-center justify-start px-8 md:px-16">
          <div className="text-start text-white max-w-xl">
            <h3 className="text-xl font-roboto mb-6 leading-relaxed italic tracking-wide">
              &quot;Sustainable energy leadership requires operational
              excellence through rigorous benchmarking of key industry metrics,
              strategic foresight, and an uncompromising commitment to
              governance and institutional strengthening&quot;
            </h3>
            <p className="font-roboto text-lg font-semibold tracking-wider text-[#D7AA5F]">
              Dr Ugo Okafor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
