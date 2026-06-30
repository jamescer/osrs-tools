import { Npc } from "../Npc";
import { NpcDrop } from "../NpcDrop";

/**
 * Hans
 * Wiki reference: https://oldschool.runescape.wiki/w/Hans
 *
 * The loyal servant of Duke Horacio. Hans is a non-attackable NPC.
 */
export const hans = new Npc({
  id: 2,
  name: "Hans",
  examine: "The loyal servant of Duke Horacio, found walking around Lumbridge Castle.",
  members: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Hans",
  combatLevel: 1,

  stats: {
    hitpoints: 1,
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
    melee: { stab: 0, slash: 0, crush: 0 },
    magic: { bonus: 0, elementalWeakness: undefined },
    ranged: { light: 0, standard: 0, heavy: 0 },
  },

  combat: {
    maxHit: 0,
    attackSpeed: 0,
    respawnTime: 0,
    isAggressive: false,
    isAttackable: false,
    attackStyles: [],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: [],
  },

  immunities: {
    canBePoison: false,
    isPoisonous: false,
    canBeVenom: false,
    canBeCannoned: false,
    canBeThralled: false,
  },

  locations: ["Lumbridge Castle"],
  drops: [],

  trivia: ["The loyal servant of Duke Horacio", "Non-attackable NPC", "Found walking around Lumbridge Castle"],
});

export default hans;
