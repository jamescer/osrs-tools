import { Item } from '../Item';

const icyBasaltData = {
  destroy:
    'You can obtain more from the Making Friends with My Arm quest or by completing Together Forever.',
  equipable: false,
  examine: 'A stone that can teleport you to the Ice Mountain summit.',
  id: 23762,
  members: true,
  name: 'Icy basalt',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Icy_basalt',
  questItem: false,
  stackable: true,
  tradeable: false,
  value: 100,
  weight: 0.001,
};

export const IcyBasalt = Item.fromJson(icyBasaltData);
