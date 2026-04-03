import { Item, ItemJson } from '../Item';

const twistedBowData: ItemJson = {
  id: 12788,
  name: 'Twisted bow',
  examine: 'A mystical bow carved from the twisted remains of the Great Olm.',
  value: 4000000,
  highAlch: 2400000,
  lowAlch: 1600000,
  weight: 1.814,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2017-01-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Twisted_bow',
  iconUrl: 'https://oldschool.runescape.wiki/images/Twisted_bow_detail.png',
  attackRanged: 70,
  rangedStrength: 20,
};

export const TwistedBow = Item.fromJson(twistedBowData);
