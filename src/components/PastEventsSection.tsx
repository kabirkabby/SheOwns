"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const galleryImages = [
  {
    src: "/images/past_events/event_01.jpg",
    alt: "SheOwns gathering and community keynote",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/past_events/event_02.jpg",
    alt: "SheOwns private event attendee discussion",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/past_events/event_03.jpg",
    alt: "SheOwns women investor conclave session",
    aspect: "aspect-[1/1]",
  },
  {
    src: "/images/past_events/event_04.jpg",
    alt: "SheOwns networking and roundtable discussion",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/past_events/event_05.jpg",
    alt: "SheOwns presentation and guest speakers",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/past_events/event_06.jpg",
    alt: "SheOwns audience and female leadership gathering",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/past_events/event_07.jpg",
    alt: "SheOwns community salon in Dubai",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/past_events/event_08.jpg",
    alt: "SheOwns property workshop and masterclass",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/past_events/event_09.jpg",
    alt: "SheOwns investor panel and dialogue",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/past_events/event_10.jpg",
    alt: "SheOwns interactive clinic for women investors",
    aspect: "aspect-[1/1]",
  },
  {
    src: "/images/past_events/event_11.jpg",
    alt: "SheOwns networking reception and moments",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/past_events/event_12.jpg",
    alt: "SheOwns executive discussion and mentorship",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/past_events/event_13.jpg",
    alt: "SheOwns evening conclave in Dubai",
    aspect: "aspect-[1/1]",
  },
  {
    src: "/images/past_events/event_14.jpg",
    alt: "SheOwns private investor gathering",
    aspect: "aspect-[4/5]",
  },
];

export default function PastEventsSection() {
  const { t, isRtl } = useLanguage();
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
    <section id="past-events" className="bg-[#21102F] text-[#F8F5EF] py-20 sm:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#D6BB88]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#3B235A]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 sm:space-y-4 max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/5 border border-[#D6BB88]/30 px-3.5 py-1.5 rounded-full">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">
              {t.pastEvents.tag}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F8F5EF] leading-[1.15]">
            {t.pastEvents.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#F8F5EF]/75 font-light leading-relaxed">
            {t.pastEvents.subtitle}
          </p>
        </motion.div>

        {/* Masonry Image Grid — Tighter spacing, subtle rounded edges, varied heights */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 [column-fill:_balance]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 6) * 0.05 }}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid mb-3 sm:mb-4 relative overflow-hidden rounded-lg border border-[#D6BB88]/20 group bg-[#2A183D] shadow-md cursor-pointer hover:border-[#D6BB88]/50 transition-colors"
            >
              <div className={`relative w-full ${img.aspect} overflow-hidden`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
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
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
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
              className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
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
              className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
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
                className="relative max-w-full max-h-full rounded-lg overflow-hidden border border-[#D6BB88]/30 shadow-2xl"
              >
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  width={1200}
                  height={800}
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
