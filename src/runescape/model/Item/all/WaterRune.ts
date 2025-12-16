import { Item, ItemJson } from '../Item';
const waterRuneData: ItemJson = {
  equipable: false,
  examine: 'One of the four basic elemental runes.',
  id: 555,
  members: false,
  name: 'Water rune',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Water_rune',
  questItem: false,
  stackable: true,
  tradeable: true,
  value: 17,
  weight: 0.002,
  highAlch: 0,
  lowAlch: 0,
  releaseDate: '',
  destroy: ''
};

export const WaterRune = Item.fromJson(waterRuneData);
