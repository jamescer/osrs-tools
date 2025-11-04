import { Item } from '../Item';

const klanksGauntletsData = {
  equipable: true,
  examine: 'Made by the dwarf smith Klank.',
  id: 1499,
  members: true,
  attackSlash: 2,
  name: "Klank's gauntlets",
  attackCrush: 2,
  noted: false,
  attackMagic: -3,
  questItem: false,
  attackRanged: -3,

  stackable: false,

  // Combat stats
attackStab: 2,

  
  tradeable: false,

  defenceCrush: 4,

  value: 190,
  defenceMagic: 0,
  defenceRanged: 0,
  weight: 0.34,
  defenceSlash: 4,
  defenceStab: 4,
  magicDamage: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Klank%27s_gauntlets',
  prayerBonus: 0,
  strengthBonus: 2,
};

export const KlanksGauntlets = Item.fromJson(klanksGauntletsData);
