import { Item } from '../Item';

const adamantKiteshieldGData = {
  id: 2611,
  name: "Adamant kiteshield (g)",
  iconUrl: '/assets/items/2611.png',
  examine: "Adamant kiteshield with gold trim.",
  value: 5440,
  highAlch: 3264,
  lowAlch: 2176,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_kiteshield_(g)',
};

export const AdamantKiteshieldG = Item.fromJson(adamantKiteshieldGData);
