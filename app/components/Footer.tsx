import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-9 px-6 md:px-20">
      {/* Top Section */}
      {/* Removed mx-auto to keep container left-aligned */}
      <div className="px-4 flex flex-col md:flex-row justify-start gap-10">
        
        {/* Brand / Bio */}
        <div className="w-full md:w-[539px]">
          <div className="flex text-left">
            <h2 className="text-xl font-bold font-playfair-display text-[#202020] border-b-2 border-[#D7AA5F]">
              Dr.
            </h2>
            <h2 className="text-xl font-bold pl-2 font-playfair-display text-[#202020]">
              Ugo Okafor
            </h2>
          </div>
          <p className="font-roboto mt-3 text-[#5E5D5D] text-left">
            Chief Executive, SunTrust Atlantic Energies Limited
          </p>
          {/* Changed text-center to text-left */}
          <p className="mt-6 md:mt-10 font-roboto text-xs text-[#5E5D5D] text-left leading-relaxed">
            Exemplary leadership in Nigeria&apos;s upstream oil and gas sector, combining technical expertise, strategic vision, and commitment to sustainable value creation.
          </p>
        </div>

        {/* Links */}
        {/* Changed justify-center to justify-start and text-center to text-left */}
        <div className="flex flex-col sm:flex-row gap-12 md:gap-16 justify-start text-left">
          <div>
            <h3 className="font-bold font-playfair-display mb-2 text-[#D7AA5F]">
              Leadership
            </h3>
            <ul className="space-y-1 font-roboto text-[#5E5D5D] text-sm mt-4">
              <li>SunTrust Atlantic Energies</li>
              <li>Umugini Pipeline Infrastructure</li>
              <li>Midsun GGF Limited</li>
              <li>Ingentia Energies Limited</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-playfair-display mb-2 text-[#D7AA5F]">
              Credentials
            </h3>
            <ul className="space-y-1 font-roboto text-[#5E5D5D] text-sm mt-4">
              <li>MIT Sloan</li>
              <li>Harvard Business School</li>
              <li>Vanderbilt Law School (Juris Doctor)</li>
              <li>University Of Nigeria (Nsukka)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* Removed mx-auto; changed items-center to items-start for mobile alignment */}
      <div className="px-4 mt-10 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="font-roboto text-[#222222] tracking-wide text-sm text-left">
          &copy; 2026 Dr. Ugo Okafor. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://www.linkedin.com/company/suntrustatlantic/?originalSubdomain=ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin-logo.svg"
              alt="linkedin logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
