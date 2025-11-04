import { Item } from '../Item';

const spadeData = {
  equipable: false,
  examine: 'A spade for digging things up.',
  id: 952,
  members: false,
  name: 'Spade',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Spade',
  questItem: false,
  stackable: false,
  tradeable: true,
  value: 3,
  weight: 2.267,
};

export const Spade = Item.fromJson(spadeData);
