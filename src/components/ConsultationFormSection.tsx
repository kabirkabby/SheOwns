"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ConsultationFormSection() {
  const { t, isRtl } = useLanguage();
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: todayStr,
    preferredTimeSlot: "Morning (10:00 AM – 1:00 PM)",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit consultation request");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission failed:", err);
      setErrorMessage(err.message || "Something went wrong. Please try again or message us directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
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
              {t.consultation.tag}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F5EF] leading-tight">
              {t.consultation.headingLine1} <br />
              <span className="italic text-[#D6BB88]">{t.consultation.headingLine2}</span>
            </h2>
            <p className="text-base text-[#F8F5EF]/80 font-light max-w-lg leading-relaxed">
              {t.consultation.paragraph}
            </p>
          </div>

          {/* Quick Value Checks */}
          <div className="space-y-3 text-sm text-[#F8F5EF]/90 font-light">
            {t.consultation.checks.map((check) => (
              <div key={check} className="flex items-center space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="w-5 h-5 text-[#D6BB88] shrink-0" />
                <span>{check}</span>
              </div>
            ))}
          </div>

          {/* Prominent Direct WhatsApp Option */}
          <div className="pt-6 border-t border-[#D6BB88]/20 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#A98BC8] font-medium">
              {t.consultation.instantCommTag}
            </span>
            <div>
              <a
                href="https://wa.me/971501815561?text=Hello%20SheOwns,%20I%20would%20like%20to%20book%20a%20private%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 rtl:space-x-reverse bg-[#25D366]/20 border border-[#25D366]/50 text-[#F8F5EF] hover:bg-[#25D366]/30 px-6 py-3.5 rounded-full transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  {t.consultation.whatsappPrompt}
                </span>
                <ArrowRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
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
                  {t.consultation.form.successTitle}
                </h3>
                <p className="text-sm text-[#F8F5EF]/80 font-light max-w-sm mx-auto">
                  {t.consultation.form.successDesc}
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs uppercase tracking-widest text-[#D6BB88] underline pt-4 cursor-pointer"
              >
                {t.consultation.form.submitBtn}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-serif text-3xl text-[#F8F5EF] mb-1">
                  {t.navbar.bookConsultation}
                </h3>
                <p className="text-xs text-[#F8F5EF]/70 font-light">
                  {t.consultation.paragraph}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-2 font-medium">
                    {t.consultation.form.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.consultation.form.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-2 font-medium">
                      {t.consultation.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.consultation.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-2 font-medium">
                      {t.consultation.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.consultation.form.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-2 font-medium">
                      {t.consultation.form.date}
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] focus:outline-none focus:border-[#D6BB88] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-2 font-medium">
                      {t.consultation.form.timeSlot}
                    </label>
                    <select
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                      className="w-full bg-[#3B235A] border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] focus:outline-none focus:border-[#D6BB88] transition-colors"
                    >
                      {t.consultation.form.timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-[#21102F] text-[#F8F5EF]">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-2 font-medium">
                    {t.consultation.form.notes}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t.consultation.form.notesPlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors resize-none"
                  />
                </div>
              </div>

              {errorMessage && (
                <p className="text-xs text-red-400 bg-red-950/40 border border-red-800/50 p-3 rounded-lg">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#D6BB88] via-[#E7D7B3] to-[#B89B62] text-[#21102F] font-semibold text-xs uppercase tracking-widest py-4 rounded-xl hover:scale-[1.01] transition-transform duration-300 shadow-xl disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? t.consultation.form.submitting : t.consultation.form.submitBtn}
              </button>

              <p className="text-center text-[10px] text-[#F8F5EF]/40 font-light">
                {t.consultation.form.privacyNote}
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
