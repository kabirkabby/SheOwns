"use client";

import { motion } from "framer-motion";
import { Shield, CreditCard, Users } from "lucide-react";

const benefits = [
  {
    icon: CreditCard,
    title: "1% Monthly Payment Plans",
    body: "The most accessible entry into Dubai real estate. Structured specifically for She Owns members — start investing without liquidating your savings.",
    stat: "From 10% deposit",
  },
  {
    icon: Shield,
    title: "DLD-Protected Escrow",
    body: "Every off-plan investment is protected by Dubai Land Department-monitored escrow. Developer funds only release as verified construction milestones are hit.",
    stat: "100% Regulated",
  },
  {
    icon: Users,
    title: "Developer-Exclusive Pricing",
    body: "Aurex Privy's standing relationships with Dubai's top developers mean She Owns members access pre-launch and off-market allocations before the public.",
    stat: "Before public launch",
  },
];

export default function ExclusiveBenefitsSection() {
  return (
    <section id="benefits" className="bg-gradient-to-br from-[#21102F] via-[#3B235A] to-[#21102F] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
        >
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">Member Privileges</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F5EF] leading-[1.15]">
              Exclusive Member <span className="italic text-[#D6BB88]">Privileges</span>
            </h2>
          </div>
          <p className="text-lg text-[#F8F5EF]/80 font-light leading-relaxed lg:pb-2">
            Three advantages She Owns members get that you won't find anywhere else in the market.
          </p>
        </motion.div>

        {/* 3 Benefits — large cards, varied layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, body, stat }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative rounded-2xl p-8 sm:p-10 space-y-6 flex flex-col justify-between bg-gradient-to-br from-[#D6BB88]/15 to-[#D6BB88]/05 border border-[#D6BB88]/40 hover:border-[#D6BB88] hover:shadow-xl hover:shadow-[#D6BB88]/15 hover:scale-[1.02] transition-all duration-500 overflow-hidden"
            >
              {/* Shimmer effect inside the card */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D6BB88]/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              <div className="relative z-10 space-y-5">
                <div className="w-14 h-14 bg-[#D6BB88]/20 border border-[#D6BB88]/40 rounded-xl flex items-center justify-center text-[#D6BB88]">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#D6BB88]">
                    {title}
                  </h3>
                  <p className="text-base text-[#F8F5EF]/80 font-light leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
              <div className="relative z-10 pt-4 border-t border-[#D6BB88]/25 font-serif text-4xl text-[#D6BB88]">
                {stat}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
