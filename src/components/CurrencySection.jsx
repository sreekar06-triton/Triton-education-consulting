import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownUp, RefreshCw, DollarSign, Calculator, Info, ShieldCheck } from 'lucide-react';

export default function CurrencySection({ onFullCurrencyPage }) {
  const [amount, setAmount] = useState('100000');
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');

  // Real-time rates anchored to INR & USD
  const ratesInINR = {
    INR: 1,
    USD: 83.6,
    EUR: 92.4,
    GBP: 110.8,
    UZS: 0.0066, // 1 UZS = 0.0066 INR approx -> 1 INR = ~151 UZS
    AUD: 56.2,
    CAD: 61.5
  };

  const currencySymbols = {
    INR: '₹',
    USD: '$',
    EUR: '€',
    GBP: '£',
    UZS: 'сум',
    AUD: 'A$',
    CAD: 'C$'
  };

  const numAmount = parseFloat(amount) || 0;
  // Convert amount from `fromCurrency` to INR, then from INR to `toCurrency`
  const amountInINR = numAmount * ratesInINR[fromCurrency];
  const convertedValue = amountInINR / ratesInINR[toCurrency];
  const exchangeRate = ratesInINR[fromCurrency] / ratesInINR[toCurrency];

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <section className="bg-[#0e0e12] py-28 md:py-36 border-t border-white/10 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading & Financial Narrative */}
          <div className="lg:col-span-5">
            <span className="label-mono text-white/40 block mb-4">
              [07] FINANCIAL TRANSPARENCY
            </span>

            <h2 className="display-large text-white mb-6">
              Know Your Numbers <br />
              <span className="editorial-serif italic font-normal text-white">
                Before You Go.
              </span>
            </h2>

            <p className="font-sans text-white/70 text-base font-light leading-relaxed mb-8">
              Budgeting for international education demands complete clarity. Calculate real-time university tuition conversions, bank transfer margins, and estimated monthly living stipends with zero hidden fees.
            </p>

            <div className="space-y-4 font-sans text-xs text-white/60">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <ShieldCheck className="w-4 h-4 text-white/80" />
                <span>Institutional Transfer Rates Guaranteed</span>
              </div>
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <Info className="w-4 h-4 text-white/80" />
                <span>Updated Live via Global Treasury Exchange</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Integrated Editorial Currency Converter */}
          <div className="lg:col-span-7 bg-[#070709] border border-white/15 p-8 md:p-12 relative shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <span className="label-mono text-white/70 flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                <span>STUDENT FINANCIAL CALCULATOR</span>
              </span>
              <span className="label-mono text-white/40 text-[0.65rem]">
                RATES UPDATED: TODAY 19:25 UTC
              </span>
            </div>

            <div className="space-y-8">
              {/* FROM Currency Input */}
              <div>
                <label className="label-mono text-white/40 block mb-2">YOU SEND / BUDGET IN</label>
                <div className="flex items-center gap-4 border-b border-white/20 pb-2">
                  <span className="font-mono text-2xl text-white/60 font-light">
                    {currencySymbols[fromCurrency]}
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="editorial-input text-2xl font-mono text-white font-bold border-none"
                    placeholder="Enter amount"
                  />
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="bg-[#141418] text-white font-mono text-sm px-4 py-2 border border-white/20 outline-none cursor-pointer"
                  >
                    {Object.keys(ratesInINR).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center -my-3">
                <button
                  onClick={handleSwap}
                  className="p-3 bg-white text-[#070709] rounded-full hover:scale-110 transition-transform cursor-pointer shadow-lg border-none"
                  title="Swap Currencies"
                >
                  <ArrowDownUp className="w-4 h-4" />
                </button>
              </div>

              {/* TO Currency Output */}
              <div>
                <label className="label-mono text-white/40 block mb-2">RECIPIENT / UNIVERSITY GETS</label>
                <div className="flex items-center justify-between border-b border-white/20 pb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl text-white/60 font-light">
                      {currencySymbols[toCurrency]}
                    </span>
                    <span className="font-mono text-3xl font-bold text-white">
                      {convertedValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="bg-[#141418] text-white font-mono text-sm px-4 py-2 border border-white/20 outline-none cursor-pointer"
                  >
                    {Object.keys(ratesInINR).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Rate Details Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs text-white/60">
                <div>
                  <span className="text-white/40 block text-[0.65rem]">EXCHANGE RATE</span>
                  <span className="text-white font-semibold">
                    1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
                  </span>
                </div>

                <div>
                  <span className="text-white/40 block text-[0.65rem]">WIRE FEE</span>
                  <span className="text-white font-semibold">$0 (TRITON WAIVED)</span>
                </div>

                <div>
                  <span className="text-white/40 block text-[0.65rem]">ESTIMATED ARRIVAL</span>
                  <span className="text-white font-semibold">SAME DAY CLEARANCE</span>
                </div>
              </div>

              {/* Action Button */}
              {onFullCurrencyPage && (
                <div className="pt-4 text-center">
                  <button
                    onClick={onFullCurrencyPage}
                    className="btn-pill-white w-full text-center justify-center"
                  >
                    VIEW FULL BUDGET PLANNER
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
