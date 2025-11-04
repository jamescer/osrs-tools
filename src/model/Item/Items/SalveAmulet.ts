import { Item, ItemJson } from '../Item';

const salveAmuletData: ItemJson = {
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: 0,
  attackStab: 0,
  defenceCrush: 3,
  defenceMagic: 3,
  defenceRanged: 3,
  defenceSlash: 3,
  defenceStab: 3,
  destroy: 'Drop',
  equipable: true,
  examine: 'Provides combat bonuses against undead monsters.',
  highAlch: 0,
  id: 4081,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Salve amulet',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Salve_amulet',
  prayer: 0,
  questItem: false,
  releaseDate: '24 September 2003',
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.01,
};

export const SalveAmulet = Item.fromJson(salveAmuletData);
