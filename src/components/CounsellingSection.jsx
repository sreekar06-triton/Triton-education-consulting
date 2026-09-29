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
    <section className="bg-section-dark py-28 md:py-36 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Large Image with Subtle Hover/Scroll parallax */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 img-zoom-wrapper">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                alt="1-on-1 Student Counselling"
                className="w-full h-full object-cover filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-60" />
            </div>

            {/* Float Metric Tag */}
            <div className="absolute bottom-8 left-8 bg-[#070709]/90 border border-white/15 backdrop-blur-md p-6 max-w-xs">
              <span className="label-mono text-white/50 block mb-1">PROVEN SUCCESS</span>
              <p className="font-sans text-3xl font-bold text-white mb-1">99.4%</p>
              <p className="font-sans text-xs text-white/70 font-light">
                Direct university admission placement rate across 1,200+ students.
              </p>
            </div>
          </div>

          {/* Right Column: Large Typography & Thin Separator List */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="label-mono text-white/40 block mb-4">
                [04] ADVISORY SERVICES
              </span>

              <h2 className="display-large text-white mb-6">
                Your Plans. <br />
                <span className="editorial-serif italic font-normal text-white">
                  Our Guidance.
                </span>
              </h2>

              <p className="font-sans text-white/70 text-base md:text-lg font-light leading-relaxed mb-10">
                Navigating international admissions shouldn't be confusing. Our senior advisors provide transparent, unbiased guidance tailored to your academic background.
              </p>

              {/* List with thin divider lines */}
              <div className="divide-y divide-white/10 border-y border-white/10 mb-10">
                {counsellingServices.map((item, idx) => (
                  <div
                    key={item.title}
                    className="py-4 flex items-center justify-between group hover:pl-2 transition-all duration-300"
                  >
                    <div>
                      <h3 className="font-sans text-lg font-medium text-white group-hover:text-white/90">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-white/50 font-light mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
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
