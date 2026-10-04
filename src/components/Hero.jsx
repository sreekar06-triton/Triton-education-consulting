import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Award, CheckCircle2, ShieldCheck, DollarSign } from 'lucide-react';

export default function Hero({ onStartJourney }) {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 800], [0, 150]);
  const scaleImage = useTransform(scrollY, [0, 800], [1.02, 1.1]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0.2]);
  const yText = useTransform(scrollY, [0, 400], [0, -30]);

  // Essential Verified Facts
  const keyFacts = [
    { label: 'STUDENT PLACEMENTS', stat: '1,200+', detail: 'Verified Enrollments' },
    { label: 'VISA CLEARANCE RATE', stat: '99.2%', detail: 'First-Attempt Clearance' },
    { label: 'DIRECT ADMISSION TIME', stat: '72 Hours', detail: 'Accelerated Portal Admits' },
    { label: 'TUITION SAVINGS', stat: 'Up to 65%', detail: 'vs Western Capitals' },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#070709]">
      {/* Background Image Container with Gradient Overlay */}
      <motion.div
        style={{ y: yImage, scale: scaleImage }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop"
          alt="International University Campus"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      {/* Main Content Layout — Centered Container with Integrated Editorial Headline & Facts */}
      <div className="relative z-10 site-container w-full pt-32 md:pt-40 pb-20 flex-1 flex flex-col justify-between">
        
        {/* Upper Meta Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 mb-8"
        >
          <span className="label-mono text-white/80 font-bold">
            [01] TRITON EDUCATION CONSULTING
          </span>
          <span className="label-mono text-white/60">
            UZBEKISTAN • UNITED KINGDOM • UNITED STATES • GERMANY
          </span>
        </motion.div>

        {/* Main Editorial Layout Grid */}
        <motion.div
          style={{ opacity: opacityText, y: yText }}
          className="my-auto py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column: Headline, Narrative & Integrated CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h1 className="display-huge text-white mb-3 tracking-tight">
                STUDY ABROAD.
              </h1>
              <h2 className="display-large text-white/90 font-light tracking-tight">
                We Help You From <br />
                <span className="editorial-serif italic font-normal text-white">
                  Admission to Arrival.
                </span>
              </h2>
            </div>

            <p className="font-sans text-base md:text-lg text-white/80 font-light leading-relaxed max-w-prose-editorial">
              From choosing accredited universities to embassy visa clearances and student flight bookings, we make your international journey transparent, secure, and stress-free.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-5">
              <button
                onClick={onStartJourney}
                className="btn-pill-white"
              >
                <span>START YOUR JOURNEY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Integrated Key Facts Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 grid grid-cols-2 gap-5 md:gap-6"
          >
            {keyFacts.map((fact) => (
              <div key={fact.label} className="fact-card">
                <span className="label-mono text-white/50 text-[0.68rem] block">{fact.label}</span>
                <p className="font-mono text-2xl md:text-3xl font-bold text-white tracking-tight">{fact.stat}</p>
                <p className="font-sans text-xs text-white/70 font-light leading-relaxed">{fact.detail}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 pb-6 flex items-center justify-center gap-2 text-white/40 font-mono text-[0.7rem] uppercase tracking-widest">
        <span>SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-white/60" />
        </motion.div>
      </div>
    </section>
  );
}
