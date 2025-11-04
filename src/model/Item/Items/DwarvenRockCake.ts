import { Item } from '../Item';

const rockCakeData = {
  equipable: false,
  examine: 'A very hard rock cake made by dwarves.',
  id: 7509,
  members: true,
  destroy: "You'll have to get another one from the Feast Hall in Keldagrim.",
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
