import { Item } from '../Item';

const runeShieldH2Data = {
  id: 7342,
  name: "Rune shield (h2)",
  iconUrl: "/assets/items/rune-shield-h2.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_shield_(h2)",
};

export const RuneShieldH2 = Item.fromJson(runeShieldH2Data);
