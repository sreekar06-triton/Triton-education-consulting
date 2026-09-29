import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, FileText, Compass, Clock } from 'lucide-react';
import { VISA_COUNTRIES } from '../data/visa';

export default function VisaSection({ onExploreVisa }) {
  const visaFeatures = [
    { title: 'Requirements Mapping', desc: 'Country-specific embassy checklists & financial criteria verification.', icon: Compass },
    { title: 'Documents Audit', desc: 'Pre-submission review of CAS, I-20, blocked account proofs & affidavits.', icon: FileText },
    { title: 'Application Assistance', desc: 'DS-160, Tier 4 & E-Visa portal submission with zero errors.', icon: ShieldCheck },
    { title: 'Status Tracking', desc: 'Real-time embassy status updates & passport dispatch monitoring.', icon: Clock },
  ];

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-between bg-[#070709] overflow-hidden border-t border-white/10">
      {/* Background Cinematic Photo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2000&auto=format&fit=crop"
          alt="International Travel Passport"
          className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.1]"
        />
        <div className="absolute inset-0 photo-overlay" />
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 py-24 md:py-36 flex flex-col justify-between min-h-[80vh]">
        {/* Top Header Label */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <span className="label-mono text-white/50">
            [06] IMMIGRATION & VISA
          </span>
          <span className="label-mono text-white/80">
            98.5% GLOBAL SUCCESS RATE
          </span>
        </div>

        {/* Content Layout */}
        <div className="my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="display-large text-white mb-6"
            >
              NEXT STOP: <br />
              <span className="editorial-serif italic font-normal text-white">
                Your New Beginning.
              </span>
            </motion.h2>

            <p className="font-sans text-white/70 text-base md:text-lg font-light leading-relaxed mb-8">
              Securing your student visa shouldn't be stressful. Our certified immigration experts manage every aspect from financial proof validation to embassy interview preparation.
            </p>

            <button
              onClick={onExploreVisa}
              className="btn-pill-white"
            >
              <span>EXPLORE VISA ASSISTANCE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Minimal 2x2 Feature Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {visaFeatures.map((feat) => {
              const IconComponent = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-6 border border-white/15 bg-[#070709]/70 backdrop-blur-sm space-y-3"
                >
                  <IconComponent className="w-5 h-5 text-white/80" />
                  <h3 className="font-sans text-base font-bold text-white uppercase tracking-wider">
                    {feat.title}
                  </h3>
                  <div className="divider-dark" />
                  <p className="font-sans text-xs text-white/60 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Country Quick Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/60">
          <span className="uppercase tracking-widest text-white/40">FAST-TRACK DESTINATIONS:</span>
          <div className="flex flex-wrap items-center gap-6">
            {VISA_COUNTRIES.map((v) => (
              <span key={v.country} className="text-white/80">
                {v.flag} {v.country} ({v.processingTime})
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
