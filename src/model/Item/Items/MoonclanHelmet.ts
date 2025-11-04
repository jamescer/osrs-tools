import { Item } from '../Item';

const moonclanHelmetData = {
  equipable: true,
  examine: 'A helmet of the Moon Clan.',
  id: 9097,
  members: true,
  attackSlash: 0,
  name: 'Moonclan helm',
  attackCrush: 0,
  noted: false,
  attackMagic: 2,
  questItem: false,
  attackRanged: -3,

  stackable: false,

  // Combat stats
attackStab: 0,

  
  tradeable: true,

  defenceCrush: 19,

  value: 9000,
  defenceMagic: 2,
  defenceRanged: 0,
  weight: 2.267,
  defenceSlash: 20,
  defenceStab: 21,
  magicDamage: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Moonclan_helm',
  prayerBonus: 0,
  strengthBonus: 0,
};

export const MoonclanHelmet = Item.fromJson(moonclanHelmetData);
