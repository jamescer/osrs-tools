import { Item } from '../Item';

const adamantHelmH2Data = {
  id: 10298,
  name: "Adamant helm (h2)",
  iconUrl: '/assets/items/10298.png',
  examine: "An adamant helmet with a heraldic design.",
  value: 3520,
  highAlch: 2112,
  lowAlch: 1408,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_helm_(h2)',
};

export const AdamantHelmH2 = Item.fromJson(adamantHelmH2Data);
