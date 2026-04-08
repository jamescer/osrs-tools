import { Item, ItemJson } from '../Item';

const soulRuneData: ItemJson = {
  id: 566,
  name: 'Soul rune',
  examine: 'A Soul rune.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Soul_rune',
  iconUrl: '/assets/items/soul-rune.png',
};

export const SoulRune = Item.fromJson(soulRuneData);
