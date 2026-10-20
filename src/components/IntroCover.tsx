"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface IntroCoverProps {
  onDismiss?: () => void;
}

export default function IntroCover({ onDismiss }: IntroCoverProps) {
  const [isVisible, setIsVisible] = useState(true);
  const { t, isRtl } = useLanguage();

  const handleChoice = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          exit={{
            x: isRtl ? "100%" : "-100%",
            rotateY: isRtl ? 3 : -3,
            opacity: 0,
            transition: { duration: 0.95, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[500] flex items-center bg-[#21102F] overflow-y-auto overflow-x-hidden text-[#F8F5EF] shadow-2xl w-full max-w-full"
        >
          {/* Background Image: Purple Dubai Skyline */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/intro_dubai_purple.jpg"
              alt="Dubai Skyline Purple Night"
              fill
              priority
              className="object-cover object-center filter brightness-95"
            />
            {/* Rich Purple Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#21102F]/95 via-[#21102F]/80 to-[#3B235A]/50 rtl:bg-gradient-to-l" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21102F] via-transparent to-[#21102F]/60 opacity-80" />
          </div>

          {/* Glowing Ambient Lights */}
          <div className="absolute top-1/4 left-12 rtl:left-auto rtl:right-12 w-[450px] h-[450px] bg-[#3B235A]/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/3 rtl:right-auto rtl:left-1/3 w-96 h-96 bg-[#A98BC8]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Main Layout Container */}
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 sm:py-12 overflow-x-hidden">
            
            {/* Left Column: Text & Question */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left rtl:lg:text-right flex flex-col items-center lg:items-start rtl:lg:items-start"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-[#3B235A]/90 border border-[#D6BB88]/40 px-4 py-1.5 rounded-full shadow-lg mx-auto lg:mx-0">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">
                  {t.intro.badge}
                </span>
              </div>

              {/* Title & Copy */}
              <div className="space-y-3 sm:space-y-4 w-full">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-[#F8F5EF]">
                  {t.intro.titleLine1} <br />
                  <span className="italic text-[#D6BB88]">
                    {t.intro.titleLine2}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-[#F8F5EF]/90 font-light max-w-xl leading-relaxed pt-1 mx-auto lg:mx-0">
                  {t.intro.subtitle}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center lg:items-start rtl:lg:items-start space-y-4 pt-2 w-full">
                {/* Gold Primary Button */}
                <button
                  onClick={handleChoice}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#D6BB88] via-[#E7D7B3] to-[#B89B62] px-10 py-4 text-xs font-semibold uppercase tracking-widest text-[#21102F] shadow-2xl transition-all duration-300 hover:scale-[1.04] hover:shadow-[#D6BB88]/40 active:scale-95 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center">
                    {t.intro.btnNotYet}
                    <ArrowRight className="ml-2.5 rtl:ml-0 rtl:mr-2.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                  </span>
                </button>

                {/* Subtle Text Link */}
                <button
                  onClick={handleChoice}
                  className="text-xs sm:text-sm text-[#F8F5EF] hover:text-[#D6BB88] pt-2 italic transition-colors duration-300 underline underline-offset-4 decoration-[#D6BB88]/30 hover:decoration-[#D6BB88] text-center lg:text-left rtl:lg:text-right max-w-md cursor-pointer"
                >
                  {t.intro.btnAlreadyOwner}
                </button>
              </div>

            </motion.div>

            {/* Right Column: Saree Girl Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end rtl:lg:justify-start"
            >
              <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg aspect-[3/4]">
                <Image
                  src="/images/intro_woman_saree.png"
                  alt="SheOwns Leader"
                  fill
                  unoptimized
                  priority
                  className="object-contain object-center"
                />
              </div>
            </motion.div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
