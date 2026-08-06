"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, BookOpen, Check } from "lucide-react";

interface EmailCapturePopupProps {
  coverDismissed: boolean;
}

export default function EmailCapturePopup({ coverDismissed }: EmailCapturePopupProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!coverDismissed || dismissed) return;
    // Show popup 45 seconds after cover is dismissed
    const timer = setTimeout(() => {
      setVisible(true);
    }, 45000);
    return () => clearTimeout(timer);
  }, [coverDismissed, dismissed]);

  const handleDismiss = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setVisible(false);
    setDismissed(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setVisible(false);
        setDismissed(true);
      }, 3500);
    }, 600);
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#21102F]/80 backdrop-blur-md cursor-pointer"
            onClick={handleDismiss}
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#21102F] border border-[#D6BB88]/50 rounded-3xl overflow-hidden shadow-2xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#3B235A]/70 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D6BB88]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Interactive Close button */}
            <motion.button
              onClick={handleDismiss}
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-[#3B235A]/80 border border-[#D6BB88]/30 flex items-center justify-center text-[#F8F5EF] hover:text-[#D6BB88] hover:bg-[#3B235A] transition-colors shadow-lg cursor-pointer"
              aria-label="Close modal"
              type="button"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="relative z-10 p-8 sm:p-10">
              {!submitted ? (
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#D6BB88]/15 border border-[#D6BB88]/30 flex items-center justify-center text-[#D6BB88]">
                    <BookOpen className="w-6 h-6" />
                  </div>

                  {/* Headline */}
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">
                      Free for SheOwns Community
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F5EF] font-light leading-snug">
                      The First-Time Investor's Guide to{" "}
                      <span className="italic text-[#D6BB88]">Dubai Real Estate</span>
                    </h3>
                    <p className="text-sm text-[#F8F5EF]/80 font-light leading-relaxed">
                      Everything no one explains — off-plan contracts, customised monthly payment plans, DLD protections, and what to watch out for. Written for women, by women who've done it.
                    </p>
                  </div>

                  {/* What's inside */}
                  <ul className="space-y-2.5 text-sm text-[#F8F5EF]/85 font-light">
                    {[
                      "How off-plan investing actually works",
                      "The contract red flags that cost buyers millions",
                      "Customised monthly payment plans for members",
                      "Your rights as a foreign woman investor in Dubai",
                    ].map((item) => (
                      <li key={item} className="flex items-start space-x-2.5">
                        <span className="text-[#D6BB88] font-bold mt-0.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Email form */}
                  <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-[#3B235A]/60 border border-[#D6BB88]/40 rounded-xl px-4 py-3.5 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                    />
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className={`w-full bg-gradient-to-r from-[#D6BB88] via-[#E7D7B3] to-[#B89B62] text-[#21102F] font-semibold text-xs uppercase tracking-widest py-4 rounded-xl shadow-xl flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                        isSubmitting ? "opacity-80" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center space-x-2">
                          <span className="w-4 h-4 border-2 border-[#21102F] border-t-transparent rounded-full animate-spin" />
                          <span>Sending Request...</span>
                        </span>
                      ) : (
                        <>
                          <span>Send Me the Free Guide</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-[10px] text-[#F8F5EF]/60 font-light">
                      We'll send it straight to your inbox. No spam, ever.
                    </p>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D6BB88] flex items-center justify-center mx-auto shadow-lg text-[#21102F]">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#F8F5EF] font-light">Guide On Its Way!</h3>
                  <p className="text-sm text-[#F8F5EF]/85 font-light max-w-xs mx-auto leading-relaxed">
                    Check your inbox. Your complimentary guide is being delivered to <span className="text-[#D6BB88] font-medium">{email}</span>.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
