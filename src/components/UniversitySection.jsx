import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe2, MapPin, CheckCircle2, ShieldCheck, DollarSign } from 'lucide-react';
import { UNIVERSITIES, DESTINATIONS } from '../data/universities';

export default function UniversitySection({ onExplore }) {
  const featuredFacts = [
    { label: 'AVERAGE TUITION (UZBEKISTAN)', value: '$2,800 - $4,500 / yr', note: '65% Savings vs Western Universities' },
    { label: 'MEDIUM OF INSTRUCTION', value: '100% English', note: 'No language foundation required' },
    { label: 'DEGREE RECOGNITION', value: 'NMC / WHO / ECTS', note: 'Global practice licensing eligibility' },
    { label: 'POST-STUDY WORK RIGHTS', value: '2 - 3 Years', note: 'UK Tier 4 & US STEM OPT work permits' },
  ];

  return (
    <section className="relative w-full site-section-padding bg-[#070709] border-t border-white/15">
      <div className="site-container relative z-10 flex flex-col justify-between">
        {/* Section Label */}
        <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-12">
          <span className="label-mono text-white/60">
            [03] GLOBAL DESTINATIONS & FACTUAL DATA
          </span>
          <span className="label-mono text-white/80 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>DIRECT AUTHORIZED ADMISSIONS</span>
          </span>
        </div>

        {/* Headline & Location Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-20">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div>
              <span className="label-mono text-white/40 block mb-3">GLOBAL UNIVERSITY DESTINATIONS</span>
              <h2 className="display-large text-white mb-4">
                FIND WHERE <br />
                <span className="editorial-serif italic font-normal text-white">
                  YOU BELONG.
                </span>
              </h2>
            </div>

            <p className="font-sans text-white/80 text-base md:text-lg max-w-prose-editorial font-light leading-relaxed">
              Compare accredited medical, technology, engineering, and business degree programs with transparent financial and ranking facts.
            </p>

            <div className="pt-2">
              <button
                onClick={onExplore}
                className="btn-pill-white"
              >
                <span>EXPLORE ALL UNIVERSITIES</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Featured Destination Component - Roomy, Breathable Layout */}
          <div className="lg:col-span-5 bg-[#0e0e14] border border-white/20 p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="label-mono text-white/50 text-[0.68rem] tracking-wider">FEATURED DESTINATION</span>
                <span className="font-mono text-xs px-3 py-1 bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30 rounded-md">
                  HIGH ADMIT RATE
                </span>
              </div>

              <div>
                <h3 className="font-sans text-3xl font-bold uppercase tracking-wider text-white flex items-center gap-3">
                  <span>UZBEKISTAN</span>
                  <span className="text-3xl">🇺🇿</span>
                </h3>
                <p className="font-mono text-xs text-white/60 tracking-wider mt-1">Tashkent International Tech & Medical Hub</p>
              </div>
            </div>

            <div className="space-y-4 font-sans text-xs md:text-sm text-white/90 font-light border-t border-white/10 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p><strong className="text-white font-bold">MD Medicine (MBBS):</strong> $3,600 / year • 6-Year English Track</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p><strong className="text-white font-bold">Software Engineering & AI:</strong> $2,800 / year • Tech Incubator</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p><strong className="text-white font-bold">Living Cost:</strong> $250 - $350 / month (Furnished Dorms)</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY COMPARISON FACTS MATRIX */}
        <div className="pt-12 border-t border-white/10 space-y-8">
          <span className="label-mono text-white/50 block">VERIFIED ADMISSION & COST FACTS</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFacts.map((f) => (
              <div key={f.label} className="fact-card">
                <span className="label-mono text-white/50 text-[0.68rem] block">{f.label}</span>
                <p className="font-mono text-xl md:text-2xl font-bold text-white tracking-tight">{f.value}</p>
                <p className="font-sans text-xs text-white/70 font-light leading-relaxed">{f.note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
