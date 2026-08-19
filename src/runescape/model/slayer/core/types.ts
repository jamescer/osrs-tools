/**
 * Slayer Module Types, Enums, and Constants
 * Provides centralized definitions for locations, bosses, and task defaults
 */

import { Requirement } from '../../Requirement';
import type { Task } from './Task';

/**
 * Slayer task locations (from OSRS Wiki)
 * Reference: https://oldschool.runescape.wiki/w/Slayer
 */
export enum SlayerLocation {
  SLAYER_TOWER = 'Slayer Tower',
  SLAYER_TOWER_CKS = 'Slayer Tower (CKS)',
  CATACOMBS = 'Catacombs of Kourend',
  GOD_WARS_DUNGEON = 'God Wars Dungeon',
  TAVERLEY_DUNGEON = 'Taverley Dungeon',
  STRONGHOLD_OF_SECURITY = 'Stronghold of Security',
  WILDERNESS = 'Wilderness',
  FOSSIL_ISLAND = 'Fossil Island',
  RUINS_OF_CAMDOZAAL = 'Ruins of Camdozaal',
  MOTHERLODE_MINE = 'Motherlode Mine',
  ENTRANA = 'Entrana',
  ABYSS = 'Abyss',
  ANCIENT_CAVERN = 'Ancient Cavern',
  KARUULM_DUNGEON = 'Karuulm Dungeon',
  LIGHTHOUSE = 'Lighthouse',
  SHILO_VILLAGE = 'Shilo Village',
  MORYTANIA = 'Morytania',
  TUTORIAL_ISLAND = 'Tutorial Island',
  BRIMHAVEN_DUNGEON = 'Brimhaven Dungeon',
  CRASH_SITE = 'Crash Site',
  DREAMLAND = 'Dreamland',
  FREMENNIK_SLAYER_DUNGEON = 'Fremennik Slayer Dungeon',
  HALLOWED_SEPULCHRE = 'Hallowed Sepulchre',
  ISLE_OF_SOULS = 'Isle of Souls',
  KOUREND = 'Kourend',
  LUMBRIDGE = 'Lumbridge',
  SANDY_WASTELAND = 'Sandy Wasteland',
  SMOKE_DUNGEON = 'Smoke Dungeon',
  YANILLE_DUNGEON = 'Yanille Dungeon',
  LAIR_OF_TZTOK_JAD = 'Lair of TzTok-Jad',
  SOPHANEM_DUNGEON = 'Sophanem Dungeon',
  CORSAIR_COVE = 'Corsair Cove',
  TEMPLE_OF_IKOV = 'Temple of Ikov',
}

/**
 * Slayer bosses and boss variants (from OSRS Wiki)
 * Reference: https://oldschool.runescape.wiki/w/Boss
 */
export enum SlayerBoss {
  ABYSSAL_SIRE = 'Abyssal Sire',
  KING_BLACK_DRAGON = 'King Black Dragon',
  DEMONIC_GORILLA = 'Demonic gorilla',
  KRAKEN = 'Kraken',
  DAGANNOTH_SUPREME = 'Dagannoth Supreme',
  DAGANNOTH_REX = 'Dagannoth Rex',
  DAGANNOTH_PRIME = 'Dagannoth Prime',
  GIANT_MOLE = 'Giant Mole',
  THERMONUCLEAR_SMOKE_DEVIL = 'Thermonuclear Smoke Devil',
  GARGOYLE = 'Gargoyle',
  NECHRYAEL = 'Nechryael',
  ANCIENT_WYVERN = 'Ancient Wyvern',
  BASILISK_KNIGHT = 'Basilisk Knight',
  HYDRA = 'Hydra',
  DRAKE = 'Drake',
  CERBERUS = 'Cerberus',
  TZKAL_ZUK = 'TzKal-Zuk',
  INFERNAL_MAGE = 'Infernal Mage',
  BABY_BLACK_DRAGON = 'Baby black dragon',
  DEVIANT_SPECTRE = 'Deviant spectre',
}

/**
 * Task quantity configuration
 */
export interface TaskQuantity {
  min: number;
  max: number;
}

/**
 * Task definition interface (used for Task.create())
 */
export interface TaskDefinition {
  name: string;
  quantity: TaskQuantity;
  extended?: TaskQuantity | null;
  requirements: Requirement[];
  weight?: number;
  alternatives?: string[];
  locations?: (SlayerLocation | string)[];
  bosses?: (SlayerBoss | string)[];
  wildernessLevels?: number[];
  slayerExp?: number;
}

/**
 * Builder options for creating tasks (alias for TaskDefinition)
 */
export type TaskOptions = TaskDefinition;

/**
 * Describes what a specific player currently has access to, for the purposes of
 * filtering which Slayer tasks a master is allowed to assign them.
 * All fields are optional; an omitted field is treated as "player has none of these"
 * (e.g. no completed quests), which is the conservative/safe default for eligibility checks.
 */
export interface SlayerAssignmentContext {
  /** The player's base (unboosted) Slayer level. Boosts never unlock higher-tier tasks. */
  slayerLevel?: number;
  /** The player's combat level. */
  combatLevel?: number;
  /** Names of quests the player has completed (case-insensitive). */
  completedQuests?: Iterable<string>;
  /** Names of Slayer unlocks the player has purchased with reward points (case-insensitive). */
  unlockedRewards?: Iterable<string>;
  /** Base skill levels keyed by skill name, for tasks with non-Slayer skill requirements. */
  skillLevels?: Partial<Record<string, number>>;
}

/**
 * Slayer Master configuration interface
 */
export interface SlayerMasterConfig {
  name: string;
  location: string;
  wikiUrl: string;
  /** URL of the master's portrait image, sourced from the OSRS Wiki. */
  imageUrl?: string;
  minimumCombatLevel: number;
  /** Minimum base Slayer level required to use this master (e.g. Duradel requires 50). */
  minimumSlayerLevel?: number;
  tasks: Task[];
  pointsTable: Record<number, number>;
  eliteDiaryTaskPoints?: Record<number, number>;
}

/**
 * Slayer points table (standard progression)
 * Reference: https://oldschool.runescape.wiki/w/Slayer_point
 *
 * @deprecated POINTS_TABLE.STANDARD is no longer used internally. Each master now carries its
 * own per-master pointsTable following the universal 5×/15×/25×/35×/50× milestone pattern.
 * This export is kept for backwards compatibility only; do not rely on it for new code.
 *
 * The values below reflect Mazchna's base-2 table (the lowest non-zero point master):
 *   every task: 2, every 10th: 10, every 50th: 30, every 100th: 50,
 *   every 250th: 70, every 1000th: 100.
 */
export const POINTS_TABLE = {
  STANDARD: {
    1: 2,
    10: 10,
    50: 30,
    100: 50,
    250: 70,
    1000: 100,
  } as Record<number, number>,
};

/**
 * Task default values (slayer experience per monster kill)
 * These are commonly used defaults from the Wiki
 */
export const TASK_DEFAULTS = {
  ABERRANT_SPECTRES: { slayerExp: 0, weight: 8 },
  ABYSSAL_DEMONS: { slayerExp: 0, weight: 5 },
  ANKOU: { slayerExp: 0, weight: 8 },
  AVIANSIE: { slayerExp: 0, weight: 8 },
  BLACK_DEMONS: { slayerExp: 0, weight: 8 },
  BLACK_DRAGONS: { slayerExp: 0, weight: 8 },
  CAVE_BUGS: { slayerExp: 0, weight: 8 },
  // Add more as needed - these are extracted from existing task data
} as Record<string, { slayerExp: number; weight: number }>;
