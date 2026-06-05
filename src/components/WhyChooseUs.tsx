'use client';

import React from 'react';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import { Target, ShieldCheck, Ruler, Scale } from 'lucide-react';

export const WhyChooseUs = () => {
  const metrics = [
    {
      icon: <Ruler className="w-6 h-6 text-gold" />,
      title: 'Deviation Tolerances',
      metric: '< 2.0mm Plumb Deflection',
      desc: 'All structural columns and retaining profiles are calibrated with precision optical lasers to meet zero deviation limits.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      title: 'Compressive Resistance',
      metric: 'M25 / M30 Grade Baselines',
      desc: 'We perform strict concrete cube compression testing on every structural pour, rejecting any batches under nominal strengths.',
    },
    {
      icon: <Target className="w-6 h-6 text-gold" />,
      title: 'Precision Layouts',
      metric: '± 1.5mm Axis Accuracy',
      desc: 'Foundation and framing boundaries are plotted using digital station positioning, avoiding grid intersection drift.',
    },
    {
      icon: <Scale className="w-6 h-6 text-gold" />,
      title: 'Steel Safety Factors',
      metric: 'Fe500D Seismic Grades',
      desc: 'Utilizing certified high-ductility reinforcement steel with tested tensile ratios to guarantee structural elasticity.',
    },
  ];

  return (
    <section className="relative py-24 bg-charcoal-dark/20 border-t border-white/5">
      {/* Visual references */}
      <div className="absolute top-10 left-10 text-[9px] font-mono text-white/5 uppercase select-none">
        SECTION_04 // QUALITY_ASSURANCE // METRICS
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Section header */}
        <div className="flex flex-col gap-4">
          <Heading level={2} sectionTag="04 // CONTROL PARAMETERS">
            Engineered Building Benchmarks
          </Heading>
          <p className="text-arch-grey text-sm max-w-2xl font-light leading-relaxed">
            Our construction process is guided by verified material tests and dimensional checks, not marketing slogans.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <Card key={idx} hoverEffect={true} className="border-white/5 bg-charcoal-dark/40 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                  {item.icon}
                  <span className="font-mono text-[9px] text-white/20">QA_SEC // {idx + 1}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-display font-semibold text-white uppercase text-xs tracking-wider">
                    {item.title}
                  </h4>
                  <span className="font-mono text-xs text-gold font-bold">
                    {item.metric}
                  </span>
                </div>
                <p className="text-xs text-arch-grey leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
