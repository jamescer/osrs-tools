import { Item, ItemJson } from '../Item';

const soulRuneData: ItemJson = {
  id: 566,
  name: 'Soul rune',
  examine: 'A Soul rune.',
  highAlch: 1,
  lowAlch: 1,
  members: true,
  noted: false,
  tradeable: true,
  stackable: false,
  questItem: false,
  value: 1,
  releaseDate: '24 September 2001',
  weight: 0,
  iconUrl: '/assets/items/soul-rune.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Soul_rune',
};

export const SoulRune = Item.fromJson(soulRuneData);