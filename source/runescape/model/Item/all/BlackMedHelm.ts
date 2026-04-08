import { Item, ItemJson } from '../Item';

const blackMedHelmData: ItemJson = {
  id: 1137,
  name: 'Black med helm',
  examine: 'A Black med helm.',
  highAlch: 1,
  lowAlch: 1,
  members: false,
  noted: false,
  tradeable: true,
  stackable: false,
  questItem: false,
  value: 1,
  releaseDate: '24 September 2001',
  weight: 0,
  iconUrl: '/assets/items/black-med-helm.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_med_helm',
};

export const BlackMedHelm = Item.fromJson(blackMedHelmData);