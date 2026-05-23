import { Item } from '../Item';

const adamantHelmH4Data = {
  id: 10302,
  name: "Adamant helm (h4)",
  iconUrl: '/assets/items/10302.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_helm_(h4)',
};

export const AdamantHelmH4 = Item.fromJson(adamantHelmH4Data);
