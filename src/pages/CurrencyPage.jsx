import React from 'react';
import CurrencySection from '../components/CurrencySection';
import { DollarSign, ShieldCheck, Landmark, Globe } from 'lucide-react';

export default function CurrencyPage() {
  return (
    <div className="w-full bg-[#070709] text-white pt-24 pb-24 min-h-screen">
      <CurrencySection />

      {/* Multi-Country Cost Comparison Table */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 font-sans">
        <div className="border-t border-white/10 pt-12 mb-8">
          <span className="label-mono text-white/40 block mb-2">[BENCHMARK] ANNUAL LIVING & TUITION COST ESTIMATES</span>
          <h2 className="font-sans text-3xl font-bold uppercase text-white">Destination Financial Matrix</h2>
        </div>

        <div className="overflow-x-auto border border-white/15 bg-[#0e0e12]">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#16161d] border-b border-white/15 text-white/60">
                <th className="p-4 uppercase">Destination</th>
                <th className="p-4 uppercase">Avg Tuition / Yr</th>
                <th className="p-4 uppercase">Living Cost / Mo</th>
                <th className="p-4 uppercase">Student Work Rights</th>
                <th className="p-4 uppercase">Post-Study Visa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/80">
              <tr className="hover:bg-white/5">
                <td className="p-4 font-bold text-white">🇺🇿 Uzbekistan (Tashkent)</td>
                <td className="p-4 text-emerald-400 font-bold">$2,800 - $4,500</td>
                <td className="p-4">$250 - $400</td>
                <td className="p-4">Allowed on-campus</td>
                <td className="p-4">1-2 Years Work Permit</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-4 font-bold text-white">🇬🇧 United Kingdom</td>
                <td className="p-4">£14,500 - £18,000</td>
                <td className="p-4">£1,100 - £1,400</td>
                <td className="p-4">20 Hours / Week</td>
                <td className="p-4">2-Year Graduate Route</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-4 font-bold text-white">🇩🇪 Germany</td>
                <td className="p-4 text-emerald-400 font-bold">€0 - €3,000</td>
                <td className="p-4">€934 (Blocked Acct)</td>
                <td className="p-4">120 Full Days / Year</td>
                <td className="p-4">18-Month Job Seeking</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-4 font-bold text-white">🇺🇸 United States</td>
                <td className="p-4">$35,000 - $55,000</td>
                <td className="p-4">$1,200 - $1,800</td>
                <td className="p-4">20 Hours On-Campus</td>
                <td className="p-4">1-3 Years OPT / STEM</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-4 font-bold text-white">🇦🇺 Australia</td>
                <td className="p-4">A$35,000 - A$45,000</td>
                <td className="p-4">A$1,600 - A$2,200</td>
                <td className="p-4">48 Hours / Fortnight</td>
                <td className="p-4">2-4 Years Post-Study</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
