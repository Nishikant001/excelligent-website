
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { industriesSection } from "@/data/homeSections";

export default function IndustriesWords() {
  const [activeIndex, setActiveIndex] = useState(0);

  const industries = industriesSection.words;
  const activeIndustry = industries[activeIndex];

  if (!activeIndustry) return null;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {industriesSection.eyebrow}
          </p>

          <h2 className="text-3xl text-statement max-w-3xl leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {industriesSection.headline}
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 gap-10 border-t border-slate-200 pt-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: Industry List */}
          <div>
            {industries.map((industry, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={industry.word}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group flex w-full items-center gap-4 border-b border-slate-200 py-4 text-left transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="w-7 shrink-0 text-xs text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex-1 text-base font-medium transition-all duration-200 sm:text-lg ${
                      isActive ? "translate-x-1" : ""
                    }`}
                  >
                    {industry.word}
                  </span>

                  <ArrowRight
                    size={18}
                    className={`shrink-0 transition-all duration-200 ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Industry Details */}
          <div className="flex flex-col justify-center bg-slate-50 p-6 sm:p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-10 bg-blue-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Industry Overview
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {activeIndustry.word}
            </h3>

            <p className="mb-8 max-w-lg text-sm leading-7 text-slate-600">
              Explore our solutions and key business processes designed for the{" "}
              {activeIndustry.word} industry.
            </p>

            <div className="mb-8">
              <h4 className="mb-4 text-sm font-semibold text-slate-900">
                Key Processes
              </h4>

              <div className="space-y-0">
                {activeIndustry.processes.map((process, index) => (
                  <div
                    key={`${process}-${index}`}
                    className="flex items-center gap-3 border-b border-slate-200 py-3 text-sm text-slate-600 last:border-b-0"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {process}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link
                to={activeIndustry.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
              >
                Explore Industry
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        {/* View All */}
        {industriesSection.viewAll && (
          <div className="mt-8 flex justify-end">
            <Link
              to={industriesSection.viewAll.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              {industriesSection.viewAll.label}
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}