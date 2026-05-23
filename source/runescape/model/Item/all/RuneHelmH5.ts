import { Item } from '../Item';

const runeHelmH5Data = {
  id: 10294,
  name: "Rune helm (h5)",
  iconUrl: '/assets/items/10294.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_helm_(h5)',
};

export const RuneHelmH5 = Item.fromJson(runeHelmH5Data);
