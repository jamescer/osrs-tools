import { Item } from '../Item';

const ropeData = {
  equipable: false,
  examine: 'A sturdy rope with many uses.',
  id: 954,
  members: false,
  name: 'Rope',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rope',
  questItem: false,
  stackable: false,
  tradeable: true,
  value: 15,
  weight: 0.3,
};

export const Rope = Item.fromJson(ropeData);
