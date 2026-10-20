"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BookOpen, Key, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const pillarIcons = [BookOpen, Key, Users];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#F8F5EF] text-[#2B2B2B] overflow-hidden">
      {/* ── Origin Story — Light Background ── */}
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Left — eyebrow + big serif */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">{t.about.tag}</span>
            <h2 className="font-serif text-4xl sm:text-4xl lg:text-5xl font-light text-[#21102F] leading-[1.15]">
              {t.about.headingLine1}<br />
              <span className="italic text-[#3B235A]">{t.about.headingLine2}</span>
            </h2>
          </div>

          {/* Right — concise story */}
          <div className="lg:col-span-6 space-y-5 lg:pt-8">
            <p className="text-lg text-[#2B2B2B]/85 font-light leading-relaxed">
              {t.about.paragraph}
            </p>
          </div>
        </motion.div>

        {/* 3 Pillars — Edgy Ivory/White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {t.about.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || BookOpen;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={pillar.title}
                className="p-10 sm:p-12 space-y-5 bg-[#FFFFFF] text-[#21102F] border-t-2 border-t-[#D6BB88] border-x border-b border-[#21102F]/15 rounded-none shadow-sm hover:border-[#21102F] hover:border-t-[#3B235A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <Icon className="w-7 h-7 text-[#3B235A] group-hover:text-[#D6BB88] transition-colors" />
                  <span className="font-serif text-xs uppercase tracking-widest text-[#D6BB88] font-bold">{pillar.num}</span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#21102F]">{pillar.title}</h3>
                <p className="text-base font-light leading-relaxed text-[#2B2B2B]/80">{pillar.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Why She Owns Stands Apart — Side-by-Side Comparison ── */}
      <div className="bg-[#21102F] py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B235A]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">{t.about.comparisonTag}</span>
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F5EF] font-light">
              {t.about.comparisonHeading}
            </h3>
          </div>

          {/* Side-by-side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traditional Brokerage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#F8F5EF]/05 border border-[#F8F5EF]/10 rounded-2xl p-8 sm:p-8 space-y-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#F8F5EF]/50 font-medium">{t.about.traditionTitle}</span>
              </div>
              <h4 className="font-serif text-3xl text-[#F8F5EF]/70 font-light">{t.about.traditionSub}</h4>
              <div className="space-y-4 divide-y divide-[#F8F5EF]/10">
                {t.about.traditionItems.map(([heading, desc]) => (
                  <div key={heading} className="pt-5 space-y-1">
                    <span className="text-base font-semibold text-[#F8F5EF]/60 block">{heading}</span>
                    <p className="text-sm text-[#F8F5EF]/45 font-light leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The SheOwns Standard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-[#3B235A]/60 border border-[#D6BB88]/40 rounded-3xl p-8 sm:p-8 space-y-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest px-3 py-1 bg-[#D6BB88] text-[#21102F] rounded-full font-semibold">
                  {t.about.standardTitle}
                </span>
              </div>
              <h4 className="font-serif text-3xl text-[#D6BB88] font-light">{t.about.standardSub}</h4>
              <div className="space-y-2 divide-y divide-[#D6BB88]/20">
                {t.about.standardItems.map(([heading, desc]) => (
                  <div key={heading} className="pt-5 space-y-1">
                    <span className="text-base font-semibold text-[#D6BB88] flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{heading}</span>
                    </span>
                    <p className="text-sm text-[#F8F5EF]/80 font-light leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-[#D6BB88]/20 flex items-center justify-between flex-wrap gap-4">
                <span className="text-sm text-[#D6BB88]">{t.about.readyPrompt}</span>
                <a href="#consultation" className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest bg-[#D6BB88] text-[#21102F] px-5 py-2.5 rounded-full font-semibold hover:bg-[#E7D7B3] transition-colors">
                  <span>{t.about.bookSession}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
