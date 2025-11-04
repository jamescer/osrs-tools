import { Item } from '../Item';

const salveAmuletData = {
  equipable: true,
  examine: 'Provides combat bonuses against undead monsters.',
  id: 4081,
  members: true,
  attackSlash: 0,
  name: 'Salve amulet',
  attackCrush: 0,
  noted: false,
  attackMagic: 0,
  questItem: false,
  attackRanged: 0,

  stackable: false,

  // Combat stats
attackStab: 0,

  
  tradeable: false,

  defenceCrush: 3,

  value: 1,
  defenceMagic: 3,
  defenceRanged: 3,
  weight: 0.01,
  defenceSlash: 3,
  defenceStab: 3,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Salve_amulet',
  prayerBonus: 0,
};

export const SalveAmulet = Item.fromJson(salveAmuletData);
