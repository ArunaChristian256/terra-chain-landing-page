import { 
  ShieldCheck, 
  QrCode, 
  FileBadge, 
  History, 
  Coins, 
  Eye,
  AlertTriangle,
  Copy,
  Gavel,
  FileX,
  SearchX
} from 'lucide-react';
import { FeatureItem } from './types';

export const NAV_LINKS = [
  { name: 'Problématique', href: '#problem' },
  { name: 'Solution', href: '#solution' },
  { name: 'Fonctionnalités', href: '#features' },
  { name: 'NFT Registry', href: '#nft' },
  { name: 'Mugunga', href: '#mugunga' },
];

export const PROBLEMS = [
  { icon: FileX, title: "Faux Titres", desc: "Prolifération de documents falsifiés." },
  { icon: Copy, title: "Duplicatas", desc: "Attribution multiple d'une même parcelle." },
  { icon: Gavel, title: "Corruption", desc: "Manque de transparence administrative." },
  { icon: AlertTriangle, title: "Conflits", desc: "Litiges fonciers interminables." },
  { icon: SearchX, title: "Opacité", desc: "Traçabilité historique inexistante." },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Enregistrement Sécurisé",
    description: "Chiffrement de bout en bout des données cadastrales sur la blockchain.",
    icon: ShieldCheck
  },
  {
    id: 2,
    title: "Vérification QR Code",
    description: "Scan instantané pour vérifier l'authenticité d'un titre sur le terrain.",
    icon: QrCode
  },
  {
    id: 3,
    title: "Titre NFT",
    description: "Chaque parcelle est un NFT unique (ERC-721) infalsifiable.",
    icon: FileBadge
  },
  {
    id: 4,
    title: "Historique Immuable",
    description: "Traçabilité complète des transferts de propriété depuis l'origine.",
    icon: History
  },
  {
    id: 5,
    title: "Tokenisation",
    description: "Possibilité de fractionner la propriété pour l'investissement (futur).",
    icon: Coins
  },
  {
    id: 6,
    title: "Audit Temps Réel",
    description: "Transparence totale pour les autorités et les citoyens.",
    icon: Eye
  }
];

export const TECH_STACK = [
  { name: "Polygon", label: "Blockchain" },
  { name: "IPFS", label: "Stockage" },
  { name: "Next.js", label: "Frontend" },
  { name: "Solidity", label: "Smart Contracts" },
];