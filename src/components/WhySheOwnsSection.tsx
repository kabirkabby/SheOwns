"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Financial Education",
    subtitle: "Knowledge Before Action",
    body: "Interactive masterclasses and 1-on-1 sessions that break down rental yields, payment schedules, legal frameworks, and market cycles. No jargon, no pressure — just complete clarity.",
    image: "/images/cover_woman_dubai.jpg",
    tags: ["Masterclasses", "Yield Analysis", "Zero Pressure"],
  },
  {
    num: "02",
    title: "1-on-1 Advisory",
    subtitle: "Dedicated Investment Counsel",
    body: "A senior Aurex Privy strategist mapped specifically to your journey. We evaluate your liquidity, risk preferences, and long-term wealth goals with zero obligation to proceed.",
    image: "/images/gaurav_sharma.jpg",
    tags: ["Private Counsel", "Portfolio Strategy", "Personalized"],
  },
  {
    num: "03",
    title: "Exclusive Developer Terms",
    subtitle: "Pre-Market & Off-Market Privileges",
    body: "Leveraging Aurex Privy’s institutional standing across Dubai, we secure developer-backed lower entry deposits, waived registration fees, and off-market inventory for members.",
    image: "/images/dubai_skyline.jpg",
    tags: ["Pre-Launch Access", "Reduced Deposits", "Off-Market"],
  },
  {
    num: "04",
    title: "1% Monthly Payment Plans",
    subtitle: "Accessible Wealth Creation",
    body: "Invest without liquidating your primary portfolio. Structure your property acquisition under 1% per month payment schedules during construction while keeping capital working.",
    image: "/images/hero_woman_investor1.jpg",
    tags: ["1% Monthly", "Cash Flow Safety", "Construction Linked"],
  },
  {
    num: "05",
    title: "Legal & Contract Clarity",
    subtitle: "The Red Flag Protection",
    body: "Every developer contract vetted. Every fine-print clause decoded. RERA and DLD escrow protections explained transparently before you commit a single dirham.",
    image: "/images/workshop_community.jpg",
    tags: ["DLD Escrow", "Contract Vetting", "100% Regulated"],
  },
  {
    num: "06",
    title: "The Being She Network",
    subtitle: "Lifelong Community & Mentorship",
    body: "Join 15,000+ female leaders and real estate investors across the UAE and India. Attend closed-door founder dinners, peer advisory circles, and celebrate milestones together.",
    image: "/images/aparna_bajpai.jpg",
    tags: ["15,000+ Leaders", "Founder Dinners", "Peer Circles"],
  },
];

const cardColors = [
  "bg-[#1a0d26]",
  "bg-[#21102F]",
  "bg-[#2a1538]",
  "bg-[#3B235A]",
  "bg-[#4a2d6e]",
  "bg-[#5a3780]"
];

export default function WhySheOwnsSection() {
  return (
    <section id="why-she-owns" className="bg-[#EFE9DF] py-28 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">
            Section 03 // The Six Commitments
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#21102F] leading-tight">
            What She Owns <span className="italic text-[#3B235A]">Gives You</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 font-light leading-relaxed">
            Scroll down to explore the 6 foundational pillars stacking up to power your property journey.
          </p>
        </motion.div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative pt-6 pb-20">
          {pillars.map((pillar, idx) => {
            const isEven = idx % 2 === 0;
            const zIndex = 10 + idx * 10;
            const bgColor = cardColors[idx % cardColors.length];

            return (
              <div
                key={pillar.num}
                className="sticky top-20 mb-6"
                style={{ zIndex }}
              >
                <div className={`${bgColor} text-[#F8F5EF] rounded-none p-10 sm:p-14 border border-[#D6BB88]/30 shadow-2xl min-h-[85vh] flex flex-col`}>
                  
                  {/* Top Card Header Strip */}
                  <div className="flex items-center justify-between py-4 border-b border-[#D6BB88]/20 h-[60px] flex-shrink-0">
                    <div className="flex items-center space-x-4">
                      <span className="font-serif text-3xl font-light text-[#D6BB88]">
                        {pillar.num}
                      </span>
                      <h3 className="font-serif text-xl text-[#F8F5EF] font-light hidden sm:block">
                        {pillar.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-2 bg-[#D6BB88]/10 px-3 py-1 text-[10px] sm:text-xs text-[#D6BB88] rounded-none border border-[#D6BB88]/20">
                      <Sparkles className="w-3 h-3" />
                      <span className="font-semibold tracking-widest uppercase">Pillar {pillar.num} of 06</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-10 flex-grow">
                    
                    {isEven ? (
                      <>
                        {/* Left: Content */}
                        <div className="lg:col-span-7 space-y-6">
                          <h4 className="font-serif text-3xl sm:text-4xl text-[#F8F5EF] mb-2">{pillar.title}</h4>
                          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#A98BC8] font-semibold block">
                            {pillar.subtitle}
                          </span>
                          <p className="text-lg sm:text-xl text-[#F8F5EF]/90 font-light leading-relaxed">
                            {pillar.body}
                          </p>

                          <div className="flex flex-wrap gap-2.5 pt-4">
                            {pillar.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs uppercase tracking-widest px-4 py-1.5 bg-[#F8F5EF]/5 text-[#D6BB88] border border-[#D6BB88]/30 font-medium rounded-none"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="pt-6">
                            <a
                              href="#consultation"
                              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D6BB88] hover:text-[#F8F5EF] font-semibold transition-colors"
                            >
                              <span>Learn More</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        {/* Right: Square Image */}
                        <div className="lg:col-span-5 relative aspect-square w-full border border-[#D6BB88]/30 rounded-none overflow-hidden">
                          <Image
                            src={pillar.image}
                            alt={pillar.title}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Left: Square Image */}
                        <div className="lg:col-span-5 relative aspect-square w-full border border-[#D6BB88]/30 rounded-none overflow-hidden order-2 lg:order-1">
                          <Image
                            src={pillar.image}
                            alt={pillar.title}
                            fill
                            className="object-cover object-center"
                          />
                        </div>

                        {/* Right: Content */}
                        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                          <h4 className="font-serif text-3xl sm:text-4xl text-[#F8F5EF] mb-2">{pillar.title}</h4>
                          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#A98BC8] font-semibold block">
                            {pillar.subtitle}
                          </span>
                          <p className="text-lg sm:text-xl text-[#F8F5EF]/90 font-light leading-relaxed">
                            {pillar.body}
                          </p>

                          <div className="flex flex-wrap gap-2.5 pt-4">
                            {pillar.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs uppercase tracking-widest px-4 py-1.5 bg-[#F8F5EF]/5 text-[#D6BB88] border border-[#D6BB88]/30 font-medium rounded-none"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="pt-6">
                            <a
                              href="#consultation"
                              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D6BB88] hover:text-[#F8F5EF] font-semibold transition-colors"
                            >
                              <span>Learn More</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
