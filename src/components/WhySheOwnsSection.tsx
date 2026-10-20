"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, BookOpen, Key, Users, FileText, Percent, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const pillarIcons = [BookOpen, Users, Key, Percent, FileText, ShieldCheck];

export default function WhySheOwnsSection() {
  const { t, isRtl } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const pillars = t.whySheOwns.pillars.map((p, idx) => ({
    ...p,
    icon: pillarIcons[idx] || BookOpen,
  }));

  const activePillar = pillars[activeIndex] || pillars[0];
  const ActiveIcon = activePillar.icon;

  const handleMobileScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85; // approximate width of card
      const index = Math.round(scrollPosition / cardWidth);
      if (index >= 0 && index < pillars.length) {
        setActiveIndex(index);
      }
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section id="why-she-owns" className="bg-[#EFE9DF] py-20 sm:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-[#3B235A]/10 border border-[#3B235A]/20 px-3.5 py-1.5 rounded-full">
              <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">
                {t.whySheOwns.tag}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#21102F] leading-[1.15]">
              {t.whySheOwns.heading}{" "}
              <span className="italic text-[#3B235A]">{t.whySheOwns.headingItalic}</span>
            </h2>
          </div>
        </motion.div>

        {/* ── MOBILE VIEW ONLY: Touch Swipeable Horizontal Card Slider ── */}
        <div className="block lg:hidden space-y-4">
          <div
            ref={scrollRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-6 px-1 scrollbar-none scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="snap-center shrink-0 w-[88vw] max-w-sm bg-gradient-to-br from-[#21102F] via-[#3B235A] to-[#1a0d26] text-[#F8F5EF] rounded-3xl p-7 border border-[#D6BB88]/40 shadow-xl flex flex-col justify-between min-h-[440px] relative overflow-hidden"
                >
                  {/* Ambient Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#D6BB88]/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="space-y-5 relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#D6BB88]/20 pb-4">
                      <span className="font-serif text-5xl font-light text-[#D6BB88]">
                        {pillar.num}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-[#D6BB88]/15 border border-[#D6BB88]/30 flex items-center justify-center text-[#D6BB88]">
                        <PillarIcon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Subtitle & Title */}
                    <div className="space-y-1">
                      <span className="text-[11px] uppercase tracking-widest text-[#A98BC8] font-semibold block">
                        {pillar.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F5EF] font-light">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Body */}
                    <p className="text-sm text-[#F8F5EF]/85 font-light leading-relaxed">
                      {pillar.body}
                    </p>

                    {/* Highlights Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pillar.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#D6BB88]/10 text-[#D6BB88] border border-[#D6BB88]/25 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-4 border-t border-[#D6BB88]/20 flex items-center justify-between relative z-10 mt-4">
                    <span className="text-[11px] uppercase tracking-widest text-[#D6BB88]/80 font-medium">
                      {isRtl ? `الركيزة ${pillar.num} من ٠٦` : `Pillar ${pillar.num} of 06`}
                    </span>
                    <a
                      href="#consultation"
                      className="inline-flex items-center space-x-1 rtl:space-x-reverse text-xs uppercase tracking-widest text-[#D6BB88] font-semibold"
                    >
                      <span>{t.navbar.bookConsultation}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Mobile Swipe Pagination Indicator Dots & Arrow Controls */}
          <div className="flex items-center justify-between px-2 pt-1">
            <div className="flex items-center space-x-2">
              {pillars.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-7 bg-[#3B235A]"
                      : "w-2 bg-[#3B235A]/30 hover:bg-[#3B235A]/50"
                  }`}
                  aria-label={`Go to pillar ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className="w-9 h-9 rounded-full border border-[#3B235A]/30 flex items-center justify-center text-[#3B235A] disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToCard(Math.min(pillars.length - 1, activeIndex + 1))}
                disabled={activeIndex === pillars.length - 1}
                className="w-9 h-9 rounded-full border border-[#3B235A]/30 flex items-center justify-center text-[#3B235A] disabled:opacity-30"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── DESKTOP VIEW ONLY: Asymmetric Split Spotlight Card + List ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Dynamic Spotlight Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative bg-gradient-to-br from-[#21102F] via-[#3B235A] to-[#1a0d26] text-[#F8F5EF] rounded-3xl p-8 sm:p-10 border border-[#D6BB88]/40 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
              
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#D6BB88]/10 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar.num}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 relative z-10"
                >
                  {/* Card Header: Number & Badge */}
                  <div className="flex items-center justify-between border-b border-[#D6BB88]/20 pb-6">
                    <span className="font-serif text-5xl sm:text-6xl font-light text-[#D6BB88]">
                      {activePillar.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#D6BB88]/15 border border-[#D6BB88]/30 flex items-center justify-center text-[#D6BB88]">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-[#A98BC8] font-semibold block">
                      {activePillar.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F8F5EF] font-light">
                      {activePillar.title}
                    </h3>
                  </div>

                  {/* Body Copy */}
                  <p className="text-base sm:text-lg text-[#F8F5EF]/85 font-light leading-relaxed">
                    {activePillar.body}
                  </p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {activePillar.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] uppercase tracking-wider px-3 py-1 bg-[#D6BB88]/10 text-[#D6BB88] border border-[#D6BB88]/25 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Action Bar */}
              <div className="pt-6 border-t border-[#D6BB88]/20 flex items-center justify-between relative z-10 mt-6">
                <span className="text-xs uppercase tracking-widest text-[#D6BB88]/80 font-medium">
                  {isRtl ? `الركيزة ${activePillar.num} من ٠٦` : `Pillar ${activePillar.num} of 06`}
                </span>
                <a
                  href="#consultation"
                  className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-xs uppercase tracking-widest text-[#D6BB88] hover:text-[#F8F5EF] font-semibold transition-colors group"
                >
                  <span>{t.navbar.bookConsultation}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive 6-Pillar Selector List */}
          <div className="lg:col-span-7 space-y-3">
            {pillars.map((pillar, idx) => {
              const isActive = activeIndex === idx;

              return (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-4 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer group flex items-center justify-between ${
                    isActive
                      ? "bg-[#21102F] text-[#F8F5EF] border-[#D6BB88] shadow-xl scale-[1.01]"
                      : "bg-[#F8F5EF]/80 text-[#2B2B2B] border-[#D6BB88]/30 hover:bg-[#F8F5EF] hover:border-[#D6BB88]/70"
                  }`}
                >
                  <div className="flex items-center space-x-5 rtl:space-x-reverse">
                    {/* Index Number */}
                    <span
                      className={`font-serif text-2xl sm:text-3xl font-light transition-colors ${
                        isActive ? "text-[#D6BB88]" : "text-[#D6BB88]/70 group-hover:text-[#3B235A]"
                      }`}
                    >
                      {pillar.num}
                    </span>

                    {/* Title & Subtitle */}
                    <div>
                      <h3
                        className={`font-serif text-xl sm:text-2xl font-normal transition-colors ${
                          isActive ? "text-[#F8F5EF]" : "text-[#21102F] group-hover:text-[#3B235A]"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Active Indicator Arrow */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#D6BB88] text-[#21102F] scale-105"
                        : "bg-[#EFE9DF] text-[#21102F]/60 group-hover:bg-[#3B235A] group-hover:text-[#D6BB88]"
                    }`}
                  >
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "rotate-0" : "-rotate-45 group-hover:rotate-0"}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
