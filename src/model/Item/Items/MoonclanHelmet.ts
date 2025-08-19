import { Item } from '../Item';

const moonclanHelmetData = {
  id: 9097,
  name: 'Moonclan helm',
  members: true,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 9000,
  examine: 'A helmet of the Moon Clan.',
  equipable: true,
  weight: 2.267,
  questItem: false,
  // Combat stats
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 2,
  attackRanged: -3,
  defenceStab: 21,
  defenceSlash: 20,
  defenceCrush: 19,
  defenceMagic: 2,
  defenceRanged: 0,
  strengthBonus: 0,
  magicDamage: 0,
  prayerBonus: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Moonclan_helm',
};

export const MoonclanHelmet = Item.fromJson(moonclanHelmetData);
