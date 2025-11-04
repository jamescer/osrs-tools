import { Item } from '../Item';

export const SkullPiece = {
  drop_rate: '1/64',
  dropped_by: ['Wallasalki'],
  examine: 'A fearsome looking skull.',
  ge_price: 72579,
  highalch: 36,
  location: ['Waterbirth Island Dungeon'],
  lowalch: 24,
  members: true,

  name: 'Skull piece',

  noteable: true,

  noted: false,

  // as of last update
  release_date: '1 August 2005',
  stackable: false,
  tradeable: true,
  used_for: ['Skeletal helm'],
  value: 60,
  weight: 3.175,
  wiki_url: 'https://oldschool.runescape.wiki/w/Skull_piece',
};

export const SkullPieceItem = Item.fromJson(SkullPiece);
