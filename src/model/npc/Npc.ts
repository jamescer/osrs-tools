import { NpcDrop } from './NpcDrop';
import { NpcProduct } from './NpcProduct';

/**
 * Represents a non-player character (NPC) in the game.
 * @property {number} id - Unique identifier for the NPC.
 * @property {string} name - Name of the NPC.
 * @property {string} examine - Description of the NPC.
 * @property {boolean} members - Indicates if the NPC is a members-only NPC.
 * @property {number} combatLevel - Combat level of the NPC.
 * @property {string} officialWikiUrl - URL to the official wiki page for the NPC.
 * @property {string} [iconUrl] - Optional URL for the NPC's icon.
 * @property {number} hitpoints - Hitpoints of the NPC.
 * @property {boolean} aggressive - Indicates if the NPC is aggressive.
 * @property {string} attackType - The type of attack the NPC uses (e.g., "melee", "ranged", "magic").
 * @property {string} attackStyle - The primary attack style of the NPC (e.g., "melee", "ranged", "magic").
 * @property {number} maxHit - The maximum hit the NPC can deal.
 * @property {number} attackSpeed - The attack speed of the NPC in ticks.
 * @property {number} respawnTime - The time in seconds before the NPC respawns after being killed.
 * @property {string[]} location - Locations where the NPC can be found.
 * @property {NpcDrop[]} drops - List of items that the NPC can drop upon death.
 * @property {string[]} weaknesses - List of weaknesses of the NPC (e.g., "slash", "stab", "crush").
 * @property {string[]} [products] - List of products/services the NPC offers (e.g., runes, house teleport, etc.).
 * @property {string[]} [dialogue] - List of notable dialogue lines or dialogue options.
 * @property {string[]} [changes] - List of notable changes/updates to the NPC.
 */
export class Npc {
  id: number;
  name: string;
  examine: string;
  members: boolean;
  combatLevel: number;
  officialWikiUrl: string;
  iconUrl?: string;
  hitpoints: number;
  aggressive: boolean;
  attackStyle: string;
  maxHit: number;
  attackSpeed: number;
  respawnTime: number;
  location: string[];
  drops: NpcDrop[];
  weaknesses: string[];
  products?: NpcProduct[];
  dialogue?: string[];
  changes?: string[];
  trivia?: string[];

  constructor(
    id: number,
    name: string,
    examine: string,
    members: boolean,
    combatLevel: number,
    officialWikiUrl: string,
    hitpoints: number,
    aggressive: boolean,
    attackStyle: string,
    maxHit: number,
    attackSpeed: number,
    respawnTime: number,
    location: string[],
    drops: NpcDrop[],
    weaknesses: string[],
    iconUrl?: string,
    products?: NpcProduct[],
    dialogue?: string[],
    changes?: string[],
    trivia?: string[]
  ) {
    this.id = id;
    this.name = name;
    this.examine = examine;
    this.members = members;
    this.combatLevel = combatLevel;
    this.officialWikiUrl = officialWikiUrl;
    this.iconUrl = iconUrl;
    this.hitpoints = hitpoints;
    this.aggressive = aggressive;
    this.attackStyle = attackStyle;
    this.maxHit = maxHit;
    this.attackSpeed = attackSpeed;
    this.respawnTime = respawnTime;
    this.location = location;
    this.drops = drops;
    this.weaknesses = weaknesses;
    this.products = products;
    this.dialogue = dialogue;
    this.changes = changes;
    this.trivia = trivia;
  }

  static createBasicNpc(name: string): Npc {
    return new Npc(
      0,
      name,
      '',
      false,
      0,
      '',
      0,
      false,
      '',
      0,
      0,
      0,
      [],
      [],
      [],
      undefined,
      [],
      [],
      []
    );
  }
}
