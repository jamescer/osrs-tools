/**
 * Slayer Tasks - Shared Constants and Utilities
 * Central location for task-related constants and helper functions
 */

import { SlayerLocation, SlayerBoss } from '../core/types';

/**
 * Common slayer experience rewards per monster kill
 * These are standard values used across most tasks
 */
export const SLAYER_EXP_RATES = {
  STANDARD: 0,
  DEMON: 15, // Demons (demons, greater demons, black demons, etc.)
  DRAGON: 20, // Dragons
  WYVERN: 25, // Wyverns
  KRAKEN: 30, // Kraken
} as const;

/**
 * Standard task weight distribution
 * Used by most masters
 */
export const STANDARD_TASK_WEIGHTS = {
  LOW: 5,
  MEDIUM: 8,
  HIGH: 10,
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
  VERY_LOW: { min: 1, max: 50 },
  LOW: { min: 50, max: 100 },
  MEDIUM: { min: 100, max: 150 },
  HIGH: { min: 150, max: 200 },
  VERY_HIGH: { min: 200, max: 250 },
} as const;

/**
 * Extended task quantity presets
 */
export const EXTENDED_QUANTITY_PRESETS = {
  LOW: { min: 60, max: 100 },
  MEDIUM: { min: 100, max: 180 },
  HIGH: { min: 180, max: 250 },
} as const;
