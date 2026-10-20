"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const { locale } = useLanguage();

  return (
    <aside
      aria-label="WhatsApp Concierge"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[300]"
    >
      <motion.a
        href="https://wa.me/971501815561?text=Hello%20SheOwns,%20I%20would%20like%20to%20know%20more%20about%20the%20initiative"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 border border-white/25 cursor-pointer focus:outline-none"
      >
        {/* Subtle breathing glow */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none group-hover:opacity-60" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.153.57 4.172 1.564 5.927l-1.656 6.045 6.223-1.632c1.704.929 3.659 1.46 5.869 1.46 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
        </svg>

        {/* Floating Tooltip Pill */}
        <span className="absolute right-full mr-3.5 px-3 py-1.5 rounded-full bg-[#21102F]/95 text-[#F8F5EF] text-[11px] font-medium tracking-wide border border-[#D6BB88]/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:inline-block">
          {locale === "ar" ? "تواصلي معنا عبر واتساب" : "Chat on WhatsApp"}
        </span>
      </motion.a>
    </aside>
  );
}
