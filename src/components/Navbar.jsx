import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Globe, Menu, X, UserCheck } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, openAuthModal, openStudentPortal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Universities', page: 'universities' },
    { label: 'Counselling', page: 'counselling' },
    { label: 'Admissions', page: 'admissions' },
    { label: 'Visa', page: 'visa' },
    { label: 'Flights', page: 'flights' },
    { label: 'Currency', page: 'currency' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#070709]/90 backdrop-blur-md py-4 border-b border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left flex items-center gap-2 text-white bg-transparent border-none cursor-pointer p-0"
        >
          <span className="font-mono text-2xl font-bold tracking-[0.2em] uppercase text-white group-hover:opacity-80 transition-opacity">
            TRITON<span className="text-white/40">.</span>
          </span>
          <span className="hidden sm:inline-block label-mono text-[0.65rem] border border-white/20 px-2 py-0.5 rounded-full text-white/70">
            STUDY ABROAD
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`font-mono text-xs uppercase tracking-[0.15em] bg-transparent border-none cursor-pointer transition-all duration-300 relative py-1 ${
                activePage === item.page
                  ? 'text-white font-semibold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {item.label}
              {activePage === item.page && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => openStudentPortal()}
            className="font-mono text-xs uppercase tracking-[0.15em] text-white/80 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/20 hover:border-white/50 transition-all bg-transparent cursor-pointer"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Portal</span>
          </button>

          <button
            onClick={() => openAuthModal('login')}
            className="font-mono text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors bg-transparent border-none cursor-pointer px-2 py-1"
          >
            Sign In
          </button>

          <button
            onClick={() => handleNavClick('counselling')}
            className="btn-pill-white !py-2.5 !px-5 !text-[0.72rem]"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white bg-transparent border-none cursor-pointer p-2"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#070709] z-40 px-6 py-8 flex flex-col justify-between border-t border-white/10">
          <div className="flex flex-col gap-6">
            <span className="label-mono text-white/40">Navigation</span>
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className="text-left font-sans text-2xl font-light text-white hover:text-white/70 py-2 border-b border-white/10 bg-transparent"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openStudentPortal();
              }}
              className="w-full btn-pill-outline text-center justify-center"
            >
              Student Portal
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('counselling');
              }}
              className="w-full btn-pill-white text-center justify-center"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
