import { Item, ItemJson } from '../Item';

const rangerBootsData: ItemJson = {
  id: 7656,
  name: 'Ranger boots',
  iconUrl: '/assets/items/ranger-boots.png',
  examine: 'Boots popular with archers.',
  value: 40000,
  highAlch: 8000,
  lowAlch: 5333,
  weight: 0.454,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2006-12-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ranger_boots',
  attackRanged: 8,
  attackMagic: -5,
  defenceRanged: 10,
  defenceStab: 2,
  defenceSlash: 3,
  defenceMagic: 5,
};

export const RangerBoots = Item.fromJson(rangerBootsData);
