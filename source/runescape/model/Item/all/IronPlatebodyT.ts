import { Item } from '../Item';

const ironPlatebodyTData = {
  id: 3483,
  name: 'Iron platebody (t)',
  iconUrl: '/assets/items/iron-platebody-t.png',
  examine: 'A suit of iron body armour, decorated with gold trim.',
  value: 2700,
  highAlch: 1620,
  lowAlch: 1080,
  weight: 10,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iron_platebody_(t)',
  defenceStab: 20,
  defenceSlash: 20,
  defenceCrush: 18,
  defenceRanged: 2,
  defenceMagic: 2,
};

export const IronPlatebodyT = Item.fromJson(ironPlatebodyTData);
