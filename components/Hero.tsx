import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Database, Shield, CheckCircle2 } from 'lucide-react';
import { Button, FadeIn } from './UI';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-50 dark:bg-terra-dark transition-colors duration-500">
      
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="text-left">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-500/30 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-800 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase">Piloté à Mugunga, RDC</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-slate-900 dark:text-white">
              Sécuriser la Terre, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
                Construire la Paix
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg">
              TerraChain Goma déploie la première infrastructure blockchain pour certifier, sécuriser et tracer les titres fonciers de manière immuable.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>
                Découvrir le projet <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="outline">
                Voir la démo technique
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Immuable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Sécurisé</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Hero Visual - Classic Isometric/3D feel */}
        <FadeIn delay={0.4} direction="right">
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto perspective-1000">
              
              {/* Main Card - Land Registry */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 z-20"
              >
                 <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl dark:shadow-emerald-900/20 border border-slate-100 dark:border-slate-700 overflow-hidden p-2">
                    <img 
                      src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop" 
                      alt="Villa Moderne Real Estate" 
                      className="w-full h-full object-cover rounded-2xl opacity-95 hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay UI Elements */}
                    <div className="absolute top-8 left-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
                          <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase font-bold">Titre Foncier</div>
                          <div className="font-mono text-sm font-bold text-slate-800 dark:text-slate-200">#TF-4921</div>
                        </div>
                      </div>
                      <div className="h-1.5 w-32 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-full animate-[loading_2s_ease-in-out_infinite]" />
                      </div>
                    </div>
                 </div>
              </motion.div>

              {/* Floating Elements Behind */}
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-gradient-to-br from-amber-200 to-orange-100 dark:from-amber-500/20 dark:to-orange-500/20 rounded-full blur-3xl opacity-60 animate-pulse" />
              <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-100 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full blur-3xl opacity-60 animate-pulse delay-1000" />
              
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Hero;