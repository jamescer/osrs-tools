import { Item } from '../Item';

const salveAmuletData = {
  id: 4081,
  name: 'Salve amulet',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 1,
  examine: 'Provides combat bonuses against undead monsters.',
  equipable: true,
  weight: 0.01,
  questItem: false,
  // Combat stats
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 3,
  defenceSlash: 3,
  defenceCrush: 3,
  defenceMagic: 3,
  defenceRanged: 3,
  prayerBonus: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Salve_amulet',
};

export const SalveAmulet = Item.fromJson(salveAmuletData);
