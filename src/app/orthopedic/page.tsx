"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import {
  Stethoscope,
  GraduationCap,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  HelpCircle,
  Activity,
  ChevronDown,
  Sparkles,
  Zap
} from "lucide-react";

export default function OrthopedicPage() {
  const { language, isGu } = useLanguage();
  const t = translations[language];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/918511954797?text=${encodeURIComponent(
    isGu
      ? "નમસ્તે ડો. નાસિર સાલાર, મારે મણકા / ઓર્થોપેડિક સારવાર અને કન્સલ્ટેશન માટે પૂછપરછ કરવી છે."
      : "Hello Dr. Nasir Salar, I would like to consult regarding spine / orthopedic condition."
  )}`;

  return (
    <div className="space-y-14 pb-20 pt-8 sm:pt-10 bg-slate-50/40">
      {/* Doctor Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 overflow-hidden border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Credentials & Value Proposition */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.ortho.badge}</span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {t.ortho.name}
                </h1>
                <p className="text-sky-300 text-sm sm:text-base font-semibold mt-2">
                  {t.ortho.degrees}
                </p>
                <p className="text-slate-300 text-xs sm:text-sm font-medium mt-1">
                  🎓 {t.ortho.fellowshipText}
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                {t.ortho.tagline}
              </p>

              {/* Verified Clinical Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  {isGu ? "એન્ડોસ્કોપિક સ્પાઇન સર્જરી" : "Endoscopic Spine Surgery"}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  {isGu ? "મિનિમલી ઇન્વેસિવ (MIS)" : "Minimally Invasive Spine (MIS)"}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  {isGu ? "સાંધા બદલવાનું ઓપરેશન" : "Joint Replacement (TKR/THR)"}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  {isGu ? "ટ્રોમા & ફ્રેક્ચર કેર" : "Trauma & Fracture Fixation"}
                </span>
              </div>

              {/* Direct Action Links (No fake forms) */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isGu ? "વોટ્સએપ પર કન્સલ્ટેશન પૂછપરછ" : "WhatsApp Inquiry"}</span>
                </a>
                <a
                  href="tel:8511954797"
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>+91 85119 54797</span>
                </a>
                <a
                  href="https://instagram.com/dr.salar_ortho_spine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 text-sky-400"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>@dr.salar_ortho_spine</span>
                </a>
              </div>
            </div>

            {/* Right Col: Quick Clinical Profile Card */}
            <div className="lg:col-span-4 bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-inner space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Dr. Nasir Salar</h3>
                  <p className="text-xs text-sky-300">M.S. Orthopedic</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="space-y-1">
                  <span className="text-slate-400 font-medium block">
                    {isGu ? "મુખ્ય વિશેષતા:" : "Clinical Focus:"}
                  </span>
                  <span className="text-white font-bold text-sm block text-sky-200">
                    Spine, MIS & Endoscopic Surgery
                  </span>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-700">
                  <span className="text-slate-400 font-medium block">
                    {isGu ? "ક્લિનિક સરનામું (સરખેજ):" : "Clinic Address (Sarkhej):"}
                  </span>
                  <p className="text-slate-200 font-medium">
                    B 401, Sunflower Residency, Sarkhej, Ahmedabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CLINICAL FOCUS: Advanced Spine Surgery, MIS, and Endoscopic */}
      <section id="spine" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>{isGu ? "મુખ્ય સુપર-સ્પેશિયાલિટી" : "Primary Super-Specialty Focus"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.ortho.coreFocusTitle}
          </h2>
          <p className="text-sm text-slate-600">
            {t.ortho.coreFocusSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.ortho.spineProcedures.map((proc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 inline-block">
                  {proc.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {proc.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {proc.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {proc.benefits.map((b, bIdx) => (
                  <span
                    key={bIdx}
                    className="inline-flex items-center gap-1 text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-100 font-medium px-2 py-1 rounded-md"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Philosophy: Conservative Management First */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-50/70 border border-blue-200 p-6 sm:p-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
              {isGu ? "તબીબી સિદ્ધાંત" : "Clinical Philosophy"}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {isGu
                ? "ઓપરેશન હંમેશા છેલ્લો વિકલ્પ છે (Conservative Care First)"
                : "Surgery is Always the Last Resort — Conservative Protocols First"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {isGu
                ? "ડો. નાસિર સાલાર માને છે કે મોટાભાગના મણકા અને સાંધાના દર્દીઓ યોગ્ય દવા, લક્ષિત કસરત, ફિઝિયોથેરાપી અને મુદ્રા (પોસ્ચર) સુધારવાથી સાજા થઈ શકે છે. જ્યારે આ તમામ ઉપચારો છતાં અસહ્ય દર્દ રહે કે નસ જોખમમાં હોય ત્યારે જ આધુનિક એન્ડોસ્કોપિક અથવા મિનિમલી ઇન્વેસિવ સર્જરી કરવામાં આવે છે."
                : "Dr. Nasir Salar prioritizes evidence-based non-surgical protocols: targeted physiotherapy, core stabilization, ergonomic posture correction, and medication. Endoscopic or minimally invasive surgery is recommended only when conservative care fails or progressive nerve deficit threatens mobility."}
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive General Orthopedics (Concise description) */}
      <section id="ortho" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
            {isGu ? "ઓર્થોપેડિક સેવાઓ" : "General Orthopedic Care"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.ortho.secondaryTitle}
          </h2>
          <p className="text-sm text-slate-600">
            {t.ortho.secondarySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {t.ortho.orthoProcedures.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-blue-800 flex items-center justify-center font-bold flex-shrink-0">
                <Activity className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-slate-900 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctor Background & Education Timeline */}
      <section id="credentials" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* About Doctor Bio */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              {isGu ? "ડોક્ટરનો પરિચય" : "Professional Bio"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t.ortho.aboutTitle}
            </h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>{t.ortho.aboutP1}</p>
              <p>{t.ortho.aboutP2}</p>
            </div>
          </div>

          {/* Education & Residency Timeline */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <GraduationCap className="w-6 h-6 text-blue-700" />
              <h3 className="text-lg font-bold text-slate-900">
                {t.ortho.credentialsTitle}
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              {t.ortho.eduItems.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-4 pl-8">
                  <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {item.year}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 pt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {item.inst}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Symptom Checker: When to consult */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-red-50/60 border border-red-200 p-6 sm:p-8">
          <div className="max-w-3xl space-y-2 mb-6">
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider bg-red-100 px-3 py-1 rounded-full">
              {isGu ? "લક્ષણ માર્ગદર્શિકા" : "Symptom Navigator"}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {t.ortho.symptomsTitle}
            </h2>
            <p className="text-sm text-slate-600">
              {t.ortho.symptomsSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {t.ortho.symptomsList.map((sym, idx) => (
              <div
                key={idx}
                className="text-xs sm:text-sm text-slate-700 font-medium bg-white border border-red-100 rounded-lg px-3 py-2 flex items-start gap-2 max-w-full sm:max-w-[calc(50%-0.25rem)]"
              >
                <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
                  !
                </span>
                <span className="leading-relaxed">{sym}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-red-200/70 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              {isGu
                ? "જો આ લક્ષણો ૨ અઠવાડિયાથી વધુ સમયથી હોય તો યોગ્ય તબીબી સલાહ લેવી જરૂરી છે."
                : "Persistent nerve pain or progressive weakness should be clinically evaluated to prevent long-term deficit."}
            </p>
            <a
              href="tel:8511954797"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>{isGu ? "ડોક્ટરને કૉલ કરો" : "Call for Consultation"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isGu ? "વારંવાર પૂછાતા પ્રશ્નો" : "Frequently Asked Questions"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.ortho.faqsTitle}
          </h2>
        </div>

        <div className="space-y-3">
          {t.ortho.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180 text-blue-700" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Consultation Card & Clinic Location */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                {isGu ? "ક્લિનિક સંપર્ક વિગત" : "Clinic Details & Timings"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t.ortho.consultCardTitle}
              </h2>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{t.ortho.addressLabel}</strong>
                    <p className="text-xs text-slate-400 mt-0.5">{t.ortho.addressVal}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white">{t.ortho.phoneLabel}</strong>
                    <a href="tel:8511954797" className="text-xs text-sky-300 hover:text-white font-semibold block">
                      {t.ortho.phoneVal}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white">{t.banner.openHours}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <h3 className="font-bold text-white text-base">
                {isGu ? "સીધો સંપર્ક કરો" : "Direct WhatsApp Consultation"}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isGu
                  ? "તમારી એમઆરઆઈ (MRI) અથવા એક્સ-રે રિપોર્ટ સાથે વોટ્સએપ પર મેસેજ મોકલીને સીધો અભિપ્રાય મેળવો."
                  : "Send your MRI / X-ray reports directly on WhatsApp for preliminary clinical review and appointment schedule."}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isGu ? "વોટ્સએપ પર મેસેજ મોકલો" : "Message on WhatsApp"}</span>
                </a>
                <a
                  href="tel:8511954797"
                  className="py-3 px-5 bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 85119 54797</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
