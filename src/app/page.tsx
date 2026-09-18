"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { medicalProfiles, MedicalProfile } from "@/data/profilesData";
import {
  Search,
  Stethoscope,
  FlaskConical,
  Star,
  MapPin,
  ArrowRight,
  CheckCircle2,
  X,
  Building2,
} from "lucide-react";

export default function HomePage() {
  const { isGu } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "doctor" | "lab">("all");

  const filteredProfiles = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return medicalProfiles.filter((profile: MedicalProfile) => {
      // Type filter
      if (selectedType !== "all" && profile.type !== selectedType) {
        return false;
      }

      // Search query
      if (!q) return true;

      const inName = profile.name.toLowerCase().includes(q);
      const inCategory =
        profile.categoryEn.toLowerCase().includes(q) ||
        profile.categoryGu.toLowerCase().includes(q);
      const inQualification =
        profile.qualificationEn.toLowerCase().includes(q) ||
        profile.qualificationGu.toLowerCase().includes(q);
      const inAddress = profile.address.toLowerCase().includes(q);
      const inLocality = profile.locality.toLowerCase().includes(q);
      const inKeywords = profile.keywords.some((k) => k.toLowerCase().includes(q));
      const inFocus =
        profile.primaryFocusEn.some((f) => f.toLowerCase().includes(q)) ||
        profile.primaryFocusGu.some((f) => f.toLowerCase().includes(q));
      const inSecondary =
        profile.secondaryServicesEn.some((s) => s.toLowerCase().includes(q)) ||
        profile.secondaryServicesGu.some((s) => s.toLowerCase().includes(q));

      return (
        inName ||
        inCategory ||
        inQualification ||
        inAddress ||
        inLocality ||
        inKeywords ||
        inFocus ||
        inSecondary
      );
    });
  }, [searchQuery, selectedType]);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24">
      {/* Header & Hero Section */}
      <section className="bg-slate-900 text-white border-b border-slate-800 pt-8 pb-14 sm:pt-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>
                {isGu ? "સરખેજ અને મકરબા · અમદાવાદ" : "Sarkhej & Makarba · Ahmedabad"}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {isGu
                ? "ચકાસાયેલ ડૉક્ટર અને પેથોલોજી લેબ પ્રોફાઇલ્સ"
                : "Verified Healthcare Profiles & Diagnostic Directory"}
            </h1>

            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              {isGu
                ? "સરખેજ અને મકરબા (અમદાવાદ) વિસ્તારના નિષ્ણાત સ્પાઇન સર્જન અને ૫.૦-સ્ટાર રેટિંગ ધરાવતી લેબોરેટરીની વિગત શોધો અને સીધો સંપર્ક કરો."
                : "Search clinical profiles, specialized procedures, and diagnostic laboratory services in South-West Ahmedabad. Connect directly without intermediaries."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog & Directory Section */}
      <main id="directory" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 sm:-mt-9 scroll-mt-24">
        {/* Unified Modern Filter & Search Bar */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-md p-3.5 sm:p-4 mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isGu
                    ? "ડોક્ટર, લેબ, સારવાર અથવા ટેસ્ટ શોધો (દા.ત. Spine, CBC, Sciatica)..."
                    : "Search doctor, lab, surgery, or test (e.g., Spine, CBC, Sciatica)..."
                }
                className="w-full pl-11 pr-10 py-3 text-sm sm:text-base bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-900 border border-slate-200 rounded-xl sm:rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl sm:rounded-2xl border border-slate-200/80 overflow-x-auto">
              <button
                onClick={() => setSelectedType("all")}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl whitespace-nowrap transition-all ${
                  selectedType === "all"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Building2 className="w-4 h-4 text-slate-500" />
                <span>{isGu ? "બધા પ્રોફાઇલ્સ" : "All Directory"}</span>
              </button>

              <button
                onClick={() => setSelectedType("doctor")}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl whitespace-nowrap transition-all ${
                  selectedType === "doctor"
                    ? "bg-white text-blue-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Stethoscope className="w-4 h-4 text-blue-600" />
                <span>{isGu ? "ઓર્થોપેડિક & સ્પાઇન" : "Spine & Orthopedics"}</span>
              </button>

              <button
                onClick={() => setSelectedType("lab")}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl whitespace-nowrap transition-all ${
                  selectedType === "lab"
                    ? "bg-white text-teal-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FlaskConical className="w-4 h-4 text-teal-600" />
                <span>{isGu ? "પેથોલોજી લેબ" : "Pathology Lab"}</span>
              </button>
            </div>
          </div>

          {/* Active Filter Bar & Quick Reset */}
          {(searchQuery || selectedType !== "all") && (
            <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span>{isGu ? "ફિલ્ટર કરેલ:" : "Filtered results:"}</span>
                <span className="font-semibold text-slate-800">
                  {filteredProfiles.length} {isGu ? "પ્રોફાઇલ" : filteredProfiles.length === 1 ? "profile" : "profiles"}
                </span>
                {searchQuery && (
                  <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                    &ldquo;{searchQuery}&rdquo;
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("all");
                }}
                className="text-sky-600 hover:text-sky-700 font-semibold hover:underline"
              >
                {isGu ? "બધા ફિલ્ટર્સ સાફ કરો" : "Reset filters"}
              </button>
            </div>
          )}
        </div>

        {/* Profile Catalog Cards */}
        {filteredProfiles.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">
              {isGu ? "કોઈ પ્રોફાઇલ મળ્યું નથી" : "No matching profiles found"}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {isGu
                ? "કૃપા કરીને અન્ય શબ્દ અથવા ટેસ્ટનું નામ લખીને શોધો (દા.ત. Spine, CBC, Doctor, Makarba)."
                : "Try searching with broader terms like 'Spine', 'CBC', 'Doctor', 'Lab', or 'Makarba'."}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedType("all");
              }}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              {isGu ? "બધા પ્રોફાઇલ્સ ફરીથી જુઓ" : "Reset All Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredProfiles.map((profile) => {
              const isDoctor = profile.type === "doctor";

              // 3 clean teaser highlights instead of 8 bulky bullet points
              const highlightTags = isDoctor
                ? isGu
                  ? ["એન્ડોસ્કોપિક સ્પાઇન સર્જરી", "સાયટીકા & સ્લિપ ડિસ્ક", "સાંધા બદલવાનું ઓપરેશન"]
                  : ["Endoscopic Spine Surgery", "Sciatica & Slip Disc", "Joint Replacement"]
                : isGu
                  ? ["ઘરબેઠા સેમ્પલ કલેક્શન", "તે જ દિવસે ડિજિટલ રિપોર્ટ", "રૂટિન & હેલ્થ ચેકઅપ પેકેજ"]
                  : ["Home Sample Collection", "Same-Day Digital Reports", "Routine & Health Checkups"];

              return (
                <article
                  key={profile.id}
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden p-6 sm:p-7"
                >
                  <div className="space-y-4">
                    {/* Top Badges & Locality */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${
                          isDoctor
                            ? "bg-blue-50 text-blue-800 border border-blue-100"
                            : "bg-teal-50 text-teal-800 border border-teal-100"
                        }`}
                      >
                        {isGu ? profile.categoryGu : profile.categoryEn}
                      </span>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{isGu ? (isDoctor ? "સરખેજ, અમદાવાદ" : "મકરબા, અમદાવાદ") : profile.locality}</span>
                      </div>
                    </div>

                    {/* Icon + Title + Credentials */}
                    <div className="flex items-start gap-4 pt-1">
                      <div
                        className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          isDoctor
                            ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
                            : "bg-teal-700 text-white shadow-sm shadow-teal-200"
                        }`}
                      >
                        {isDoctor ? (
                          <Stethoscope className="w-7 h-7" />
                        ) : (
                          <FlaskConical className="w-7 h-7" />
                        )}
                      </div>

                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                            {isDoctor
                              ? isGu
                                ? "ડો. નાસિર સાલાર"
                                : profile.name
                              : isGu
                                ? "યુનિટી પેથોલોજી લેબોરેટરી"
                                : profile.name}
                          </h2>
                          {profile.rating && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                              <span>
                                {profile.rating.score} ({profile.rating.reviewsCount} {isGu ? "રિવ્યુઝ" : "reviews"})
                              </span>
                            </span>
                          )}
                        </div>

                        <p className="text-xs font-semibold text-slate-700">
                          {isGu ? profile.qualificationGu : profile.qualificationEn}
                        </p>

                        <p className="text-xs text-slate-500 line-clamp-1">
                          {isGu ? profile.affiliationGu : profile.affiliationEn}
                        </p>
                      </div>
                    </div>

                    {/* Teaser Summary */}
                    <p className="text-sm text-slate-600 leading-relaxed pt-1">
                      {isGu ? profile.summaryGu : profile.summaryEn}
                    </p>

                    {/* Key Highlights Teaser Chips */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {highlightTags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-700 font-medium"
                          >
                            <CheckCircle2
                              className={`w-3.5 h-3.5 flex-shrink-0 ${
                                isDoctor ? "text-blue-600" : "text-teal-600"
                              }`}
                            />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Row */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      href={profile.profileUrl}
                      className={`w-full py-3.5 px-5 text-white text-xs sm:text-sm font-bold rounded-xl text-center shadow-sm transition-all flex items-center justify-center gap-2 ${
                        isDoctor
                          ? "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20"
                          : "bg-teal-700 hover:bg-teal-800 shadow-teal-700/20"
                      }`}
                    >
                      <span>
                        {isDoctor
                          ? isGu
                            ? "ડોક્ટર પ્રોફાઇલ & સારવાર વિગત જુઓ"
                            : "View Doctor Profile & Treatments"
                          : isGu
                            ? "લેબ પ્રોફાઇલ & ટેસ્ટ લિસ્ટ જુઓ"
                            : "View Lab Profile & Test Price List"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
