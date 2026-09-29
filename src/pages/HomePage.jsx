import React from 'react';
import Hero from '../components/Hero';
import JourneySection from '../components/JourneySection';
import UniversitySection from '../components/UniversitySection';
import CounsellingSection from '../components/CounsellingSection';
import AdmissionSection from '../components/AdmissionSection';
import VisaSection from '../components/VisaSection';
import CurrencySection from '../components/CurrencySection';
import FlightSection from '../components/FlightSection';
import DashboardPreview from '../components/DashboardPreview';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';

export default function HomePage({
  setActivePage,
  onOpenCleartripModal,
  openStudentPortal,
  openAuthModal
}) {
  return (
    <div className="w-full bg-[#070709] text-white">
      {/* 1. Hero Section */}
      <Hero onStartJourney={() => setActivePage('counselling')} />

      {/* 2. The Journey Section (01-06 Editorial Steps) */}
      <JourneySection onStepSelect={(page) => setActivePage(page)} />

      {/* 3. University Section (Photographic Layout) */}
      <UniversitySection onExplore={() => setActivePage('universities')} />

      {/* 4. Counselling Section (Split Screen) */}
      <CounsellingSection onBookCounselling={() => setActivePage('counselling')} />

      {/* 5. Admission Section (Light Off-white Contrast) */}
      <AdmissionSection onStartApplication={() => setActivePage('admissions')} />

      {/* 6. Visa Section (Dark Photographic) */}
      <VisaSection onExploreVisa={() => setActivePage('visa')} />

      {/* 7. Currency Section (Financial Converter) */}
      <CurrencySection onFullCurrencyPage={() => setActivePage('currency')} />

      {/* 8. Flight Section (Cleartrip API Ready) */}
      <FlightSection
        onOpenCleartripModal={onOpenCleartripModal}
        onSearchFlights={() => setActivePage('flights')}
      />

      {/* 9. Student Dashboard Preview */}
      <DashboardPreview openPortal={openStudentPortal} />

      {/* 10. Testimonials Section */}
      <TestimonialsSection />

      {/* 11. Final CTA */}
      <FinalCTA
        onStartJourney={() => setActivePage('counselling')}
        onTalkCounsellor={() => setActivePage('counselling')}
      />
    </div>
  );
}
