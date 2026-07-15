export type HunterRumourTier = 'Novice' | 'Adept' | 'Expert' | 'Master';

export const HunterRumourMethods = {
  BIRD_SNARE: 'Bird snare',
  BOX_TRAP: 'Box trap',
  BUTTERFLY_NET: 'Butterfly net',
  DEADFALL: 'Deadfall',
  FALCONRY: 'Falconry',
  NET_TRAP: 'Net trap',
  SPIKED_PIT: 'Spiked pit',
  TRACKING: 'Tracking',
} as const;

export type HunterRumourMethod = (typeof HunterRumourMethods)[keyof typeof HunterRumourMethods];

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
