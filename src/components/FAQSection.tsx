"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need to live in Dubai or hold UAE residency to invest?",
    answer:
      "No. International non-resident investors of any nationality can purchase freehold property in Dubai with 100% full ownership rights. We assist international clients remotely, from initial contract review and bank account setup to title deed issuance and remote tenant placement.",
  },
  {
    question: "How much capital do I need to begin investing?",
    answer:
      "Through SheOwns negotiated developer terms, initial booking deposits are reduced, often starting from 10% to 15% down. Remaining installments can be structured under 1% monthly payment schedules during construction, allowing you to invest without liquidating core funds.",
  },
  {
    question: "Is SheOwns suitable for first-time real estate investors?",
    answer:
      "Absolutely. In fact, over 94% of our members are first-time property buyers. Our initiative was built specifically to eliminate jargon, explain legal protections, and provide 1-on-1 expert advisory so you feel completely confident at every step.",
  },
  {
    question: "How does the private consultation process work?",
    answer:
      "After submitting your details, a senior investment advisor from Aurex Privy will arrange a private 30-minute video call or in-person meeting. We analyze your financial goals, walk you through current market data, and present tailored options—with zero pressure to commit.",
  },
  {
    question: "What legal guarantees and safeguards protect my investment in Dubai?",
    answer:
      "All property transactions in Dubai are strictly regulated by the Dubai Land Department (DLD) and RERA. Off-plan developer funds are held in government-monitored escrow accounts, ensuring funds are released only as construction milestones are independently verified.",
  },
  {
    question: "Are there any hidden advisory or consultation fees?",
    answer:
      "No. Our educational workshops, market reports, and strategy consultations are 100% complimentary for SheOwns community members.",
  },
];

export default function FAQSection() {
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
            Clear Answers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-light text-[#3B235A] leading-tight"
          >
            Frequently Asked <span className="italic text-[#21102F]">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#2B2B2B]/80 font-light max-w-xl mx-auto"
          >
            Everything you need to know about investing in Dubai real estate with SheOwns.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
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
                  className="w-full p-7 text-left flex items-center justify-between space-x-4 focus:outline-none"
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
                      className="px-7 pb-8 text-base sm:text-lg text-[#2B2B2B]/80 font-light leading-relaxed border-t border-[#D6BB88]/15 pt-5"
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
