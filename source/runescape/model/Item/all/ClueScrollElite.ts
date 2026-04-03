import { Item, ItemJson } from '../Item';

const clueScrollEliteData: ItemJson = {
  id: 12070,
  name: 'Clue scroll (elite)',
  iconUrl: '/assets/items/clue-scroll-elite.png',
  examine: 'A clue for a treasure trail.',
  value: 0,
  highAlch: 0,
  lowAlch: 0,
  weight: 0,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: '2018-04-05',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Clue_scroll_(elite)',
};

export const ClueScrollElite = Item.fromJson(clueScrollEliteData);
