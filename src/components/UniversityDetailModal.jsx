import React from 'react';
import { X, Globe, MapPin, Award, BookOpen, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function UniversityDetailModal({ university, onClose, onApply }) {
  if (!university) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6 sm:p-10">
      <div className="bg-[#0e0e12] border border-white/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-white">
        
        {/* Hero Header Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img
            src={university.image}
            alt={university.name}
            className="w-full h-full object-cover filter brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-transparent opacity-95" />
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 bg-black/60 hover:bg-black text-white border border-white/20 rounded-full cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-8 right-8">
            <span className="label-mono text-white/60 block mb-2">
              {university.flag} {university.country} • {university.city}
            </span>
            <h2 className="font-sans text-2xl md:text-4xl font-bold uppercase tracking-wider text-white">
              {university.name}
            </h2>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-8 sm:p-12 md:p-14 space-y-10 font-sans">
          
          {/* Key Specs Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 border-b border-white/10 font-mono text-xs">
            <div className="bg-[#14141c] p-6 border border-white/15 rounded-xl space-y-1">
              <span className="text-white/40 block text-[0.68rem] tracking-wider uppercase">RANKING / REPUTATION</span>
              <span className="text-white font-bold text-sm">{university.ranking}</span>
            </div>

            <div className="bg-[#121217] p-4 border border-white/10">
              <span className="text-white/40 block text-[0.65rem] mb-1">ANNUAL TUITION</span>
              <span className="text-white font-bold text-sm">{university.tuition}</span>
            </div>

            <div className="bg-[#121217] p-4 border border-white/10">
              <span className="text-white/40 block text-[0.65rem] mb-1">INTAKE MONTHS</span>
              <span className="text-white font-bold text-sm">{university.intake}</span>
            </div>

            <div className="bg-[#121217] p-4 border border-white/10">
              <span className="text-white/40 block text-[0.65rem] mb-1">ACCEPTANCE RATE</span>
              <span className="text-white font-bold text-sm">{university.acceptanceRate}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="label-mono text-white/40 block mb-2">INSTITUTION OVERVIEW</h3>
            <p className="text-white/80 font-light text-base leading-relaxed">
              {university.description}
            </p>
          </div>

          {/* Campus Life */}
          <div>
            <h3 className="label-mono text-white/40 block mb-2">CAMPUS & STUDENT LIFE</h3>
            <p className="text-white/70 font-light text-sm leading-relaxed">
              {university.campusLife}
            </p>
          </div>

          {/* Program Offered */}
          <div>
            <h3 className="label-mono text-white/40 block mb-3">AVAILABLE DEGREE DISCIPLINES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {university.courses.map((crs) => (
                <div key={crs} className="flex items-center gap-3 p-3 bg-[#121217] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-white/70" />
                  <span className="text-sm font-medium text-white">{crs}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs text-white/50">
              DIRECT PORTAL ADMISSION GUARANTEE BY TRITON
            </span>

            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="btn-pill-outline !py-2.5 !px-5"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  onClose();
                  onApply(university);
                }}
                className="btn-pill-white !py-2.5 !px-6"
              >
                <span>APPLY NOW FOR THIS CAMPUS</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
