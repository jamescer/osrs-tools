import { Item, ItemJson } from '../Item';

const masterScrollBookEmptyData: ItemJson = {
  id: 16644,
  name: 'Master scroll book (empty)',
  iconUrl: '/assets/items/master-scroll-book-empty.png',
  examine: 'A blank book for storing the pages of treasure trail rewards.',
  value: 65000,
  highAlch: 39000,
  lowAlch: 26000,
  weight: 0.227,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: '2019-08-01',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Master_scroll_book_(empty)',
};

export const MasterScrollBookEmpty = Item.fromJson(masterScrollBookEmptyData);
