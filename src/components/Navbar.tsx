"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Why SheOwns", href: "#why-she-owns" },
  { name: "Founders", href: "#founders" },
  { name: "Workshops", href: "#workshops" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-350 flex flex-col pointer-events-auto"
    >
      {/* Top Announcement Strip — Slides UP & disappears when scrolling */}
      <div
        className={`w-full transition-all duration-500 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0 pointer-events-none" : "max-h-24 opacity-100"
        }`}
      >
        <div className="bg-gradient-to-r from-[#E7D7B3] via-[#D6BB88] to-[#B89B62] text-[#21102F] text-[10px] sm:text-xs py-1.5 px-3 text-center font-medium tracking-wide shadow-sm flex items-center justify-center space-x-1 sm:space-x-1.5 flex-wrap">
          <span>Emirati Women's Day Open House · Fri 28 Aug · 4–8 PM · Danube Sales Gallery, SZR — 40 seats only ·</span>
          <a
            href="#workshops"
            className="underline underline-offset-2 font-bold hover:text-[#3B235A] transition-colors"
          >
            Reserve yours
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#21102F]/90 backdrop-blur-md py-2.5 shadow-xl border-b border-[#D6BB88]/20"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group py-1">
            <Image
              src="/images/sheowns_logo.png"
              alt="SheOwns Logo"
              width={260}
              height={96}
              unoptimized
              className="h-13 sm:h-15 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#F8F5EF]/80 hover:text-[#D6BB88] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D6BB88] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="https://wa.me/971500000000?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20She%20Owns"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-xs tracking-wider text-[#D6BB88] hover:text-[#F8F5EF] transition-colors px-3 py-2 border border-[#D6BB88]/30 rounded-full hover:border-[#D6BB88]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#consultation"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#D6BB88] to-[#B89B62] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-[#21102F] transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-[#D6BB88]/20"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F8F5EF] hover:text-[#D6BB88] p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#21102F]/95 border-b border-[#D6BB88]/20 backdrop-blur-xl px-6 py-6 mt-2"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-serif tracking-widest text-[#F8F5EF]/90 hover:text-[#D6BB88] transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-[#D6BB88]/20 flex flex-col space-y-3">
                  <a
                    href="https://wa.me/971500000000?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20She%20Owns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-xs tracking-wider text-[#D6BB88] py-2.5 border border-[#D6BB88]/40 rounded-full"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href="#consultation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center text-xs uppercase tracking-widest text-[#21102F] bg-[#D6BB88] py-3 rounded-full font-medium"
                  >
                    Book Private Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
