import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, FileText, GraduationCap, FileCheck, Plane, CreditCard, LayoutDashboard, Clock } from 'lucide-react';

export default function DashboardPreview({ openPortal }) {
  const [activeTab, setActiveTab] = useState('applications');

  const portalData = {
    applications: {
      title: 'Active Application Status',
      items: [
        { name: 'Tashkent Intl University of Tech (MD Medicine)', status: 'ACCEPTED - OFFER LETTER ISSUED', code: 'APP-9921', date: '2026-08-12', step: 'Stage 4/5' },
        { name: 'Kingston University London (MSc Finance)', status: 'UNDER FACULTY REVIEW', code: 'APP-4018', date: '2026-08-20', step: 'Stage 3/5' }
      ]
    },
    documents: {
      title: 'Verified Document Vault',
      items: [
        { name: 'Official High School & Bachelor Transcripts.pdf', status: 'VERIFIED & APOSTILLED', size: '2.4 MB' },
        { name: 'Passport (Valid till 2031).pdf', status: 'VERIFIED', size: '1.8 MB' },
        { name: 'Statement of Purpose (SOP) Final.docx', status: 'COUNSELLOR APPROVED', size: '420 KB' }
      ]
    },
    visa: {
      title: 'Embassy Visa Progress',
      items: [
        { name: 'Uzbekistan S-2 Telex Approval', status: 'APPROVED - TELEX #77491', date: 'Ready for Stamp' },
        { name: 'UK Tier 4 CAS Certificate', status: 'CAS ISSUED BY UNIVERSITY', date: 'VFS Appt Scheduled' }
      ]
    },
    flights: {
      title: 'Booked Student Tickets',
      items: [
        { name: 'Delhi (DEL) → Tashkent (TAS)', status: 'CONFIRMED - HY-422', seat: '14A (Window)', baggage: '30kg + 10kg Student' }
      ]
    },
    payments: {
      title: 'Tuition & Fee Receipts',
      items: [
        { name: 'Tashkent Univ Semester 1 Tuition Deposit', status: 'PAID ($1,800)', ref: 'TXN-8849102', receipt: 'Download PDF' }
      ]
    }
  };

  return (
    <section className="bg-section-dark py-28 md:py-36 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-mono text-white/40 block mb-4">
            [09] UNIFIED STUDENT PORTAL
          </span>
          <h2 className="display-large text-white mb-6">
            Everything. <br />
            <span className="editorial-serif italic font-normal text-white">
              In One Place.
            </span>
          </h2>
          <p className="font-sans text-white/70 text-base md:text-lg font-light leading-relaxed mb-8">
            Track your offers, upload verified credentials, monitor embassy visas, and download flight e-tickets from a single intuitive command center.
          </p>
          <button
            onClick={openPortal}
            className="btn-pill-white"
          >
            <span>ACCESS YOUR DASHBOARD</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Polished Mockup Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0e0e12] border border-white/20 shadow-2xl overflow-hidden"
        >
          {/* Top Mock Window Bar */}
          <div className="bg-[#16161c] px-6 py-4 border-b border-white/10 flex items-center justify-between font-mono text-xs text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-white/20"></span>
              <span className="w-3 h-3 rounded-full bg-white/20"></span>
              <span className="w-3 h-3 rounded-full bg-white/20"></span>
              <span className="ml-4 text-white/80 font-bold">TRITON STUDENT PORTAL v2.4</span>
            </div>

            <div className="flex items-center gap-4 text-white/50">
              <span className="hidden sm:inline">STUDENT ID: TRT-2026-9041</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-400 font-semibold">LIVE CONNECTED</span>
            </div>
          </div>

          {/* Interactive Mockup Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            
            {/* Left Mock Sidebar */}
            <div className="lg:col-span-3 border-r border-white/10 bg-[#0a0a0e] p-6 flex flex-col gap-2">
              <span className="label-mono text-white/40 block mb-3 text-[0.65rem]">PORTAL MODULES</span>

              {[
                { id: 'applications', label: 'Applications', icon: GraduationCap },
                { id: 'documents', label: 'Documents', icon: FileText },
                { id: 'visa', label: 'Visa Status', icon: FileCheck },
                { id: 'flights', label: 'Flight Bookings', icon: Plane },
                { id: 'payments', label: 'Payments Ledger', icon: CreditCard }
              ].map((m) => {
                const IconComp = m.icon;
                const isActive = activeTab === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveTab(m.id)}
                    className={`flex items-center gap-3 px-4 py-3 text-xs font-mono tracking-wider uppercase text-left transition-all border-l-2 bg-transparent cursor-pointer ${
                      isActive
                        ? 'border-white text-white bg-white/10 font-bold'
                        : 'border-transparent text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Main Mock Content Area */}
            <div className="lg:col-span-9 p-8 md:p-10 flex flex-col justify-between bg-[#0e0e12]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <h3 className="font-sans text-xl font-bold uppercase tracking-wider text-white">
                    {portalData[activeTab].title}
                  </h3>
                  <span className="font-mono text-xs text-white/40">
                    REAL-TIME SYNCED
                  </span>
                </div>

                <div className="space-y-4">
                  {portalData[activeTab].items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#14141a] border border-white/10 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <h4 className="font-sans text-base font-semibold text-white mb-1">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-3 font-mono text-xs text-white/50">
                          {item.code && <span>ID: {item.code}</span>}
                          {item.size && <span>SIZE: {item.size}</span>}
                          {item.date && <span>DATE: {item.date}</span>}
                          {item.seat && <span>SEAT: {item.seat}</span>}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs px-3 py-1 bg-white/10 border border-white/20 text-white font-bold rounded-none">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/50 mt-6">
                <span>ASSIGNED MANAGER: DR. MARCUS VANCE</span>
                <button
                  onClick={openPortal}
                  className="text-white hover:underline bg-transparent border-none cursor-pointer p-0"
                >
                  LAUNCH FULL APPLICATION PORTAL →
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
