"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowUp, Globe, Mail, Share2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#15091F] text-[#F8F5EF] pt-20 pb-10 border-t border-[#D6BB88]/20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Row: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-baseline space-x-2">
              <span className="font-serif text-3xl font-light text-[#F8F5EF]">
                SHE OWNS
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#D6BB88]">
                Dubai
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#A98BC8] font-medium">
              An Initiative by Aurex Privy × Being She
            </p>
            <p className="text-xs text-[#F8F5EF]/70 font-light max-w-md leading-relaxed">
              Empowering women through financial literacy, transparent advisory, and exclusive developer opportunities in Dubai’s real estate market.
            </p>
          </div>

          <div className="lg:col-span-6 glass-card-dark p-6 rounded-2xl border border-[#D6BB88]/20 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-medium">
              Join The She Owns Circle
            </span>
            <h4 className="font-serif text-xl text-[#F8F5EF]">
              Receive Private Market Intelligence & Off-Market Allocations
            </h4>
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#21102F] border border-[#D6BB88]/30 rounded-xl px-4 py-2.5 text-xs text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] grow"
              />
              <button className="bg-[#D6BB88] text-[#21102F] text-xs uppercase tracking-widest font-semibold px-6 py-2.5 rounded-xl hover:bg-[#E7D7B3] transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle Row: Links & Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#D6BB88]/10 text-xs">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">Initiative</span>
            <ul className="space-y-2 text-[#F8F5EF]/70 font-light">
              <li><a href="#about" className="hover:text-[#D6BB88] transition-colors">About She Owns</a></li>
              <li><a href="#why-dubai" className="hover:text-[#D6BB88] transition-colors">Why Dubai Real Estate</a></li>
              <li><a href="#why-she-owns" className="hover:text-[#D6BB88] transition-colors">The 6 Pillars</a></li>
              <li><a href="#how-it-works" className="hover:text-[#D6BB88] transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">Community</span>
            <ul className="space-y-2 text-[#F8F5EF]/70 font-light">
              <li><a href="#benefits" className="hover:text-[#D6BB88] transition-colors">Exclusive Benefits</a></li>
              <li><a href="#founders" className="hover:text-[#D6BB88] transition-colors">Meet the Founders</a></li>
              <li><a href="#stories" className="hover:text-[#D6BB88] transition-colors">Success Stories</a></li>
              <li><a href="#workshops" className="hover:text-[#D6BB88] transition-colors">Upcoming Workshops</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">Partners</span>
            <ul className="space-y-2 text-[#F8F5EF]/70 font-light">
              <li><span className="text-[#F8F5EF]">Aurex Privy Advisory</span></li>
              <li><span className="text-[#F8F5EF]">Being She International</span></li>
              <li><a href="#faq" className="hover:text-[#D6BB88] transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#consultation" className="hover:text-[#D6BB88] transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">Dubai Headquarters</span>
            <p className="text-[#F8F5EF]/70 font-light leading-relaxed">
              Level 14, Al Fattan Currency House,<br />
              DIFC, Dubai, United Arab Emirates
            </p>
            <div className="flex space-x-3 pt-2 text-[#D6BB88]">
              <a href="#" className="hover:text-[#F8F5EF] transition-colors p-1" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="hover:text-[#F8F5EF] transition-colors p-1" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="hover:text-[#F8F5EF] transition-colors p-1" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="hover:text-[#F8F5EF] transition-colors p-1" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row: Disclaimer & Back to Top */}
        <div className="pt-8 border-t border-[#D6BB88]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-[#F8F5EF]/50 font-light">
          <div>
            © {new Date().getFullYear()} She Owns Initiative. Launched by Aurex Privy Real Estate in collaboration with Being She. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#D6BB88] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D6BB88] transition-colors">Terms of Advisory</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-[#D6BB88] hover:text-[#F8F5EF] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
