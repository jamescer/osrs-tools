import { Item, ItemJson } from '../Item';

const clueScrollHardData: ItemJson = {
  id: 2777,
  name: 'Clue scroll (hard)',
  iconUrl: '/assets/items/clue-scroll-hard.png',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Clue_scroll_(hard)',
};

export const ClueScrollHard = Item.fromJson(clueScrollHardData);
