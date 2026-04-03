import { Item } from '../Item';

const uncutEmeraldData = {
  id: 1621,
  name: 'Uncut emerald',
  iconUrl: '/assets/items/uncut-emerald.png',
  examine: 'An uncut emerald.',
  value: 456,
  highAlch: 273,
  lowAlch: 182,
  weight: 0.02,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Uncut_emerald',
};

export const UncutEmerald = Item.fromJson(uncutEmeraldData);
