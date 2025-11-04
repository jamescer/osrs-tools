import { Item } from '../Item';

export const RibcagePiece = {
  examine: 'A slightly damaged ribcage.',
  highalch: 36,
  ge_price: 17574,
  lowalch: 24,
  members: true,
  name: 'Ribcage piece',
  noteable: true,
  noted: false,
  // as of last update
  release_date: '1 August 2005',

  drop_rate: '1/64',

  stackable: false,

  dropped_by: ['Wallasalki'],
  location: ['Waterbirth Island Dungeon'],
  tradeable: true,
  used_for: ['Skeletal top'],
  value: 60,
  weight: 3.175,
  wiki_url: 'https://oldschool.runescape.wiki/w/Ribcage_piece',
};

export const RibcagePieceItem = Item.fromJson(RibcagePiece);
