import { Item, ItemJson } from '../Item';

const clueScrollBeginnerData: ItemJson = {
  id: 2677,
  name: 'Clue scroll (beginner)',
  iconUrl: '/assets/items/clue-scroll-beginner.png',
  examine: 'A clue for a treasure trail.',
  value: 0,
  highAlch: 0,
  lowAlch: 0,
  weight: 0,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: '2024-01-01',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Clue_scroll_(beginner)',
};

export const ClueScrollBeginner = Item.fromJson(clueScrollBeginnerData);
