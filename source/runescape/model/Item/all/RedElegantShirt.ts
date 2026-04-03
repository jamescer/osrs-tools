import { Item } from '../Item';

const redElegantShirtData = {
  id: 7619,
  name: 'Red elegant shirt',
  iconUrl: '/assets/items/red-elegant-shirt.png',
  examine: 'An elegant red shirt.',
  value: 384,
  highAlch: 230,
  lowAlch: 153,
  weight: 0.6,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2003-05-08',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Red_elegant_shirt',
};

export const RedElegantShirt = Item.fromJson(redElegantShirtData);
