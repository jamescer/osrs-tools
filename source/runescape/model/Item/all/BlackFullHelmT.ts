import { Item } from '../Item';

const blackFullHelmTData = {
  id: 3471,
  name: 'Black full helm (t)',
  iconUrl: '/assets/items/black-full-helm-t.png',
  examine: 'A full black helmet, decorated with gold trim.',
  value: 6200,
  highAlch: 3720,
  lowAlch: 2480,
  weight: 2.3,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_full_helm_(t)',
  defenceStab: 16,
  defenceSlash: 18,
  defenceCrush: 14,
  defenceRanged: 1,
  defenceMagic: 4,
};

export const BlackFullHelmT = Item.fromJson(blackFullHelmTData);
