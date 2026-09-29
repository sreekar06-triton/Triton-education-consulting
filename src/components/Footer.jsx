import React from 'react';
import { ArrowUpRight, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#050507] text-white pt-24 pb-12 border-t border-white/10 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-3xl font-bold tracking-[0.2em] uppercase text-white block">
              TRITON<span className="text-white/40">.</span>
            </span>
            <p className="font-sans text-sm text-white/60 font-light leading-relaxed max-w-sm">
              Study Abroad. We Help You From Admission to Arrival. Dedicated guidance, university selection, visa compliance, currency wire, and student flights.
            </p>
            <div className="pt-2 font-mono text-xs text-white/40">
              © {new Date().getFullYear()} Triton Education Consulting LLC.
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-3">
            <span className="label-mono text-white/40 block mb-2">PAGES</span>
            {['Universities', 'Counselling', 'Admissions', 'Visa', 'Flights', 'Currency', 'Contact'].map((pg) => (
              <button
                key={pg}
                onClick={() => {
                  setActivePage(pg.toLowerCase());
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="block text-sm text-white/70 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0 font-sans"
              >
                {pg}
              </button>
            ))}
          </div>

          {/* Key Global Capitals Column */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs text-white/70">
            <span className="label-mono text-white/40 block mb-2">OFFICE LOCATIONS</span>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                <span>Tashkent Hub: Amir Timur Ave 42, Tashkent, Uzbekistan</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                <span>London Office: 88 Kingsway, Holborn, London WC2B 6AA</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                <span>Mumbai Hub: BKC Financial Centre, Bandra East, Mumbai</span>
              </p>
            </div>
          </div>

          {/* Direct Support Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="label-mono text-white/40 block mb-2">DIRECT INQUIRIES</span>
            <p className="text-sm font-mono text-white/80 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-white/50" />
              <span>admissions@triton-edu.org</span>
            </p>
            <p className="text-sm font-mono text-white/80 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-white/50" />
              <span>+1 (800) 555-TRITON / +998 71 200 4488</span>
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-pill-outline !py-2 !px-4 !text-xs"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
          <span>PRIVACY POLICY • TERMS OF ADMISSION • IMMIGRATION COMPLIANCE</span>
          <span>DESIGNED BY CREATIVE BRANDING STUDIO SYSTEM</span>
        </div>
      </div>
    </footer>
  );
}
