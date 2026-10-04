import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#070709] text-white pt-10 md:pt-16 pb-36 min-h-screen font-sans">
      <div className="site-container">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-16">
          <span className="label-mono text-white/40 block mb-3">
            [CONTACT] GLOBAL OFFICES & ADVISORY DESK
          </span>
          <h1 className="display-large text-white mb-4">
            Get In Touch <br />
            <span className="editorial-serif italic font-normal text-white">
              With Our Team.
            </span>
          </h1>
          <p className="font-sans text-white/70 text-base max-w-2xl font-light">
            Have questions about university selection, visas, or student flights? Our senior intake managers respond within 4 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Form */}
          <div className="lg:col-span-6 bg-[#0e0e12] border border-white/20 p-8 md:p-12 lg:p-14 rounded-2xl shadow-2xl space-y-8">
            <h2 className="font-sans text-2xl font-bold uppercase tracking-wider text-white">
              Send Direct Message
            </h2>

            {submitted ? (
              <div className="bg-[#12121a] border border-white/30 p-8 rounded-xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-white mx-auto" />
                <h3 className="font-sans text-xl font-bold uppercase text-white">Inquiry Dispatched</h3>
                <p className="font-sans text-sm text-white/70">
                  Your message has been assigned to our senior admissions desk. An advisor will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="label-mono text-white/50 block mb-3">YOUR FULL NAME</label>
                  <input type="text" required className="editorial-input" placeholder="e.g. Aarav Sharma" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="label-mono text-white/50 block mb-3">EMAIL ADDRESS</label>
                    <input type="email" required className="editorial-input" placeholder="student@example.com" />
                  </div>
                  <div>
                    <label className="label-mono text-white/50 block mb-3">PHONE / WHATSAPP</label>
                    <input type="tel" required className="editorial-input" placeholder="+998 / +91 / +44..." />
                  </div>
                </div>

                <div>
                  <label className="label-mono text-white/50 block mb-3">INQUIRY CATEGORY</label>
                  <select className="bg-transparent border-b border-white/20 text-white font-sans text-base py-3 w-full outline-none cursor-pointer">
                    <option className="bg-[#070709]">Uzbekistan Medical/Tech Admission</option>
                    <option className="bg-[#070709]">UK / US Tier 1 University Admission</option>
                    <option className="bg-[#070709]">Student Visa & Blocked Accounts</option>
                    <option className="bg-[#070709]">Student Flight Booking & Baggage</option>
                  </select>
                </div>

                <div>
                  <label className="label-mono text-white/50 block mb-3">YOUR MESSAGE</label>
                  <textarea rows={4} required className="editorial-input" placeholder="How can we assist your international journey?" />
                </div>

                <button type="submit" className="btn-pill-white w-full text-center justify-center !py-4">
                  <span>SEND INQUIRY</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Offices List */}
          <div className="lg:col-span-6 space-y-8 font-sans">
            <h2 className="font-sans text-2xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-4">
              Authorized Global Offices
            </h2>

            <div className="space-y-6">
              {[
                { city: 'Tashkent, Uzbekistan', address: 'Amir Timur Ave 42, Tashkent 100000', phone: '+998 71 200 4488', email: 'tashkent@triton-edu.org' },
                { city: 'London, United Kingdom', address: '88 Kingsway, Holborn, London WC2B 6AA', phone: '+44 20 7946 0912', email: 'london@triton-edu.org' },
                { city: 'Mumbai, India', address: 'BKC Financial Centre, Bandra East, Mumbai 400051', phone: '+91 22 6123 9900', email: 'mumbai@triton-edu.org' },
                { city: 'Boston, United States', address: '100 Federal Street, Suite 1900, Boston MA 02110', phone: '+1 617 555 0199', email: 'boston@triton-edu.org' }
              ].map((off) => (
                <div key={off.city} className="p-8 rounded-2xl bg-[#0e0e12] border border-white/15 space-y-3 font-mono text-xs hover:border-white/30 transition-all">
                  <h3 className="font-sans text-lg font-bold text-white uppercase">{off.city}</h3>
                  <p className="text-white/70 flex items-center gap-2.5"><MapPin className="w-3.5 h-3.5 text-white/40 shrink-0" /> {off.address}</p>
                  <p className="text-white/70 flex items-center gap-2.5"><Phone className="w-3.5 h-3.5 text-white/40 shrink-0" /> {off.phone}</p>
                  <p className="text-white/70 flex items-center gap-2.5"><Mail className="w-3.5 h-3.5 text-white/40 shrink-0" /> {off.email}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
