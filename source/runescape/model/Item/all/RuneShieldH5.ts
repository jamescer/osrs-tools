import { Item } from '../Item';

const runeShieldH5Data = {
  id: 7360,
  name: "Rune shield (h5)",
  iconUrl: "/assets/items/rune-shield-h5.png",
  examine: "A shield with a heraldic design",
  value: 54400,
  highAlch: 32640,
  lowAlch: 21760,
  weight: 5.443,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-02-20",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_shield_(h5)",
};

export const RuneShieldH5 = Item.fromJson(runeShieldH5Data);
