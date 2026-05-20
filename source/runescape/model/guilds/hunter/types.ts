export type HunterRumourTier = 'Novice' | 'Adept' | 'Expert' | 'Master';

export const HunterRumourMethods = {
  BIRD_SNARE: 'Bird snare',
  DEADFALL: 'Deadfall',
  BUTTERFLY_NET: 'Butterfly net',
  NET_TRAP: 'Net trap',
  SPIKED_PIT: 'Spiked pit',
  BOX_TRAP: 'Box trap',
  FALCONRY: 'Falconry',
  TRACKING: 'Tracking',
} as const;

export type HunterRumourMethod = typeof HunterRumourMethods[keyof typeof HunterRumourMethods];

import type { RumourLocation } from './RumourLocation';


export interface HunterRumourDefinition {
  id: string;
  creature: string;
  method: HunterRumourMethod;
  locations: RumourLocation[];
  requiredHunterLevel: number;
  tier: HunterRumourTier;
  masterNames: string[];
  questRequirements?: string[];
  notes?: string;
  leagueRegions?: string[];
}

export interface HunterRumourAssignment {
  id: string;
  masterName: string;
  rumourId: string;
  assignedAt: Date;
}
