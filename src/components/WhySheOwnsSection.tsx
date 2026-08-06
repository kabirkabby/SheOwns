"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, BookOpen, Key, Users, FileText, Percent } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Financial Education",
    subtitle: "Knowledge Before Action",
    icon: BookOpen,
    body: "Workshops, masterclasses, and 1-on-1 sessions that explain exactly how Dubai real estate works — before anyone asks you to sign anything.",
    highlights: ["Yield Calculations", "Market Cycles", "Zero Sales Pressure"],
  },
  {
    num: "02",
    title: "1-on-1 Advisory",
    subtitle: "Dedicated Senior Counsel",
    icon: Users,
    body: "A senior Aurex Privy advisor, dedicated to you. We map your goals, budget, and timeline — with zero obligation to proceed.",
    highlights: ["Personalized Strategy", "Liquidity Mapping", "Private Counsel"],
  },
  {
    num: "03",
    title: "Exclusive Developer Terms",
    subtitle: "Off-Market Privileges",
    icon: Key,
    body: "Lower entry deposits and bespoke payment structures negotiated specifically for SheOwns members. Not available to the public.",
    highlights: ["Pre-Launch Access", "Reduced Entry Deposit", "Bespoke Allocations"],
  },
  {
    num: "04",
    title: "SheOwns Negotiated Payment Plans",
    subtitle: "Tailored Investment Structures",
    icon: Percent,
    body: "Bespoke payment structures mapped directly to your cash flow. Invest comfortably with flexible monthly schedules negotiated specifically for SheOwns members.",
    highlights: ["Customised Schedules", "Cash Flow Alignment", "Member Privileges"],
  },
  {
    num: "05",
    title: "Legal & Contract Clarity",
    subtitle: "Red Flag Protection",
    icon: FileText,
    body: "Every contract reviewed. Every clause explained. The 'red flag files' — decoded before you're asked to commit a single dirham.",
    highlights: ["DLD Escrow Vetting", "Clause Analysis", "RERA Regulated"],
  },
  {
    num: "06",
    title: "The Being She Network",
    subtitle: "Lifelong Community",
    icon: ShieldCheck,
    body: "Join 15,000+ women investors across UAE and India. Founder dinners, closed-door sessions, and a community that celebrates your milestones.",
    highlights: ["15,000+ Female Leaders", "Founder Dinners", "Peer Advisory"],
  },
];

export default function WhySheOwnsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePillar = pillars[activeIndex];
  const ActiveIcon = activePillar.icon;

  return (
    <section id="why-she-owns" className="bg-[#EFE9DF] py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#3B235A]/10 border border-[#3B235A]/20 px-3.5 py-1.5 rounded-full">
              <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">
                The Six Commitments
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#21102F] leading-[1.15]">
              What SheOwns{" "}
              <span className="italic text-[#3B235A]">gives you.</span>
            </h2>
          </div>
          {/* <div className="lg:col-span-5 lg:pb-2">
            <p className="text-base sm:text-lg text-[#2B2B2B]/75 font-light leading-relaxed">
              Six promises designed to replace market complexity with absolute clarity, confidence, and exclusive access.
            </p>
          </div> */}
        </motion.div>

        {/* Asymmetric Split Layout: Left Spotlight Card + Right Interactive List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
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
                  Pillar {activePillar.num} of 06
                </span>
                <a
                  href="#consultation"
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-[#D6BB88] hover:text-[#F8F5EF] font-semibold transition-colors group"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
                  <div className="flex items-center space-x-5">
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
