import { Item } from '../Item';

const silverPotData = {
  id: 7728,
  name: 'Silver pot',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 25,
  examine: 'A simple silver pot with no special properties.',
  equipable: false,
  weight: 0.3,
  questItem: true,
  destroy: 'You can get another one from the Lumbridge Castle kitchen.',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Silver_pot',
};

export const SilverPot = Item.fromJson(silverPotData);
