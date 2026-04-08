import { Item, ItemJson } from '../Item';

const deathRuneData: ItemJson = {
  id: 560,
  name: 'Death rune',
  examine: 'A Death rune.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Death_rune',
  iconUrl: '/assets/items/death-rune.png',
};

export const DeathRune = Item.fromJson(deathRuneData);