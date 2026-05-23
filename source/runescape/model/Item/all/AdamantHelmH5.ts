import { Item } from '../Item';

const adamantHelmH5Data = {
  id: 10304,
  name: "Adamant helm (h5)",
  iconUrl: '/assets/items/10304.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_helm_(h5)',
};

export const AdamantHelmH5 = Item.fromJson(adamantHelmH5Data);
