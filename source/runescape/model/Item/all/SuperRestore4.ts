import { Item } from '../Item';

const superRestore4Data = {
  id: 3024,
  name: "Super restore(4)",
  iconUrl: "/assets/items/3024.png",
  examine: "4 doses of super restore potion.",
  value: 300,
  highAlch: 180,
  lowAlch: 120,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2001-01-01",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Super_restore(4)",
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

export const SuperRestore4 = Item.fromJson(superRestore4Data);
