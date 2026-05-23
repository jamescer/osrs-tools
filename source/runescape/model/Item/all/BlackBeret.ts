import { Item } from '../Item';

const blackBeretData = {
  id: 2635,
  name: "Black beret",
  iconUrl: '/assets/items/2635.png',
  examine: "Parlez-vous francais?",
  value: 80,
  highAlch: 48,
  lowAlch: 32,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_beret',
};

export const BlackBeret = Item.fromJson(blackBeretData);
