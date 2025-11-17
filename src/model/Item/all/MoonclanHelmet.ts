import { Item, ItemJson } from '../Item';

const moonclanHelmetData: ItemJson = {
  attackCrush: 0,
  attackMagic: 2,
  attackRanged: -3,
  attackSlash: 0,
  attackStab: 0,
  defenceCrush: 19,
  defenceMagic: 2,
  defenceRanged: 0,
  defenceSlash: 20,
  defenceStab: 21,
  destroy: 'Drop',
  equipable: true,
  examine: 'A helmet of the Moon Clan.',
  highAlch: 5400,
  id: 9097,
  lowAlch: 3600,
  members: true,
  meleeStrength: 0,
  name: 'Moonclan helm',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Moonclan_helm',
  prayer: 0,
  questItem: false,
  releaseDate: '24 July 2006',
  stackable: false,
  tradeable: true,
  value: 9000,
  weight: 2.267,
};

export const MoonclanHelmet = Item.fromJson(moonclanHelmetData);
