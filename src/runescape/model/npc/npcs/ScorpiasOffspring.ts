import { Npc } from "../Npc";
import { NpcDrop } from "../NpcDrop";

/**
 * Scorpia's Offspring
 * A young scorpion child of Scorpia, found in the Wilderness.
 * Wiki: https://oldschool.runescape.wiki/w/Scorpia's_offspring
 */
export const scorpiasOffspring = new Npc({
  id: 6619,
  name: "Scorpia's offspring",
  examine: "A young scorpion.",
  members: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Scorpia's_offspring",
  combatLevel: 40,
  stats: {
    hitpoints: 50,
    attack: 38,
    strength: 40,
    defence: 35,
    magic: 15,
    ranged: 15,
  },
  aggressiveStats: {
    attackBonus: 25,
    strengthBonus: 30,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 5, slash: 8, crush: 3 },
    magic: { bonus: -5, elementalWeakness: "None" },
    ranged: { light: 3, standard: 3, heavy: 3 },
  },
  combat: {
    maxHit: 8,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: false,
    isAttackable: true,
    attackStyles: ["Melee"],
    isPoisonous: true,
    hasWeaponVenom: false,
    weaknesses: [],
  },
  immunities: {
    canBePoison: true,
    isPoisonous: true,
    canBeVenom: true,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ["Wilderness"],
  drops: [new NpcDrop("Bones", 1, "Always")],
  trivia: ["Scorpia's Offspring are young scorpions.", "They inherit poison from their mother.", "These creatures are weaker than adult scorpions."],
});

export default scorpiasOffspring;
