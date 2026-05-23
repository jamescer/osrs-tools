import { Item } from '../Item';

const adamantPlatelegsTData = {
  id: 2601,
  name: "Adamant platelegs (t)",
  iconUrl: '/assets/items/2601.png',
  examine: "Adamant platelegs with trim.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_platelegs_(t)',
};

export const AdamantPlatelegsT = Item.fromJson(adamantPlatelegsTData);
