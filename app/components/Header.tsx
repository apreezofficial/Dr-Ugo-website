"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Biography", id: "biography" },
  { label: "Leadership & Career", id: "leadershipCareer" },
  { label: "Education", id: "education" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  /* -------------------- Smooth Scroll (MOBILE SAFE) -------------------- */
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 96;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // 🔑 Delay menu close so mobile scroll isn't cancelled
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

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

  /* -------------------- Active Section Highlight -------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A0909]">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-playfair-display font-bold text-white">
          Dr. Ugo Okafor
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScrollTo(link.id)}
                className={`font-playfair-display transition-colors ${
                  activeSection === link.id ? "text-[#D7AA5F]" : "text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
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
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className={`block w-full text-left font-playfair-display transition-colors ${
                      activeSection === link.id
                        ? "text-[#D7AA5F]"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
