import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UniversitiesPage from './pages/UniversitiesPage';
import CounsellingPage from './pages/CounsellingPage';
import AdmissionsPage from './pages/AdmissionsPage';
import VisaPage from './pages/VisaPage';
import FlightsPage from './pages/FlightsPage';
import CurrencyPage from './pages/CurrencyPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import StudentPortal from './pages/StudentPortal';
import CleartripApiModal from './components/CleartripApiModal';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showCleartripModal, setShowCleartripModal] = useState(false);
  const [showStudentPortal, setShowStudentPortal] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: 'Aarav Sharma',
    email: 'aarav@triton-edu.org',
    role: 'Student'
  });

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleApplyFromUniversity = (uni) => {
    setActivePage('admissions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col justify-between selection:bg-white selection:text-black">
      {/* Dynamic Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={(pg) => {
          setShowStudentPortal(false);
          setActivePage(pg);
        }}
        openAuthModal={openAuthModal}
        openStudentPortal={() => setShowStudentPortal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {showStudentPortal ? (
          <StudentPortal
            user={currentUser}
            onLogout={() => setShowStudentPortal(false)}
          />
        ) : (
          <>
            {activePage === 'home' && (
              <HomePage
                setActivePage={setActivePage}
                onOpenCleartripModal={() => setShowCleartripModal(true)}
                openStudentPortal={() => setShowStudentPortal(true)}
                openAuthModal={openAuthModal}
              />
            )}

            {activePage === 'universities' && (
              <UniversitiesPage onApplyUniversity={handleApplyFromUniversity} />
            )}

            {activePage === 'counselling' && <CounsellingPage />}

            {activePage === 'admissions' && (
              <AdmissionsPage onOpenPortal={() => setShowStudentPortal(true)} />
            )}

            {activePage === 'visa' && (
              <VisaPage onBookConsultation={() => setActivePage('counselling')} />
            )}

            {activePage === 'flights' && <FlightsPage />}

            {activePage === 'currency' && <CurrencyPage />}

            {activePage === 'contact' && <ContactPage />}
          </>
        )}
      </main>

      {/* Global Footer */}
      {!showStudentPortal && (
        <Footer
          setActivePage={(pg) => {
            setShowStudentPortal(false);
            setActivePage(pg);
          }}
        />
      )}

      {/* Modals */}
      {showAuthModal && (
        <AuthPage
          initialMode={authMode}
          onClose={() => setShowAuthModal(false)}
          onLoginSuccess={(userData) => {
            setCurrentUser(userData);
            setShowAuthModal(false);
            setShowStudentPortal(true);
          }}
        />
      )}

      {showCleartripModal && (
        <CleartripApiModal onClose={() => setShowCleartripModal(false)} />
      )}
    </div>
  );
}
