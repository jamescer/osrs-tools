import { Item } from '../Item';

const iceCoolerData = {
  equipable: false,
  examine: 'Used to freeze Desert lizards.',
  id: 6696,
  members: true,
  destroy: 'You can get more ice coolers from the Slayer Master in Canifis.',
  name: 'Ice cooler',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ice_cooler',
  questItem: false,
  stackable: true,
  tradeable: false,
  value: 1,
  weight: 0.001,
};

export const IceCooler = Item.fromJson(iceCoolerData);
