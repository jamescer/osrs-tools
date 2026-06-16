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
  iconUrl: '/assets/items/6146.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ribcage_piece',
  prayer: 0,
  questItem: false,
  releaseDate: '1 August 2005',
  stackable: false,
  tradeable: true,
  value: 60,
  weight: 3.175,
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  rangedStrength: 0,
  magicDamage: 0
};

export const RibcagePiece = Item.fromJson(ribcagePieceData);
