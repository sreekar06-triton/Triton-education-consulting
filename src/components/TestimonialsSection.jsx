import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-section-dark site-section-padding border-t border-white/10 relative overflow-hidden">
      <div className="site-container">
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
          <span className="label-mono text-white/50">
            [10] STUDENT VOICES & REVIEWS
          </span>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-colors rounded-full cursor-pointer bg-transparent"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-colors rounded-full cursor-pointer bg-transparent"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Large Editorial Portrait + Quote Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Large Authentic Student Photography */}
            <div className="lg:col-span-5 relative aspect-[3/4] border border-white/10 rounded-2xl overflow-hidden img-zoom-wrapper shadow-2xl">
              <img
                src={item.image}
                alt={item.studentName}
                className="w-full h-full object-cover filter brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-50" />
            </div>

            {/* Oversized Quote Typography */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div>
                <Quote className="w-12 h-12 text-white/30 mb-6" />
                <p className="font-serif italic text-2xl md:text-4xl text-white font-normal leading-snug max-w-prose-wide">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-8 border-t border-white/15 space-y-1">
                <h3 className="font-sans text-xl font-bold uppercase tracking-wider text-white">
                  {item.studentName}
                </h3>
                <p className="font-sans text-sm text-white/80 font-medium">
                  {item.course} — {item.university} ({item.country})
                </p>
                <span className="font-mono text-xs text-white/40 block pt-1">
                  {item.year} • ADMITTED VIA TRITON
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
