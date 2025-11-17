import { Item, ItemJson } from '../Item';

const spadeData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A spade for digging things up.',
  highAlch: 2,
  id: 952,
  lowAlch: 1,
  members: false,
  meleeStrength: 0,
  name: 'Spade',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Spade',
  prayer: 0,
  questItem: false,
  releaseDate: '11 June 2001',
  stackable: false,
  tradeable: true,
  value: 3,
  weight: 2.267,
};

export const Spade = Item.fromJson(spadeData);
