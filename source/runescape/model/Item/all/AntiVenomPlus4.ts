import { Item } from '../Item';

const antiVenomPlus4Data = {
  id: 12913,
  name: "Anti-venom+(4)",
  iconUrl: "/assets/items/12913.png",
  examine: "4 doses of super antivenom potion.",
  value: 444,
  highAlch: 266,
  lowAlch: 177,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2001-01-01",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Anti-venom%2B(4)",
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

export const AntiVenomPlus4 = Item.fromJson(antiVenomPlus4Data);
