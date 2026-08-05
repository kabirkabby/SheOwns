"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Gaurav Sharma",
    role: "Founder & Managing Director, Aurex Privy Real Estate",
    quote: "Real estate in Dubai is not complicated. It has just never been explained clearly to women. That's what She Owns is here to change.",
    image: "/images/gaurav_sharma.jpg",
    credentials: ["Dubai's leading boutique real estate advisory", "Trusted by 500+ international investors", "Specialist in women-first investment strategy"],
  },
  {
    name: "Aparna Bajpai",
    role: "Founder & President, Being She Association",
    quote: "Financial independence is not a privilege. It is a right — and for too long, women have been left out of the conversations that build it.",
    image: "/images/aparna_bajpai.jpg",
    credentials: ["Asia's largest network of women leaders", "15,000+ active community members", "Hosted 200+ women empowerment events globally"],
  },
];

export default function MeetFoundersSection() {
  return (
    <section id="founders" className="bg-gradient-to-br from-[#21102F] via-[#3B235A] to-[#21102F] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">The Visionaries</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F5EF] leading-[1.15]">
            <span className="italic text-[#D6BB88]">Behind She Owns</span>
          </h2>
        </motion.div>

        {/* Founders Cards */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          {founders.map(({ name, role, quote, image, credentials }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-gradient-to-br from-[#D6BB88]/10 to-[#D6BB88]/05 border border-[#D6BB88]/40 rounded-2xl overflow-hidden hover:border-[#D6BB88] hover:shadow-xl hover:shadow-[#D6BB88]/15 transition-all duration-500 flex flex-col"
            >
              {/* Image Top */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  quality={95}
                  className="object-cover object-top"
                />
              </div>

              {/* Content Bottom */}
              <div className="p-8 flex flex-col flex-grow space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#D6BB88]">{name}</h3>
                  <p className="text-xs uppercase tracking-widest text-[#A98BC8] mt-2">{role}</p>
                </div>

                <div className="w-10 h-0.5 bg-[#D6BB88]" />

                <blockquote className="font-serif text-lg text-[#F8F5EF]/90 italic leading-relaxed">
                  "{quote}"
                </blockquote>

                <ul className="space-y-2 mt-auto pt-4">
                  {credentials.map((c) => (
                    <li key={c} className="text-sm text-[#F8F5EF]/70 font-light flex items-start space-x-2">
                      <span className="text-[#D6BB88] mt-0.5">—</span>
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
