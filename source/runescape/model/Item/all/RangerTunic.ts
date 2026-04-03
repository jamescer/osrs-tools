import { Item } from '../Item';

const rangerTunicData = {
  id: 11601,
  name: 'Ranger tunic',
  iconUrl: '/assets/items/ranger-tunic.png',
  examine: 'A tunic suited for combat.',
  value: 41000,
  highAlch: 24600,
  lowAlch: 16400,
  weight: 10,
  members: true,
  tradeable: false,
  equipable: true,
  releaseDate: '2005-01-13',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ranger_tunic',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackRanged: 15,
  attackMagic: -10,
  defenceStab: 10,
  defenceSlash: 10,
  defenceCrush: 8,
  defenceRanged: 35,
  defenceMagic: 0,
  rangedStrength: 8,
};

export const RangerTunic = Item.fromJson(rangerTunicData);
