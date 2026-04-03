import { Item } from '../Item';

const ironFullHelmTData = {
  id: 3481,
  name: 'Iron full helm (t)',
  iconUrl: '/assets/items/iron-full-helm-t.png',
  examine: 'A full iron helmet, decorated with gold trim.',
  value: 1400,
  highAlch: 840,
  lowAlch: 560,
  weight: 1.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iron_full_helm_(t)',
  defenceStab: 10,
  defenceSlash: 12,
  defenceCrush: 8,
  defenceRanged: 0,
  defenceMagic: 2,
};

export const IronFullHelmT = Item.fromJson(ironFullHelmTData);
