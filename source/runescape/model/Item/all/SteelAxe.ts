import { Item, ItemJson } from '../Item';

const steelAxeData: ItemJson = {
  id: 1353,
  name: 'Steel axe',
  examine: 'A Steel axe.',
  highAlch: 1,
  lowAlch: 1,
  members: false,
  noted: false,
  tradeable: true,
  stackable: false,
  questItem: false,
  value: 1,
  releaseDate: '24 September 2001',
  weight: 0,
  iconUrl: '/assets/items/steel-axe.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Steel_axe',
};

export const SteelAxe = Item.fromJson(steelAxeData);