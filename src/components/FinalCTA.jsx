import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCTA({ onStartJourney, onTalkCounsellor }) {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-between bg-[#070709] overflow-hidden border-t border-white/10">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000&auto=format&fit=crop"
          alt="International University Skylines"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.2]"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 py-24 md:py-36 flex-1 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <span className="label-mono text-white/50">
            [11] BEGIN YOUR ADMISSION
          </span>
          <span className="label-mono text-white/80">
            GLOBAL INTAKES OPEN NOW
          </span>
        </div>

        <div className="my-auto py-12 text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="display-huge text-white mb-6"
          >
            READY TO BEGIN?
          </motion.h2>

          <p className="font-sans text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Your international journey starts with the right decision. Speak with an expert counselor today or start your application portal setup.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={onStartJourney}
              className="btn-pill-white !py-4 !px-8"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onTalkCounsellor}
              className="btn-pill-outline !py-4 !px-8"
            >
              <span>TALK TO A COUNSELLOR</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-white/40">
          <span>TRITON EDUCATION CONSULTING • EST. 2018</span>
          <span>DIRECT UNIVERSITY AUTHORIZATION CODE #TRT-INTL-99</span>
        </div>
      </div>
    </section>
  );
}
