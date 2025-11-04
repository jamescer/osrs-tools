import { Item } from '../Item';

const moonclanHelmetData = {
  attackCrush: 0,
  attackMagic: 2,
  attackRanged: -3,
  attackSlash: 0,
  // Combat stats
  attackStab: 0,

  defenceCrush: 19,

  defenceMagic: 2,

  defenceRanged: 0,

  defenceSlash: 20,

  defenceStab: 21,

  equipable: true,

  examine: 'A helmet of the Moon Clan.',

  id: 9097,

  magicDamage: 0,

  members: true,

  name: 'Moonclan helm',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Moonclan_helm',
  prayerBonus: 0,
  questItem: false,
  stackable: false,
  strengthBonus: 0,
  tradeable: true,
  value: 9000,
  weight: 2.267,
};

export const MoonclanHelmet = Item.fromJson(moonclanHelmetData);
