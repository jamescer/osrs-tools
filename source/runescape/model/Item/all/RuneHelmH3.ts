import { Item } from '../Item';

const runeHelmH3Data = {
  id: 10290,
  name: "Rune helm (h3)",
  iconUrl: '/assets/items/10290.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_helm_(h3)',
};

export const RuneHelmH3 = Item.fromJson(runeHelmH3Data);
