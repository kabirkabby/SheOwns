"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/community_event.jpg",
    alt: "SheOwns community gathering and keynote",
    width: 1264,
    height: 848,
  },
  {
    src: "/images/community_salon.jpg",
    alt: "SheOwns intimate investor salon session",
    width: 896,
    height: 1200,
  },
  {
    src: "/images/workshop_community.jpg",
    alt: "SheOwns interactive workshop and real estate clinic",
    width: 1376,
    height: 768,
  },
  {
    src: "/images/community_portrait.jpg",
    alt: "SheOwns attendee and female investor",
    width: 896,
    height: 1200,
  },
  {
    src: "/images/community_masterclass.jpg",
    alt: "SheOwns private property advisory masterclass",
    width: 1264,
    height: 848,
  },
  {
    src: "/images/cover_woman_dubai.jpg",
    alt: "SheOwns property investor overlooking the Dubai skyline",
    width: 1376,
    height: 768,
  },
];

export default function PastEventsSection() {
  return (
    <section id="past-events" className="bg-[#21102F] text-[#F8F5EF] py-24 sm:py-28 px-6 md:px-12 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#D6BB88]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#3B235A]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-[#D6BB88]/30 px-3.5 py-1.5 rounded-full">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">
              Past Gatherings
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F5EF] leading-[1.15]">
            Moments from our past events.
          </h2>
          <p className="text-base sm:text-lg text-[#F8F5EF]/75 font-light leading-relaxed">
            A look into our private conclaves, masterclasses, and salons uniting women investors across Dubai.
          </p>
        </motion.div>

        {/* Masonry Image Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="break-inside-avoid relative overflow-hidden rounded-2xl border border-[#D6BB88]/20 group bg-[#2A183D] shadow-xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  unoptimized
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle sheen overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#21102F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
