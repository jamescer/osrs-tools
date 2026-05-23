import { Item } from '../Item';

const beanieData = {
  id: 12245,
  name: "Beanie",
  iconUrl: '/assets/items/12245.png',
  examine: "Weeeeeee!",
  value: 600,
  highAlch: 360,
  lowAlch: 240,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Beanie',
};

export const Beanie = Item.fromJson(beanieData);
