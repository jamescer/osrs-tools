import { Item } from '../Item';

const catData = {
  id: 1561,
  name: 'Cat',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 100,
  examine: 'A well loved pet.',
  equipable: false,
  weight: 1,
  questItem: false,
  destroy: 'Your cat will run away if released. You can get another kitten from Gertrude.',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Cat',
};

export const Cat = Item.fromJson(catData);
