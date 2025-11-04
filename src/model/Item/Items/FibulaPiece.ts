import { Item } from '../Item';

export const FibulaPiece = {
  drop_rate: '1/64',
  dropped_by: ['Wallasalki'],
  examine: 'An interesting looking bone shard.',
  ge_price: 19309,
  highalch: 36,
  location: ['Waterbirth Island Dungeon'],
  lowalch: 24,
  members: true,

  name: 'Fibula piece',

  noteable: true,

  noted: false,

  // as of last update
  release_date: '1 August 2005',
  stackable: false,
  tradeable: true,
  used_for: ['Skeletal bottoms'],
  value: 60,
  weight: 3.175,
  wiki_url: 'https://oldschool.runescape.wiki/w/Fibula_piece',
};

export const FibulaPieceItem = Item.fromJson(FibulaPiece);
