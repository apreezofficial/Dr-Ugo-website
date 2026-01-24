import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-white py-9 px-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        <div className="w-[539px]">
          <div className="flex">
            <h2 className="text-xl font-bold font-playfair-display text-[#202020] border-b-2 border-[#D7AA5F]">
              Dr.
            </h2>
            <h2 className="text-xl font-bold pl-2 font-playfair-display text-[#202020]">
              Ugo Okafor
            </h2>
          </div>
          <p className="font-roboto mt-3 text-[#5E5D5D]">
            Chief Executive, SunTrust Atlantic Energies Limited
          </p>
          <p className="mt-10 font-roboto text-xs text-[#5E5D5D]">
            Exemplary leadership in Nigeria&apos;s upstream oil and gas sector,
            combining technical expertise, strategic vision, and commitment to
            sustainable value creation.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-16">
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
              <li>Vanderbilt Law School (JD)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="font-roboto text-[#222222] tracking-wide">
          &copy; 2026 Dr. Ugo Okafor. All rights reserved.
        </p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <Link href="https://linkedin.com/in/drugo">
            <Image
              src="/linkedin-logo.svg"
              alt="linkedin logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </Link>
          <Link href="https://facebook.com/drugo">
            <Image
              src="/facebook-logo.svg"
              alt="linkedin logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </Link>
          <Link href="https://x.com/drugo">
            <Image
              src="/twitter-logo.svg"
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
