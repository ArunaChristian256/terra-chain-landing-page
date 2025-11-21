import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Lock, Check, ShieldCheck } from 'lucide-react';
import { SectionTitle, FadeIn } from './UI';

const NftRegistry: React.FC = () => {
  return (
    <section id="nft" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-[#0a0f1c] transition-colors duration-500">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual: The NFT Card - 3D Interactive */}
          <FadeIn direction="right" className="w-full lg:w-1/2 flex justify-center">
            <motion.div 
              whileHover={{ rotateY: 5, rotateX: 5 }}
              className="relative w-80 sm:w-96 perspective-1000 group cursor-pointer"
            >
              {/* Glowing Effect behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-purple-600 rounded-xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl dark:shadow-none overflow-hidden border border-slate-200 dark:border-slate-700 transform transition-transform duration-500">
                
                {/* Image Section */}
                <div className="h-64 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Maison Goma Real Estate" />
                   <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 border border-white/20">
                      <Hexagon className="w-4 h-4 text-amber-400" fill="currentColor" />
                      <span className="text-xs font-bold text-white tracking-wider">ERC-721</span>
                   </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Résidence Mugunga</h3>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Authentifié
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-slate-500 uppercase">Valeur Est.</span>
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-200">$45,000</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                    <div className="text-slate-500">Surface</div>
                    <div className="text-slate-900 dark:text-slate-300 text-right">450 m²</div>
                    <div className="text-slate-500">Token ID</div>
                    <div className="text-slate-900 dark:text-slate-300 text-right truncate">#882190</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Content */}
          <div className="flex-1 lg:w-1/2">
             <FadeIn direction="left">
               <SectionTitle 
                  title="Blockchain & NFT Registry" 
                  subtitle="TECHNOLOGIE DE POINTE"
                  align="left"
               />
               <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                 Nous transformons les titres papiers en actifs numériques uniques. Une révolution qui apporte liquidité, sécurité et transparence au marché immobilier.
               </p>

               <div className="space-y-6">
                 <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                   <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-xl group-hover:bg-amber-400 group-hover:text-white transition-colors">
                      <Hexagon className="text-amber-600 dark:text-amber-400 group-hover:text-white w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="text-slate-900 dark:text-white font-bold mb-1 text-lg">Propriété Digitale</h4>
                     <p className="text-slate-600 dark:text-slate-400">Le NFT fait foi de titre de propriété juridique, infalsifiable.</p>
                   </div>
                 </motion.div>

                 <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                   <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Lock className="text-emerald-600 dark:text-emerald-400 group-hover:text-white w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="text-slate-900 dark:text-white font-bold mb-1 text-lg">Sécurité Maximale</h4>
                     <p className="text-slate-600 dark:text-slate-400">Cryptographiquement sécurisé sur le réseau Polygon.</p>
                   </div>
                 </motion.div>
               </div>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NftRegistry;