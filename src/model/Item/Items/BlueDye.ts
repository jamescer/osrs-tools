import { Item } from '../Item';

const blueDyeData = {
  equipable: false,
  examine: 'A bright blue dye.',
  id: 1767,
  members: false,
  name: 'Blue dye',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blue_dye',
  questItem: false,
  stackable: false,
  tradeable: true,
  value: 5,
  weight: 0.01,
};

export const BlueDye = Item.fromJson(blueDyeData);
