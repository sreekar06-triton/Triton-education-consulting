import React, { useState } from 'react';
import FlightSection from '../components/FlightSection';
import CleartripApiModal from '../components/CleartripApiModal';

export default function FlightsPage() {
  const [showCleartripModal, setShowCleartripModal] = useState(false);

  return (
    <div className="w-full bg-[#070709] text-white pt-24 pb-24 min-h-screen">
      <FlightSection
        onOpenCleartripModal={() => setShowCleartripModal(true)}
        onSearchFlights={() => {}}
      />

      {showCleartripModal && (
        <CleartripApiModal onClose={() => setShowCleartripModal(false)} />
      )}
    </div>
  );
}
