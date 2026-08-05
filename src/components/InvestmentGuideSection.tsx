"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function InvestmentGuideSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">Not ready to invest yet?</span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#F8F5EF] font-light leading-tight">
                  Start here.{" "}
                  <span className="italic text-[#D6BB88]">For free.</span>
                </h2>
                <p className="text-lg text-[#F8F5EF]/75 font-light leading-relaxed max-w-md">
                  The She Owns Guide to Dubai Real Estate — written for first-time women investors. No jargon. No pressure. Just clarity.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "How off-plan investing actually works",
                  "The contract red flags that cost buyers millions",
                  "The 1% monthly payment plan, fully explained",
                  "Your rights as a foreign woman investor in Dubai",
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3 text-base text-[#F8F5EF]/80 font-light">
                    <Sparkles className="w-4 h-4 text-[#D6BB88] mt-0.5 shrink-0" />
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
                    <h3 className="font-serif text-2xl text-[#F8F5EF] font-light">Get the free guide</h3>
                    <p className="text-sm text-[#F8F5EF]/60 font-light">We'll send it straight to your inbox.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-[#3B235A]/60 border border-[#D6BB88]/30 rounded-xl px-5 py-4 text-base text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#D6BB88] to-[#B89B62] text-[#21102F] font-semibold text-sm uppercase tracking-widest py-4 rounded-xl hover:scale-[1.01] transition-transform duration-300 shadow-xl flex items-center justify-center space-x-2"
                    >
                      <span>Send Me the Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-xs text-[#F8F5EF]/40 font-light">
                      No spam. Unsubscribe anytime.
                    </p>
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
                  <h3 className="font-serif text-2xl text-[#F8F5EF]">On its way!</h3>
                  <p className="text-base text-[#F8F5EF]/70 font-light">
                    Check your inbox. Your guide is heading to{" "}
                    <span className="text-[#D6BB88]">{email}</span>.
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
