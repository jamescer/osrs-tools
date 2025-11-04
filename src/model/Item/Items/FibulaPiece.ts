import { Item, ItemJson } from '../Item';

const fibulaPieceData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'An interesting looking bone shard.',
  highAlch: 36,
  id: 6147,
  lowAlch: 24,
  members: true,
  meleeStrength: 0,
  name: 'Fibula piece',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Fibula_piece',
  prayer: 0,
  questItem: false,
  releaseDate: '1 August 2005',
  stackable: false,
  tradeable: true,
  value: 60,
  weight: 3.175,
};

export const FibulaPiece = Item.fromJson(fibulaPieceData);
