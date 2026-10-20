"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative min-h-[100vh] bg-[#21102F] text-[#F8F5EF] flex items-center overflow-hidden">
      {/* Desktop Background (Landscape 16:9) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/hero_new_bg.jpg"
          alt="SheOwns — Dubai Desktop"
          fill
          priority
          unoptimized
          className="object-cover object-right"
        />
      </div>

      {/* Mobile Background (Vertical 9:16) */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src="/images/hero_mobile_bg.jpg"
          alt="SheOwns — Dubai Mobile"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        {/* Mobile Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#21102F] via-[#21102F]/70 to-[#21102F]/30 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-12 pt-28 sm:pt-32 pb-24 sm:pb-36">
        <div className="max-w-2xl space-y-6 sm:space-y-8">

          {/* Headline — empowering and positive */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.12] text-[#F8F5EF] drop-shadow-lg my-6 sm:my-10">
              {t.hero.titleLine1}<br />
              <span className="italic text-[#D6BB88]">{t.hero.titleLine2}</span>
            </h1>
            <p className="text-base sm:text-xl text-[#F8F5EF]/90 font-light leading-relaxed drop-shadow max-w-xl">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* CTAs — Responsive full-width buttons on small mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <a
              href="#consultation"
              className="group inline-flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-[#D6BB88] via-[#E7D7B3] to-[#B89B62] px-7 py-4 rounded-full text-xs uppercase tracking-widest text-[#21102F] font-semibold hover:scale-[1.02] transition-transform shadow-xl text-center"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 rtl:group-hover:-rotate-45 transition-transform duration-300 shrink-0" />
            </a>
            <a
              href="#property-show"
              className="text-xs uppercase tracking-widest text-[#F8F5EF]/90 hover:text-[#D6BB88] transition-colors underline underline-offset-4 decoration-[#D6BB88]/40 text-center py-2 sm:py-0"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Presenter & Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6 sm:pt-8 border-t border-white/15"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#D6BB88] font-semibold mb-4">
              {t.hero.presentedBy}
            </p>
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              {/* Aurex Privy Logo */}
              <div className="flex items-center">
                <Image
                  src="/images/aurex_privy_logo.png"
                  alt="Aurex Privy"
                  width={130}
                  height={38}
                  className="h-7 sm:h-8 w-auto object-contain brightness-105"
                />
              </div>

              <div className="h-5 w-px bg-white/25 hidden sm:block" />

              {/* Gulf News Logo */}
              <a
                href="https://gulfnews.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity"
                aria-label="Gulf News"
              >
                <Image
                  src="/images/gulf_news_logo.png"
                  alt="Gulf News"
                  width={140}
                  height={24}
                  className="h-5 sm:h-6 w-auto object-contain brightness-105"
                />
              </a>

              <div className="h-5 w-px bg-white/25 hidden sm:block" />

              {/* BeingShe Logo */}
              <div className="flex items-center">
                <Image
                  src="/images/beingshe_logo.png"
                  alt="BeingShe"
                  width={120}
                  height={40}
                  className="h-7 sm:h-8 w-auto object-contain brightness-105"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
