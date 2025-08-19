import { Item } from '../Item';

export const FibulaPiece = {
  name: 'Fibula piece',
  examine: 'An interesting looking bone shard.',
  members: true,
  tradeable: true,
  stackable: false,
  noted: false,
  noteable: true,
  value: 60,
  highalch: 36,
  lowalch: 24,
  weight: 3.175,
  ge_price: 19309, // as of last update
  release_date: '1 August 2005',
  wiki_url: 'https://oldschool.runescape.wiki/w/Fibula_piece',
  used_for: ['Skeletal bottoms'],
  dropped_by: ['Wallasalki'],
  drop_rate: '1/64',
  location: ['Waterbirth Island Dungeon'],
};

export const FibulaPieceItem = Item.fromJson(FibulaPiece);
