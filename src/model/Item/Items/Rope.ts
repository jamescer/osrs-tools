import { Item } from '../Item';

const ropeData = {
  id: 954,
  name: 'Rope',
  members: false,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 15,
  examine: 'A sturdy rope with many uses.',
  equipable: false,
  weight: 0.3,
  questItem: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rope',
};

export const Rope = Item.fromJson(ropeData);
