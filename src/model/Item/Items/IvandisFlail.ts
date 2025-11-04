import { Item } from '../Item';

const ivandisFlailData = {
  equipable: true,
  examine: 'A modified silver sickle effective against vampyres.',
  id: 22398,
  members: true,
  attackSlash: -4,
  name: 'Ivandis flail',
  attackCrush: 44,
  noted: false,
  attackMagic: 0,
  questItem: false,
  attackRanged: 0,

  stackable: false,

  // Combat stats
attackStab: 38,

  
  tradeable: false,

  defenceCrush: 0,

  value: 70000,
  defenceMagic: 0,
  defenceRanged: 0,
  weight: 2.721,
  defenceSlash: 3,
  defenceStab: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ivandis_flail',
  prayerBonus: 3,
  strengthBonus: 42,
};

export const IvandisFlail = Item.fromJson(ivandisFlailData);
