import { Item, ItemJson } from '../Item';

const flaredTrousersData: ItemJson = {
  id: 7934,
  name: 'Flared trousers',
  iconUrl: '/assets/items/flared-trousers.png',
  examine: 'These\'ll help me stay alive.',
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2006-12-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Flared_trousers',
};

export const FlaredTrousers = Item.fromJson(flaredTrousersData);
