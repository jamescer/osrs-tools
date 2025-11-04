import { Item } from '../Item';

const waterRuneData = {
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
};

export const WaterRune = Item.fromJson(waterRuneData);
