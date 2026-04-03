/**
 * Slayer Masters Registry and Utilities
 * Provides centralized access to all Slayer masters and core functions
 */

import { SlayerMaster } from '../core/SlayerMaster';

// Import master instances (to be created)
let mastersRegistry: Map<string, SlayerMaster> | null = null;

/**
 * Initialize and get the masters registry
 * This is called lazily to avoid circular dependencies
 */
export function initializeMastersRegistry(): Map<string, SlayerMaster> {
  if (mastersRegistry) return mastersRegistry;

  mastersRegistry = new Map();

  // Masters will be imported and registered here
  // This will be populated as we create the master instances

  return mastersRegistry;
}

/**
 * Get a Slayer master by name (case insensitive)
 */
export function getMasterByName(name: string): SlayerMaster | undefined {
  const registry = initializeMastersRegistry();
  return registry.get(name.toLowerCase());
}

/**
 * Get all available Slayer masters
 */
export function getAllMasters(): SlayerMaster[] {
  const registry = initializeMastersRegistry();
  return Array.from(registry.values());
}

/**
 * Register a master in the registry
 * Used internally by master instances
 */
export function registerMaster(master: SlayerMaster): void {
  const registry = initializeMastersRegistry();
  registry.set(master.getName().toLowerCase(), master);
}

/**
 * Get all masters by minimum combat level
 */
export function getMastersByMinimumLevel(level: number): SlayerMaster[] {
  return getAllMasters().filter(master => master.getMinimumCombatLevel() <= level);
}

/**
 * Get all masters sorted by progression (combat level)
 */
export function getMastersByProgression(): SlayerMaster[] {
  return getAllMasters().sort((a, b) => a.getMinimumCombatLevel() - b.getMinimumCombatLevel());
}

/**
 * Get a random master available for a given combat level
 */
export function getRandomMasterForLevel(combatLevel: number): SlayerMaster | null {
  const available = getMastersByMinimumLevel(combatLevel);
  if (available.length === 0) return null;
  return available[Math.floor(Math.random() * available.length)];
}

/**
 * Slayer Masters by progression (from OSRS Wiki)
 * Reference: https://oldschool.runescape.wiki/w/Slayer
 */
export enum SlayerMasterProgression {
  TURAEL = 'Turael',       // Combat 1
  MAZCHNA = 'Mazchna',     // Combat 20
  VANNAKA = 'Vannaka',     // Combat 40
  CHAELDAR = 'Chaeldar',   // Combat 70
  KONAR = 'Konar quo Maten', // Combat 75
  NIEVE = 'Nieve',         // Combat 85
  DURADEL = 'Duradel',     // Combat 50
  KRYSTILIA = 'Krystilia', // Combat 1 (Wilderness)
}
