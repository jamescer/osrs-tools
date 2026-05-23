import { Item } from '../Item';

const runeAxeData = {
  id: 1359,
  name: "Rune axe",
  iconUrl: '/assets/items/1359.png',
  examine: "A powerful axe.",
  value: 12800,
  highAlch: 7680,
  lowAlch: 5120,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_axe',
};

export const RuneAxe = Item.fromJson(runeAxeData);
