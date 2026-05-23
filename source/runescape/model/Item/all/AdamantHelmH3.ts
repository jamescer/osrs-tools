import { Item } from '../Item';

const adamantHelmH3Data = {
  id: 10300,
  name: "Adamant helm (h3)",
  iconUrl: '/assets/items/10300.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_helm_(h3)',
};

export const AdamantHelmH3 = Item.fromJson(adamantHelmH3Data);
