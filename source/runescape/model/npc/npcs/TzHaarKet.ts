import { Npc } from "../Npc";
import { NpcDrop } from "../NpcDrop";

/**
 * TzHaar-Ket
 * Wiki reference: https://oldschool.runescape.wiki/w/TzHaar-Ket
 *
 * A melee-focused TzHaar creature. Lower level than Hur variant.
 */
export const tzHaarKet = new Npc({
  id: 1628,
  name: "TzHaar-Ket",
  examine: "A TzHaar creature.",
  members: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/TzHaar-Ket",
  combatLevel: 140,

  stats: {
    hitpoints: 120,
    attack: 95,
    strength: 105,
    defence: 90,
    magic: 60,
    ranged: 60,
  },

  aggressiveStats: {
    attackBonus: 0,
    strengthBonus: 0,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },

  defences: {
    melee: { stab: 45, slash: 45, crush: 45 },
    magic: { bonus: 25, elementalWeakness: undefined },
    ranged: { light: 25, standard: 25, heavy: 25 },
  },

  combat: {
    maxHit: 28,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ["Melee"],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: ["Stab attacks"],
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
    new NpcDrop("TzHaar Hide", 1, "Rare"),
  ],

  trivia: [
    "A melee-focused TzHaar creature",
    "Lower level than TzHaar-Hur",
    "Found in TzHaar City",
  ],
});

export default tzHaarKet;
