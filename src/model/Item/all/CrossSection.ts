import { Item, ItemJson } from '../Item';

const crossSectionData: ItemJson = {
  destroy: "You'll have to find this item again during Desert Treasure.",
  equipable: false,
  examine: 'A cross section of an ancient pyramid.',
  highAlch: 0,
  id: 4671,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Cross section',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Cross_section',
  prayer: 0,
  questItem: true,
  releaseDate: '4 January 2007',
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.001,
};

export const CrossSection = Item.fromJson(crossSectionData);
