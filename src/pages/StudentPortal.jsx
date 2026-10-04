import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  FileText,
  FileCheck,
  Plane,
  CreditCard,
  MessageSquare,
  LayoutDashboard,
  CheckCircle2,
  Clock,
  Download,
  Upload,
  User,
  LogOut,
  ChevronRight,
  ShieldCheck,
  Send
} from 'lucide-react';

export default function StudentPortal({ user = { name: 'Aarav Sharma', email: 'aarav@triton-edu.org' }, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [messages, setMessages] = useState([
    { sender: 'Dr. Marcus Vance', text: 'Hello Aarav! Your Tashkent International University offer letter has been verified. Please upload your passport copy for Telex visa processing.', time: '10:15 AM' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    setMessages([...messages, { sender: 'You', text: inputMsg, time: 'Just now' }]);
    setInputMsg('');
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white pt-24 pb-24 font-sans">
      {/* Top Portal Banner */}
      <div className="bg-[#0e0e12] border-b border-white/10 py-8">
        <div className="site-container flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="label-mono text-white/40 block text-[0.68rem] tracking-wider">TRITON STUDENT APPLICANT PORTAL</span>
            <h1 className="font-sans text-3xl font-bold uppercase tracking-wider text-white">
              Welcome, {user.name}
            </h1>
            <p className="font-mono text-xs text-white/50 tracking-wider">STUDENT ID: TRT-2026-9041 • INTAKE: SEPTEMBER 2026</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold rounded-lg">
              OFFER LETTER ISSUED
            </span>

            <button
              onClick={onLogout}
              className="font-mono text-xs text-white/70 hover:text-white flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white/50 rounded-lg bg-transparent cursor-pointer transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="site-container pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sidebar Tabs - Roomy Navigation Panel */}
          <div className="lg:col-span-3 space-y-3 bg-[#0e0e12] border border-white/15 p-6 rounded-2xl self-start">
            <span className="label-mono text-white/40 block mb-4 text-[0.68rem] px-2 tracking-wider">PORTAL NAVIGATION</span>

            {[
              { id: 'overview', label: 'Overview', icon: LayoutDashboard },
              { id: 'applications', label: 'Applications', icon: GraduationCap },
              { id: 'documents', label: 'Documents Vault', icon: FileText },
              { id: 'visa', label: 'Visa Tracking', icon: FileCheck },
              { id: 'flights', label: 'Flight Booking', icon: Plane },
              { id: 'payments', label: 'Payments & Fee', icon: CreditCard },
              { id: 'support', label: 'Advisor Support', icon: MessageSquare }
            ].map((nav) => {
              const IconComponent = nav.icon;
              const isActive = activeTab === nav.id;
              return (
                <button
                  key={nav.id}
                  onClick={() => setActiveTab(nav.id)}
                  className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all bg-transparent cursor-pointer border-l-2 ${
                    isActive
                      ? 'border-white text-white bg-white/10 font-bold shadow-sm'
                      : 'border-transparent text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <IconComponent className="w-4 h-4 shrink-0" />
                    <span>{nav.label}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                </button>
              );
            })}
          </div>

          {/* Main Display Area - Roomy Inner Padding */}
          <div className="lg:col-span-9 bg-[#0e0e12] border border-white/15 p-8 md:p-12 lg:p-14 rounded-2xl min-h-[550px]">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-10">
                <div>
                  <span className="label-mono text-white/40 block mb-3">PROGRESS ROADMAP</span>
                  <h2 className="font-sans text-2xl font-bold uppercase text-white mb-6">Journey Status: Stage 4 of 6</h2>

                  {/* Progress Line */}
                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 text-center font-mono text-[0.68rem]">
                    {[
                      { step: '01 COUNSEL', done: true },
                      { step: '02 UNIV SELECT', done: true },
                      { step: '03 ADMISSION', done: true },
                      { step: '04 VISA TELEX', active: true },
                      { step: '05 CURRENCY', done: false },
                      { step: '06 FLIGHT', done: false }
                    ].map((s, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border ${
                          s.done
                            ? 'bg-white text-black font-bold border-white'
                            : s.active
                            ? 'bg-white/20 text-white font-bold border-white border-dashed'
                            : 'bg-transparent text-white/30 border-white/10'
                        }`}
                      >
                        {s.step}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="divider-dark" />

                {/* Next Action Items */}
                <div className="space-y-6">
                  <h3 className="font-sans text-lg font-bold uppercase text-white">Pending Action Required</h3>
                  
                  <div className="p-6 bg-[#14141c] border border-white/20 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="space-y-1">
                      <h4 className="font-sans text-base font-bold text-white">Upload Apostilled High School Transcript</h4>
                      <p className="font-sans text-xs text-white/60">Required for Uzbekistan Ministry of Foreign Affairs Telex Telex Code</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('documents')}
                      className="btn-pill-white !py-2.5 !px-5 !text-[0.7rem]"
                    >
                      Go To Vault
                    </button>
                  </div>

                  <div className="p-6 bg-[#14141c] border border-white/20 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="space-y-1">
                      <h4 className="font-sans text-base font-bold text-white">Schedule Visa Interview Orientation</h4>
                      <p className="font-sans text-xs text-white/60">1-on-1 session with Dr. Marcus Vance</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('support')}
                      className="btn-pill-outline !py-2.5 !px-5 !text-[0.7rem]"
                    >
                      Message Advisor
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* APPLICATIONS TAB */}
            {activeTab === 'applications' && (
              <div className="space-y-6">
                <h2 className="font-sans text-2xl font-bold uppercase text-white mb-4">University Admissions</h2>

                <div className="p-6 bg-[#14141c] border border-white/20 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="label-mono text-white/40 block">PRIMARY ADMIT</span>
                      <h3 className="font-sans text-xl font-bold text-white uppercase">Tashkent International University of Technology</h3>
                      <p className="font-mono text-xs text-white/60">Course: MD General Medicine (English Medium)</p>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                      UNCONDITIONAL OFFER ISSUED
                    </span>
                  </div>
                  <div className="divider-dark" />
                  <div className="flex items-center justify-between font-mono text-xs text-white/70">
                    <span>TUITION DEPOSIT: PAID ($1,800)</span>
                    <button className="text-white hover:underline flex items-center gap-1 bg-transparent border-none cursor-pointer">
                      <Download className="w-3.5 h-3.5" /> Download Offer PDF
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* DOCUMENTS TAB */}
            {activeTab === 'documents' && (
              <div className="space-y-6">
                <h2 className="font-sans text-2xl font-bold uppercase text-white mb-4">Verified Document Vault</h2>

                <div className="p-8 border-2 border-dashed border-white/20 text-center bg-[#121217] space-y-3">
                  <Upload className="w-8 h-8 text-white/50 mx-auto" />
                  <p className="font-sans text-sm text-white font-medium">Drag & Drop transcripts, passport, or medical certificates</p>
                  <p className="font-mono text-xs text-white/40">Supported formats: PDF, JPG, PNG (Max 15MB)</p>
                  <button className="btn-pill-white !py-2 !px-4 !text-xs mt-2">Browse Local Files</button>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {[
                    { name: 'Aarav_Sharma_Passport_2026.pdf', status: 'VERIFIED', size: '2.4 MB' },
                    { name: '12th_Grade_Marksheet_Apostille.pdf', status: 'UNDER REVIEW', size: '3.1 MB' },
                    { name: 'Statement_of_Purpose_Final.pdf', status: 'VERIFIED', size: '512 KB' }
                  ].map((doc) => (
                    <div key={doc.name} className="p-4 bg-[#14141c] border border-white/10 flex items-center justify-between">
                      <span className="text-white font-semibold">{doc.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-white/40">{doc.size}</span>
                        <span className="px-2 py-0.5 bg-white/10 text-white font-bold">{doc.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VISA TAB */}
            {activeTab === 'visa' && (
              <div className="space-y-6">
                <h2 className="font-sans text-2xl font-bold uppercase text-white mb-4">Uzbekistan S-2 Student Visa Status</h2>
                
                <div className="p-6 bg-[#14141c] border border-white/20 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span>TELEX APPROVAL CODE:</span>
                    <strong className="text-white text-sm">TAS-MFA-774910</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>MINISTRY STATUS:</span>
                    <strong className="text-emerald-400">PASSED DIRECT CLEARANCE</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>EMBASSY STAMP:</span>
                    <strong className="text-white">DISPATCHED TO VFS MUMBAI</strong>
                  </div>
                </div>
              </div>
            )}

            {/* FLIGHTS TAB */}
            {activeTab === 'flights' && (
              <div className="space-y-6">
                <h2 className="font-sans text-2xl font-bold uppercase text-white mb-4">Flight Reservation</h2>
                <div className="p-6 bg-[#14141c] border border-white/20 space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-white font-bold">AIRLINE: UZBEKISTAN AIRWAYS (HY-422)</span>
                    <span className="text-emerald-400 font-bold">CONFIRMED PNR: TRT998</span>
                  </div>
                  <p className="font-sans text-sm text-white/80">Delhi (DEL) → Tashkent (TAS) • Sep 15, 2026 • 08:15 AM</p>
                  <p className="font-mono text-xs text-white/60">Baggage Allowance: 30kg Check-in + 10kg Triton Student Voucher</p>
                </div>
              </div>
            )}

            {/* PAYMENTS TAB */}
            {activeTab === 'payments' && (
              <div className="space-y-6">
                <h2 className="font-sans text-2xl font-bold uppercase text-white mb-4">Tuition Ledger</h2>
                <div className="p-6 bg-[#14141c] border border-white/20 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-white">
                    <span>Semester 1 Deposit ($1,800 USD)</span>
                    <span className="text-emerald-400 font-bold">PAID</span>
                  </div>
                  <div className="flex items-center justify-between text-white/60">
                    <span>Remaining Balance ($1,800 USD)</span>
                    <span>DUE ON CAMPUS (OCT 15, 2026)</span>
                  </div>
                </div>
              </div>
            )}

            {/* SUPPORT TAB */}
            {activeTab === 'support' && (
              <div className="space-y-6 flex flex-col justify-between h-full">
                <h2 className="font-sans text-2xl font-bold uppercase text-white">Advisor Direct Messenger</h2>

                <div className="bg-[#14141c] border border-white/15 p-6 h-64 overflow-y-auto space-y-4 font-sans text-xs">
                  {messages.map((m, idx) => (
                    <div key={idx} className={`p-4 rounded-none max-w-lg ${m.sender === 'You' ? 'bg-white text-black ml-auto' : 'bg-[#1e1e28] text-white'}`}>
                      <span className="font-mono text-[0.65rem] opacity-60 block mb-1">{m.sender} • {m.time}</span>
                      <p className="text-sm">{m.text}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-4">
                  <input
                    type="text"
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    placeholder="Type your message to Dr. Marcus Vance..."
                    className="editorial-input flex-1"
                  />
                  <button type="submit" className="btn-pill-white !py-2 !px-5">
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
