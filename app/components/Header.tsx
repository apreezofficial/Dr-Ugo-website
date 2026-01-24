"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A0909]">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold font-playfair-display text-white">
          Dr. Ugo Okafor
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <a href="#biography" className="font-playfair-display">
              Biography
            </a>
          </li>
          <li>
            <a href="#leadershipCareer" className="font-playfair-display">
              Leadership & Career
            </a>
          </li>
          <li>
            <a href="#education" className="font-playfair-display">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="font-playfair-display">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white z-50 relative right-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0909] border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-white">
            <li>
              <a
                href="#biography"
                onClick={() => setIsOpen(false)}
                className="font-playfair-display block"
              >
                Biography
              </a>
            </li>
            <li>
              <a
                href="#leadershipCareer"
                onClick={() => setIsOpen(false)}
                className="font-playfair-display block"
              >
                Leadership & Career
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => setIsOpen(false)}
                className="font-playfair-display block"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="font-playfair-display block"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

// import React from "react";

// const Header: React.FC = () => {
//   return (
//     <header className="fixed top-0 w-full z-50 bg-[#0A0909]">
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="text-xl font-bold font-playfair-display text-white">
//           Dr. Ugo Okafor
//         </div>
//         <ul className="flex space-x-6 text-white">
//           <li>
//             <a
//               href="#biography"
//               className="transition-colors font-playfair-display"
//             >
//               Biography
//             </a>
//           </li>
//           <li>
//             <a
//               href="#leadershipCareer"
//               className="transition-colors font-playfair-display"
//             >
//               Leadership & Career
//             </a>
//           </li>
//           <li>
//             <a
//               href="#education"
//               className="transition-colors font-playfair-display"
//             >
//               Education
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="transition-colors font-playfair-display"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
