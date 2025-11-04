import { Item } from '../Item';

const tinderboxData = {
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
};

export const Tinderbox = Item.fromJson(tinderboxData);
