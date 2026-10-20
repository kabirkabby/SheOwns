"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/past_events/event_01.jpg",
    alt: "SheOwns gathering and community keynote",
    width: 1200,
    height: 794,
  },
  {
    src: "/images/past_events/event_02.jpg",
    alt: "SheOwns private event attendee discussion",
    width: 1200,
    height: 794,
  },
  {
    src: "/images/past_events/event_03.jpg",
    alt: "SheOwns women investor conclave session",
    width: 1200,
    height: 794,
  },
  {
    src: "/images/past_events/event_04.jpg",
    alt: "SheOwns networking and roundtable discussion",
    width: 1200,
    height: 794,
  },
  {
    src: "/images/past_events/event_05.jpg",
    alt: "SheOwns presentation and guest speakers",
    width: 1200,
    height: 794,
  },
  {
    src: "/images/past_events/event_06.jpg",
    alt: "SheOwns audience and female leadership gathering",
    width: 1200,
    height: 794,
  },
  {
    src: "/images/past_events/event_07.jpg",
    alt: "SheOwns community salon in Dubai",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/past_events/event_08.jpg",
    alt: "SheOwns property workshop and masterclass",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/past_events/event_09.jpg",
    alt: "SheOwns investor panel and dialogue",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/past_events/event_10.jpg",
    alt: "SheOwns interactive clinic for women investors",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/past_events/event_11.jpg",
    alt: "SheOwns networking reception and moments",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/past_events/event_12.jpg",
    alt: "SheOwns executive discussion and mentorship",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/past_events/event_13.jpg",
    alt: "SheOwns evening conclave in Dubai",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/past_events/event_14.jpg",
    alt: "SheOwns private investor gathering",
    width: 1200,
    height: 800,
  },
];

export default function PastEventsSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

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
              transition={{ duration: 0.7, delay: (index % 6) * 0.08 }}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid relative overflow-hidden rounded-2xl border border-[#D6BB88]/20 group bg-[#2A183D] shadow-xl cursor-pointer"
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

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-400 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
                );
              }}
              className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev + 1) % galleryImages.length : 0
                );
              }}
              className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-full max-h-full rounded-2xl overflow-hidden border border-[#D6BB88]/30 shadow-2xl"
              >
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  width={galleryImages[lightboxIndex].width}
                  height={galleryImages[lightboxIndex].height}
                  unoptimized
                  className="max-h-[80vh] w-auto h-auto object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
