import { Item } from '../Item';

const steelPlatebodyTData = {
  id: 3479,
  name: 'Steel platebody (t)',
  iconUrl: '/assets/items/steel-platebody-t.png',
  examine: 'A suit of steel body armour, decorated with gold trim.',
  value: 6600,
  highAlch: 3960,
  lowAlch: 2640,
  weight: 15.25,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Steel_platebody_(t)',
  defenceStab: 30,
  defenceSlash: 30,
  defenceCrush: 26,
  defenceRanged: 4,
  defenceMagic: 4,
};

export const SteelPlatebodyT = Item.fromJson(steelPlatebodyTData);
