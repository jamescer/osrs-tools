import { Item } from '../Item';

const blackShieldH1Data = {
  id: 7332,
  name: "Black shield (h1)",
  iconUrl: '/assets/items/7332.png',
  examine: "A shield with a heraldic design",
  value: 1632,
  highAlch: 979,
  lowAlch: 652,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_shield_(h1)',
};

export const BlackShieldH1 = Item.fromJson(blackShieldH1Data);
