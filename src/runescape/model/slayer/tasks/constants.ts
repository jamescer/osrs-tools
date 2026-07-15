/**
 * Slayer Tasks - Shared Constants and Utilities
 * Central location for task-related constants and helper functions
 */

import { SlayerBoss, SlayerLocation } from '../core/types';

/**
 * Common slayer experience rewards per monster kill
 * These are standard values used across most tasks
 */
export const SLAYER_EXP_RATES = {
  DEMON: 15,
  // Demons (demons, greater demons, black demons, etc.)
  DRAGON: 20,
  // Wyverns
  KRAKEN: 30,

  STANDARD: 0,
  // Dragons
  WYVERN: 25, // Kraken
} as const;

/**
 * Standard task weight distribution
 * Used by most masters
 */
export const STANDARD_TASK_WEIGHTS = {
  HIGH: 10,
  LOW: 5,
  MEDIUM: 8,
  VERY_HIGH: 12,
} as const;

/**
 * Monster types for categorization
 */
export enum MonsterType {
  DEMON = 'Demon',
  DRAGON = 'Dragon',
  UNDEAD = 'Undead',
  UNDEAD_MELEE = 'Undead Melee',
  FLYING = 'Flying',
  AQUATIC = 'Aquatic',
  SLIME = 'Slime',
  HUMANOID = 'Humanoid',
  BEAST = 'Beast',
  CREATURE = 'Creature',
  SPEC = 'Boss/Spec',
}

/**
 * Get all monsters for a specific task location
 */
export const TASK_LOCATIONS = {
  [SlayerLocation.SLAYER_TOWER_CKS]: {
    climate: 'Temperate',
    dangerLevel: 'Medium',
    teleport: 'Ring of Slaying',
  },
  [SlayerLocation.CATACOMBS]: {
    climate: 'Underground',
    dangerLevel: 'Medium-High',
    teleport: 'None',
  },
  [SlayerLocation.GOD_WARS_DUNGEON]: {
    climate: 'Underground',
    dangerLevel: 'High',
    teleport: 'Teleport to God Wars',
  },
} as Record<SlayerLocation | string, { climate: string; dangerLevel: string; teleport: string }>;

/**
 * Monster count presets
 */
export const TASK_QUANTITY_PRESETS = {
  HIGH: { max: 200, min: 150 },
  LOW: { max: 100, min: 50 },
  MEDIUM: { max: 150, min: 100 },
  VERY_HIGH: { max: 250, min: 200 },
  VERY_LOW: { max: 50, min: 1 },
} as const;

/**
 * Extended task quantity presets
 */
export const EXTENDED_QUANTITY_PRESETS = {
  HIGH: { max: 250, min: 180 },
  LOW: { max: 100, min: 60 },
  MEDIUM: { max: 180, min: 100 },
} as const;
