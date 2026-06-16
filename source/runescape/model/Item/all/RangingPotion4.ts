import { Item } from '../Item';

const rangingPotion4Data = {
  id: 2444,
  name: "Ranging potion(4)",
  iconUrl: "/assets/items/2444.png",
  examine: "4 doses of ranging potion.",
  value: 360,
  highAlch: 216,
  lowAlch: 144,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2001-01-01",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ranging_potion(4)",
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const RangingPotion4 = Item.fromJson(rangingPotion4Data);
