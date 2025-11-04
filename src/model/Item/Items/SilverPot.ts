import { Item } from '../Item';

const silverPotData = {
  equipable: false,
  examine: 'A simple silver pot with no special properties.',
  id: 7728,
  members: true,
  destroy: 'You can get another one from the Lumbridge Castle kitchen.',
  name: 'Silver pot',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Silver_pot',
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 25,
  weight: 0.3,
};

export const SilverPot = Item.fromJson(silverPotData);
