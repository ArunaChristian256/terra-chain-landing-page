import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechItem {
  name: string;
  icon?: string; // URL or name
  type: 'blockchain' | 'frontend' | 'backend';
}

export interface StatItem {
  value: string;
  label: string;
}