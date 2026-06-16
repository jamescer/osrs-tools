import { Item } from '../Item';

const amuletOfGloryT4Data = {
  id: 10354,
  name: "Amulet of glory (t4)",
  iconUrl: '/assets/items/10354.png',
  examine: "A very powerful dragonstone amulet.",
  value: 17625,
  highAlch: 10575,
  lowAlch: 7050,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Amulet_of_glory_(t4)',
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
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const AmuletOfGloryT4 = Item.fromJson(amuletOfGloryT4Data);
