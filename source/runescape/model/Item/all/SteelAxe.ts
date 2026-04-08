import { Item, ItemJson } from '../Item';

const steelAxeData: ItemJson = {
  id: 1353,
  name: 'Steel axe',
  examine: 'A Steel axe.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Steel_axe',
  iconUrl: '/assets/items/steel-axe.png',
};

export const SteelAxe = Item.fromJson(steelAxeData);