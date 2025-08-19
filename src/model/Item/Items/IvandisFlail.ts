import { Item } from '../Item';

const ivandisFlailData = {
  id: 22398,
  name: 'Ivandis flail',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 70000,
  examine: 'A modified silver sickle effective against vampyres.',
  equipable: true,
  weight: 2.721,
  questItem: false,
  // Combat stats
  attackStab: 38,
  attackSlash: -4,
  attackCrush: 44,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 3,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  strengthBonus: 42,
  prayerBonus: 3,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ivandis_flail',
};

export const IvandisFlail = Item.fromJson(ivandisFlailData);
