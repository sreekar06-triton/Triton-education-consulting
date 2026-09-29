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
    <section className="relative w-full py-24 md:py-32 bg-[#070709] overflow-hidden border-t border-white/15">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop"
          alt="Tashkent Campus"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1350px] w-full mx-auto px-6 md:px-12 flex flex-col justify-between">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <h2 className="display-large text-white mb-4">
              FIND WHERE <br />
              <span className="editorial-serif italic font-normal text-white">
                YOU BELONG.
              </span>
            </h2>

            <p className="font-sans text-white/80 text-base md:text-lg max-w-xl font-light leading-relaxed mb-6">
              Compare accredited medical, technology, engineering, and business degree programs with transparent financial and ranking facts.
            </p>

            <button
              onClick={onExplore}
              className="btn-pill-white"
            >
              <span>EXPLORE ALL UNIVERSITIES</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Featured Spotlight Card with Key Facts */}
          <div className="lg:col-span-5 bg-[#0e0e14]/90 border border-white/20 p-8 backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div>
                <span className="label-mono text-white/50 block text-[0.65rem]">FEATURED DESTINATION</span>
                <h3 className="font-sans text-2xl font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <span>UZBEKISTAN</span>
                  <span>🇺🇿</span>
                </h3>
                <p className="font-mono text-xs text-white/60 uppercase">Tashkent International Tech & Medical</p>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                HIGH ADMIT RATE
              </span>
            </div>

            <div className="space-y-3 font-sans text-xs text-white/90 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white/70 shrink-0" />
                <span><strong>MD Medicine (MBBS):</strong> $3,600 / year • 6-Year English Track</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white/70 shrink-0" />
                <span><strong>Software Engineering & AI:</strong> $2,800 / year • Tech Incubator</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white/70 shrink-0" />
                <span><strong>Living Cost:</strong> $250 - $350 / month (Fully Furnished Dorms)</span>
              </div>
            </div>
          </div>
        </div>

        {/* KEY COMPARISON FACTS MATRIX */}
        <div className="pt-8 border-t border-white/15">
          <span className="label-mono text-white/50 block mb-4">VERIFIED ADMISSION & COST FACTS</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredFacts.map((f) => (
              <div key={f.label} className="fact-card space-y-1">
                <span className="label-mono text-white/50 text-[0.65rem] block">{f.label}</span>
                <p className="font-mono text-xl font-bold text-white">{f.value}</p>
                <p className="font-sans text-xs text-white/70 font-light">{f.note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
