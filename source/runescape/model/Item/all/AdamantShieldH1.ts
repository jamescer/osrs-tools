import { Item } from '../Item';

const adamantShieldH1Data = {
  id: 7334,
  name: "Adamant shield (h1)",
  iconUrl: '/assets/items/7334.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_shield_(h1)',
};

export const AdamantShieldH1 = Item.fromJson(adamantShieldH1Data);
