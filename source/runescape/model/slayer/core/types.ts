/**
 * Slayer Module Types, Enums, and Constants
 * Provides centralized definitions for locations, bosses, and task defaults
 */

import { Requirement } from '../../Requirement';

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
 * Slayer Master configuration interface
 */
export interface SlayerMasterConfig {
  name: string;
  location: string;
  wikiUrl: string;
  minimumCombatLevel: number;
  tasks: any[]; // Task[]
  pointsTable: Record<number, number>;
  eliteDiaryTaskPoints?: Record<number, number>;
}

/**
 * Slayer points table (standard progression)
 * Reference: https://oldschool.runescape.wiki/w/Slayer_point
 */
export const POINTS_TABLE = {
  STANDARD: {
    1: 2,
    10: 5,
    50: 15,
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

/**
 * Slayer unlock costs (in points)
 * Reference: https://oldschool.runescape.wiki/w/Slayer#Rewards
 */
export const SLAYER_UNLOCK_COSTS = {
  ABYSSAL_SIRE: 3_000_000,
  BIGGER_AND_BADDER: 150,
  DESERT_TREASURE_REQUIRED: 'Desert Treasure',
  SPELLCASTER_KILL_75PER: 300,
  HARD_FILTERS: 100,
  // Add more unlock costs
} as Record<string, number | string>;

/**
 * Slayer extend costs and descriptions
 * Reference: https://oldschool.runescape.wiki/w/Slayer#Rewards
 */
export const SLAYER_EXTEND_COSTS = {
  NEED_MORE_DARKNESS: { cost: 100, description: 'Dark beasts: 100-149' },
  ANKOU_VERY_MUCH: { cost: 100, description: 'Ankous: 91-149' },
  FIRE_AND_DARKNESS: { cost: 50, description: 'Black dragons: 40-60' },
} as Record<string, { cost: number; description: string }>;
