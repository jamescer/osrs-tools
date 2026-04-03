import { Item, ItemJson } from '../Item';

const clueScrollMediumData: ItemJson = {
  id: 2776,
  name: 'Clue scroll (medium)',
  iconUrl: '/assets/items/clue-scroll-medium.png',
  examine: 'A clue for a treasure trail.',
  value: 0,
  highAlch: 0,
  lowAlch: 0,
  weight: 0,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: '2016-07-28',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Clue_scroll_(medium)',
};

export const ClueScrollMedium = Item.fromJson(clueScrollMediumData);
