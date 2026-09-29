import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function AdmissionSection({ onStartApplication }) {
  const stages = [
    {
      num: '01',
      title: 'PROFILE',
      subtitle: 'Evaluation & Strategy',
      details: 'Comprehensive review of GPA, standardized test scores, budget limitations, and career goals to select target universities.'
    },
    {
      num: '02',
      title: 'DOCUMENTS',
      subtitle: 'Preparation & Verification',
      details: 'SOP writing assistance, LOR formatting, official academic transcript translation, and passport validity checks.'
    },
    {
      num: '03',
      title: 'APPLICATION',
      subtitle: 'Submission & Tracking',
      details: 'Direct application dispatch into university admissions portals with dedicated priority tracking codes.'
    },
    {
      num: '04',
      title: 'REVIEW',
      subtitle: 'Interview & Assessment',
      details: 'Preparation for university faculty interviews, supplementary questionnaire answers, and scholarship petitions.'
    },
    {
      num: '05',
      title: 'ADMISSION',
      subtitle: 'Offer & CAS Issuance',
      details: 'Receipt of official conditional/unconditional offer letters, tuition deposit clearance, and CAS/I-20 issuance.'
    }
  ];

  return (
    <section className="bg-section-light text-[#070709] py-28 md:py-36 relative border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 pb-8 border-b border-black/15">
          <div>
            <span className="label-mono !text-[#070709]/50 block mb-3">
              [05] ADMISSION PROTOCOL
            </span>
            <h2 className="display-large !text-[#070709]">
              From Application <br />
              <span className="editorial-serif italic font-normal text-[#070709]/90">
                to Acceptance.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm md:text-base text-[#070709]/70 font-light leading-relaxed mb-6">
              Our structured 5-stage admission architecture eliminates error, ensures deadline compliance, and maximizes scholarship eligibility.
            </p>
            <button
              onClick={onStartApplication}
              className="btn-pill-light-dark"
            >
              <span>CHECK ELIGIBILITY</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5-Stage Editorial Horizontal / Vertical Process */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {stages.map((stg, idx) => (
            <motion.div
              key={stg.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col justify-between pt-6 border-t border-black/20 relative group"
            >
              <div>
                {/* Large Stage Number */}
                <span className="font-mono text-4xl md:text-5xl font-light text-[#070709]/30 block mb-4 group-hover:text-[#070709] transition-colors">
                  {stg.num}
                </span>

                {/* Stage Title */}
                <h3 className="font-sans text-xl font-bold tracking-wider uppercase text-[#070709] mb-1">
                  {stg.title}
                </h3>
                
                <p className="font-mono text-xs text-[#070709]/60 uppercase tracking-widest mb-3">
                  {stg.subtitle}
                </p>

                <div className="divider-light mb-4" />

                {/* Stage Details */}
                <p className="font-sans text-xs md:text-sm text-[#070709]/75 font-light leading-relaxed">
                  {stg.details}
                </p>
              </div>

              {/* Progress Line Dot */}
              <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-[0.7rem] font-mono text-[#070709]/50">
                <span>STAGE {idx + 1} OF 5</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
