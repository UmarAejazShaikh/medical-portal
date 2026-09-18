"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ChevronRight,
  Stethoscope,
  FlaskConical,
  MessageCircle,
  ArrowLeft,
  Building2,
  ShieldCheck,
  Star
} from "lucide-react";

export default function Footer() {
  const { language, isGu } = useLanguage();
  const t = translations[language];
  const pathname = usePathname();

  const isLabBranch = pathname.startsWith("/pathology");
  const isOrthoBranch = pathname.startsWith("/orthopedic");
  const isPortalHome = !isLabBranch && !isOrthoBranch;

  // Instagram SVG component
  const InstagramIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 text-pink-400 flex-shrink-0"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* BRANCH 1: DR. NASIR SALAR FOOTER (/orthopedic)                           */}
        {/* ========================================================================= */}
        {isOrthoBranch && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800/80">
              {/* Column 1: Doctor Profile & Credentials */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
                  <Stethoscope className="w-4 h-4 text-sky-400" />
                  <span>{isGu ? "ડો. નાસિર સાલાર" : "Dr. Nasir Salar"}</span>
                </div>
                <p className="text-xs text-sky-300 font-semibold">
                  M.B.B.S, M.S. Orthopedic | Fellowship in Spine Surgery
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isGu
                    ? "બી.જે. મેડિકલ કોલેજ & સિવિલ હોસ્પિટલ (ભૂતપૂર્વ સિનિયર રેસિડેન્ટ) | પ્રખ્યાત સ્પાઇન સર્જન ડો. રોહિત ઠાકર પાસે એન્ડોસ્કોપિક & MIS સ્પાઇન સર્જરી ફેલોશિપ."
                    : "B.J. Medical College & Civil Hospital (Ex-Senior Resident) | Specialized Spine Surgery Fellowship under Dr. Rohit Thaker."}
                </p>
                <div className="pt-1">
                  <a
                    href="https://instagram.com/dr.salar_ortho_spine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white border border-slate-800 transition-colors"
                  >
                    <InstagramIcon />
                    <span>@dr.salar_ortho_spine</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* Column 2: Clinical Super-Specialties */}
              <div className="space-y-3">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
                  {isGu ? "મુખ્ય સારવાર વિભાગ" : "Primary Clinical Focus"}
                </h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-sky-400" />
                    <span>{isGu ? "દૂરબીનથી ટાંકા વગર મણકાનું ઓપરેશન" : "Endoscopic Spine Surgery (Keyhole, <8mm)"}</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-sky-400" />
                    <span>{isGu ? "મિનિમલી ઇન્વેસિવ સ્પાઇન સર્જરી (MIS-TLIF)" : "Minimally Invasive Spine Surgery (MIS-TLIF)"}</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-sky-400" />
                    <span>{isGu ? "સાયટીકા & સ્લિપ ડિસ્ક સારવાર" : "Sciatica & Lumbar Disc Herniation"}</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-sky-400" />
                    <span>{isGu ? "સાંધા બદલવાનું ઓપરેશન (TKR / THR)" : "Total Knee & Hip Replacement (Arthroplasty)"}</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-sky-400" />
                    <span>{isGu ? "હાડકાના ફ્રેક્ચર અને ટ્રોમા કેર" : "Complex Fracture Fixation & Trauma Care"}</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-sky-400" />
                    <span>{isGu ? "સી-આર્મ ગાઇડેડ સ્પાઇન ઇન્જેક્શન" : "C-Arm Image-Guided Spine Injections"}</span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Consultation & Clinic Details */}
              <div className="space-y-3">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
                  {isGu ? "ક્લિનિક સંપર્ક અને સમય" : "Clinic & Appointments"}
                </h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>B 401, Sunflower Residency, Sarkhej, Ahmedabad, Gujarat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <a href="tel:8511954797" className="hover:text-white transition-colors font-semibold text-slate-200">
                      +91 85119 54797
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <a href="mailto:mohammadnasirsalar7866@gmail.com" className="hover:text-white transition-colors break-all">
                      mohammadnasirsalar7866@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>{isGu ? "સોમ–શનિ: એપોઇન્ટમેન્ટ મુજબ કન્સલ્ટેશન" : "Mon–Sat: Consultation by Appointment"}</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <a
                    href="https://wa.me/918511954797?text=Hello%20Dr.%20Nasir%20Salar,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-blue-700 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isGu ? "વોટ્સએપ પર એપોઇન્ટમેન્ટ પૂછપરછ" : "Inquire Appointment on WhatsApp"}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar for Dr. Nasir */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <div className="space-y-1 text-center sm:text-left">
                <p>© {new Date().getFullYear()} Dr. Nasir Salar (Spine & Orthopedic Surgeon). All Rights Reserved.</p>
                <p className="text-[11px] text-slate-500">
                  {isGu
                    ? "મેડિકલ ડિસ્ક્લેમર: આ પેજ પર દર્શાવેલ માહિતી દર્દીના શિક્ષણ અને માર્ગદર્શન માટે છે. સચોટ નિદાન માટે સીધો પરામર્શ જરૂરી છે."
                    : "Medical Disclaimer: Clinical procedures, diagnoses, and treatment recommendations require direct medical evaluation. Content here is for patient awareness."}
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-sky-400 hover:text-sky-300 border border-slate-800 font-semibold transition-colors flex-shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isGu ? "અમદાવાદ મેડિકલ ડિરેક્ટરી" : "Sarkhej Medical Directory"}</span>
              </Link>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* BRANCH 2: UNITY PATHOLOGY LAB FOOTER (/pathology, /pathology/tests)      */}
        {/* ========================================================================= */}
        {isLabBranch && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800/80">
              {/* Column 1: Lab Profile & Quality */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
                  <FlaskConical className="w-4 h-4 text-teal-400" />
                  <span>{isGu ? "યુનિટી પેથોલોજી લેબોરેટરી" : "Unity Pathology Laboratory"}</span>
                </div>
                <div className="inline-flex items-center gap-1 text-xs text-amber-300 font-bold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>5.0 ★★★★★ Highest Google Rating (60 Reviews)</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isGu
                    ? "અત્યાધુનિક ઓટોમેટેડ મશીનો, બારકોડેડ સેમ્પલ સુરક્ષા અને સર્ટિફાઇડ પેથોલોજિસ્ટ દ્વારા ચકાસાયેલ રિપોર્ટ. તે જ દિવસે વોટ્સએપ પર સચોટ રિપોર્ટ મેળવો."
                    : "Equipped with automated clinical analyzers, barcoded safety tracking, and verified pathologist reporting. Same-day digital delivery on WhatsApp."}
                </p>
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-300 bg-teal-950 px-2.5 py-1 rounded-lg border border-teal-800/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>{isGu ? "સરખેજ-મકરબામાં હોમ સેમ્પલ કલેક્શન" : "Doorstep Home Sample Collection in Sarkhej & Makarba"}</span>
                </div>
              </div>

              {/* Column 2: Key Profiles & Catalog Link */}
              <div className="space-y-3">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
                  {isGu ? "મુખ્ય લેબ પ્રોફાઇલ અને પેકેજ" : "Popular Profiles & Packages"}
                </h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span>Complete Blood Count (CBC) — ₹250</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span>Lipid Profile — Full Panel — ₹650 (Fasting Req.)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span>Renal Profile / Kidney Test (RFT) — ₹1000</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span>Thyroid Profile (T3, T4, TSH) — ₹550</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span>Coagulation Profile (PT, INR, aPTT) — ₹600</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span>HbA1c & Diabetes Monitoring — ₹500</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Link
                    href="/pathology/tests"
                    className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-bold transition-colors"
                  >
                    <span>{isGu ? "તમામ 30+ ટેસ્ટ અને ભાવ સૂચિ જુઓ" : "View All 30+ Tests & Full Price List"}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Column 3: Location, Hours & Booking */}
              <div className="space-y-3">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
                  {isGu ? "લેબ સરનામું અને સમય" : "Lab Location & Collection Desk"}
                </h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>1st Floor, Samir Residency, 01, Sarkhej Roza Rd, Opp. Mastanbava Dargah, Makarba, Ahmedabad 382210</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <a href="tel:6353065009" className="hover:text-white transition-colors font-semibold text-slate-200">
                      +91 63530 65009
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>Mon–Sat: 8:00 AM – 9:00 PM | Sun: 8:00 AM – 2:00 PM</span>
                  </li>
                </ul>
                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://wa.me/916353065009?text=Hello%20Unity%20Pathology%20Lab,%20I%20would%20like%20to%20book%20home%20sample%20collection."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-teal-700 hover:bg-teal-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{isGu ? "હોમ સેમ્પલ બુક કરો" : "Book Home Collection"}</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Samir+Residency+Sarkhej+Roza+Road+Makarba+Ahmedabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-semibold border border-slate-800 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                    <span>{isGu ? "નકશો" : "Map"}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar for Unity Lab */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <div className="space-y-1 text-center sm:text-left">
                <p>© {new Date().getFullYear()} Unity Pathology Laboratory. All Rights Reserved.</p>
                <p className="text-[11px] text-slate-500">
                  {isGu
                    ? "ડાયગ્નોસ્ટિક સૂચના: તમામ રિપોર્ટ્સ સર્ટિફાઇડ પેથોલોજી સ્ટાન્ડર્ડ મુજબ ચકાસાય છે. સેમ-ડે વોટ્સએપ રિપોર્ટ ઉપલબ્ધ."
                    : "Diagnostic Notice: Tests are processed using automated clinical analyzers and verified by certified pathology professionals."}
                </p>
              </div>
              <Link
                href={pathname === "/pathology/tests" ? "/pathology" : "/"}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-teal-400 hover:text-teal-300 border border-slate-800 font-semibold transition-colors flex-shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>
                  {pathname === "/pathology/tests"
                    ? (isGu ? "યુનિટી લેબ પ્રોફાઇલ પર પાછા જાઓ" : "Back to Lab Profile")
                    : (isGu ? "અમદાવાદ મેડિકલ ડિરેક્ટરી" : "Sarkhej Medical Directory")}
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* BRANCH 0: PORTAL / DIRECTORY HOME FOOTER (/)                             */}
        {/* ========================================================================= */}
        {isPortalHome && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800/80">
              {/* Column 1: Directory Purpose */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
                  <Building2 className="w-4 h-4 text-sky-400" />
                  <span>{isGu ? "અમદાવાદ મેડિકલ ડિરેક્ટરી" : "Ahmedabad Medical Directory"}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isGu
                    ? "સરખેજ, મકરબા, જુહાપુરા અને સાઉથ બોપલના નાગરિકો માટે સ્થાનિક વિશ્વસનીય સ્પેશિયાલિસ્ટ ડોક્ટર્સ અને સર્ટિફાઇડ ડાયગ્નોસ્ટિક લેબની માહિતી પૂરી પાડતું ડિરેક્ટરી પોર્ટલ."
                    : "A verified local medical directory connecting residents of Sarkhej, Makarba, Juhapura, and South Bopal with trusted clinical specialists and certified laboratories."}
                </p>
                <div className="pt-1 text-xs text-slate-500">
                  <span>
                    {isGu
                      ? "સ્વતંત્ર તબીબી ડિરેક્ટરી · સરખેજ & મકરબા"
                      : "Independent Medical Directory · Sarkhej & Makarba"}
                  </span>
                </div>
              </div>

              {/* Column 2: Listed Medical Branches */}
              <div className="space-y-3">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
                  {isGu ? "ડોક્ટર્સ & સ્પેશિયાલિસ્ટ્સ" : "Doctors & Specialists"}
                </h4>
                <div className="space-y-2 text-xs text-slate-400">
                  <div>
                    <Link
                      href="/orthopedic"
                      className="font-bold text-slate-200 hover:text-sky-400 transition-colors flex items-center gap-1"
                    >
                      <Stethoscope className="w-3.5 h-3.5 text-sky-400" />
                      <span>Dr. Nasir Salar (Spine & Orthopedic Surgeon)</span>
                    </Link>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Fellowship in Spine Surgery (Dr. Rohit Thaker) · Endoscopic & MIS Spine Care
                    </p>
                    <Link
                      href="/orthopedic"
                      className="text-[11px] text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 mt-1"
                    >
                      <span>{isGu ? "ડોક્ટર પ્રોફાઇલ જુઓ" : "View Doctor Profile"}</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Column 3: Diagnostic Centers */}
              <div className="space-y-3">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
                  {isGu ? "ડાયગ્નોસ્ટિક લેબ્સ & ટેસ્ટ્સ" : "Diagnostics & Labs"}
                </h4>
                <div className="space-y-2 text-xs text-slate-400">
                  <div>
                    <Link
                      href="/pathology"
                      className="font-bold text-slate-200 hover:text-teal-400 transition-colors flex items-center gap-1"
                    >
                      <FlaskConical className="w-3.5 h-3.5 text-teal-400" />
                      <span>Unity Pathology Laboratory (Makarba)</span>
                    </Link>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      5.0★ Google Rating · Doorstep Sample Collection · Same-Day Digital Reports
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <Link
                        href="/pathology"
                        className="text-[11px] text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-0.5"
                      >
                        <span>{isGu ? "લેબ પ્રોફાઇલ" : "Lab Overview"}</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <span className="text-slate-600">·</span>
                      <Link
                        href="/pathology/tests"
                        className="text-[11px] text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-0.5"
                      >
                        <span>{isGu ? "ટેસ્ટ અને ભાવ" : "Test & Price List"}</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar for Portal Home */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <div className="space-y-1 text-center sm:text-left">
                <p>© {new Date().getFullYear()} Ahmedabad Medical Directory. {t.footer.copyright}</p>
                <p className="text-[11px] text-slate-500">
                  {isGu
                    ? "ડિસ્ક્લેમર: આ પોર્ટલ સ્થાનિક મેડિકલ પ્રેક્ટિસની ચકાસાયેલ માહિતી પૂરી પાડે છે. ઇમરજન્સી પરિસ્થિતિમાં નજીકની હોસ્પિટલનો સંપર્ક કરવો."
                    : "Healthcare Directory Disclaimer: Portal provides informational listings for medical practices in Ahmedabad. For emergencies, visit your nearest hospital casualty."}
                </p>
              </div>
              <p className="text-slate-400 text-[11px] text-center sm:text-right flex-shrink-0">
                Sarkhej · Makarba · Juhapura · Vejalpur · Prahlad Nagar · South Bopal
              </p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
