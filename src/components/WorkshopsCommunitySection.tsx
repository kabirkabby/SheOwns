"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function WorkshopsCommunitySection() {
  return (
    <section id="workshops" className="bg-[#F8F5EF] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">Next Event</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#21102F] leading-[1.15]">
            Join us in person.
          </h2>
        </motion.div>

        {/* Main Event Card — full-width luxury invitation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-[#21102F] rounded-3xl overflow-hidden border border-[#D6BB88]/30"
        >
          {/* Ambient glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B235A]/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D6BB88]/08 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left column — main details */}
            <div className="lg:col-span-7 p-10 sm:p-14 space-y-10 border-b lg:border-b-0 lg:border-r border-[#D6BB88]/20">

              {/* Badge */}
              <div className="inline-flex items-center space-x-2 border border-[#D6BB88]/40 px-4 py-1.5 rounded-full">
                <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">Emirati Women's Day Open House</span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h3 className="font-serif text-4xl sm:text-5xl text-[#F8F5EF] font-light leading-tight">
                  SheOwns
                </h3>
                <p className="font-serif text-xl sm:text-2xl text-[#D6BB88] font-light italic leading-snug">
                  Celebrating the women who shape this nation —{" "}
                  <span className="text-[#F8F5EF]/80">and the women choosing to own their place in it.</span>
                </p>
              </div>

              {/* Date / Time / Venue */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">Date</span>
                  <p className="text-base text-[#F8F5EF] font-light">Friday, 28 August 2026</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">Time</span>
                  <p className="text-base text-[#F8F5EF] font-light">4:00 PM – 8:00 PM</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">Attire</span>
                  <p className="text-base text-[#F8F5EF] font-light">Elegant</p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D6BB88] shrink-0 mt-0.5" />
                <div>
                  <p className="text-base font-semibold text-[#F8F5EF]">Danube Sales Gallery</p>
                  <p className="text-sm text-[#F8F5EF]/60 font-light">Dubai, UAE · High Tea will be served</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D6BB88] to-[#B89B62] text-[#21102F] font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:scale-[1.02] transition-transform shadow-xl"
                >
                  <span>Reserve Your Seat</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-[#F8F5EF]/40 font-light mt-3">Limited seating. Invitation only.</p>
              </div>
            </div>

            {/* Right column — The Experience */}
            <div className="lg:col-span-5 p-10 sm:p-14 space-y-8">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">The Experience</span>
                <h4 className="font-serif text-2xl text-[#F8F5EF] font-light">What you'll walk away with.</h4>
              </div>

              <div className="space-y-8 divide-y divide-[#D6BB88]/15">
                <div className="space-y-3">
                  <h5 className="font-serif text-xl text-[#D6BB88]">The Red Flag Files — Live</h5>
                  <p className="text-sm text-[#F8F5EF]/70 font-light leading-relaxed">
                    The contract clauses that have cost buyers millions across the market — decoded openly, for the first time on a stage.
                  </p>
                </div>

                <div className="pt-6 space-y-3">
                  <h5 className="font-serif text-xl text-[#D6BB88]">Your Ownership Blueprint</h5>
                  <p className="text-sm text-[#F8F5EF]/70 font-light leading-relaxed">
                    Leave with a payment structure mapped to your cash flow — not the sales office's targets. Yours to keep.
                  </p>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-[#F8F5EF]/50 font-light italic">
                    An afternoon of curated residences, private counsel and conversation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
