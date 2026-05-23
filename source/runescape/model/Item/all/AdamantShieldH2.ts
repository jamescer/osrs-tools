import { Item } from '../Item';

const adamantShieldH2Data = {
  id: 7340,
  name: "Adamant shield (h2)",
  iconUrl: '/assets/items/7340.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_shield_(h2)',
};

export const AdamantShieldH2 = Item.fromJson(adamantShieldH2Data);
