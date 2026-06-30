import { Npc } from "../Npc";
import { NpcDrop } from "../NpcDrop";

/**
 * Seagull
 * Wiki reference: https://oldschool.runescape.wiki/w/Seagull
 *
 * A large bird found near water. One of the weakest enemies in OSRS.
 */
export const seagull = new Npc({
  id: 1022,
  name: "Seagull",
  examine: "A large bird.",
  members: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Seagull",
  combatLevel: 1,

  stats: {
    hitpoints: 2,
    attack: 1,
    strength: 1,
    defence: 1,
    magic: 1,
    ranged: 1,
  },

  aggressiveStats: {
    attackBonus: -47,
    strengthBonus: -42,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },

  defences: {
    melee: { stab: -42, slash: -42, crush: -42 },
    magic: { bonus: -42, elementalWeakness: undefined },
    ranged: { light: -42, standard: -42, heavy: -42 },
  },

  combat: {
    maxHit: 0,
    attackSpeed: 4,
    respawnTime: 15,
    isAggressive: false,
    isAttackable: true,
    attackStyles: ["Stab"],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: [],
  },

  immunities: {
    canBePoison: false,
    isPoisonous: false,
    canBeVenom: false,
    canBeCannoned: true,
    canBeThralled: true,
  },

  locations: ["Coastal areas", "Port Sarim", "Brimhaven"],
  drops: [
    new NpcDrop("Bones", 1, "Always"),
  ],

  trivia: [
    "A large coastal bird",
    "Found near water",
    "One of the weakest enemies in OSRS",
  ],
});

export default seagull;
