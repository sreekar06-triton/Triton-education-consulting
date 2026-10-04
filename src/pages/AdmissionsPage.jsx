import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, ArrowUpRight, Calculator, FileCheck, Layers } from 'lucide-react';

export default function AdmissionsPage({ onOpenPortal }) {
  const [gpa, setGpa] = useState('3.4');
  const [testScore, setTestScore] = useState('IELTS 7.0');
  const [degreeInterest, setDegreeInterest] = useState('Bachelor');
  const [eligibleResult, setEligibleResult] = useState(null);

  const calculateEligibility = (e) => {
    e.preventDefault();
    const gpaNum = parseFloat(gpa) || 0;
    if (gpaNum >= 3.0) {
      setEligibleResult({
        status: 'HIGH ELIGIBILITY (DIRECT ADMISSION)',
        badgeColor: 'text-emerald-400',
        message: 'Your credentials qualify for direct unconditional admission and merit-based tuition waivers in Uzbekistan, UK, and Germany.',
        recommendations: ['Tashkent Intl Univ of Tech', 'Kingston Univ London', 'TUM Germany']
      });
    } else {
      setEligibleResult({
        status: 'PATHWAY & PREPARATION ELIGIBLE',
        badgeColor: 'text-amber-400',
        message: 'Your profile qualifies for foundation degree pathways with guaranteed progression upon 1st term completion.',
        recommendations: ['Tashkent Intl Tech Foundation', 'UK International Year One']
      });
    }
  };

  return (
    <div className="w-full bg-[#070709] text-white pt-32 pb-36 min-h-screen font-sans">
      <div className="site-container">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-16">
          <span className="label-mono text-white/40 block mb-3">
            [PROTOCOL] ACCELERATED ADMISSION ARCHITECTURE
          </span>
          <h1 className="display-large text-white mb-4">
            From Application <br />
            <span className="editorial-serif italic font-normal text-white">
              to Official Acceptance.
            </span>
          </h1>
          <p className="font-sans text-white/70 text-base max-w-2xl font-light">
            Our direct institutional portals guarantee fast-track processing, verified document submission, and offer letter generation within 72 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Interactive Eligibility Evaluator - Generous Container Padding */}
          <div className="lg:col-span-6 bg-[#0e0e12] border border-white/20 p-8 md:p-14 lg:p-16 rounded-2xl shadow-2xl space-y-8">
            <div className="flex items-center gap-3">
              <Calculator className="w-5 h-5 text-white" />
              <span className="label-mono text-white/50">INSTANT PROFILE CHECKER</span>
            </div>

            <h2 className="font-sans text-2xl font-bold uppercase tracking-wider text-white">
              Evaluate Your Admission Chances
            </h2>

            <form onSubmit={calculateEligibility} className="space-y-8">
              <div>
                <label className="label-mono text-white/50 block mb-3">GPA / PERCENTAGE (OUT OF 4.0 OR 100%)</label>
                <input
                  type="text"
                  value={gpa}
                  onChange={(e) => setGpa(e.target.value)}
                  className="editorial-input text-xl font-bold font-mono"
                  placeholder="e.g. 3.5 or 85%"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="label-mono text-white/50 block mb-3">ENGLISH SCORE (IELTS/PTE/TOEFL)</label>
                  <select
                    value={testScore}
                    onChange={(e) => setTestScore(e.target.value)}
                    className="bg-transparent border-b border-white/20 text-white font-sans text-base py-3 w-full outline-none cursor-pointer"
                  >
                    <option value="IELTS 7.0+" className="bg-[#070709]">IELTS 7.0+ / TOEFL 95+</option>
                    <option value="IELTS 6.5" className="bg-[#070709]">IELTS 6.5 / TOEFL 85</option>
                    <option value="IELTS 6.0" className="bg-[#070709]">IELTS 6.0 / TOEFL 75</option>
                    <option value="Medium of Instruction Proof" className="bg-[#070709]">Medium of Instruction (MOI Letter)</option>
                  </select>
                </div>

                <div>
                  <label className="label-mono text-white/50 block mb-3">DEGREE LEVEL</label>
                  <select
                    value={degreeInterest}
                    onChange={(e) => setDegreeInterest(e.target.value)}
                    className="bg-transparent border-b border-white/20 text-white font-sans text-base py-3 w-full outline-none cursor-pointer"
                  >
                    <option value="Bachelor" className="bg-[#070709]">Bachelor Degree (Undergraduate)</option>
                    <option value="Master" className="bg-[#070709]">Master Degree (Postgraduate)</option>
                    <option value="MD Medicine" className="bg-[#070709]">MD / MBBS (Medical Doctor)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-pill-white w-full text-center justify-center !py-4"
              >
                CALCULATE ADMISSION ELIGIBILITY
              </button>
            </form>

            {eligibleResult && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 pt-6 border-t border-white/10 space-y-3 font-mono text-xs"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className={`font-bold ${eligibleResult.badgeColor}`}>{eligibleResult.status}</span>
                </div>
                <p className="font-sans text-xs text-white/80 font-light leading-relaxed">
                  {eligibleResult.message}
                </p>
                <div className="pt-2">
                  <span className="text-white/40 block text-[0.65rem] mb-1">RECOMMENDED INSTANT ADMIT CAMPUSES:</span>
                  <div className="flex flex-wrap gap-2">
                    {eligibleResult.recommendations.map((rec) => (
                      <span key={rec} className="bg-white/10 border border-white/20 px-2 py-1 text-white">
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* 5-Stage Checklist Detail */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-sans text-2xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-4">
              Required Application Vault Checklist
            </h2>

            <div className="space-y-4">
              {[
                { title: 'Academic Transcripts & Marksheets', desc: '10th, 12th & Bachelor grade sheets translated to English & apostilled.' },
                { title: 'Valid International Passport', desc: 'Passport with at least 18 months validity remaining.' },
                { title: 'Statement of Purpose (SOP)', desc: '500-800 word personal essay outlining academic motivation & career objectives.' },
                { title: 'Letters of Recommendation (LOR)', desc: '2 academic/professional references on official institutional letterhead.' },
                { title: 'Medical Fitness & HIV Clearance', desc: 'Required for medical programs in Uzbekistan & East European state universities.' }
              ].map((item, idx) => (
                <div key={item.title} className="p-5 bg-[#0e0e12] border border-white/15 flex items-start gap-4">
                  <span className="font-mono text-lg font-bold text-white/40">0{idx + 1}</span>
                  <div>
                    <h3 className="font-sans text-base font-bold text-white uppercase">{item.title}</h3>
                    <p className="font-sans text-xs text-white/60 font-light mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenPortal}
                className="btn-pill-white w-full text-center justify-center !py-4"
              >
                <span>OPEN YOUR ADMISSION PORTAL</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
