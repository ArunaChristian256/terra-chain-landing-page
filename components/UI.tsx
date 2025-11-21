import React from 'react';
import { motion } from 'framer-motion';

export const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-emerald-600 text-white shadow-lg hover:shadow-emerald-500/30 hover:bg-emerald-500 border-emerald-600",
    secondary: "bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-lg hover:shadow-amber-400/30",
    outline: "border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 bg-transparent"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center'; light?: boolean }> = ({ title, subtitle, align = 'center', light = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
  >
    {subtitle && (
      <span className="text-emerald-600 dark:text-emerald-400 font-display uppercase tracking-widest text-sm font-bold mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className={`text-4xl md:text-5xl font-display font-bold ${light ? 'text-white' : 'text-slate-900 dark:text-white'} mb-6`}>
      {title}
    </h2>
    <div className={`h-1.5 w-24 bg-emerald-500 mt-4 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
  </motion.div>
);

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = '', hoverEffect = true }) => (
  <div className={`
    bg-white dark:bg-slate-900/60 
    backdrop-blur-xl 
    border border-slate-200 dark:border-slate-700 
    rounded-2xl p-8 
    shadow-xl dark:shadow-none 
    transition-all duration-300 
    ${hoverEffect ? 'hover:shadow-2xl hover:border-emerald-500/50 dark:hover:bg-slate-800/60 hover:-translate-y-1' : ''}
    ${className}
  `}>
    {children}
  </div>
);

export const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; direction?: 'up' | 'left' | 'right' }> = ({ children, delay = 0, direction = 'up' }) => {
  const directions = {
    up: { y: 40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}