import { Item } from '../Item';

const blueDyeData = {
  id: 1767,
  name: 'Blue dye',
  members: false,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 5,
  examine: 'A bright blue dye.',
  equipable: false,
  weight: 0.01,
  questItem: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blue_dye',
};

export const BlueDye = Item.fromJson(blueDyeData);
