'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import { Target, ShieldCheck, Ruler, Scale } from 'lucide-react';

export const WhyChooseUs = () => {
  const metrics = [
    {
      icon: <Ruler className="w-6 h-6 text-black/30 group-hover:text-gold transition-colors duration-500" />,
      title: 'Deviation Tolerances',
      metric: '< 2.0mm Plumb Deflection',
      desc: 'All structural columns and retaining profiles are calibrated with precision optical lasers to meet zero deviation limits.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black/30 group-hover:text-gold transition-colors duration-500" />,
      title: 'Compressive Resistance',
      metric: 'M25 / M30 Grade Baselines',
      desc: 'We perform strict concrete cube compression testing on every structural pour, rejecting any batches under nominal strengths.',
    },
    {
      icon: <Target className="w-6 h-6 text-black/30 group-hover:text-gold transition-colors duration-500" />,
      title: 'Precision Layouts',
      metric: '± 1.5mm Axis Accuracy',
      desc: 'Foundation and framing boundaries are plotted using digital station positioning, avoiding grid intersection drift.',
    },
    {
      icon: <Scale className="w-6 h-6 text-black/30 group-hover:text-gold transition-colors duration-500" />,
      title: 'Steel Safety Factors',
      metric: 'Fe500D Seismic Grades',
      desc: 'Utilizing certified high-ductility reinforcement steel with tested tensile ratios to guarantee structural elasticity.',
    },
  ];

  return (
    <section className="relative py-24 md:py-36 bg-zinc-50 border-t border-black/5">
      {/* Visual references */}
      {/* Visual references removed */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <Heading level={2} sectionTag="04 // CONTROL PARAMETERS">
            Engineered Building Benchmarks
          </Heading>
          <p className="text-zinc-600 text-sm max-w-2xl font-light leading-relaxed">
            Our construction process is guided by verified material tests and dimensional checks, not marketing slogans.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((item, idx) => (
            <motion.div key={idx} variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
            }}>
              <Card hoverEffect={true} className="border-black/5 bg-white shadow-sm flex flex-col justify-between h-full">
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                  {item.icon}
                  <span className="font-mono text-[9px] text-black/30">QA_SEC // {idx + 1}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-display font-semibold text-black uppercase text-xs tracking-wider">
                    {item.title}
                  </h4>
                  <span className="font-mono text-xs text-gold font-bold">
                    {item.metric}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
