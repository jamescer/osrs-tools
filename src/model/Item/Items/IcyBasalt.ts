import { Item, ItemJson } from '../Item';

const icyBasaltData: ItemJson = {
  destroy: 'You can obtain more from the Making Friends with My Arm quest or by completing Together Forever.',
  equipable: false,
  examine: 'A stone that can teleport you to the Ice Mountain summit.',
  highAlch: 60,
  id: 23762,
  lowAlch: 40,
  members: true,
  meleeStrength: 0,
  name: 'Icy basalt',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Icy_basalt',
  prayer: 0,
  questItem: false,
  releaseDate: '6 September 2018',
  stackable: true,
  tradeable: false,
  value: 100,
  weight: 0.001,
};

export const IcyBasalt = Item.fromJson(icyBasaltData);
