import { Npc } from "../Npc";
import { NpcDrop } from "../NpcDrop";

/**
 * Artio
 * A rare boss bear found in the Wilderness, one of the rarest creatures in the world.
 * Wiki: https://oldschool.runescape.wiki/w/Artio
 */
export const artio = new Npc({
  id: 23185,
  name: "Artio",
  examine: "A rare boss bear.",
  members: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Artio",
  combatLevel: 225,
  stats: {
    hitpoints: 350,
    attack: 160,
    strength: 170,
    defence: 150,
    magic: 60,
    ranged: 70,
  },
  aggressiveStats: {
    attackBonus: 110,
    strengthBonus: 120,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 35, slash: 45, crush: 30 },
    magic: { bonus: 15, elementalWeakness: "None" },
    ranged: { light: 40, standard: 40, heavy: 40 },
  },
  combat: {
    maxHit: 40,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ["Crush"],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: [],
  },
  immunities: {
    canBePoison: true,
    isPoisonous: false,
    canBeVenom: true,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ["Wilderness"],
  drops: [new NpcDrop("Bones", 1, "Always")],
  trivia: ["Artio is one of the rarest creatures in the entire world.", "This bear is a powerful wilderness encounter.", "It is found hunting in the deepest parts of the Wilderness."],
});

export default artio;
