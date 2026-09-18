"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import {
  Stethoscope,
  FlaskConical,
  Phone,
  MessageCircle,
  Menu,
  X,
  Languages,
  ChevronRight,
  ArrowLeft
} from "lucide-react";

export default function Navbar() {
  const { language, toggleLanguage, isGu } = useLanguage();
  const t = translations[language];
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine branch context
  const isLabBranch = pathname.startsWith("/pathology");
  const isOrthoBranch = pathname.startsWith("/orthopedic");
  const isPortalHome = !isLabBranch && !isOrthoBranch;

  // Branch-specific navigation links
  let activeLinks: { href: string; label: string }[] = [];

  if (isLabBranch) {
    if (pathname !== "/pathology/tests") {
      activeLinks = [
        { href: "/pathology/tests", label: isGu ? "લેબ ટેસ્ટ & ભાવ પત્રક" : "Lab Test & Package Price List" }
      ];
    }
  } else if (isOrthoBranch) {
    activeLinks = [];
  } else {
    activeLinks = [];
  }

  // Branch-specific contact configuration
  const doctorContact = {
    phone: "8511954797",
    phoneDisplay: "+91 85119 54797",
    whatsapp:
      "https://wa.me/918511954797?text=Hello%20Dr.%20Nasir%20Salar,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.",
    callLabel: isGu ? "કૉલ કરો" : "Call Doctor",
    accentBtn: "bg-blue-700 hover:bg-blue-800",
    accentText: "text-blue-700 bg-blue-50"
  };

  const labContact = {
    phone: "6353065009",
    phoneDisplay: "+91 63530 65009",
    whatsapp:
      "https://wa.me/916353065009?text=Hello%20Unity%20Pathology%20Lab,%20I%20would%20like%20to%20inquire%20about%20tests%20/%20sample%20collection.",
    callLabel: isGu ? "લેબમાં કૉલ કરો" : "Call Lab",
    accentBtn: "bg-teal-700 hover:bg-teal-800",
    accentText: "text-teal-700 bg-teal-50"
  };

  const activeContact = isLabBranch ? labContact : isOrthoBranch ? doctorContact : null;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 sm:min-h-20 py-2 sm:py-0">
          {/* Branch-Specific Branding */}
          {isLabBranch ? (
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
              <Link
                href={pathname === "/pathology/tests" ? "/pathology" : "/"}
                aria-label={pathname === "/pathology/tests" ? t.nav.backToLabProfile : t.nav.backToDirectory}
                className="p-1.5 -ml-1 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 sm:hidden flex-shrink-0 transition-colors"
                title={pathname === "/pathology/tests" ? t.nav.backToLabProfile : t.nav.backToDirectory}
              >
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/pathology"
                className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-teal-700 text-white flex items-center justify-center shadow-sm flex-shrink-0"
              >
                <FlaskConical className="w-4 h-4 sm:w-6 sm:h-6" />
              </Link>
              <div className="flex flex-col min-w-0">
                <Link
                  href="/pathology"
                  className="font-extrabold text-xs sm:text-lg text-slate-900 tracking-tight leading-tight hover:text-teal-800 transition-colors line-clamp-2"
                >
                  <span className="sm:hidden">{isGu ? "યુનિટી પેથોલોજી લેબ" : "Unity Pathology Lab"}</span>
                  <span className="hidden sm:inline">{isGu ? "યુનિટી પેથોલોજી લેબોરેટરી" : "Unity Pathology Laboratory"}</span>
                </Link>
                {pathname === "/pathology/tests" ? (
                  <Link
                    href="/pathology"
                    className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 hover:text-teal-900 group transition-colors mt-0.5"
                  >
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                    <span>{t.nav.backToLabProfile}</span>
                  </Link>
                ) : (
                  <Link
                    href="/"
                    className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 hover:text-teal-900 group transition-colors mt-0.5"
                  >
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                    <span>{t.nav.backToDirectory}</span>
                  </Link>
                )}
              </div>
            </div>
          ) : isOrthoBranch ? (
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
              <Link
                href="/"
                aria-label={t.nav.backToDirectory}
                className="p-1.5 -ml-1 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 sm:hidden flex-shrink-0 transition-colors"
                title={t.nav.backToDirectory}
              >
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/orthopedic"
                className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-sm flex-shrink-0"
              >
                <Stethoscope className="w-4 h-4 sm:w-6 sm:h-6" />
              </Link>
              <div className="flex flex-col min-w-0">
                <Link
                  href="/orthopedic"
                  className="font-extrabold text-xs sm:text-lg text-slate-900 tracking-tight leading-tight hover:text-blue-800 transition-colors line-clamp-1"
                >
                  {isGu ? "ડો. નાસિર સાલાર" : "Dr. Nasir Salar"}
                </Link>
                <div className="hidden sm:flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs text-slate-500 font-medium">
                    {isGu ? "સ્પાઇન & ઓર્થોપેડિક સર્જન" : "Spine & Orthopedic Surgeon"}
                  </span>
                  <span className="text-slate-300">·</span>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 hover:text-blue-900 group transition-colors"
                  >
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                    <span>{t.nav.backToDirectory}</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-sm flex-shrink-0">
                <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-tight group-hover:text-blue-700 transition-colors">
                  {isGu ? "મેડિકલ ડિરેક્ટરી" : "Medical Directory"}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium hidden sm:inline">
                  {isGu ? "સરખેજ · મકરબા, અમદાવાદ" : "Sarkhej · Makarba, Ahmedabad"}
                </span>
              </div>
            </Link>
          )}

          {/* Sub-page links on Branches (e.g. Lab Price List) */}
          {activeLinks.length > 0 && (
            <nav className="hidden lg:flex items-center gap-2">
              {activeLinks.map((link) => {
                const isActive = pathname === link.href;

                const activeClasses = isLabBranch
                  ? "text-teal-900 bg-teal-50 border border-teal-200 font-bold"
                  : "text-blue-900 bg-blue-50 border border-blue-200 font-bold";

                const defaultClasses = isLabBranch
                  ? "text-teal-800 bg-teal-50/80 hover:bg-teal-100 hover:text-teal-900 border border-teal-200 font-semibold"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50 font-semibold";

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-xl text-xs xl:text-sm transition-all shadow-2xs ${
                      isActive ? activeClasses : defaultClasses
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Right side controls: Language Switcher + Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {/* Global Language Toggle (Clean, accessible everywhere) */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 rounded-full text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95"
              title="Change Language / ભાષા બદલો"
              aria-label="Change Language / ભાષા બદલો"
            >
              <Languages className="w-4 h-4 text-slate-700 flex-shrink-0" />
              <span className="tracking-tight">{language === "en" ? "ગુજરાતી" : "English"}</span>
            </button>

            {/* Branch Contact Action Buttons */}
            {activeContact && (
              <>
                <a
                  href={activeContact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex px-3.5 py-2 text-xs xl:text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${activeContact.phone}`}
                  className={`p-2 sm:px-3.5 sm:py-2 text-xs xl:text-sm font-semibold text-white ${activeContact.accentBtn} rounded-xl shadow-sm transition-colors flex items-center justify-center gap-1.5`}
                  title={activeContact.callLabel}
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{activeContact.callLabel}</span>
                </a>
              </>
            )}

            {/* Mobile Menu Button for Branches with sub-links */}
            {activeLinks.length > 0 && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer for Branches with sub-links */}
      {mobileMenuOpen && !isPortalHome && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {activeLinks.length > 0 && (
            <div className="space-y-1">
              {activeLinks.map((link) => {
                const isActive = pathname === link.href;

                const activeClasses = isLabBranch
                  ? "bg-teal-50 text-teal-900 font-bold"
                  : "bg-blue-50 text-blue-900 font-bold";

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
                      isActive ? activeClasses : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>
          )}

          {/* Back link in mobile drawer */}
          <div className="pt-2 border-t border-slate-100">
            <Link
              href={pathname === "/pathology/tests" ? "/pathology" : "/"}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>
                {pathname === "/pathology/tests"
                  ? t.nav.backToLabProfile
                  : (isGu ? "મુખ્ય મેડિકલ ડિરેક્ટરી" : "Back to Medical Directory")}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
