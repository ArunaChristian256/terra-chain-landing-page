import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button, FadeIn } from './UI';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 border-t border-slate-800">
      
      {/* Final CTA */}
      <div className="container mx-auto px-4 mb-24 text-center">
        <FadeIn direction="up">
          <div className="bg-gradient-to-br from-emerald-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-10 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Prêt à transformer la gestion foncière ?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Button className="px-8 py-4 text-lg">Demander une démo</Button>
                <Button variant="outline" className="px-8 py-4 text-lg border-slate-500 text-slate-300 hover:text-white hover:border-white">Rejoindre le pilote</Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Links & Info */}
      <div className="bg-slate-950 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/20">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">TerraChain<span className="text-emerald-500">Goma</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              La première solution blockchain dédiée à la sécurisation des titres fonciers au Nord-Kivu. Construisons la confiance, parcelle après parcelle.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">Accueil</a></li>
              <li><a href="#features" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">Fonctionnalités</a></li>
              <li><a href="#nft" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">Registre NFT</a></li>
              <li><a href="#mugunga" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">Projet Mugunga</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Informations</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">Confidentialité</a></li>
              <li><a href="#" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">Documentation API</a></li>
              <li><a href="#" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} TerraChain Goma. Tous droits réservés.</span>
          <div className="flex gap-6">
            <span>Made with Next.js & Polygon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;