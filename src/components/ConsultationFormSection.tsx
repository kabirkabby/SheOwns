"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Shield, ArrowRight, Lock } from "lucide-react";

export default function ConsultationFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    timeline: "Next 1 - 3 Months",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-28 px-6 md:px-12 bg-[#21102F] text-[#F8F5EF] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#3B235A]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Context & Direct WhatsApp Option */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-8"
        >
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-medium">
              Section 10 // Take The Next Step
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F5EF] leading-tight">
              Begin Your Journey to <br />
              <span className="italic text-[#D6BB88]">Financial Sovereignty</span>
            </h2>
            <p className="text-base text-[#F8F5EF]/80 font-light max-w-lg leading-relaxed">
              Book a confidential 1-on-1 strategy session with Aurex Privy senior advisors. Zero high-pressure sales pitches—just clear, actionable data tailored to your personal goals.
            </p>
          </div>

          {/* Quick Value Checks */}
          <div className="space-y-3 text-sm text-[#F8F5EF]/90 font-light">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#D6BB88]" />
              <span>30-Minute Confidential Portfolio Consultation</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#D6BB88]" />
              <span>Access to 1% Monthly Developer Payment Options</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#D6BB88]" />
              <span>100% Free Advisory for Being She Community Members</span>
            </div>
          </div>

          {/* Prominent Direct WhatsApp Option */}
          <div className="pt-6 border-t border-[#D6BB88]/20 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#A98BC8] font-medium">
              Prefer Instant Communication?
            </span>
            <div>
              <a
                href="https://wa.me/971500000000?text=Hello%20She%20Owns,%20I%20would%20like%20to%20book%20a%20private%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-[#25D366]/20 border border-[#25D366]/50 text-[#F8F5EF] hover:bg-[#25D366]/30 px-6 py-3.5 rounded-full transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Chat Directly On WhatsApp
                </span>
                <ArrowRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean Frictionless Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 glass-card-dark p-8 sm:p-12 rounded-3xl border border-[#D6BB88]/30 shadow-2xl relative"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#D6BB88] text-[#21102F] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-3xl text-[#F8F5EF]">
                  Consultation Reserved
                </h3>
                <p className="text-sm text-[#F8F5EF]/80 font-light max-w-sm mx-auto">
                  Thank you, {formData.fullName}. A senior investment strategist from Aurex Privy will reach out to you via WhatsApp or Email within 24 hours.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs uppercase tracking-widest text-[#D6BB88] underline pt-4"
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-serif text-3xl text-[#F8F5EF] mb-1">
                  Book Strategy Session
                </h3>
                <p className="text-xs text-[#F8F5EF]/70 font-light">
                  Please provide your contact details to schedule your private call.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-2 font-medium">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-2 font-medium">
                    Investment Readiness Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#3B235A]/90 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] focus:outline-none focus:border-[#D6BB88] transition-colors"
                  >
                    <option value="Ready Now">Ready Now (Active Investment)</option>
                    <option value="Next 1 - 3 Months">Next 1 – 3 Months</option>
                    <option value="Exploring & Educational">Exploring & Educational Purpose</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-2 font-medium">
                    Any Specific Investment Goals or Notes?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us if you are looking for capital appreciation, passive rental yield, or off-plan payment structures..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D6BB88] to-[#B89B62] text-[#21102F] font-semibold text-xs uppercase tracking-widest py-4 rounded-xl hover:scale-[1.01] transition-transform duration-300 shadow-xl"
              >
                Confirm Consultation Request
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] uppercase tracking-wider text-[#F8F5EF]/60 pt-2">
                <Lock className="w-3 h-3 text-[#D6BB88]" />
                <span>Your information is strictly confidential & never shared.</span>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
