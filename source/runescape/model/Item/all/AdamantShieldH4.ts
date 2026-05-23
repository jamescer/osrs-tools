import { Item } from '../Item';

const adamantShieldH4Data = {
  id: 7352,
  name: "Adamant shield (h4)",
  iconUrl: '/assets/items/7352.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_shield_(h4)',
};

export const AdamantShieldH4 = Item.fromJson(adamantShieldH4Data);
