import { Item } from '../Item';

const rockCakeData = {
  destroy: "You'll have to get another one from the Feast Hall in Keldagrim.",
  equipable: false,
  examine: 'A very hard rock cake made by dwarves.',
  id: 7509,
  members: true,
  name: 'Dwarven rock cake',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dwarven_rock_cake',
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.1,
};

export const DwarvenRockCake = Item.fromJson(rockCakeData);
