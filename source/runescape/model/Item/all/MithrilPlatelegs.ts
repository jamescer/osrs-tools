import { Item } from '../Item';

const mithrilPlatesData = {
  id: 1605,
  name: 'Mithril platelegs',
  iconUrl: '/assets/items/mithril-platelegs.png',
  examine: 'A suit of mithril leg armour.',
  value: 580,
  highAlch: 348,
  lowAlch: 232,
  weight: 12.3,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_platelegs',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -2,
  attackRanged: -1,
  attackMagic: -10,
  defenceStab: 28,
  defenceSlash: 28,
  defenceCrush: 24,
  defenceRanged: 4,
  defenceMagic: 4,
  prayer: 0,
};

export const MithrilPlatelegs = Item.fromJson(mithrilPlatesData);
