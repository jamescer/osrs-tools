import { Npc } from "../Npc";
import { NpcDrop } from "../NpcDrop";

/**
 * Ice Troll
 * A troll adapted to icy environments, found in Fremennik Isles.
 * Wiki: https://oldschool.runescape.wiki/w/Ice_troll
 */
export const iceTroll = new Npc({
  id: 4677,
  name: "Ice Troll",
  examine: "A troll from the ice.",
  members: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ice_troll",
  combatLevel: 122,
  stats: {
    hitpoints: 100,
    attack: 80,
    strength: 85,
    defence: 80,
    magic: 40,
    ranged: 40,
  },
  aggressiveStats: {
    attackBonus: 65,
    strengthBonus: 70,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 10, slash: 10, crush: 15 },
    magic: { bonus: -25, elementalWeakness: "Fire" },
    ranged: { light: 5, standard: 5, heavy: 5 },
  },
  combat: {
    maxHit: 30,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ["Crush"],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: ["Fire"],
  },
  immunities: {
    canBePoison: true,
    isPoisonous: false,
    canBeVenom: true,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ["Fremennik Isles"],
  drops: [new NpcDrop("Bones", 1, "Always")],
  trivia: ["Ice Trolls are found in the frozen Fremennik Isles.", "They are weak to fire-based attacks due to their icy nature.", "Ice Trolls are significantly stronger than Mountain Trolls."],
});

export default iceTroll;
