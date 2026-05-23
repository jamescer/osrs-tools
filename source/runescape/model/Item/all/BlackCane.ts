import { Item } from '../Item';

const blackCaneData = {
  id: 12375,
  name: "Black cane",
  iconUrl: '/assets/items/12375.png',
  examine: "A ruby topped cane.",
  value: 600,
  highAlch: 360,
  lowAlch: 240,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_cane',
};

export const BlackCane = Item.fromJson(blackCaneData);
