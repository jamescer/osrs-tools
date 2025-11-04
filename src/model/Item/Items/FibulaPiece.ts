import { Item } from '../Item';

export const FibulaPiece = {
  examine: 'An interesting looking bone shard.',
  highalch: 36,
  ge_price: 19309,
  lowalch: 24,
  members: true,
  name: 'Fibula piece',
  noteable: true,
  noted: false,
  // as of last update
  release_date: '1 August 2005',

  drop_rate: '1/64',

  stackable: false,

  dropped_by: ['Wallasalki'],
  location: ['Waterbirth Island Dungeon'],
  tradeable: true,
  used_for: ['Skeletal bottoms'],
  value: 60,
  weight: 3.175,
  wiki_url: 'https://oldschool.runescape.wiki/w/Fibula_piece',
};

export const FibulaPieceItem = Item.fromJson(FibulaPiece);
