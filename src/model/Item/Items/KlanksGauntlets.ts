import { Item } from '../Item';

const klanksGauntletsData = {
  id: 1499,
  name: "Klank's gauntlets",
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 190,
  examine: 'Made by the dwarf smith Klank.',
  equipable: true,
  weight: 0.34,
  questItem: false,
  // Combat stats
  attackStab: 2,
  attackSlash: 2,
  attackCrush: 2,
  attackMagic: -3,
  attackRanged: -3,
  defenceStab: 4,
  defenceSlash: 4,
  defenceCrush: 4,
  defenceMagic: 0,
  defenceRanged: 0,
  strengthBonus: 2,
  magicDamage: 0,
  prayerBonus: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Klank%27s_gauntlets',
};

export const KlanksGauntlets = Item.fromJson(klanksGauntletsData);
