import { Item } from '../Item';

const adamantFullHelmGData = {
  id: 2613,
  name: "Adamant full helm (g)",
  iconUrl: '/assets/items/2613.png',
  examine: "Adamant full helmet with gold trim.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_full_helm_(g)',
};

export const AdamantFullHelmG = Item.fromJson(adamantFullHelmGData);
