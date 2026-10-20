"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkshopsCommunitySection() {
  const { t } = useLanguage();

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
          <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">{t.propertyShow.tag}</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#21102F] leading-[1.15]">
            {t.propertyShow.heading}
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
                <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">{t.propertyShow.badge}</span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h3 className="font-serif text-4xl sm:text-5xl text-[#F8F5EF] font-light leading-tight">
                  {t.propertyShow.title}
                </h3>
                <p className="font-serif text-xl sm:text-2xl text-[#D6BB88] font-light italic leading-snug">
                  {t.propertyShow.subtitleLine1}{" "}
                  <span className="text-[#F8F5EF]/80">{t.propertyShow.subtitleLine2}</span>
                </p>
              </div>

              {/* Date & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">{t.propertyShow.dateLabel}</span>
                  <p className="text-base text-[#F8F5EF] font-light">{t.propertyShow.dateVal}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">{t.propertyShow.locationLabel}</span>
                  <p className="text-base text-[#F8F5EF] font-light">{t.propertyShow.locationVal}</p>
                </div>
              </div>

              {/* Venue Notice */}
              <div className="flex items-start space-x-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                <MapPin className="w-5 h-5 text-[#D6BB88] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#F8F5EF]">{t.propertyShow.venueNoticeTitle}</p>
                  <p className="text-xs text-[#F8F5EF]/60 font-light mt-0.5">{t.propertyShow.venueNoticeDesc}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href="/rsvp"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D6BB88] to-[#B89B62] text-[#21102F] font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:scale-[1.02] transition-transform shadow-xl cursor-pointer"
                >
                  <span>{t.propertyShow.cta}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-[#F8F5EF]/40 font-light mt-3">{t.propertyShow.ctaSubtext}</p>
              </div>
            </div>

            {/* Right column — The Experience */}
            <div className="lg:col-span-5 p-10 sm:p-14 space-y-8">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">{t.propertyShow.experienceTag}</span>
                <h4 className="font-serif text-2xl text-[#F8F5EF] font-light">{t.propertyShow.experienceTitle}</h4>
              </div>

              <div className="space-y-8 divide-y divide-[#D6BB88]/15">
                {t.propertyShow.features.map((feature, fIdx) => (
                  <div key={feature.title} className={fIdx === 0 ? "space-y-3" : "pt-6 space-y-3"}>
                    <h5 className="font-serif text-xl text-[#D6BB88]">{feature.title}</h5>
                    <p className="text-sm text-[#F8F5EF]/70 font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
