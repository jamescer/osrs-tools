import { Item } from '../Item';

const thirdAgePlatebodyData = {
  id: 12825,
  name: '3rd age platebody',
  iconUrl: '/assets/items/3rd-age-platebody.png',
  examine: 'A 3rd age platebody from the God Wars.',
  value: 4000000,
  highAlch: 2400000,
  lowAlch: 1600000,
  weight: 35,
  members: true,
  tradeable: false,
  equipable: true,
  releaseDate: '2005-04-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/3rd_age_platebody',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -10,
  attackRanged: -5,
  attackMagic: -50,
  defenceStab: 80,
  defenceSlash: 80,
  defenceCrush: 75,
  defenceRanged: 10,
  defenceMagic: 10,
  prayer: 5,
};

export const ThirdAgePlatebody = Item.fromJson(thirdAgePlatebodyData);
