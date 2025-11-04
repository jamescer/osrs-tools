import { Item, ItemJson } from '../Item';

const silverPotData: ItemJson = {
  destroy: 'You can get another one from the Lumbridge Castle kitchen.',
  equipable: false,
  examine: 'A simple silver pot with no special properties.',
  highAlch: 15,
  id: 7728,
  lowAlch: 10,
  members: true,
  meleeStrength: 0,
  name: 'Silver pot',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Silver_pot',
  prayer: 0,
  questItem: true,
  releaseDate: '31 May 2006',
  stackable: false,
  tradeable: false,
  value: 25,
  weight: 0.3,
};

export const SilverPot = Item.fromJson(silverPotData);
