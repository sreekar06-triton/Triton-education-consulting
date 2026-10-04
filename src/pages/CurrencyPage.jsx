import React from 'react';
import CurrencySection from '../components/CurrencySection';
import { DollarSign, ShieldCheck, Landmark, Globe } from 'lucide-react';

export default function CurrencyPage() {
  return (
    <div className="w-full bg-[#070709] text-white pt-24 pb-24 min-h-screen">
      <CurrencySection />

      {/* Multi-Country Cost Comparison Table */}
      <div className="site-container pt-20 pb-24 font-sans">
        <div className="border-t border-white/10 pt-16 mb-12 space-y-3">
          <span className="label-mono text-white/40 block">[BENCHMARK] ANNUAL LIVING & TUITION COST ESTIMATES</span>
          <h2 className="font-sans text-3xl font-bold uppercase text-white">Destination Financial Matrix</h2>
          <p className="font-sans text-white/60 text-sm max-w-prose-editorial font-light">
            Comprehensive breakdown of average tuition fees, monthly living costs, and post-graduation work rights.
          </p>
        </div>

        <div className="overflow-x-auto border border-white/15 bg-[#0e0e12] rounded-2xl p-6 md:p-8 shadow-2xl">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#16161d] border-b border-white/15 text-white/60">
                <th className="px-6 py-4 uppercase">Destination</th>
                <th className="px-6 py-4 uppercase">Avg Tuition / Yr</th>
                <th className="px-6 py-4 uppercase">Living Cost / Mo</th>
                <th className="px-6 py-4 uppercase">Student Work Rights</th>
                <th className="px-6 py-4 uppercase">Post-Study Visa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/80">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4.5 font-bold text-white">🇺🇿 Uzbekistan (Tashkent)</td>
                <td className="px-6 py-4.5 text-emerald-400 font-bold">$2,800 - $4,500</td>
                <td className="px-6 py-4.5">$250 - $400</td>
                <td className="px-6 py-4.5">Allowed on-campus</td>
                <td className="px-6 py-4.5">1-2 Years Work Permit</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4.5 font-bold text-white">🇬🇧 United Kingdom</td>
                <td className="px-6 py-4.5">£14,500 - £18,000</td>
                <td className="px-6 py-4.5">£1,100 - £1,400</td>
                <td className="px-6 py-4.5">20 Hours / Week</td>
                <td className="px-6 py-4.5">2-Year Graduate Route</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4.5 font-bold text-white">🇩🇪 Germany</td>
                <td className="px-6 py-4.5 text-emerald-400 font-bold">€0 - €3,000</td>
                <td className="px-6 py-4.5">€934 (Blocked Acct)</td>
                <td className="px-6 py-4.5">120 Full Days / Year</td>
                <td className="px-6 py-4.5">18-Month Job Seeking</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4.5 font-bold text-white">🇺🇸 United States</td>
                <td className="px-6 py-4.5">$35,000 - $55,000</td>
                <td className="px-6 py-4.5">$1,200 - $1,800</td>
                <td className="px-6 py-4.5">20 Hours On-Campus</td>
                <td className="px-6 py-4.5">1-3 Years OPT / STEM</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4.5 font-bold text-white">🇦🇺 Australia</td>
                <td className="px-6 py-4.5">A$35,000 - A$45,000</td>
                <td className="px-6 py-4.5">A$1,600 - A$2,200</td>
                <td className="px-6 py-4.5">48 Hours / Fortnight</td>
                <td className="px-6 py-4.5">2-4 Years Post-Study</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
