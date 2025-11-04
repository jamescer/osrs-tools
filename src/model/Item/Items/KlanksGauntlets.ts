import { Item } from '../Item';

const klanksGauntletsData = {
  attackCrush: 2,
  attackMagic: -3,
  attackRanged: -3,
  attackSlash: 2,
  // Combat stats
  attackStab: 2,

  defenceCrush: 4,

  defenceMagic: 0,

  defenceRanged: 0,

  defenceSlash: 4,

  defenceStab: 4,

  equipable: true,

  examine: 'Made by the dwarf smith Klank.',

  id: 1499,

  magicDamage: 0,

  members: true,

  name: "Klank's gauntlets",
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Klank%27s_gauntlets',
  prayerBonus: 0,
  questItem: false,
  stackable: false,
  strengthBonus: 2,
  tradeable: false,
  value: 190,
  weight: 0.34,
};

export const KlanksGauntlets = Item.fromJson(klanksGauntletsData);
