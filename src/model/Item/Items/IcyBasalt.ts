import { Item } from '../Item';

const icyBasaltData = {
  id: 23762,
  name: 'Icy basalt',
  members: true,
  tradeable: false,
  stackable: true,
  noted: false,
  value: 100,
  examine: 'A stone that can teleport you to the Ice Mountain summit.',
  equipable: false,
  weight: 0.001,
  questItem: false,
  destroy:
    'You can obtain more from the Making Friends with My Arm quest or by completing Together Forever.',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Icy_basalt',
};

export const IcyBasalt = Item.fromJson(icyBasaltData);
