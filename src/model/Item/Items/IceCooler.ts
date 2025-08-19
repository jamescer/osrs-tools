import { Item } from '../Item';

const iceCoolerData = {
  id: 6696,
  name: 'Ice cooler',
  members: true,
  tradeable: false,
  stackable: true,
  noted: false,
  value: 1,
  examine: 'Used to freeze Desert lizards.',
  equipable: false,
  weight: 0.001,
  questItem: false,
  destroy: 'You can get more ice coolers from the Slayer Master in Canifis.',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ice_cooler',
};

export const IceCooler = Item.fromJson(iceCoolerData);
