import { Item } from '../Item';

const waterRuneData = {
  id: 555,
  name: 'Water rune',
  members: false,
  tradeable: true,
  stackable: true,
  noted: false,
  value: 17,
  examine: 'One of the four basic elemental runes.',
  equipable: false,
  weight: 0.002,
  questItem: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Water_rune',
};

export const WaterRune = Item.fromJson(waterRuneData);
