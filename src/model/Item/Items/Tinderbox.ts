import { Item } from '../Item';

const tinderboxData = {
  id: 590,
  name: 'Tinderbox',
  members: false,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 1,
  examine: 'Useful for lighting fires.',
  equipable: false,
  weight: 0.1,
  questItem: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Tinderbox',
};

export const Tinderbox = Item.fromJson(tinderboxData);
