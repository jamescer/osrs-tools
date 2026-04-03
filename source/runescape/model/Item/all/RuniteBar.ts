import { Item } from '../Item';

const runiteBarData = {
  id: 2363,
  name: 'Runite bar',
  iconUrl: '/assets/items/runite-bar.png',
  examine: 'A bar of runite, ready to be smelted or forged.',
  value: 12500,
  highAlch: 7500,
  lowAlch: 5000,
  weight: 0.1,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Runite_bar',
};

export const RuniteBar = Item.fromJson(runiteBarData);
