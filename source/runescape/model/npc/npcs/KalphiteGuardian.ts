import { Npc } from "../Npc";
import { NpcDrop } from "../NpcDrop";

/**
 * Kalphite Guardian
 * A strong kalphite warrior defending the hive, an insectoid knight.
 * Wiki: https://oldschool.runescape.wiki/w/Kalphite_guardian
 */
export const kalphiteGuardian = new Npc({
  id: 955,
  name: "Kalphite guardian",
  examine: "A strong kalphite.",
  members: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Kalphite_guardian",
  combatLevel: 88,
  stats: {
    hitpoints: 75,
    attack: 65,
    strength: 70,
    defence: 65,
    magic: 20,
    ranged: 20,
  },
  aggressiveStats: {
    attackBonus: 50,
    strengthBonus: 55,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 8, slash: 12, crush: 5 },
    magic: { bonus: -10, elementalWeakness: "None" },
    ranged: { light: 5, standard: 5, heavy: 5 },
  },
  combat: {
    maxHit: 20,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
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
    canBeThralled: false,
  },
  locations: ["Kalphite Cave"],
  drops: [new NpcDrop("Bones", 1, "Always")],
  trivia: ["Kalphite Guardians are strong warriors of the hive.", "They serve as protectors of the Kalphite Queen.", "These insectoid creatures are immune to cannon attacks."],
});

export default kalphiteGuardian;
