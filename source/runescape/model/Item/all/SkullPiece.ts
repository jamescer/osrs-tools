import { Item, ItemJson } from '../Item';

const skullPieceData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A fearsome looking skull.',
  highAlch: 36,
  id: 6144,
  lowAlch: 24,
  members: true,
  meleeStrength: 0,
  name: 'Skull piece',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Skull_piece',
  prayer: 0,
  questItem: false,
  releaseDate: '1 August 2005',
  stackable: false,
  tradeable: true,
  value: 60,
  weight: 3.175,
};

export const SkullPiece = Item.fromJson(skullPieceData);
