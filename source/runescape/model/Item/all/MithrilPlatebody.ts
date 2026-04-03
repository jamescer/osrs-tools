import { Item } from '../Item';

const mithrilPlatebodyData = {
  id: 1601,
  name: 'Mithril platebody',
  iconUrl: '/assets/items/mithril-platebody.png',
  examine: 'A suit of mithril body armour.',
  value: 967,
  highAlch: 580,
  lowAlch: 386,
  weight: 20.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_platebody',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -4,
  attackRanged: -2,
  attackMagic: -20,
  defenceStab: 40,
  defenceSlash: 40,
  defenceCrush: 34,
  defenceRanged: 6,
  defenceMagic: 6,
  prayer: 0,
};

export const MithrilPlatebody = Item.fromJson(mithrilPlatebodyData);
