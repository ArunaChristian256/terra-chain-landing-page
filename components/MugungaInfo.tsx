import React from 'react';
import { MapPin, Users, TrendingUp, ExternalLink } from 'lucide-react';
import { SectionTitle, Button, GlassCard, FadeIn } from './UI';
import { TECH_STACK } from '../constants';

export const MugungaInfo: React.FC = () => {
  return (
    <>
      {/* Why Mugunga */}
      <section id="mugunga" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <FadeIn direction="left">
                  <SectionTitle title="Pourquoi Mugunga ?" subtitle="ZONE PILOTE" align="left" />
                  <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                    Le quartier de Mugunga est une zone stratégique en pleine expansion à l'ouest de Goma. Sa complexité foncière en fait le terrain idéal pour prouver l'efficacité de notre solution.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-emerald-400 transition-colors">
                      <TrendingUp className="text-emerald-600 dark:text-emerald-400 mb-3 w-8 h-8" />
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Croissance Rapide</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Urbanisation accélérée et développement</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-emerald-400 transition-colors">
                      <Users className="text-emerald-600 dark:text-emerald-400 mb-3 w-8 h-8" />
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Forte Demande</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Pression foncière élevée</p>
                    </div>
                  </div>
                  <Button onClick={() => window.open('https://www.google.com/maps/place/Mugunga,+Goma,+Democratic+Republic+of+the+Congo/', '_blank')}>
                    Ouvrir dans Google Maps <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </FadeIn>
             </div>
             
             {/* Google Maps Iframe */}
             <FadeIn direction="right" className="order-1 lg:order-2">
                <div className="relative h-96 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl group bg-slate-100 dark:bg-slate-800">
                  <iframe 
                    src="https://maps.google.com/maps?q=Mugunga,+Goma,+North+Kivu&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
                    title="Carte de Mugunga"
                  ></iframe>
                  
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 pointer-events-none">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                       <span className="text-xs font-bold text-slate-800 dark:text-slate-200">En direct</span>
                    </div>
                  </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-slate-100 dark:bg-black border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 mb-10 font-mono text-sm uppercase tracking-widest">Technologies Intégrées</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {TECH_STACK.map((tech, i) => (
               <FadeIn key={i} delay={i * 0.1} direction="up">
                 <div className="flex flex-col items-center gap-3 group cursor-default">
                   <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white font-display">{tech.name}</div>
                   <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-mono border border-emerald-500/30 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{tech.label}</span>
                 </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 bg-emerald-50 dark:bg-emerald-950/10 transition-colors duration-500">
        <div className="container mx-auto px-4">
           <SectionTitle title="Impact Attendu" subtitle="RÉSULTATS PROJETÉS" />
           <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { val: "-90%", label: "De litiges fonciers" },
                { val: "100%", label: "De traçabilité" },
                { val: "< 1min", label: "Temps de vérification" },
              ].map((stat, i) => (
                <FadeIn key={i} delay={i * 0.2}>
                  <GlassCard className="py-12" hoverEffect={true}>
                    <div className="text-6xl font-display font-bold text-emerald-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-emerald-400 dark:to-teal-200 mb-4">
                      {stat.val}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium text-lg tracking-wide uppercase">{stat.label}</div>
                  </GlassCard>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>
    </>
  );
};