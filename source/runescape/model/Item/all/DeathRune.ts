import { Item, ItemJson } from '../Item';

const deathRuneData: ItemJson = {
  id: 560,
  name: 'Death rune',
  examine: 'A Death rune.',
  highAlch: 1,
  lowAlch: 1,
  members: false,
  noted: false,
  tradeable: true,
  stackable: false,
  questItem: false,
  value: 1,
  releaseDate: '24 September 2001',
  weight: 0,
  iconUrl: '/assets/items/death-rune.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Death_rune',
};

export const DeathRune = Item.fromJson(deathRuneData);