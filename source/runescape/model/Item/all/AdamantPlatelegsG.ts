import { Item } from '../Item';

const adamantPlatelegsGData = {
  id: 2609,
  name: "Adamant platelegs (g)",
  iconUrl: '/assets/items/2609.png',
  examine: "Adamant platelegs with gold trim.",
  value: 6400,
  highAlch: 3840,
  lowAlch: 2560,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_platelegs_(g)',
};

export const AdamantPlatelegsG = Item.fromJson(adamantPlatelegsGData);
