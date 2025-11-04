import { Item, ItemJson } from '../Item';

const tinderboxData: ItemJson = {
  equipable: false,
  examine: 'Useful for lighting fires.',
  id: 590,
  members: false,
  name: 'Tinderbox',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Tinderbox',
  questItem: false,
  stackable: false,
  tradeable: true,
  value: 1,
  weight: 0.1,
  highAlch: 0,
  lowAlch: 0,
  releaseDate: '',
  destroy: ''
};

export const Tinderbox = Item.fromJson(tinderboxData);
