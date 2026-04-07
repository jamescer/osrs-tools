import { Item } from '../Item';

const blacksmithsHelmData = {
  id: 19988,
  name: "Blacksmith's helm",
  iconUrl: '/assets/items/blacksmiths-helm.png',
  examine: 'A helm worn by blacksmiths.',
  value: 3000,
  highAlch: 1800,
  lowAlch: 1200,
  weight: 0.907,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2016-07-06',
  destroy: 'Wear',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blacksmith%27s_helm',
};

export const BlacksmithsHelm = Item.fromJson(blacksmithsHelmData);
