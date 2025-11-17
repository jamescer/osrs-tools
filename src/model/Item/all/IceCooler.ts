import { Item, ItemJson } from '../Item';

const iceCoolerData: ItemJson = {
  destroy: 'You can get more ice coolers from the Slayer Master in Canifis.',
  equipable: false,
  examine: 'Used to freeze Desert lizards.',
  highAlch: 0,
  id: 6696,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Ice cooler',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ice_cooler',
  prayer: 0,
  questItem: false,
  releaseDate: '20 January 2005',
  stackable: true,
  tradeable: false,
  value: 1,
  weight: 0.001,
};

export const IceCooler = Item.fromJson(iceCoolerData);
