"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] bg-[#21102F] text-[#F8F5EF] flex items-center overflow-hidden">
      {/* Full-screen background — unoptimized so Next.js does not process or compress it, zero gradient overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_new_bg.jpg"
          alt="SheOwns — Dubai"
          fill
          priority
          unoptimized
          className="object-cover "
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-36">
        <div className="max-w-2xl space-y-8">

          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#3B235A]/80 border border-[#D6BB88]/30 px-4 py-1.5 rounded-full backdrop-blur-md"
          >
            
            <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">
              An Aurex Privy Real Estate & Being She initiative
            </span>
          </motion.div> */}

          {/* Headline — empowering and positive */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-[#F8F5EF] drop-shadow-md my-10">
            SheOwns<br />
              <span className="italic text-[#D6BB88]">Do you yet?</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#F8F5EF]/90 font-light leading-relaxed drop-shadow">
              Women invested AED 118 billion in Dubai real estate last year, ie. One in Three investors! SheOwns exists so the next wave signs with full knowledge, full confidence, and zero pressure. </p>
          </motion.div>

          {/* Sub-copy — one line */}
          

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
          >
            <a
              href="#consultation"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#D6BB88] via-[#E7D7B3] to-[#B89B62] px-8 py-4 rounded-full text-xs uppercase tracking-widest text-[#21102F] font-semibold hover:scale-[1.02] transition-transform shadow-xl"
            >
              <span>Book a Private Consultation</span>
              <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </a>
            <a
              href="#workshops"
              className="text-xs uppercase tracking-widest text-[#F8F5EF]/90 hover:text-[#D6BB88] transition-colors underline underline-offset-4 decoration-[#D6BB88]/40"
            >
              See Our Open House →
            </a>
          </motion.div>

          {/* Trust strip */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 pt-4 text-xs text-[#F8F5EF]/80 font-light"
          >
            <div className="flex items-center space-x-2 font-bold">
              
              <span>Women only Community</span>
            </div>
            <div className="w-px h-4 bg-[#D6BB88]/30" />
            <div className="flex items-center space-x-2 font-bold">
             
              <span>Advisory, not brokerage</span>
            </div>
            <div className="w-px h-4 bg-[#D6BB88]/30" />
            <span className="font bold">Education First, Always</span>
          </motion.div> */}
        </div>
      </div>

      {/* Stats Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 border-t border-[#D6BB88]/15 bg-[#21102F]/85 backdrop-blur-md py-4 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "0%", label: "Property Tax" },
            { value: "7–9%", label: "Avg. Rental Yield" },
            { value: "10-Yr", label: "Golden Visa" },
            { value: "94%", label: "First-Time Investors" },
          ].map((s) => (
            <div key={s.label}>
              <span className="font-serif text-xl md:text-2xl text-[#D6BB88]">{s.value}</span>
              <span className="block text-[10px] uppercase tracking-widest text-[#F8F5EF]/60 mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
