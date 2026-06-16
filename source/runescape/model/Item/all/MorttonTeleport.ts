import { Item, ItemJson } from '../Item';

const morttonTeleportData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: "A scroll that teleports you to Mort'ton.",
  highAlch: 2043,
  id: 12406,
  lowAlch: 1362,
  members: true,
  meleeStrength: 0,
  name: 'Mortton teleport',
  iconUrl: '/assets/items/12406.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mortton_teleport',
  prayer: 0,
  questItem: false,
  releaseDate: '5 January 2006',
  stackable: true,
  tradeable: true,
  value: 3405,
  weight: 0.006,
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
  rangedStrength: 0,
  magicDamage: 0
};

export const MorttonTeleport = Item.fromJson(morttonTeleportData);
