import { Item, ItemJson } from '../Item';

const catData: ItemJson = {
  destroy: 'Your cat will run away if released. You can get another kitten from Gertrude.',
  equipable: false,
  examine: 'A well loved pet.',
  highAlch: 60,
  id: 1561,
  lowAlch: 40,
  members: true,
  meleeStrength: 0,
  name: 'Cat',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Cat',
  prayer: 0,
  questItem: false,
  releaseDate: '24 September 2001',
  stackable: false,
  tradeable: false,
  value: 100,
  weight: 1,
};

export const Cat = Item.fromJson(catData);
