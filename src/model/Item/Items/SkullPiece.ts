import { Item } from '../Item';

export const SkullPiece = {
  examine: 'A fearsome looking skull.',
  highalch: 36,
  ge_price: 72579,
  lowalch: 24,
  members: true,
  name: 'Skull piece',
  noteable: true,
  noted: false,
  // as of last update
  release_date: '1 August 2005',

  drop_rate: '1/64',

  stackable: false,

  dropped_by: ['Wallasalki'],
  location: ['Waterbirth Island Dungeon'],
  tradeable: true,
  used_for: ['Skeletal helm'],
  value: 60,
  weight: 3.175,
  wiki_url: 'https://oldschool.runescape.wiki/w/Skull_piece',
};

export const SkullPieceItem = Item.fromJson(SkullPiece);
