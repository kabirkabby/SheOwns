"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Gaurav Sharma",
    role: "Founder & Managing Director, Aurex Privy Real Estate",
    quote: "SheOwnsDubai was born from a simple idea - to create a dedicated real-estate platform designed specifically for women, giving them access to the knowledge, insight and guidance they need to make informed and confident decisions about property and wealth.",
    image: "/images/gaurav_sharma.jpg",
    credentials: [
      "Dubai's leading boutique real estate advisory",
      "Trusted by 500+ international investors",
      "Specialist in women-first investment strategy",
    ],
  },
  {
    name: "Aparna Bajpai",
    role: "Founder & President, Being She Association",
    quote: "Women have always played a powerful role in building families, businesses and communities. Now, it is time to be equally present in the conversations that shape wealth and financial independence. SheOwns is a community where women can learn, question and make informed decisions about their financial future - with confidence, not hesitation.",
    image: "/images/aparna_bajpai.jpg",
    credentials: [
      "Asia's largest network of women leaders",
      "15,000+ active community members",
      "Hosted 200+ women empowerment events globally",
    ],
  },
];

export default function MeetFoundersSection() {
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
          <span className="text-xs uppercase tracking-widest text-[#3B235A] font-semibold">The Founders</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#21102F] leading-[1.15]">
            The people who{" "}
            <span className="italic text-[#3B235A]">built this for you.</span>
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
                <blockquote className="font-serif text-xl sm:text-2xl text-[#21102F] font-light leading-relaxed italic border-l-2 border-[#D6BB88] pl-5">
                  "{quote}"
                </blockquote>
                <ul className="space-y-2">
                  {credentials.map((c) => (
                    <li key={c} className="text-sm text-[#2B2B2B]/70 font-light flex items-start space-x-2">
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
