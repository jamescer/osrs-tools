import { Item } from '../Item';

const rockCakeData = {
  id: 7509,
  name: 'Dwarven rock cake',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 1,
  examine: 'A very hard rock cake made by dwarves.',
  equipable: false,
  weight: 0.1,
  questItem: true,
  destroy: "You'll have to get another one from the Feast Hall in Keldagrim.",
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dwarven_rock_cake',
};

export const DwarvenRockCake = Item.fromJson(rockCakeData);
