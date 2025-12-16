import { Item, ItemJson } from '../Item';

const blueDyeData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A bright blue dye.',
  highAlch: 3,
  id: 1767,
  lowAlch: 2,
  members: false,
  meleeStrength: 0,
  name: 'Blue dye',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blue_dye',
  prayer: 0,
  questItem: false,
  releaseDate: '24 September 2001',
  stackable: false,
  tradeable: true,
  value: 5,
  weight: 0.01,
};

export const BlueDye = Item.fromJson(blueDyeData);
