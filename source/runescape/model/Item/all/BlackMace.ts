import { Item, ItemJson } from '../Item';

const blackMaceData: ItemJson = {
  id: 1420,
  name: 'Black mace',
  examine: 'A Black mace.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_mace',
  iconUrl: '/assets/items/black-mace.png',
};

export const BlackMace = Item.fromJson(blackMaceData);