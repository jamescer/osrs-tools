import { Item } from '../Item';

const uncutSapphireData = {
  id: 1623,
  name: 'Uncut sapphire',
  iconUrl: '/assets/items/uncut-sapphire.png',
  examine: 'An uncut sapphire.',
  value: 258,
  highAlch: 154,
  lowAlch: 102,
  weight: 0.02,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Uncut_sapphire',
};

export const UncutSapphire = Item.fromJson(uncutSapphireData);
