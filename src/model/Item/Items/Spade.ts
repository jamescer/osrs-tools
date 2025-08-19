import { Item } from '../Item';

const spadeData = {
  id: 952,
  name: 'Spade',
  members: false,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 3,
  examine: 'A spade for digging things up.',
  equipable: false,
  weight: 2.267,
  questItem: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Spade',
};

export const Spade = Item.fromJson(spadeData);
