import { Item } from '../Item';

const runeFullHelmTData = {
  id: 3495,
  name: 'Rune full helm (t)',
  iconUrl: '/assets/items/rune-full-helm-t.png',
  examine: 'A full rune helmet, decorated with gold trim.',
  value: 45600,
  highAlch: 27360,
  lowAlch: 18240,
  weight: 4.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_full_helm_(t)',
  defenceStab: 34,
  defenceSlash: 36,
  defenceCrush: 32,
  defenceRanged: 4,
  defenceMagic: 10,
  prayer: 5,
};

export const RuneFullHelmT = Item.fromJson(runeFullHelmTData);
