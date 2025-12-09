import { Item, ItemJson } from '../Item';

const ribcagePieceData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A slightly damaged ribcage.',
  highAlch: 36,
  id: 6146,
  lowAlch: 24,
  members: true,
  meleeStrength: 0,
  name: 'Ribcage piece',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ribcage_piece',
  prayer: 0,
  questItem: false,
  releaseDate: '1 August 2005',
  stackable: false,
  tradeable: true,
  value: 60,
  weight: 3.175,
};

export const RibcagePiece = Item.fromJson(ribcagePieceData);
