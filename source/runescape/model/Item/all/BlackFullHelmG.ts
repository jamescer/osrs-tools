import { Item } from '../Item';

const blackFullHelmGData = {
  id: 2595,
  name: "Black full helm (g)",
  iconUrl: '/assets/items/2595.png',
  examine: "Black full helmet with gold trim.",
  value: 1056,
  highAlch: 633,
  lowAlch: 422,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_full_helm_(g)',
};

export const BlackFullHelmG = Item.fromJson(blackFullHelmGData);
