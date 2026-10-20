"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function InvestmentGuideSection() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "Free Investment Guide Download" }),
      });
    } catch (err) {
      console.error("Guide subscription error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="guide" className="bg-[#EFE9DF] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-[#21102F] rounded-3xl overflow-hidden border border-[#D6BB88]/30"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#3B235A]/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#D6BB88]/08 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left — editorial context */}
            <div className="lg:col-span-7 p-10 sm:p-14 space-y-8 border-b lg:border-b-0 lg:border-r border-[#D6BB88]/20">
              <div className="w-12 h-12 rounded-2xl bg-[#D6BB88]/15 border border-[#D6BB88]/30 flex items-center justify-center text-[#D6BB88]">
                <BookOpen className="w-6 h-6" />
              </div>

              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">{t.guide.tag}</span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#F8F5EF] font-light leading-tight">
                  {t.guide.heading}
                </h2>
                <p className="text-base sm:text-lg text-[#F8F5EF]/75 font-light leading-relaxed max-w-md">
                  {t.guide.body}
                </p>
              </div>

              <ul className="space-y-3">
                {t.guide.bullets.map((item) => (
                  <li key={item} className="flex items-start space-x-3 text-base text-[#F8F5EF]/80 font-light">
                    <span className="text-[#D6BB88] font-bold mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — email form */}
            <div className="lg:col-span-5 p-10 sm:p-14 flex flex-col justify-center space-y-6">
              {!submitted ? (
                <>
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-[#F8F5EF] font-light">{t.guide.heading}</h3>
                    <p className="text-sm text-[#F8F5EF]/60 font-light">{t.guide.tag}</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.guide.emailPlaceholder}
                      className="w-full bg-[#3B235A]/60 border border-[#D6BB88]/30 rounded-xl px-5 py-4 text-base text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#D6BB88] to-[#B89B62] text-[#21102F] font-semibold text-sm uppercase tracking-widest py-4 rounded-xl hover:scale-[1.01] transition-transform duration-300 shadow-xl flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>{t.guide.downloadBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4 py-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[#D6BB88] flex items-center justify-center mx-auto">
                    <BookOpen className="w-7 h-7 text-[#21102F]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#F8F5EF]">{t.guide.successMsg}</h3>
                  <p className="text-base text-[#F8F5EF]/70 font-light">
                    <span className="text-[#D6BB88]">{email}</span>
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
