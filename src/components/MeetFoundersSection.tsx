"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function MeetFoundersSection() {
  const { t, isRtl } = useLanguage();

  const founders = [
    {
      name: t.founders.gaurav.name,
      role: t.founders.gaurav.role,
      quote: t.founders.gaurav.quote,
      image: "/images/gaurav_sharma.jpg",
      credentials: t.founders.gaurav.credentials,
    },
    {
      name: t.founders.aparna.name,
      role: t.founders.aparna.role,
      quote: t.founders.aparna.quote,
      image: "/images/aparna_bajpai.jpg",
      credentials: t.founders.aparna.credentials,
    },
  ];

  return (
    <section id="founders" className="bg-[#EFE9DF] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">{t.founders.tag}</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#21102F] leading-[1.15]">
            {t.founders.heading}
          </h2>
        </motion.div>

        {/* Founders — editorial asymmetric layout */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          {founders.map(({ name, role, quote, image, credentials }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group"
            >
              {/* Portrait — large and editorial */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <Image
                  src={image}
                  alt={name}
                  fill
                  quality={95}
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#21102F] via-transparent to-transparent opacity-80" />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="space-y-0.5">
                    <h3 className="font-serif text-2xl text-[#F8F5EF]">{name}</h3>
                    <p className="text-xs uppercase tracking-widest text-[#D6BB88] font-medium">{role}</p>
                  </div>
                </div>
              </div>

              {/* Quote + credentials */}
              <div className="space-y-5 px-2">
                <blockquote className="font-serif text-xl sm:text-2xl text-[#21102F] font-light leading-relaxed italic border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#D6BB88] pl-5 rtl:pl-0 rtl:pr-5">
                  "{quote}"
                </blockquote>
                <ul className="space-y-2">
                  {credentials.map((c) => (
                    <li key={c} className="text-md text-[#2B2B2B]/70 font-regular flex items-start space-x-2 rtl:space-x-reverse">
                      <span className="text-[#D6BB88] mt-1">—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
