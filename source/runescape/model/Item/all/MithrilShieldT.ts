import { Item } from '../Item';

const mithrilShieldTData = {
  id: 3503,
  name: 'Mithril shield (t)',
  iconUrl: '/assets/items/mithril-shield-t.png',
  examine: 'A mithril shield, decorated with gold trim.',
  value: 1300,
  highAlch: 780,
  lowAlch: 520,
  weight: 4.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_shield_(t)',
  defenceStab: 8,
  defenceSlash: 10,
  defenceCrush: 6,
  defenceRanged: 0,
  defenceMagic: 1,
  prayer: 2,
};

export const MithrilShieldT = Item.fromJson(mithrilShieldTData);
