"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQSection() {
  const { t, isRtl } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#EFE9DF] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold"
          >
            {t.faq.tag}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-light text-[#3B235A] leading-tight"
          >
            {t.faq.headingPart1} <span className="italic text-[#21102F]">{t.faq.headingPart2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#2B2B2B]/80 font-light max-w-xl mx-auto"
          >
            {t.faq.subtitle}
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {t.faq.items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-[#D6BB88]/30 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-7 text-left rtl:text-right flex items-center justify-between space-x-4 rtl:space-x-reverse focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-2xl sm:text-3xl text-[#21102F] font-normal">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                      isOpen ? "bg-[#3B235A] text-[#D6BB88]" : "bg-[#EFE9DF] text-[#21102F]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-7 pb-8 text-base sm:text-lg text-[#2B2B2B]/80 font-light leading-relaxed border-t border-[#D6BB88]/15 pt-5 text-left rtl:text-right"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
