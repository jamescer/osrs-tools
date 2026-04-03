import { Item } from '../Item';

const monksRobeGData = {
  id: 7641,
  name: 'Monk\'s robe (g)',
  iconUrl: '/assets/items/monks-robe-g.png',
  examine: 'A religious robe, decorated with gold trim.',
  value: 1560,
  highAlch: 936,
  lowAlch: 624,
  weight: 0.0,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2003-05-08',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Monk\'s_robe_(g)',
};

export const MonksRobeG = Item.fromJson(monksRobeGData);
