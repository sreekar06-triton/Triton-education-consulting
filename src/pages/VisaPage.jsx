import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, FileText, CheckCircle2, Globe, ArrowUpRight, HelpCircle } from 'lucide-react';
import { VISA_COUNTRIES } from '../data/visa';

export default function VisaPage({ onBookConsultation }) {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);

  const country = VISA_COUNTRIES[selectedCountryIndex];

  return (
    <div className="w-full bg-[#070709] text-white pt-10 md:pt-16 pb-36 min-h-screen font-sans">
      <div className="site-container">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-16">
          <span className="label-mono text-white/40 block mb-3">
            [IMMIGRATION] EMBASSY & VISA PROTOCOLS
          </span>
          <h1 className="display-large text-white mb-4">
            Next Stop: <br />
            <span className="editorial-serif italic font-normal text-white">
              Your New Beginning.
            </span>
          </h1>
          <p className="font-sans text-white/70 text-base max-w-2xl font-light">
            Comprehensive student visa guidance for Uzbekistan, UK, USA, Germany, and Australia. 98.5% first-attempt approval rate.
          </p>
        </div>

        {/* Country Selector Tabs - Elevated Wrapper with Proper Spacing */}
        <div className="flex flex-wrap items-center gap-3 mb-14 p-3 bg-[#0e0e12] border border-white/15 rounded-xl font-mono text-xs">
          {VISA_COUNTRIES.map((v, idx) => (
            <button
              key={v.country}
              onClick={() => setSelectedCountryIndex(idx)}
              className={`px-6 py-3 border rounded-lg transition-all cursor-pointer uppercase tracking-wider ${
                selectedCountryIndex === idx
                  ? 'bg-white text-black font-bold border-white shadow-lg'
                  : 'bg-transparent text-white/60 border-white/15 hover:text-white hover:border-white/40 hover:bg-white/5'
              }`}
            >
              {v.flag} {v.country}
            </button>
          ))}
        </div>

        {/* Main Country Visa Specs Card - Generous Padding & Offsets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 bg-[#0e0e12] border border-white/20 p-8 md:p-14 lg:p-16 rounded-2xl shadow-2xl">
          
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl">{country.flag}</span>
                <h2 className="font-sans text-3xl font-bold uppercase tracking-wider text-white">
                  {country.country} Student Visa ({country.visaType})
                </h2>
              </div>
              <p className="font-mono text-xs text-white/60 tracking-wider">
                OFFICIAL VISA APPROVAL RATE: <strong className="text-emerald-400 font-bold ml-1">{country.successRate}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              <div className="p-6 bg-[#14141c] border border-white/15 rounded-xl space-y-2">
                <span className="text-white/40 block text-[0.68rem] tracking-wider uppercase">PROCESSING DURATION</span>
                <span className="text-white font-bold text-sm">{country.processingTime}</span>
              </div>

              <div className="p-6 bg-[#14141c] border border-white/15 rounded-xl space-y-2">
                <span className="text-white/40 block text-[0.68rem] tracking-wider uppercase">EMBASSY INTERVIEW</span>
                <span className="text-white font-bold text-sm">{country.interviewRequired}</span>
              </div>
            </div>

            <div>
              <h3 className="label-mono text-white/50 block mb-4">FINANCIAL PROOF CRITERIA</h3>
              <div className="p-6 bg-[#14141c] border border-white/15 rounded-xl font-mono text-sm text-white leading-relaxed">
                💰 {country.financialProofReq}
              </div>
            </div>

            <div>
              <h3 className="label-mono text-white/50 block mb-4">MANDATORY DOCUMENT CHECKLIST</h3>
              <div className="space-y-3">
                {country.keyDocuments.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-[#14141c] border border-white/15 rounded-xl text-xs text-white/90 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Advisory & Mock Interview Box */}
          <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/15 pt-10 lg:pt-0 lg:pl-16 space-y-8">
            <div>
              <span className="label-mono text-white/40 block mb-3">EMBASSY PREPARATION</span>
              <h3 className="font-sans text-2xl font-bold uppercase tracking-wider text-white mb-4">
                1-on-1 Visa Mock Interviews
              </h3>
              <p className="font-sans text-sm text-white/70 font-light leading-relaxed mb-6">
                Our mock visa sessions simulate exact consular questions, financial justification prompts, and post-study intent answers required by US, UK, and German embassies.
              </p>

              <div className="p-4 bg-[#121217] border border-white/10 space-y-3 font-mono text-xs text-white/60">
                <div className="flex items-center gap-2 text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Embassy Document Verification Audit</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Sponsorship Affidavit Drafting</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Emergency Appointment Slot Fast-Tracking</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                onClick={onBookConsultation}
                className="btn-pill-white w-full text-center justify-center !py-3.5"
              >
                <span>BOOK VISA MOCK INTERVIEW</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
