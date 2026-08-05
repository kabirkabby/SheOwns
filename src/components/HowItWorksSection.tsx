"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Learn",
    label: "Start with knowledge",
    body: "Attend a free She Owns workshop or masterclass. No commitment required — just clarity.",
    cta: { text: "See Upcoming Events", href: "#workshops" },
  },
  {
    num: "02",
    title: "Consult",
    label: "Your 1-on-1 session",
    body: "A private call with your Aurex Privy advisor. Your goals, your budget, your timeline. Zero pressure.",
    cta: { text: "Book Consultation", href: "#consultation" },
  },
  {
    num: "03",
    title: "Invest",
    label: "On your terms",
    body: "Choose your property with full legal clarity. Your payment plan is mapped to your cash flow — not theirs.",
    cta: null,
  },
  {
    num: "04",
    title: "Grow",
    label: "Beyond the transaction",
    body: "Join the community. Attend annual portfolio reviews. Your advisor is with you for every milestone.",
    cta: null,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#21102F] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative">
        {/* Ambient glow */}
        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-[#3B235A]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl space-y-4"
        >
          <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">Your Journey</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F5EF] leading-[1.15]">
            Four steps from{" "}
            <span className="italic text-[#D6BB88]">curious to confident.</span>
          </h2>
        </motion.div>

        {/* Steps — horizontal scroll-friendly row on desktop */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D6BB88]/15 rounded-3xl overflow-hidden">
          {steps.map(({ num, title, label, body, cta }, idx) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-[#21102F] p-8 sm:p-10 space-y-5 hover:bg-[#3B235A]/40 transition-colors duration-500 group"
            >
              {/* Step number */}
              <span className="font-serif text-5xl font-light text-[#D6BB88]/30 group-hover:text-[#D6BB88]/60 transition-colors duration-300 select-none block">
                {num}
              </span>

              {/* Title */}
              <div className="space-y-1">
                <h3 className="font-serif text-3xl text-[#F8F5EF] font-light">{title}</h3>
                <p className="text-xs uppercase tracking-widest text-[#D6BB88] font-medium">{label}</p>
              </div>

              {/* Body */}
              <p className="text-base text-[#F8F5EF]/70 font-light leading-relaxed">{body}</p>

              {/* Optional CTA */}
              {cta && (
                <a
                  href={cta.href}
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-[#D6BB88] hover:text-[#F8F5EF] transition-colors group/link"
                >
                  <span>{cta.text}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              )}

              {/* Connector line — desktop only */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 w-px h-12 bg-[#D6BB88]/20 -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
