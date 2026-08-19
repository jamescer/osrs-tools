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
 * Get all masters accessible to a player with the given combat level (and optionally Slayer level).
 * Masters whose combat OR Slayer level requirement exceeds the player's levels are excluded.
 * @param combatLevel The player's combat level.
 * @param slayerLevel The player's base Slayer level (default 1). Boosts never unlock a master.
 */
export function getMastersByMinimumLevel(combatLevel: number, slayerLevel: number = 1): SlayerMaster[] {
  return getAllMasters().filter(
    master =>
      master.getMinimumCombatLevel() <= combatLevel &&
      master.getMinimumSlayerLevel() <= slayerLevel,
  );
}

/**
 * Get all masters sorted by progression (combat level)
 */
export function getMastersByProgression(): SlayerMaster[] {
  return getAllMasters().sort((a, b) => a.getMinimumCombatLevel() - b.getMinimumCombatLevel());
}

/**
 * Get a random master available for the given combat and Slayer levels.
 * @param combatLevel The player's combat level.
 * @param slayerLevel The player's base Slayer level (default 1).
 */
export function getRandomMasterForLevel(combatLevel: number, slayerLevel: number = 1): SlayerMaster | null {
  const available = getMastersByMinimumLevel(combatLevel, slayerLevel);
  if (available.length === 0) return null;
  return available[Math.floor(Math.random() * available.length)];
}

/**
 * Slayer Masters by progression (from OSRS Wiki)
 * Reference: https://oldschool.runescape.wiki/w/Slayer
 */
export enum SlayerMasterProgression {
  TURAEL = 'Turael', // Combat 1
  MAZCHNA = 'Mazchna', // Combat 20
  VANNAKA = 'Vannaka', // Combat 40
  CHAELDAR = 'Chaeldar', // Combat 70
  KONAR = 'Konar quo Maten', // Combat 75
  NIEVE = 'Nieve', // Combat 85
  DURADEL = 'Duradel', // Combat 100, Slayer 50
  KRYSTILIA = 'Krystilia', // Combat 1 (Wilderness)
  MORTIMER = 'Mortimer', // Wyrmscraig (planned/unreleased)
}
