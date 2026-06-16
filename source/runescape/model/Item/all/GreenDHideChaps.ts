import { Item, ItemJson } from "../Item";

const greenDHideChapsData: ItemJson = {
  id: 1099,
  name: "Green d'hide chaps",
  examine: "A pair of green dragonhide chaps.",
  highAlch: 1,
  lowAlch: 1,
  members: false,
  noted: false,
  tradeable: true,
  stackable: false,
  questItem: false,
  value: 1,
  releaseDate: "24 September 2001",
  weight: 0,
  iconUrl: "/assets/items/1099.png",
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Green_d%27hide_chaps",
  equipable: true,
  destroy: "drop",
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const GreenDHideChaps = Item.fromJson(greenDHideChapsData);
