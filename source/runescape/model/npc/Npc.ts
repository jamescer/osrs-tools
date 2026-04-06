import { NpcDrop } from "./NpcDrop";
import { NpcProduct } from "./NpcProduct";

// Wiki reference: https://oldschool.runescape.wiki/w/Non-player_character
// Character stats reference: https://oldschool.runescape.wiki/w/Abyssal_demon

/**
 * Represents the base stats of an NPC.
 * Wiki reference: https://oldschool.runescape.wiki/w/Abyssal_demon (Combat stats section)
 */
export interface NpcCombatStats {
  hitpoints: number;
  attack: number;
  strength: number;
  defence: number;
  magic: number;
  ranged: number;
}

/**
 * Represents the offensive bonuses (Aggressive stats section from wiki).
 * Wiki reference: https://oldschool.runescape.wiki/w/Abyssal_demon (Aggressive stats section)
 *
 * These are the modifiers that affect the NPC's offensive capabilities.
 */
export interface NpcAggressiveStats {
  attackBonus: number; // Monster attack bonus (affects accuracy)
  strengthBonus: number; // Monster strength bonus (affects melee damage)
  magicStrengthBonus: number; // Monster magic strength bonus (affects spell damage)
  rangedStrengthBonus: number; // Monster ranged strength bonus (affects ranged damage)
}

/**
 * Represents melee defence bonuses against different damage types.
 * Wiki reference: https://oldschool.runescape.wiki/w/Abyssal_demon (Melee defence section)
 */
export interface NpcMeleeDefence {
  stab: number; // Defence against stab attacks
  slash: number; // Defence against slash attacks
  crush: number; // Defence against crush attacks
}

/**
 * Represents magic defence.
 * Wiki reference: https://oldschool.runescape.wiki/w/Abyssal_demon (Magic defence section)
 */
export interface NpcMagicDefence {
  bonus: number; // Magic defence bonus
  elementalWeakness?: string; // Elemental weakness (if any) - e.g., "Fire", "Water", or null for "No elemental weakness"
}

/**
 * Represents ranged defence bonuses against different projectile types.
 * Wiki reference: https://oldschool.runescape.wiki/w/Abyssal_demon (Ranged defence section)
 */
export interface NpcRangedDefence {
  light: number; // Defence against light projectiles
  standard: number; // Defence against standard projectiles
  heavy: number; // Defence against heavy projectiles
}

/**
 * Represents all defensive bonuses for an NPC.
 * Organized by damage type as shown in the wiki.
 * Wiki reference: https://oldschool.runescape.wiki/w/Abyssal_demon (Defence sections)
 */
export interface NpcDefences {
  melee: NpcMeleeDefence;
  magic: NpcMagicDefence;
  ranged: NpcRangedDefence;
}

/**
 * Represents status effects and environmental resistances.
 * Wiki reference: https://oldschool.runescape.wiki/w/Abyssal_demon (Immunities section)
 */
export interface NpcImmunities {
  canBePoison: boolean; // Can it be affected by poison?
  isPoisonous: boolean; // Is it naturally poisonous/venomous weapon?
  canBeVenom: boolean; // Can it be affected by venom?
  canBeCannoned: boolean; // Can it be damaged by dwarf multicannon?
  canBeThralled: boolean; // Can it be affected by thralls/summons?
}

/**
 * Represents combat interactions and mechanics.
 * Wiki reference: https://oldschool.runescape.wiki/w/Non-player_character
 */
export interface NpcCombatMechanics {
  maxHit: number; // Maximum damage the NPC can deal
  attackSpeed: number; // Attack speed in game ticks (1 tick = 0.6 seconds)
  respawnTime: number; // Respawn time in game ticks
  isAggressive: boolean; // Does it attack unprovoked?
  isAttackable: boolean; // Can it be attacked by players?
  attackStyles: string[]; // e.g., ["Stab", "Ranged", "Magic"]
  isPoisonous: boolean; // Does it poison when it hits? (Deprecated: use weaponVenom)
  hasWeaponVenom: boolean; // Does it apply venom when it hits?
  weaknesses: string[]; // e.g., ["Crush", "Fire spells"]
}

/**
 * Represents an NPC in the game with comprehensive combat and attribute data.
 * All data is verified against the OSRS wiki.
 *
 * Wiki references:
 * - https://oldschool.runescape.wiki/w/Abyssal_demon (Example NPC with full stats)
 * - https://oldschool.runescape.wiki/w/Non-player_character (General NPC info)
 * - https://oldschool.runescape.wiki/w/Character (Character mechanics)
 */
export class Npc {
  // Basic Identification
  readonly id: number;
  readonly name: string;
  readonly examine: string;
  readonly members: boolean;
  readonly officialWikiUrl: string;

  // Combat Metrics
  readonly combatLevel: number;
  readonly slayerLevel?: number; // Required slayer level to damage (if applicable)
  readonly slayerXp?: number; // Slayer XP awarded

  // Combat Stats (6 core stats from https://oldschool.runescape.wiki/w/Abyssal_demon)
  readonly stats: NpcCombatStats;

  // Offensive bonuses (Aggressive stats section)
  readonly aggressiveStats: NpcAggressiveStats;

  // Defensive bonuses organized by damage type
  readonly defences: NpcDefences;

  // Combat Mechanics
  readonly combat: NpcCombatMechanics;

  // Immunities
  readonly immunities: NpcImmunities;

  // Game World
  readonly locations: string[]; // Where the NPC can be found
  readonly drops: NpcDrop[]; // Items dropped on death

  // Additional Information
  readonly products?: NpcProduct[]; // Services/items the NPC offers
  readonly dialogue?: string[]; // Notable dialogue
  readonly changes?: string[]; // Update history
  readonly trivia?: string[]; // Interesting facts

  constructor(data: {
    id: number;
    name: string;
    examine: string;
    members: boolean;
    officialWikiUrl: string;
    combatLevel: number;
    slayerLevel?: number;
    slayerXp?: number;

    // Combat Stats
    stats: NpcCombatStats;

    // Offensive bonuses
    aggressiveStats: NpcAggressiveStats;

    // Defensive bonuses
    defences: NpcDefences;

    // Combat Mechanics
    combat: NpcCombatMechanics;

    // Immunities
    immunities: NpcImmunities;

    // World Data
    locations: string[];
    drops: NpcDrop[];

    // Optional
    products?: NpcProduct[];
    dialogue?: string[];
    changes?: string[];
    trivia?: string[];
  }) {
    this.id = data.id;
    this.name = data.name;
    this.examine = data.examine;
    this.members = data.members;
    this.officialWikiUrl = data.officialWikiUrl;
    this.combatLevel = data.combatLevel;
    this.slayerLevel = data.slayerLevel;
    this.slayerXp = data.slayerXp;

    this.stats = data.stats;
    this.aggressiveStats = data.aggressiveStats;
    this.defences = data.defences;
    this.combat = data.combat;
    this.immunities = data.immunities;

    this.locations = data.locations;
    this.drops = data.drops;

    this.products = data.products;
    this.dialogue = data.dialogue;
    this.changes = data.changes;
    this.trivia = data.trivia;
  }

  /**
   * Get the NPC's defense roll against a specific attack type.
   * Used in hit chance calculations.
   * Wiki reference: https://oldschool.runescape.wiki/w/Abyssal_demon (Defence sections)
   * @param attackType - Type of attack ("stab", "slash", "crush", "magic", "ranged-light", "ranged-standard", "ranged-heavy")
   */
  getDefenseAgainst(attackType: "stab" | "slash" | "crush" | "magic" | "ranged-light" | "ranged-standard" | "ranged-heavy"): number {
    switch (attackType) {
      case "stab":
        return this.defences.melee.stab;
      case "slash":
        return this.defences.melee.slash;
      case "crush":
        return this.defences.melee.crush;
      case "magic":
        return this.defences.magic.bonus;
      case "ranged-light":
        return this.defences.ranged.light;
      case "ranged-standard":
        return this.defences.ranged.standard;
      case "ranged-heavy":
        return this.defences.ranged.heavy;
      default:
        return 0;
    }
  }

  /**
   * Check if this NPC can be harmed by a specific type of damage or effect.
   * @param damageType - Type of damage/effect to check
   */
  canBeDamagedBy(damageType: "poison" | "venom" | "cannon" | "thrall"): boolean {
    switch (damageType) {
      case "poison":
        return this.immunities.canBePoison;
      case "venom":
        return this.immunities.canBeVenom;
      case "cannon":
        return this.immunities.canBeCannoned;
      case "thrall":
        return this.immunities.canBeThralled;
      default:
        return false;
    }
  }

  /**
   * Create a minimal NPC with default values for quick testing.
   * Not intended for actual game use - always verify with wiki.
   */
  static createBasicNpc(id: number, name: string): Npc {
    return new Npc({
      id,
      name,
      examine: "",
      members: false,
      officialWikiUrl: "",
      combatLevel: 1,
      locations: [],
      drops: [],

      stats: {
        hitpoints: 10,
        attack: 1,
        strength: 1,
        defence: 1,
        magic: 1,
        ranged: 1,
      },

      aggressiveStats: {
        attackBonus: 0,
        strengthBonus: 0,
        magicStrengthBonus: 0,
        rangedStrengthBonus: 0,
      },

      defences: {
        melee: {
          stab: 0,
          slash: 0,
          crush: 0,
        },
        magic: {
          bonus: 0,
          elementalWeakness: undefined,
        },
        ranged: {
          light: 0,
          standard: 0,
          heavy: 0,
        },
      },

      combat: {
        maxHit: 0,
        attackSpeed: 4,
        respawnTime: 60,
        isAggressive: false,
        isAttackable: true,
        attackStyles: [],
        isPoisonous: false,
        hasWeaponVenom: false,
        weaknesses: [],
      },

      immunities: {
        canBePoison: true,
        isPoisonous: false,
        canBeVenom: true,
        canBeCannoned: true,
        canBeThralled: true,
      },
    });
  }
}
