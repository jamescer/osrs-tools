import { Item } from '../Item';

const crossSectionData = {
  id: 4671,
  name: 'Cross section',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 1,
  examine: 'A cross section of an ancient pyramid.',
  equipable: false,
  weight: 0.001,
  questItem: true,
  destroy: "You'll have to find this item again during Desert Treasure.",
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Cross_section',
};

export const CrossSection = Item.fromJson(crossSectionData);
