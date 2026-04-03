import { Item } from '../Item';

const goldenApronData = {
  id: 10330,
  name: 'Golden apron',
  iconUrl: '/assets/items/golden-apron.png',
  examine: 'A golden-coloured apron.',
  value: 1560,
  highAlch: 936,
  lowAlch: 624,
  weight: 0.0,
  members: true,
  tradeable: false,
  equipable: true,
  releaseDate: '2003-09-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Golden_apron',
};

export const GoldenApron = Item.fromJson(goldenApronData);
