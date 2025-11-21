import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionTitle, GlassCard, FadeIn } from './UI';
import { PROBLEMS } from '../constants';

export const ProblemSolution: React.FC = () => {
  return (
    <>
      {/* Problem Section */}
      <section id="problem" className="py-24 bg-white dark:bg-terra-dark transition-colors duration-500 relative">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Les Défis du Foncier" 
            subtitle="LA SITUATION ACTUELLE"
          />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROBLEMS.map((prob, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="h-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl text-center group hover:border-red-400 dark:hover:border-red-900/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <prob.icon className="w-7 h-7 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-200 mb-3 text-lg">{prob.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{prob.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 relative overflow-hidden bg-slate-900 dark:bg-black text-white">
        {/* Classic Dark Background for Contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-900 opacity-70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="left">
              <SectionTitle 
                title="La Solution TerraChain" 
                subtitle="INNOVATION"
                align="left"
                light={true}
              />
              <p className="text-lg text-slate-300 mb-8 font-light">
                Une infrastructure numérique de confiance qui remplace l'incertitude par des preuves cryptographiques. Nous connectons le cadastre physique à la blockchain.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Registre décentralisé et infalsifiable",
                  "Historique transparent de chaque parcelle",
                  "Smart contracts pour les transactions",
                  "Application mobile citoyenne"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-emerald-400 w-4 h-4" />
                    </div>
                    <span className="text-slate-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                 {/* Layered Interface Visual */}
                 <div className="relative z-20 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                    {/* Mock Browser Header */}
                    <div className="bg-slate-900 p-4 flex items-center gap-2 border-b border-slate-700">
                       <div className="flex gap-1.5">
                         <div className="w-3 h-3 rounded-full bg-red-500" />
                         <div className="w-3 h-3 rounded-full bg-amber-500" />
                         <div className="w-3 h-3 rounded-full bg-emerald-500" />
                       </div>
                       <div className="ml-4 bg-slate-800 px-3 py-1 rounded text-xs text-slate-400 font-mono flex-1 text-center">
                         terrachain.network/explorer
                       </div>
                    </div>
                    
                    {/* Mock Content */}
                    <div className="p-6 space-y-4">
                       <div className="flex justify-between items-end mb-6">
                          <div>
                            <div className="text-slate-400 text-xs uppercase tracking-wider">Status du Réseau</div>
                            <div className="text-emerald-400 font-bold flex items-center gap-2">
                               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                               Opérationnel
                            </div>
                          </div>
                          <div className="text-right">
                             <div className="text-slate-400 text-xs uppercase">Dernier Bloc</div>
                             <div className="text-white font-mono">#8,921,004</div>
                          </div>
                       </div>

                       {/* Transaction List */}
                       {[1, 2, 3].map((i) => (
                         <div key={i} className="flex items-center justify-between bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">TX</div>
                               <div>
                                  <div className="text-white text-sm font-mono">0x7F...3A9</div>
                                  <div className="text-slate-400 text-xs">Transfert de Titre</div>
                               </div>
                            </div>
                            <div className="text-emerald-400 text-xs font-mono bg-emerald-500/10 px-2 py-1 rounded">
                               Confirmé
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 {/* Decorative Back Layers */}
                 <div className="absolute top-4 -right-4 w-full h-full bg-slate-700 rounded-2xl -z-10 opacity-50 scale-[0.98]" />
                 <div className="absolute top-8 -right-8 w-full h-full bg-slate-600 rounded-2xl -z-20 opacity-30 scale-[0.96]" />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
};