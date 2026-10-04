import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, ArrowUpRight, GraduationCap, DollarSign } from 'lucide-react';
import { UNIVERSITIES } from '../data/universities';
import UniversityDetailModal from '../components/UniversityDetailModal';

export default function UniversitiesPage({ onApplyUniversity }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedIntake, setSelectedIntake] = useState('All');
  const [maxBudgetUSD, setMaxBudgetUSD] = useState(60000);
  const [selectedUniModal, setSelectedUniModal] = useState(null);

  const countries = ['All', 'Uzbekistan', 'United Kingdom', 'Germany', 'United States', 'Australia', 'Singapore'];

  const filtered = UNIVERSITIES.filter((uni) => {
    const matchesSearch =
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.courses.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCountry = selectedCountry === 'All' || uni.country === selectedCountry;
    const matchesIntake = selectedIntake === 'All' || uni.intake.includes(selectedIntake);
    const matchesBudget = uni.annualTuitionUSD <= maxBudgetUSD;

    return matchesSearch && matchesCountry && matchesIntake && matchesBudget;
  });

  return (
    <div className="w-full bg-[#070709] text-white pt-32 pb-36 min-h-screen font-sans">
      <div className="site-container">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <span className="label-mono text-white/40 block mb-3">
            [DIRECTORY] GLOBAL PARTNER UNIVERSITIES
          </span>
          <h1 className="display-large text-white mb-4">
            Explore Institutions & <br />
            <span className="editorial-serif italic font-normal text-white">
              Global Degree Paths.
            </span>
          </h1>
          <p className="font-sans text-white/70 text-base max-w-2xl font-light">
            Search top accredited universities in Uzbekistan, UK, USA, Germany, and Australia. Filter by tuition fees, location, and intake deadlines.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#0e0e12] border border-white/15 p-8 md:p-10 rounded-2xl mb-14 space-y-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by university name, city, course..."
                className="w-full bg-[#16161d] border border-white/20 pl-11 pr-4 py-3 text-sm text-white rounded-xl outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Country Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-[#16161d] border border-white/20 px-4 py-3 text-sm text-white rounded-xl outline-none cursor-pointer"
              >
                {countries.map((c) => (
                  <option key={c} value={c} className="bg-[#070709]">Country: {c}</option>
                ))}
              </select>
            </div>

            {/* Intake Selector */}
            <div className="md:col-span-4">
              <select
                value={selectedIntake}
                onChange={(e) => setSelectedIntake(e.target.value)}
                className="w-full bg-[#16161d] border border-white/20 px-4 py-3 text-sm text-white rounded-xl outline-none cursor-pointer"
              >
                <option value="All" className="bg-[#070709]">Intake: All Months</option>
                <option value="September" className="bg-[#070709]">September Intake</option>
                <option value="February" className="bg-[#070709]">February / January Intake</option>
              </select>
            </div>

          </div>

          {/* Budget Slider */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-white/40">MAX TUITION BUDGET:</span>
              <span className="text-white font-bold text-sm">${maxBudgetUSD.toLocaleString()} / YEAR</span>
            </div>

            <input
              type="range"
              min="2500"
              max="65000"
              step="2500"
              value={maxBudgetUSD}
              onChange={(e) => setMaxBudgetUSD(Number(e.target.value))}
              className="w-full sm:w-64 accent-white cursor-pointer"
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((uni) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0e0e12] border border-white/15 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-white/40 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden img-zoom-wrapper">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover filter brightness-[0.8]"
                  />
                  <div className="absolute top-4 left-4 bg-[#070709]/80 backdrop-blur-md px-3 py-1 font-mono text-xs text-white border border-white/20 rounded-md">
                    {uni.flag} {uni.country}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white text-black font-mono text-[0.65rem] font-bold px-2.5 py-1 uppercase tracking-wider rounded-sm">
                    {uni.ranking}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-5">
                  <h3 className="font-sans text-xl font-bold uppercase tracking-wider text-white group-hover:text-white/90 transition-colors">
                    {uni.name}
                  </h3>

                  <p className="font-mono text-xs text-white/50 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-white/70" />
                    <span>{uni.city}, {uni.country}</span>
                  </p>

                  <div className="divider-dark" />

                  <div className="space-y-2.5 font-mono text-xs text-white/70">
                    <div className="flex items-center justify-between">
                      <span className="text-white/40">TUITION:</span>
                      <span className="text-white font-bold">{uni.tuition}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/40">INTAKE:</span>
                      <span>{uni.intake}</span>
                    </div>
                  </div>

                  {/* Course Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {uni.courses.slice(0, 3).map((c) => (
                      <span
                        key={c}
                        className="bg-white/5 border border-white/10 px-3 py-1 rounded-md font-sans text-[0.72rem] text-white/80"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-8 pt-0 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedUniModal(uni)}
                  className="font-mono text-xs text-white/60 hover:text-white underline bg-transparent border-none cursor-pointer"
                >
                  View Details
                </button>

                <button
                  onClick={() => onApplyUniversity(uni)}
                  className="btn-pill-white !py-2 !px-4 !text-[0.7rem]"
                >
                  <span>APPLY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 border border-white/10 bg-[#0e0e12]">
            <p className="font-sans text-lg text-white/60">No universities matched your search query.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCountry('All');
                setSelectedIntake('All');
                setMaxBudgetUSD(65000);
              }}
              className="mt-4 btn-pill-outline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {selectedUniModal && (
        <UniversityDetailModal
          university={selectedUniModal}
          onClose={() => setSelectedUniModal(null)}
          onApply={onApplyUniversity}
        />
      )}
    </div>
  );
}
