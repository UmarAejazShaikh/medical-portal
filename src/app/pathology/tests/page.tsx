"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { Clock, Search, CheckCircle2, MessageCircle } from "lucide-react";

function TestsCatalog() {
  const { language, isGu } = useLanguage();
  const t = translations[language];
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") ?? "");
  const [activeCategory, setActiveCategory] = useState<string>(searchParams.get("category") ?? "All");

  const categories = [
    { key: "All", label: t.pathology.filterAll },
    { key: "Routine", label: t.pathology.filterRoutine },
    { key: "Diabetes", label: t.pathology.filterDiabetes },
    { key: "Biochemistry & Organ Tests", label: t.pathology.filterOrgan },
    { key: "Thyroid & Hormonal", label: t.pathology.filterHormonal },
    { key: "Infection Screening", label: t.pathology.filterInfection },
    { key: "Special Tests", label: t.pathology.filterSpecial },
    { key: "Full Body Packages", label: t.pathology.filterPackages },
  ];

  const filteredTests = t.pathology.testsList.filter((test) => {
    const matchesCat = activeCategory === "All" || test.category === activeCategory;
    const matchesSearch =
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-20 pt-8 sm:pt-10 bg-slate-50/40">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            {isGu ? "ટેસ્ટ ડિરેક્ટરી" : "Test Catalog"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.pathology.popularPackagesTitle}
          </h2>
          <p className="text-sm text-slate-600">
            {t.pathology.popularPackagesSubtitle}
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.pathology.searchPlaceholder}
              className="w-full pl-11 pr-4 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 shadow-sm bg-white"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  activeCategory === cat.key
                    ? "bg-teal-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => {
            const testWhatsapp = `https://wa.me/916353065009?text=${encodeURIComponent(
              isGu
                ? `નમસ્તે યુનિટી પેથોલોજી લેબ, મારે '${test.name}' ટેસ્ટ અંગે પૂછપરછ કરવી છે.`
                : `Hello Unity Pathology Laboratory, I would like to inquire about the '${test.name}' test.`
            )}`;

            return (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                      {test.category}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      {test.tat}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {test.name}
                    </h3>
                    {test.price && (
                      <span className="flex-shrink-0 text-base font-extrabold text-teal-800 whitespace-nowrap">
                        {test.price}
                      </span>
                    )}
                  </div>

                  {test.isPackage && (
                    <span className="inline-block text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                      {isGu ? "ફૂલ પેકેજ" : "Full Package"}
                    </span>
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {test.desc}
                  </p>

                  {test.isPackage && test.includes && test.includes.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {test.includes.map((inc, incIdx) => (
                        <span
                          key={incIdx}
                          className="text-[10px] font-medium text-teal-800 bg-teal-50 border border-teal-100 px-1.5 py-0.5 rounded"
                        >
                          {inc}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-2 space-y-1 text-[11px] text-slate-500">
                    <p>
                      <strong className="text-slate-700">{isGu ? "સેમ્પલ:" : "Sample:"}</strong> {test.sample}
                    </p>
                    <p>
                      <strong className="text-slate-700">{isGu ? "ફાસ્ટિંગ:" : "Fasting:"}</strong> {test.fasting}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-teal-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {isGu ? "સેમ-ડે વોટ્સએપ" : "Same-Day Report"}
                  </span>
                  <a
                    href={testWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white rounded-lg text-xs font-semibold transition-colors border border-emerald-200 flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{isGu ? "પૂછપરછ" : "Inquire"}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default function PathologyTestsPage() {
  return (
    <Suspense fallback={null}>
      <TestsCatalog />
    </Suspense>
  );
}
