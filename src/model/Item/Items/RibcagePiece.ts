import { Item } from '../Item';

export const RibcagePiece = {
  drop_rate: '1/64',
  dropped_by: ['Wallasalki'],
  examine: 'A slightly damaged ribcage.',
  ge_price: 17574,
  highalch: 36,
  location: ['Waterbirth Island Dungeon'],
  lowalch: 24,
  members: true,

  name: 'Ribcage piece',

  noteable: true,

  noted: false,

  // as of last update
  release_date: '1 August 2005',
  stackable: false,
  tradeable: true,
  used_for: ['Skeletal top'],
  value: 60,
  weight: 3.175,
  wiki_url: 'https://oldschool.runescape.wiki/w/Ribcage_piece',
};

export const RibcagePieceItem = Item.fromJson(RibcagePiece);
