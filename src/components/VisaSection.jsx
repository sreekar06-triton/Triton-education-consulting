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
    <section className="relative w-full site-section-padding bg-[#070709] border-t border-white/10">
      {/* Background Cinematic Photo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2000&auto=format&fit=crop"
          alt="International Travel Passport"
          className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.1]"
        />
        <div className="absolute inset-0 photo-overlay" />
      </div>

      <div className="relative z-10 site-container w-full flex flex-col justify-between">
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
        <div className="my-auto py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="display-large text-white"
            >
              NEXT STOP: <br />
              <span className="editorial-serif italic font-normal text-white">
                Your New Beginning.
              </span>
            </motion.h2>

            <p className="font-sans text-white/70 text-base md:text-lg font-light leading-relaxed max-w-prose-editorial">
              Securing your student visa shouldn't be stressful. Our certified immigration experts manage every aspect from financial proof validation to embassy interview preparation.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreVisa}
                className="btn-pill-white"
              >
                <span>EXPLORE VISA ASSISTANCE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Minimal 2x2 Feature Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {visaFeatures.map((feat) => {
              const IconComponent = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-8 rounded-2xl border border-white/15 bg-[#0e0e12]/90 backdrop-blur-md space-y-4 shadow-xl hover:border-white/40 transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-sans text-base font-bold text-white uppercase tracking-wider">
                    {feat.title}
                  </h3>
                  <div className="divider-dark" />
                  <p className="font-sans text-xs md:text-sm text-white/70 font-light leading-relaxed">
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
