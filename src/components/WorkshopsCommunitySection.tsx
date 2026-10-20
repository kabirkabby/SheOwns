"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

export default function WorkshopsCommunitySection() {
  return (
    <section id="property-show" className="bg-[#F8F5EF] py-24 px-6 md:px-12 overflow-hidden relative">
      {/* Anchor alias for backwards compatibility */}
      <div id="workshops" className="absolute -top-24 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">Flagship Event</span>
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
                <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">SheOwns The Property Show</span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h3 className="font-serif text-4xl sm:text-5xl text-[#F8F5EF] font-light leading-tight">
                  SheOwns The Property Show
                </h3>
                <p className="font-serif text-xl sm:text-2xl text-[#D6BB88] font-light italic leading-snug">
                  Dubai's premier real estate exhibition bringing top master developers{" "}
                  <span className="text-[#F8F5EF]/80">directly to women investors and homeowners.</span>
                </p>
              </div>

              {/* Date & Location Grid — No time, venue, or attire as requested */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">Date</span>
                  <p className="text-base text-[#F8F5EF] font-light">12th December 2026</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">Location</span>
                  <p className="text-base text-[#F8F5EF] font-light">Dubai, United Arab Emirates</p>
                </div>
              </div>

              {/* Venue Notice */}
              <div className="flex items-start space-x-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                <MapPin className="w-5 h-5 text-[#D6BB88] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#F8F5EF]">Exclusive Venue & Private Itinerary</p>
                  <p className="text-xs text-[#F8F5EF]/60 font-light mt-0.5">Disclosed directly to confirmed VIP registrants prior to the show.</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href="/rsvp"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D6BB88] to-[#B89B62] text-[#21102F] font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:scale-[1.02] transition-transform shadow-xl cursor-pointer"
                >
                  <span>Reserve Your VIP Pass</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-[#F8F5EF]/40 font-light mt-3">Registrations open. Limited VIP allocation.</p>
              </div>
            </div>

            {/* Right column — The Experience */}
            <div className="lg:col-span-5 p-10 sm:p-14 space-y-8">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">The Experience</span>
                <h4 className="font-serif text-2xl text-[#F8F5EF] font-light">What to expect at the show.</h4>
              </div>

              <div className="space-y-8 divide-y divide-[#D6BB88]/15">
                <div className="space-y-3">
                  <h5 className="font-serif text-xl text-[#D6BB88]">Top Master Developers</h5>
                  <p className="text-sm text-[#F8F5EF]/70 font-light leading-relaxed">
                    Dubai's leading master developers showcase their flagship residential and off-plan projects, curated exclusively for women investors.
                  </p>
                </div>

                <div className="pt-6 space-y-3">
                  <h5 className="font-serif text-xl text-[#D6BB88]">Unfiltered Due Diligence</h5>
                  <p className="text-sm text-[#F8F5EF]/70 font-light leading-relaxed">
                    Direct access to independent conveyancers, escrow compliance advisors, and mortgage strategists—zero sales pressure, complete legal transparency.
                  </p>
                </div>

                <div className="pt-6 space-y-3">
                  <h5 className="font-serif text-xl text-[#D6BB88]">A Safe, High-Yield Sanctuary</h5>
                  <p className="text-sm text-[#F8F5EF]/70 font-light leading-relaxed">
                    Network with like-minded women leaders, founders, and investors building generational property wealth on their own terms.
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
