import { Item } from '../Item';

const blackPlatebodyTData = {
  id: 3473,
  name: 'Black platebody (t)',
  iconUrl: '/assets/items/black-platebody-t.png',
  examine: 'A full suit of black body armour, decorated with gold trim.',
  value: 12000,
  highAlch: 7200,
  lowAlch: 4800,
  weight: 15.25,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_platebody_(t)',
  defenceStab: 30,
  defenceSlash: 30,
  defenceCrush: 26,
  defenceRanged: 4,
  defenceMagic: 4,
};

export const BlackPlatebodyT = Item.fromJson(blackPlatebodyTData);
