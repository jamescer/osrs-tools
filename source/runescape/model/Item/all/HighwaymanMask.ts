import { Item } from '../Item';

const highwaymanMaskData = {
  id: 2631,
  name: "Highwayman mask",
  iconUrl: '/assets/items/2631.png',
  examine: "Your money or your life!",
  value: 40,
  highAlch: 24,
  lowAlch: 16,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Highwayman_mask',
};

export const HighwaymanMask = Item.fromJson(highwaymanMaskData);
