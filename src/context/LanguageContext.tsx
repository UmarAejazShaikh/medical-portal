"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "gu";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isGu: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred_lang") as Language;
      if (saved === "gu" || saved === "en") {
        setLanguageState(saved);
      }
    } catch {
      // localStorage may not be accessible in some environments
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("preferred_lang", lang);
    } catch {
      // ignore storage error
    }
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      const nextLang = prev === "en" ? "gu" : "en";
      try {
        localStorage.setItem("preferred_lang", nextLang);
      } catch {
        // ignore storage error
      }
      return nextLang;
    });
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isGu: language === "gu",
      }}
    >
      {children}
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
