"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Import Link from next/link

const navLinks = [
  { label: "Biography", href: "/#biography" },
  { label: "Leadership & Career", href: "/#leadership-career" },
  { label: "Education", href: "/#education" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* -------------------- Lock Body Scroll -------------------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  /* -------------------- Click Outside to Close -------------------- */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A0909]">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-playfair-display font-bold text-white">
          Dr. Ugo Okafor
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)} // Close mobile menu if open
                className={`font-playfair-display transition-colors text-white hover:text-[#D7AA5F]`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* External Link */}
          <li>
            <a
              href="https://www.suntrustatlantic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-playfair-display transition-colors text-[#D7AA5F] hover:text-white"
            >
              SunTrust Atlantic
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* -------------------- Mobile Menu -------------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0A0909] border-t border-white/10"
          >
            <motion.ul
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col px-6 py-6 space-y-6 text-white"
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Close mobile menu
                    className={`block w-full text-left font-playfair-display transition-colors text-white hover:text-[#D7AA5F]`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* External Link (Mobile) */}
              <li>
                <a
                  href="https://www.suntrustatlantic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-playfair-display transition-colors text-[#D7AA5F] hover:text-white"
                >
                  SunTrust Atlantic
                </a>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
