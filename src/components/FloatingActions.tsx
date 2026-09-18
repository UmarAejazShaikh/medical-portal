"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingActions() {
  const pathname = usePathname();
  const { isGu } = useLanguage();

  // On Medical Directory home page (/), there is no personal contact info or floating widget
  if (pathname === "/") {
    return null;
  }

  const isOrtho = pathname.startsWith("/orthopedic");
  const isLab = pathname.startsWith("/pathology");

  if (!isOrtho && !isLab) {
    return null;
  }

  const whatsappUrl = isOrtho
    ? `https://wa.me/918511954797?text=${encodeURIComponent(
        isGu
          ? "નમસ્તે ડો. નાસિર સાલાર, મારે મણકા / ઓર્થોપેડિક કન્સલ્ટેશન માટે સંપર્ક કરવો છે."
          : "Hello Dr. Nasir Salar, I would like to consult regarding spine / orthopedic issues."
      )}`
    : `https://wa.me/916353065009?text=${encodeURIComponent(
        isGu
          ? "નમસ્તે યુનિટી પેથોલોજી લેબ, મારે લેબ ટેસ્ટ / સેમ્પલ કલેક્શન અંગે પૂછપરછ કરવી છે."
          : "Hello Unity Pathology Lab, I want to book a blood test / home sample collection."
      )}`;

  const label = isOrtho
    ? isGu ? "ડોક્ટર સાથે વોટ્સએપ" : "WhatsApp Dr. Nasir"
    : isGu ? "લેબ સાથે વોટ્સએપ" : "WhatsApp Unity Lab";

  return (
    <aside aria-label={label} className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-700/30 hover:scale-105 active:scale-95 transition-all focus:outline-none"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="text-xs font-bold hidden sm:inline-block pr-1">
          {label}
        </span>
      </a>
    </aside>
  );
}
