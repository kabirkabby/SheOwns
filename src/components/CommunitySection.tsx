"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CommunitySection() {
  return (
    <section id="community" className="bg-[#F8F5EF] py-28 px-6 md:px-12 relative overflow-hidden text-[#2B2B2B]">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D6BB88]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Custom Watercolor Character Illustration (No Shadow) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative w-full aspect-[3/4] rounded-3xl overflow-hidden border-2 border-[#D6BB88]/40 group bg-[#3B235A]/05"
          >
            <Image
              src="/images/community_salon.jpg"
              alt="SheOwns Salon & Women Empowerment Community"
              fill
              priority
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Gradient Framing */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#21102F]/60 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Overlay Tag */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#21102F]/90 backdrop-blur-md border border-[#D6BB88]/30 p-4 rounded-2xl">
              <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block mb-0.5">
                The SheOwns Salon
              </span>
              <p className="text-xs text-[#F8F5EF]/90 font-light italic">
                “When one woman steps into her financial power, she lifts an entire generation.”
              </p>
            </div>
          </motion.div>

          {/* Right Column: Heading, Paragraph, and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#3B235A]/10 border border-[#3B235A]/20 px-3.5 py-1.5 rounded-full">
              <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">
                A Sisterhood of Ownership
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#21102F] leading-[1.15]">
                You were never meant to build wealth{" "}
                <span className="italic text-[#3B235A]">in isolation.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#2B2B2B]/85 font-light leading-relaxed">
                For too long, real estate and financial strategy have been discussed behind closed doors, filled with jargon meant to intimidate rather than empower. <strong className="font-medium text-[#21102F]">SheOwns</strong> changes that.
              </p>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg text-[#2B2B2B]/75 font-light leading-relaxed">
              We are a collective of over 15,000 ambitious women across the UAE and India—first-time buyers, seasoned investors, mothers, and executives—who come together to learn without fear, invest with absolute clarity, and claim our seats at the table of financial sovereignty.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#consultation"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D6BB88] via-[#E7D7B3] to-[#B89B62] text-[#21102F] font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:scale-[1.02] transition-transform shadow-xl group"
              >
                <span>Join the Community</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
