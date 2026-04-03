import { Item } from '../Item';

const adamantShieldGData = {
  id: 3505,
  name: 'Adamant shield (g)',
  iconUrl: '/assets/items/adamant-shield-g.png',
  examine: 'An adamant shield, decorated with gold.',
  value: 2200,
  highAlch: 1320,
  lowAlch: 880,
  weight: 6,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_shield_(g)',
  defenceStab: 10,
  defenceSlash: 12,
  defenceCrush: 8,
  defenceRanged: 1,
  defenceMagic: 2,
  prayer: 3,
};

export const AdamantShieldG = Item.fromJson(adamantShieldGData);
