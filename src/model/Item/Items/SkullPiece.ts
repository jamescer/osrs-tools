import { Item } from '../Item';

export const SkullPiece = {
  name: 'Skull piece',
  examine: 'A fearsome looking skull.',
  members: true,
  tradeable: true,
  stackable: false,
  noted: false,
  noteable: true,
  value: 60,
  highalch: 36,
  lowalch: 24,
  weight: 3.175,
  ge_price: 72579, // as of last update
  release_date: '1 August 2005',
  wiki_url: 'https://oldschool.runescape.wiki/w/Skull_piece',
  used_for: ['Skeletal helm'],
  dropped_by: ['Wallasalki'],
  drop_rate: '1/64',
  location: ['Waterbirth Island Dungeon'],
};

export const SkullPieceItem = Item.fromJson(SkullPiece);
