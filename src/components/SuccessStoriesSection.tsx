"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "Priya M.",
    city: "Mumbai, India",
    initials: "PM",
    tagline: "First-time investor at 36. Studio in JVC. Fully rented.",
    quote: "I'd been meaning to 'start investing' for four years. She Owns removed every excuse I had. Within 90 days I owned a studio apartment in Dubai on a 1% monthly plan. The process was so clear I could explain it to my mother.",
  },
  {
    name: "Sarah A.",
    city: "Riyadh, KSA",
    initials: "SA",
    tagline: "Bought her second property 6 months after her first.",
    quote: "I was skeptical. I thought it would be the same — pushy agents, confusing contracts. The She Owns consultation felt more like a financial planning session than a sales call. I left with a document outlining my options, not a unit to sign on.",
  },
  {
    name: "Deepika R.",
    city: "Bengaluru, India",
    initials: "DR",
    tagline: "NRI investor. Earning rental yield from month 18.",
    quote: "The most valuable thing wasn't the property — it was the community. I now know 40 women who are at various stages of their investment journeys. We share learnings, referrals, and milestones. That's not something a brokerage gives you.",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section id="stories" className="bg-[#21102F] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative">
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#3B235A]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
        >
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">Real Women. Real Results.</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F5EF] leading-[1.15]">
              Their first{" "}
              <span className="italic text-[#D6BB88]">step forward.</span>
            </h2>
          </div>
          <p className="text-lg text-[#F8F5EF]/70 font-light leading-relaxed lg:pb-2">
            Every one of these stories started with a single conversation — and the decision not to wait any longer.
          </p>
        </motion.div>

        {/* Stories */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map(({ name, city, initials, tagline, quote }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="bg-[#3B235A]/40 border border-[#D6BB88]/20 rounded-3xl p-8 space-y-6 flex flex-col hover:border-[#D6BB88]/50 transition-colors duration-500"
            >
              {/* Quote */}
              <blockquote className="font-serif text-lg text-[#F8F5EF] font-light leading-relaxed italic flex-1">
                "{quote}"
              </blockquote>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#D6BB88]/20 flex items-center space-x-4">
                <div className="w-11 h-11 rounded-full bg-[#D6BB88]/20 border border-[#D6BB88]/40 flex items-center justify-center text-[#D6BB88] font-serif text-sm font-normal shrink-0">
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#F8F5EF]">{name}</div>
                  <div className="text-xs text-[#A98BC8] font-light">{city}</div>
                  <div className="text-xs text-[#D6BB88]/80 font-light mt-0.5 italic">{tagline}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
