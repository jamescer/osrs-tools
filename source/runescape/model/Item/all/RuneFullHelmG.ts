import { Item } from '../Item';

const runeFullHelmGData = {
  id: 2619,
  name: "Rune full helm (g)",
  iconUrl: '/assets/items/2619.png',
  examine: "Rune full helmet with gold trim.",
  value: 35200,
  highAlch: 21120,
  lowAlch: 14080,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_full_helm_(g)',
};

export const RuneFullHelmG = Item.fromJson(runeFullHelmGData);
