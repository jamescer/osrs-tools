import { Item } from '../Item';

const adamantFullHelmTData = {
  id: 2605,
  name: "Adamant full helm (t)",
  iconUrl: '/assets/items/2605.png',
  examine: "Adamant full helmet with trim.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_full_helm_(t)',
};

export const AdamantFullHelmT = Item.fromJson(adamantFullHelmTData);
