import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Calendar, Users, ArrowRight, Code, ShieldCheck, Luggage } from 'lucide-react';
import { FLIGHT_ROUTES } from '../data/flights';

export default function FlightSection({ onOpenCleartripModal, onSearchFlights }) {
  const [fromCity, setFromCity] = useState('Delhi (DEL)');
  const [toCity, setToCity] = useState('Tashkent (TAS)');
  const [departureDate, setDepartureDate] = useState('2026-09-15');
  const [passengers, setPassengers] = useState('1 Student');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter matching or display mock flights
    const filtered = FLIGHT_ROUTES.filter(
      (f) => f.fromCity.toLowerCase().includes(fromCity.toLowerCase().slice(0, 3)) ||
             f.toCity.toLowerCase().includes(toCity.toLowerCase().slice(0, 3))
    );
    setSearchResults(filtered.length > 0 ? filtered : FLIGHT_ROUTES);
  };

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#070709] overflow-hidden border-t border-white/10">
      {/* Background Airplane Travel Imagery */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
          alt="International Airplane Flight"
          className="w-full h-full object-cover filter brightness-[0.3] contrast-[1.2]"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col justify-between">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-12">
          <div>
            <span className="label-mono text-white/50 block mb-3">
              [08] STUDENT FLIGHT ENGINE
            </span>
            <h2 className="display-large text-white">
              Your Journey <br />
              <span className="editorial-serif italic font-normal text-white">
                Takes Off Here.
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="label-mono text-white/60 flex items-center gap-2">
              <Luggage className="w-3.5 h-3.5" />
              <span>STUDENT EXCLUSIVE BAGGAGE (UP TO 40KG)</span>
            </span>

            {/* Cleartrip API Integration Technical Badge */}
            <button
              onClick={onOpenCleartripModal}
              className="font-mono text-xs text-white/70 hover:text-white flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded hover:border-white transition-all cursor-pointer"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Cleartrip API Architecture</span>
            </button>
          </div>
        </div>

        {/* Minimal Flight Search Interface */}
        <form onSubmit={handleSearch} className="bg-[#070709]/90 border border-white/20 backdrop-blur-md p-6 md:p-10 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
            
            {/* FROM */}
            <div>
              <label className="label-mono text-white/50 block mb-2">FROM</label>
              <input
                type="text"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="editorial-input text-lg font-bold"
                placeholder="Origin City/Airport"
              />
            </div>

            {/* TO */}
            <div>
              <label className="label-mono text-white/50 block mb-2">TO DESTINATION</label>
              <input
                type="text"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="editorial-input text-lg font-bold"
                placeholder="Destination"
              />
            </div>

            {/* DEPARTURE */}
            <div>
              <label className="label-mono text-white/50 block mb-2">DEPARTURE</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="editorial-input text-sm font-mono text-white"
              />
            </div>

            {/* TRAVELLERS */}
            <div>
              <label className="label-mono text-white/50 block mb-2">TRAVELLERS</label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="bg-transparent border-b border-white/20 text-white font-sans text-base py-2 w-full outline-none cursor-pointer"
              >
                <option value="1 Student" className="bg-[#070709]">1 Student (Discount Fare)</option>
                <option value="1 Student + 1 Parent" className="bg-[#070709]">1 Student + 1 Parent</option>
                <option value="Group (3+ Students)" className="bg-[#070709]">Group (3+ Students)</option>
              </select>
            </div>

            {/* SEARCH BUTTON */}
            <div>
              <button
                type="submit"
                className="btn-pill-white w-full text-center justify-center !py-3"
              >
                <span>SEARCH FLIGHTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </form>

        {/* Live / Mock Results Strip */}
        {searchResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="label-mono text-white/60">
                AVAILABLE STUDENT FLIGHTS ({searchResults.length})
              </span>
              <span className="font-mono text-xs text-white/40">
                POWERED BY CLEARTRIP INTEGRATION ENGINE
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {searchResults.map((fl) => (
                <div
                  key={fl.id}
                  className="bg-[#0e0e12]/90 border border-white/15 p-6 flex flex-col justify-between space-y-4 hover:border-white/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs text-white/40 block">{fl.flightNumber}</span>
                      <h4 className="font-sans text-lg font-bold text-white">{fl.airline}</h4>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-2xl font-bold text-white">₹{fl.priceINR.toLocaleString()}</span>
                      <span className="label-mono block text-[0.65rem] text-white/50">(${fl.priceUSD})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between font-mono text-xs text-white/80 border-y border-white/10 py-3">
                    <div>
                      <p className="font-bold text-white">{fl.fromCity}</p>
                      <p className="text-white/40">{fl.departure}</p>
                    </div>

                    <div className="text-center px-4">
                      <Plane className="w-4 h-4 text-white/40 mx-auto mb-1" />
                      <span className="text-[0.65rem] text-white/50 block">{fl.duration}</span>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-white">{fl.toCity}</p>
                      <p className="text-white/40">{fl.arrival}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-white/60">
                    <span className="text-white/80 font-medium">🎒 {fl.baggage}</span>
                    <button
                      onClick={() => alert(`Ticket booking initialized for ${fl.airline} (${fl.flightNumber})`)}
                      className="btn-pill-white !py-1.5 !px-4 !text-[0.7rem]"
                    >
                      SELECT FLIGHT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
