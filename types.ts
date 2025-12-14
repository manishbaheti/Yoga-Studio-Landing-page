import { LucideIcon } from 'lucide-react';

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ClassSession {
  day: string;
  time: string;
  name: string;
  focus: string;
  icon: LucideIcon;
}

export interface Plan {
  name: string;
  frequency: string;
  options: string;
  price: string;
  period: string;
  perClass: string;
  bestFor: string;
  isPrimary: boolean;
  tag?: string;
}