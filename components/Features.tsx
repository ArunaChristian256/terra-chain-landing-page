import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, GlassCard, FadeIn } from './UI';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-[#030912] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <SectionTitle title="Fonctionnalités Clés" subtitle="ÉCOSYSTÈME COMPLET" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FadeIn key={feature.id} delay={index * 0.1}>
              <GlassCard className="h-full flex flex-col items-start group relative overflow-hidden">
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-14 h-14 bg-emerald-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <feature.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;