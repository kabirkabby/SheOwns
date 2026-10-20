"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Locale, TranslationKeys } from "@/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationKeys;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("sheowns_locale") as Locale;
    if (saved === "ar" || saved === "en") {
      setLocaleState(saved);
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("sheowns_locale", newLocale);
    } catch (e) {
      // ignore in incognito or restricted mode
    }
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLocale;
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  const isRtl = locale === "ar";
  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t, isRtl }}>
      <div className={isRtl ? "font-arabic" : ""} dir={isRtl ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
