import { Item } from '../Item';

const adamantShieldH5Data = {
  id: 7358,
  name: "Adamant shield (h5)",
  iconUrl: '/assets/items/7358.png',
  examine: "A shield with a heraldic design",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_shield_(h5)',
};

export const AdamantShieldH5 = Item.fromJson(adamantShieldH5Data);
