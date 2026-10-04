import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function CounsellingSection({ onBookCounselling }) {
  const counsellingServices = [
    { title: 'University Selection', detail: 'Matching academic record & budget with optimal global institutions' },
    { title: 'Eligibility & Assessment', detail: 'Full credit conversion, transcript checks & entry requirement mapping' },
    { title: 'Applications & SOP', detail: 'Personalized statement review, resume formatting & portal submissions' },
    { title: 'Documentation & Translation', detail: 'Apostille certification, notarization & verified document vaults' },
    { title: 'Visa Preparation', detail: 'Embassy checklist validation, blocked accounts & 1-on-1 mock interviews' },
    { title: 'Travel & Arrival Support', detail: 'Student flight discounts, accommodation booking & airport pickup' }
  ];

  return (
    <section className="bg-section-dark site-section-padding border-t border-white/10 relative overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Image with Integrated Metric Badge */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden border border-white/10 img-zoom-wrapper">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                alt="1-on-1 Student Counselling"
                className="w-full h-full object-cover filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-60" />
            </div>

            {/* Integrated Metric Card */}
            <div className="bg-[#0e0e12] border border-white/15 p-5 flex items-center justify-between gap-4">
              <div>
                <span className="label-mono text-white/50 block text-[0.65rem] mb-1">PROVEN SUCCESS</span>
                <p className="font-sans text-xs text-white/70 font-light">
                  Direct university placement rate across 1,200+ students.
                </p>
              </div>
              <p className="font-mono text-2xl md:text-3xl font-bold text-white shrink-0">99.4%</p>
            </div>
          </div>

          {/* Right Column: Large Typography & Intentional Numbered Service Blocks */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <span className="label-mono text-white/40 block mb-3">
                [04] ADVISORY SERVICES
              </span>

              <h2 className="display-large text-white mb-6">
                Your Plans. <br />
                <span className="editorial-serif italic font-normal text-white">
                  Our Guidance.
                </span>
              </h2>

              <p className="font-sans text-white/70 text-base md:text-lg font-light leading-relaxed max-w-prose-editorial mb-10">
                Navigating international admissions shouldn't be confusing. Our senior advisors provide transparent, unbiased guidance tailored to your academic background.
              </p>

              {/* Numbered Service Cards Grid with Intentional Spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {counsellingServices.map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-[#0e0e12] border border-white/15 space-y-3 hover:border-white/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-white/40 font-bold">0{idx + 1}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-bold text-white uppercase tracking-wider mb-1">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-white/60 font-light leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onBookCounselling}
                className="btn-pill-white"
              >
                <span>TALK TO A COUNSELLOR</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
