import { Item } from '../Item';

const aPowderedWigData = {
  id: 10392,
  name: "A powdered wig",
  iconUrl: '/assets/items/10392.png',
  examine: "A big do about nothing.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/A_powdered_wig',
};

export const APowderedWig = Item.fromJson(aPowderedWigData);
