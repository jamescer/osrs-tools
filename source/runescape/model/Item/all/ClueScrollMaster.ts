import { Item, ItemJson } from '../Item';

const clueScrollMasterData: ItemJson = {
  id: 12073,
  name: 'Clue scroll (master)',
  iconUrl: '/assets/items/clue-scroll-master.png',
  examine: 'A clue for a treasure trail.',
  value: 0,
  highAlch: 0,
  lowAlch: 0,
  weight: 0,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: '2019-08-01',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Clue_scroll_(master)',
};

export const ClueScrollMaster = Item.fromJson(clueScrollMasterData);
