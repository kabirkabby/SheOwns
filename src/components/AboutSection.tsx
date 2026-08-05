"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BookOpen, Key, Users, ArrowRight } from "lucide-react";

export default function AboutSection() {
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
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">The Initiative</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#21102F] leading-[1.15]">
              Every woman deserves expert guidance<br />
              <span className="italic text-[#3B235A]">for her first investment.</span>
            </h2>
          </div>

          {/* Right — concise story */}
          <div className="lg:col-span-5 space-y-5 lg:pt-8">
            <div className="w-12 h-px bg-[#D6BB88]" />
            <p className="text-lg text-[#2B2B2B]/85 font-light leading-relaxed">
              <strong>She Owns</strong> brings together <strong>Aurex Privy</strong> — Dubai's trusted real estate advisory — and <strong>Being She</strong> — Asia's largest community of women leaders — to create something new: a platform where education comes before every transaction.
            </p>
            <p className="text-base text-[#2B2B2B]/70 font-light leading-relaxed">
              No pressure, no jargon. Just clarity, confidence, and the right counsel.
            </p>
          </div>
        </motion.div>

        {/* 3 Pillars — more attractive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { icon: BookOpen, title: "Education First", body: "We break down yields, payment schedules, and legal frameworks — no jargon, no pressure." },
            { icon: Key, title: "Exclusive Access", body: "Developer-negotiated payment plans, reduced deposits, and off-market terms built for women." },
            { icon: Users, title: "Lifelong Community", body: "15,000+ women. Founder dinners, masterclasses, and peer advisory — long after you sign." },
          ].map(({ icon: Icon, title, body }, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={title}
              className="p-10 sm:p-12 space-y-4 bg-gradient-to-br from-[#3B235A] to-[#21102F] text-[#F8F5EF] border border-[#D6BB88]/30 rounded-2xl hover:border-[#D6BB88] hover:shadow-lg hover:shadow-[#D6BB88]/10 hover:scale-[1.02] transition-all duration-300"
            >
              <Icon className="w-7 h-7 text-[#D6BB88]" />
              <h3 className="font-serif text-2xl font-normal text-[#D6BB88]">{title}</h3>
              <p className="text-base font-light leading-relaxed text-[#F8F5EF]/85">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Why She Owns Stands Apart — Golden Box on Purple Gradient ── */}
      <div className="bg-gradient-to-br from-[#21102F] via-[#3B235A] to-[#21102F] py-28 px-6 md:px-12 relative overflow-hidden text-[#F8F5EF]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B235A]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 space-y-12">
          {/* Golden Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#D6BB88]/15 to-[#D6BB88]/05 border border-[#D6BB88]/50 rounded-2xl p-10 sm:p-14 backdrop-blur-sm shadow-2xl"
          >
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">The She Owns Standard</span>
              <h3 className="font-serif text-4xl sm:text-5xl text-[#D6BB88] font-light mt-3">
                What Makes Us Different
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {[
                { title: "Education Before Sales", desc: "We map your budget, liquidity, and security first without sales pitches." },
                { title: "Complete Transparency", desc: "Every yield calculation decoded openly with no hidden advisory fees." },
                { title: "Flexible 1% Plans", desc: "Developer-backed monthly schedules that preserve your working liquidity." },
                { title: "Lifelong Community", desc: "Ongoing portfolio counsel and a network of 15,000+ female leaders." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 group">
                  <CheckCircle2 className="w-6 h-6 text-[#D6BB88] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl text-[#F8F5EF] font-normal mb-1">{item.title}</h4>
                    <p className="text-[#F8F5EF]/80 font-light text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center flex justify-center"
          >
            <a
              href="#consultation"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D6BB88] to-[#B89B62] text-[#21102F] text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-xl"
            >
              <span>Book Your Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
