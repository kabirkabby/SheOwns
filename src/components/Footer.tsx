"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "Footer Newsletter Form" }),
      });
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Footer subscription error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#15091F] text-[#F8F5EF] pt-20 pb-10 border-t border-[#D6BB88]/20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Row: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <a href="#" className="inline-block">
              <Image
                src="/images/sheowns_logo.png"
                alt="SheOwns Logo"
                width={300}
                height={110}
                unoptimized
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-[#F8F5EF]/70 font-light max-w-md leading-relaxed pt-1">
              {t.footer.description}
            </p>
          </div>

          <div className="lg:col-span-6 glass-card-dark p-6 rounded-2xl border border-[#D6BB88]/20 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-medium">
              {t.footer.circleTag}
            </span>
            <h4 className="font-serif text-xl text-[#F8F5EF]">
              {t.footer.circleTitle}
            </h4>
            {submitted ? (
              <p className="text-xs text-[#D6BB88] pt-2">{t.footer.thankYou}</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  className="bg-[#21102F] border border-[#D6BB88]/30 rounded-xl px-4 py-2.5 text-xs text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] grow"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#D6BB88] text-[#21102F] text-xs uppercase tracking-widest font-semibold px-6 py-2.5 rounded-xl hover:bg-[#E7D7B3] disabled:opacity-50 transition-colors shrink-0 cursor-pointer"
                >
                  {isSubmitting ? "..." : t.footer.subscribeBtn}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Row: Links & Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#D6BB88]/10 text-xs">
          {/* Column 1: Initiative */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">
              {t.footer.col1Title}
            </span>
            <ul className="space-y-2 text-[#F8F5EF]/70 font-light">
              {t.footer.col1Links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#D6BB88] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Experience / Events */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">
              {t.footer.col2Title}
            </span>
            <ul className="space-y-2 text-[#F8F5EF]/70 font-light">
              {t.footer.col2Links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#D6BB88] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Regulatory */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">
              {t.footer.col3Title}
            </span>
            <p className="text-[#F8F5EF]/70 font-light leading-relaxed">
              {t.footer.col3Text}
            </p>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">
              {t.footer.col4Title}
            </span>
            <p className="text-[#F8F5EF]/70 font-light leading-relaxed">
              {t.footer.col4Address}
            </p>
            <div className="space-y-1 text-[#F8F5EF]/80 font-light">
              <div>
                <a href={`tel:${t.footer.col4Phone.replace(/\s+/g, '')}`} className="hover:text-[#D6BB88] transition-colors dir-ltr inline-block">
                  {t.footer.col4Phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${t.footer.col4Email}`} className="hover:text-[#D6BB88] transition-colors">
                  {t.footer.col4Email}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3 pt-2 text-[#D6BB88]">
              <a
                href="https://instagram.com/aurexprivy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F8F5EF] transition-colors p-1"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/gauravaurexprivy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F8F5EF] transition-colors p-1"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                href="https://wa.me/971501815561"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F8F5EF] transition-colors p-1"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row: Disclaimer & Back to Top */}
        <div className="pt-8 border-t border-[#D6BB88]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-[#F8F5EF]/50 font-light">
          <div className="text-center md:text-left">
            {t.footer.copyright}
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-[#D6BB88] hover:text-[#F8F5EF] transition-colors cursor-pointer"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Legal Disclaimer Subtext */}
        <p className="text-[9px] text-[#F8F5EF]/40 font-light leading-relaxed text-center md:text-left pt-2 border-t border-[#D6BB88]/5">
          {t.footer.disclaimer}
        </p>

      </div>
    </footer>
  );
}
