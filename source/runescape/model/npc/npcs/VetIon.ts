import { Npc } from "../Npc";
import { NpcDrop } from "../NpcDrop";

/**
 * Vet'ion
 * A demonic skeleton boss of the Wilderness, one of the most powerful creatures.
 * Wiki: https://oldschool.runescape.wiki/w/Vet'ion
 */
export const vetIon = new Npc({
  id: 6612,
  name: "Vet'ion",
  examine: "A demonic skeleton.",
  members: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Vet'ion",
  combatLevel: 454,
  stats: {
    hitpoints: 300,
    attack: 200,
    strength: 220,
    defence: 180,
    magic: 120,
    ranged: 100,
  },
  aggressiveStats: {
    attackBonus: 160,
    strengthBonus: 180,
    magicStrengthBonus: 80,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 50, slash: 60, crush: 55 },
    magic: { bonus: 30, elementalWeakness: "None" },
    ranged: { light: 60, standard: 60, heavy: 60 },
  },
  combat: {
    maxHit: 50,
    attackSpeed: 5,
    respawnTime: 0,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ["Magic", "Melee"],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: ["Crush"],
  },
  immunities: {
    canBePoison: false,
    isPoisonous: false,
    canBeVenom: false,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ["Wilderness"],
  drops: [new NpcDrop("Bones", 1, "Always")],
  trivia: ["Vet'ion is one of the most powerful bosses in the Wilderness.", "This demonic skeleton does not respawn once defeated.", "Fighting Vet'ion is an extreme test of combat skills."],
});

export default vetIon;
