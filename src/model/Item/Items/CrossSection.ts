import { Item } from '../Item';

const crossSectionData = {
  destroy: "You'll have to find this item again during Desert Treasure.",
  equipable: false,
  examine: 'A cross section of an ancient pyramid.',
  id: 4671,
  members: true,
  name: 'Cross section',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Cross_section',
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.001,
};

export const CrossSection = Item.fromJson(crossSectionData);
