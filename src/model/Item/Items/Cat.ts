import { Item } from '../Item';

const catData = {
  destroy: 'Your cat will run away if released. You can get another kitten from Gertrude.',
  equipable: false,
  examine: 'A well loved pet.',
  id: 1561,
  members: true,
  name: 'Cat',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Cat',
  questItem: false,
  stackable: false,
  tradeable: false,
  value: 100,
  weight: 1,
};

export const Cat = Item.fromJson(catData);
