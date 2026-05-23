import { Item } from '../Item';

const runeHelmH4Data = {
  id: 10292,
  name: "Rune helm (h4)",
  iconUrl: '/assets/items/10292.png',
  examine: "A rune helmet with a heraldic design.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_helm_(h4)',
};

export const RuneHelmH4 = Item.fromJson(runeHelmH4Data);
