import { Item, ItemJson } from '../Item';

const blackMedHelmData: ItemJson = {
  id: 1137,
  name: 'Black med helm',
  examine: 'A Black med helm.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_med_helm',
  iconUrl: '/assets/items/black-med-helm.png',
};

export const BlackMedHelm = Item.fromJson(blackMedHelmData);