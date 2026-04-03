import { Item, ItemJson } from '../Item';

const rangerLegsData: ItemJson = {
  id: 7658,
  name: 'Ranger legs',
  iconUrl: '/assets/items/ranger-legs.png',
  examine: 'Comfortable and practical trousers.',
  value: 40000,
  highAlch: 12000,
  lowAlch: 8000,
  weight: 0.680,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2006-12-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ranger_legs',
  attackRanged: 12,
  attackMagic: -10,
  defenceRanged: 7,
  defenceStab: 4,
  defenceSlash: 2,
  defenceMagic: 3,
};

export const RangerLegs = Item.fromJson(rangerLegsData);
