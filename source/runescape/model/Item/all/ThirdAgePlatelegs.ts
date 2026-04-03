import { Item } from '../Item';

const thirdAgePlatesData = {
  id: 12827,
  name: '3rd age platelegs',
  iconUrl: '/assets/items/3rd-age-platelegs.png',
  examine: 'A 3rd age platelegs from the God Wars.',
  value: 4000000,
  highAlch: 2400000,
  lowAlch: 1600000,
  weight: 21,
  members: true,
  tradeable: false,
  equipable: true,
  releaseDate: '2005-04-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/3rd_age_platelegs',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -5,
  attackRanged: -2,
  attackMagic: -25,
  defenceStab: 56,
  defenceSlash: 56,
  defenceCrush: 50,
  defenceRanged: 7,
  defenceMagic: 7,
  prayer: 3,
};

export const ThirdAgePlatelegs = Item.fromJson(thirdAgePlatesData);
