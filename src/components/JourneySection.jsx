import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, GraduationCap, FileCheck, Coins, Plane } from 'lucide-react';

export default function JourneySection({ onStepSelect }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'COUNSELLING',
      subtitle: 'Find the right path before you begin.',
      description: 'Personalized 1-on-1 strategic roadmap aligning your budget, academic aspirations, and career ambitions with global university systems.',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
      actionPage: 'counselling'
    },
    {
      num: '02',
      title: 'UNIVERSITY',
      subtitle: 'Discover universities and programs.',
      description: 'Filter through accredited medical, tech, engineering, and business degree paths in Uzbekistan, UK, US, Germany, and Australia.',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1000&auto=format&fit=crop',
      actionPage: 'universities'
    },
    {
      num: '03',
      title: 'ADMISSION',
      subtitle: 'Apply and manage your application.',
      description: 'Direct university portal submission, SOP crafting, document translation, and offer letter tracking with zero application loss.',
      icon: FileCheck,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
      actionPage: 'admissions'
    },
    {
      num: '04',
      title: 'VISA',
      subtitle: 'Prepare for your international journey.',
      description: 'Full embassy appointment prep, CAS/Form I-20 validation, blocked account setup, and mock interview coaching.',
      icon: FileCheck,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop',
      actionPage: 'visa'
    },
    {
      num: '05',
      title: 'CURRENCY',
      subtitle: 'Understand and manage your finances.',
      description: 'Real-time multi-currency exchange conversion, tuition wire transfer guidance, international student banking, and living cost budgeting.',
      icon: Coins,
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop',
      actionPage: 'currency'
    },
    {
      num: '06',
      title: 'FLIGHT',
      subtitle: 'Plan your journey to your destination.',
      description: 'Student-discounted airline ticket engine with extra baggage allowance, pre-departure orientation, and airport pickup dispatch.',
      icon: Plane,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop',
      actionPage: 'flights'
    }
  ];

  return (
    <section className="bg-section-dark py-28 md:py-36 relative border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-mono text-white/40 block mb-4">
            [02] END-TO-END EXPERIENCE
          </span>
          <h2 className="display-large text-white mb-6">
            One Journey. <br />
            <span className="editorial-serif italic font-normal text-white/90">
              Every Step Covered.
            </span>
          </h2>
          <p className="font-sans text-white/60 text-base md:text-lg font-light leading-relaxed">
            From your very first counselling session to stepping off the aircraft, we handle every detail of your international transition.
          </p>
        </div>

        {/* Divider Line */}
        <div className="divider-dark mb-12" />

        {/* Split Editorial Rows Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Editorial Steps List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => {
                    setActiveStep(idx);
                    if (onStepSelect) onStepSelect(step.actionPage);
                  }}
                  className={`py-8 cursor-pointer transition-all duration-300 group ${
                    isActive ? 'opacity-100 pl-2' : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-6 md:gap-8">
                      {/* Large Number */}
                      <span className="font-mono text-2xl md:text-3xl font-light text-white/60 group-hover:text-white transition-colors">
                        {step.num}
                      </span>

                      <div>
                        {/* Step Title */}
                        <div className="flex items-center gap-3 mb-2">
                          <IconComp className="w-5 h-5 text-white/70" />
                          <h3 className="font-sans text-xl md:text-2xl font-bold tracking-wider uppercase text-white">
                            {step.title}
                          </h3>
                        </div>
                        {/* Subtitle */}
                        <p className="font-sans text-sm text-white/80 font-medium mb-2">
                          {step.subtitle}
                        </p>
                        {/* Active Expandable Description */}
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                            className="font-sans text-xs md:text-sm text-white/60 font-light leading-relaxed mt-2 max-w-lg"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="pt-2">
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? 'translate-x-1 text-white' : 'text-white/20'
                      }`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Image Preview (Sticky Right Column) */}
          <div className="lg:col-span-5 hidden lg:block sticky top-32">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden border border-white/10 img-zoom-wrapper">
              <motion.img
                key={steps[activeStep].image}
                initial={{ opacity: 0.4, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover filter brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="label-mono text-white/60 block mb-1">
                  PHASE {steps[activeStep].num} / 06
                </span>
                <h4 className="font-sans text-2xl font-bold uppercase text-white mb-2">
                  {steps[activeStep].title}
                </h4>
                <p className="font-sans text-xs text-white/70 font-light">
                  {steps[activeStep].subtitle}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
