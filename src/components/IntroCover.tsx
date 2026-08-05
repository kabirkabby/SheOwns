"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Eye, ShieldCheck, HeartHandshake } from "lucide-react";
import Image from "next/image";

interface IntroCoverProps {
  onDismiss?: () => void;
}

export default function IntroCover({ onDismiss }: IntroCoverProps) {
  const [isVisible, setIsVisible] = useState(true);

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
            x: "-100%",
            rotateY: -3,
            opacity: 0,
            transition: { duration: 0.95, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center bg-[#21102F] overflow-hidden text-[#F8F5EF] shadow-2xl"
        >
          {/* Background Image: Purple Dubai Skyline */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/intro_dubai_purple.jpg"
              alt="Dubai Skyline Purple Night"
              fill
              priority
              className="object-cover object-center filter brightness-95"
            />
            {/* Rich Purple Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#21102F]/95 via-[#21102F]/80 to-[#3B235A]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21102F] via-transparent to-[#21102F]/60 opacity-80" />
          </div>

          {/* Glowing Ambient Lights */}
          <div className="absolute top-1/4 left-12 w-[450px] h-[450px] bg-[#3B235A]/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-[#A98BC8]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Main Layout Container */}
          <div className="max-w-7xl mx-auto w-full px-10 md:px-12  relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12">
            
            {/* Left Column: Text & Question */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#3B235A]/90 border border-[#D6BB88]/40 px-4 py-1.5 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 text-[#D6BB88]" />
                <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">
                  Aurex Privy Real Estate × Being She Initiative
                </span>
              </div>

              {/* Title & Copy */}
              <div className="space-y-4">
            
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.12] text-[#F8F5EF]">
                    Do you want to join an <br />
                    <span className="italic text-[#D6BB88]">
                      exclusive community
                    </span>{" "}
                    for women building wealth in Dubai?
                  </h1>

                <p className="text-base sm:text-lg text-[#F8F5EF]/85 font-light max-w-xl leading-relaxed pt-2">
                  Real Estate Ownership, Reimagined for Women. 
                </p>
              </div>

              {/* Assurance Pills */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-[#F8F5EF]/80 font-light">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#D6BB88]" />
                  <span>100% Dedicated to Women</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HeartHandshake className="w-4 h-4 text-[#D6BB88]" />
                  <span>Education First • Zero Pressure</span>
                </div>
              </div>

              {/* Two Choice Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 pt-4">
                {/* YES Button */}
                <button
                  onClick={handleChoice}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#D6BB88] via-[#E7D7B3] to-[#B89B62] px-9 py-4 text-xs font-semibold uppercase tracking-widest text-[#21102F] shadow-2xl transition-all duration-300 hover:scale-[1.04] hover:shadow-[#D6BB88]/40 active:scale-95"
                >
                  <span className="relative z-10 flex items-center">
                    Yes, Join The Community
                    <ArrowRight className="ml-2.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>

                {/* NO Button */}
                <button
                  onClick={handleChoice}
                  className="inline-flex items-center justify-center space-x-2 rounded-full border border-[#D6BB88]/40 hover:border-[#D6BB88] px-8 py-4 text-xs font-medium uppercase tracking-widest text-[#F8F5EF] hover:text-[#D6BB88] hover:bg-[#3B235A]/50 transition-all duration-300"
                >
                  <Eye className="w-4 h-4 text-[#A98BC8]" />
                  <span>No, Just Browsing</span>
                </button>
              </div>

            </motion.div>

            {/* Right Column: Provided Girl Illustration in Saree */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-xl sm:max-w-lg aspect-[3/4] ">
                <Image
                  src="/images/intro_woman_saree.png"
                  alt="She Owns Leader in Saree"
                  fill
                  unoptimized
                  priority
                  className="object-contain object-center "
                />
              </div>
            </motion.div>

          </div>

          {/* Subtle Bottom Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#F8F5EF]/40 font-light border-t border-[#D6BB88]/15 pt-4 z-10">
            <div>Dubai Real Estate Empowerment Platform</div>
            <div>Clicking either option enters the experience</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
