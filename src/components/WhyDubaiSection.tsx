"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "0%", label: "Property & Income Tax", sub: "Keep every dirham you earn." },
  { value: "7–9%", label: "Average Rental Yield", sub: "3× what London or New York offers." },
  { value: "10-Yr", label: "UAE Golden Visa", sub: "Invest in property. Earn residency." },
  { value: "#1", label: "Global Safety Index", sub: "Among the safest cities for women." },
];

const cityComparison = [
  { city: "Dubai", yield: "7.8%", tax: "0%", trend: 100 },
  { city: "London", yield: "3.4%", tax: "20–45%", trend: 44 },
  { city: "New York", yield: "2.9%", tax: "30–50%", trend: 37 },
  { city: "Singapore", yield: "2.5%", tax: "15–60%", trend: 32 },
];

export default function WhyDubaiSection() {
  return (
    <section id="why-dubai" className="bg-[#F8F5EF] overflow-hidden">
      {/* Top Banner */}
      

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24 space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-4"
        >
          <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">The Market</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#21102F] leading-[1.15]">
            Why Dubai
          </h2>
          <p className="text-lg text-[#2B2B2B]/75 font-light max-w-xl">
            Zero tax. World-class yields. Full foreign ownership. The only major market where all three exist at once.
          </p>
        </motion.div>

        {/* Big Numbers — full-bleed infographic strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#D6BB88]/20 border border-[#D6BB88]/20 rounded-3xl overflow-hidden">
          {stats.map(({ value, label, sub }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-8 sm:p-10 space-y-2 ${idx % 2 === 1 ? "bg-[#EFE9DF]" : "bg-[#F8F5EF]"}`}
            >
              <div className="font-serif text-5xl sm:text-6xl text-[#21102F] font-light">{value}</div>
              <div className="text-sm font-semibold text-[#3B235A]">{label}</div>
              <div className="text-xs text-[#2B2B2B]/65 font-light leading-snug">{sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Visual comparison — bar chart style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: City Yield Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">Net Rental Yield — Global Comparison</span>
              <p className="text-sm text-[#2B2B2B]/65 font-light">After local taxes, management fees, and holding costs.</p>
            </div>
            <div className="space-y-5">
              {cityComparison.map(({ city, yield: yld, tax, trend }, idx) => (
                <div key={city} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-semibold ${city === "Dubai" ? "text-[#21102F]" : "text-[#2B2B2B]/70"}`}>{city}</span>
                    <div className="flex items-center gap-4 text-xs text-[#2B2B2B]/60 font-light">
                      <span className={`font-semibold ${city === "Dubai" ? "text-[#3B235A]" : ""}`}>{yld} yield</span>
                      <span>{tax} tax</span>
                    </div>
                  </div>
                  <div className="h-2.5 bg-[#EFE9DF] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${trend}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full ${city === "Dubai" ? "bg-gradient-to-r from-[#3B235A] to-[#D6BB88]" : "bg-[#2B2B2B]/20"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: AED Peg Callout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-[#21102F] text-[#F8F5EF] rounded-3xl p-8 sm:p-10 space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#3B235A]/50 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">Currency Stability</span>
              <h3 className="font-serif text-3xl text-[#F8F5EF] font-light leading-snug">
                AED is pegged to the US Dollar.
              </h3>
              <p className="text-base text-[#F8F5EF]/75 font-light leading-relaxed">
                $1 = 3.67 AED — fixed since 1997. Your investment is shielded from currency devaluation, unlike property in most emerging markets.
              </p>
              <div className="flex items-center space-x-3 pt-4 border-t border-[#D6BB88]/20">
                <div className="w-10 h-10 rounded-full bg-[#D6BB88]/20 flex items-center justify-center text-[#D6BB88] font-serif text-xl">$</div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#D6BB88] font-medium">Full Foreign Ownership</div>
                  <div className="text-sm text-[#F8F5EF]/75 font-light">100% freehold rights. No local sponsor required.</div>
                </div>
              </div>
            </div>

            <a
              href="#consultation"
              className="relative z-10 inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D6BB88] hover:text-[#F8F5EF] transition-colors"
            >
              <span>Request Market Intelligence Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
