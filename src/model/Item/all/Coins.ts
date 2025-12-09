import { Item, ItemJson } from '../Item';

const coinsData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'Lovely money!',
  highAlch: 0,
  id: 995,
  lowAlch: 0,
  members: false,
  meleeStrength: 0,
  name: 'Coins',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Coins',
  prayer: 0,
  questItem: false,
  releaseDate: '4 January 2001',
  stackable: true,
  tradeable: true,
  value: 1,
  weight: 0,
};

export const Coins = Item.fromJson(coinsData);
