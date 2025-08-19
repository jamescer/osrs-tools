import { Item } from '../Item';

export const RibcagePiece = {
  name: 'Ribcage piece',
  examine: 'A slightly damaged ribcage.',
  members: true,
  tradeable: true,
  stackable: false,
  noted: false,
  noteable: true,
  value: 60,
  highalch: 36,
  lowalch: 24,
  weight: 3.175,
  ge_price: 17574, // as of last update
  release_date: '1 August 2005',
  wiki_url: 'https://oldschool.runescape.wiki/w/Ribcage_piece',
  used_for: ['Skeletal top'],
  dropped_by: ['Wallasalki'],
  drop_rate: '1/64',
  location: ['Waterbirth Island Dungeon'],
};

export const RibcagePieceItem = Item.fromJson(RibcagePiece);
