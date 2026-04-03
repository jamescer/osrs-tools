import { Item } from '../Item';

const steelFullHelmTData = {
  id: 3477,
  name: 'Steel full helm (t)',
  iconUrl: '/assets/items/steel-full-helm-t.png',
  examine: 'A full steel helmet, decorated with gold trim.',
  value: 3400,
  highAlch: 2040,
  lowAlch: 1360,
  weight: 2.3,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Steel_full_helm_(t)',
  defenceStab: 16,
  defenceSlash: 18,
  defenceCrush: 14,
  defenceRanged: 1,
  defenceMagic: 4,
};

export const SteelFullHelmT = Item.fromJson(steelFullHelmTData);
