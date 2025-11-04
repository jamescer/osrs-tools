import { Item } from '../Item';

const ivandisFlailData = {
  attackCrush: 44,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: -4,
  // Combat stats
  attackStab: 38,

  defenceCrush: 0,

  defenceMagic: 0,

  defenceRanged: 0,

  defenceSlash: 3,

  defenceStab: 0,

  equipable: true,

  examine: 'A modified silver sickle effective against vampyres.',

  id: 22398,

  members: true,

  name: 'Ivandis flail',

  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ivandis_flail',
  prayerBonus: 3,
  questItem: false,
  stackable: false,
  strengthBonus: 42,
  tradeable: false,
  value: 70000,
  weight: 2.721,
};

export const IvandisFlail = Item.fromJson(ivandisFlailData);
