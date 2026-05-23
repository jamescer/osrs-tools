import { Item } from '../Item';

const adamantShieldH3Data = {
  id: 7346,
  name: "Adamant shield (h3)",
  iconUrl: '/assets/items/7346.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_shield_(h3)',
};

export const AdamantShieldH3 = Item.fromJson(adamantShieldH3Data);
