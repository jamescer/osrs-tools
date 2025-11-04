import { Item } from '../Item';

const salveAmuletData = {
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: 0,
  // Combat stats
  attackStab: 0,

  defenceCrush: 3,

  defenceMagic: 3,

  defenceRanged: 3,

  defenceSlash: 3,

  defenceStab: 3,

  equipable: true,

  examine: 'Provides combat bonuses against undead monsters.',

  id: 4081,

  members: true,

  name: 'Salve amulet',

  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Salve_amulet',
  prayerBonus: 0,
  questItem: false,
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.01,
};

export const SalveAmulet = Item.fromJson(salveAmuletData);
