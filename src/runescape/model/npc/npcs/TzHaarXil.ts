import { Npc } from "../Npc";
import { NpcDrop } from "../NpcDrop";

/**
 * TzHaar-Xil
 * Wiki reference: https://oldschool.runescape.wiki/w/TzHaar-Xil
 *
 * A ranged-focused TzHaar creature. Uses projectile attacks.
 */
export const tzHaarXil = new Npc({
  id: 1629,
  name: "TzHaar-Xil",
  examine: "A TzHaar creature.",
  members: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/TzHaar-Xil",
  combatLevel: 145,

  stats: {
    hitpoints: 125,
    attack: 90,
    strength: 80,
    defence: 90,
    magic: 65,
    ranged: 110,
  },

  aggressiveStats: {
    attackBonus: 0,
    strengthBonus: 0,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 10,
  },

  defences: {
    melee: { stab: 45, slash: 45, crush: 45 },
    magic: { bonus: 25, elementalWeakness: undefined },
    ranged: { light: 35, standard: 35, heavy: 35 },
  },

  combat: {
    maxHit: 30,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ["Ranged"],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: ["Fire spells"],
  },

  immunities: {
    canBePoison: true,
    isPoisonous: false,
    canBeVenom: true,
    canBeCannoned: true,
    canBeThralled: true,
  },

  locations: ["TzHaar City"],
  drops: [
    new NpcDrop("Bones", 1, "Always"),
    new NpcDrop("TzHaar-Xil Hide", 1, "Rare"),
  ],

  trivia: [
    "A ranged-focused TzHaar creature",
    "Uses projectile attacks",
    "Found in TzHaar City",
  ],
});

export default tzHaarXil;
