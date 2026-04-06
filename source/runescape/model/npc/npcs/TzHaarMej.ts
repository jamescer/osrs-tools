import { Npc } from "../Npc";
import { NpcDrop } from "../NpcDrop";

/**
 * TzHaar-Mej
 * Wiki reference: https://oldschool.runescape.wiki/w/TzHaar-Mej
 *
 * A magic-focused TzHaar mage. Uses fire spells.
 */
export const tzHaarMej = new Npc({
  id: 1630,
  name: "TzHaar-Mej",
  examine: "A TzHaar creature.",
  members: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/TzHaar-Mej",
  combatLevel: 159,

  stats: {
    hitpoints: 130,
    attack: 80,
    strength: 70,
    defence: 90,
    magic: 120,
    ranged: 60,
  },

  aggressiveStats: {
    attackBonus: 0,
    strengthBonus: 0,
    magicStrengthBonus: 15,
    rangedStrengthBonus: 0,
  },

  defences: {
    melee: { stab: 45, slash: 45, crush: 45 },
    magic: { bonus: 40, elementalWeakness: undefined },
    ranged: { light: 25, standard: 25, heavy: 25 },
  },

  combat: {
    maxHit: 33,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ["Magic"],
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
    new NpcDrop("TzHaar-Mej Hide", 1, "Rare"),
  ],

  trivia: [
    "A magic-focused TzHaar mage",
    "Uses fire spells in combat",
    "Strongest TzHaar variant",
  ],
});

export default tzHaarMej;
