import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, CheckCircle2, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { COUNSELLORS } from '../data/testimonials';

export default function CounsellingPage() {
  const [selectedCounsellor, setSelectedCounsellor] = useState(COUNSELLORS[0]);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredCountry: 'Uzbekistan',
    courseInterest: 'Medical (MBBS/MD)',
    bookingDate: '2026-10-05',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="w-full bg-[#070709] text-white pt-32 pb-36 min-h-screen font-sans">
      <div className="site-container">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-16">
          <span className="label-mono text-white/40 block mb-3">
            [ADVISORY] 1-ON-1 OVERSEAS STRATEGY
          </span>
          <h1 className="display-large text-white mb-4">
            Your Plans. <br />
            <span className="editorial-serif italic font-normal text-white">
              Our Expert Guidance.
            </span>
          </h1>
          <p className="font-sans text-white/70 text-base max-w-2xl font-light">
            Book a complimentary 30-minute consultation with senior education advisors authorized by universities in Uzbekistan, UK, USA, Germany, and Australia.
          </p>
        </div>

        {/* Counsellor Profiles & Booking Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Counsellor Roster */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-sans text-2xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-4">
              Meet Our Senior Advisors
            </h2>

            <div className="space-y-6">
              {COUNSELLORS.map((c) => {
                const isSelected = selectedCounsellor.id === c.id;
                return (
                  <div
                    key={c.id}
                    onClick={() => setSelectedCounsellor(c)}
                    className={`p-8 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row gap-6 items-start sm:items-center ${
                      isSelected
                        ? 'bg-[#121218] border-white shadow-xl'
                        : 'bg-[#0e0e12] border-white/15 hover:border-white/40'
                    }`}
                  >
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-20 h-20 object-cover border border-white/20 rounded-xl"
                    />

                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-sans text-lg font-bold text-white uppercase">{c.name}</h3>
                        <span className="font-mono text-xs text-white/50">{c.experience}</span>
                      </div>
                      <p className="font-sans text-sm text-white/80 font-medium">{c.title}</p>
                      <p className="font-mono text-xs text-white/50">Spec: {c.specialization}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-8 bg-[#0e0e12] border border-white/15 rounded-2xl space-y-4 font-sans text-xs text-white/70">
              <h4 className="font-bold uppercase text-white tracking-wider text-sm">Why Book With Triton?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero consultation or hidden assessment fees</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct university portal access for immediate offer issuance</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Embassy verified visa documentation guidance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Form Column */}
          <div className="lg:col-span-6 bg-[#0e0e12] border border-white/20 p-8 md:p-14 lg:p-16 rounded-2xl shadow-2xl space-y-6">
            <h2 className="font-sans text-2xl font-bold uppercase tracking-wider text-white">
              Reserve Advisory Session
            </h2>
            <p className="font-sans text-xs text-white/60 font-light">
              Selected Advisor: <strong className="text-white">{selectedCounsellor.name}</strong> ({selectedCounsellor.specialization})
            </p>

            {bookingSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#12121a] border border-white/30 p-8 text-center space-y-4"
              >
                <CheckCircle2 className="w-12 h-12 text-white mx-auto" />
                <h3 className="font-sans text-2xl font-bold uppercase text-white">Session Confirmed</h3>
                <p className="font-sans text-sm text-white/70 font-light">
                  Thank you, {formData.name}. A calendar invitation with Zoom link has been sent to <strong>{formData.email}</strong> for {formData.bookingDate}.
                </p>
                <button
                  onClick={() => setBookingSuccess(false)}
                  className="btn-pill-white mt-4"
                >
                  Book Another Session
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="label-mono text-white/50 block mb-2">FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="editorial-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="label-mono text-white/50 block mb-2">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="editorial-input"
                      placeholder="student@example.com"
                    />
                  </div>

                  <div>
                    <label className="label-mono text-white/50 block mb-2">PHONE NUMBER</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="editorial-input"
                      placeholder="+91 / +998 / +44..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="label-mono text-white/50 block mb-2">PREFERRED COUNTRY</label>
                    <select
                      value={formData.preferredCountry}
                      onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                      className="bg-transparent border-b border-white/20 text-white font-sans text-base py-2 w-full outline-none cursor-pointer"
                    >
                      <option value="Uzbekistan" className="bg-[#070709]">Uzbekistan</option>
                      <option value="United Kingdom" className="bg-[#070709]">United Kingdom</option>
                      <option value="United States" className="bg-[#070709]">United States</option>
                      <option value="Germany" className="bg-[#070709]">Germany</option>
                      <option value="Australia" className="bg-[#070709]">Australia</option>
                    </select>
                  </div>

                  <div>
                    <label className="label-mono text-white/50 block mb-2">PREFERRED DATE</label>
                    <input
                      type="date"
                      required
                      value={formData.bookingDate}
                      onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                      className="editorial-input font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="label-mono text-white/50 block mb-2">ACADEMIC BACKGROUND & QUESTIONS</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="editorial-input"
                    placeholder="Tell us your GPA, intended major, or specific budget questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-pill-white w-full text-center justify-center !py-4"
                >
                  <span>CONFIRM APPOINTMENT BOOKING</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
