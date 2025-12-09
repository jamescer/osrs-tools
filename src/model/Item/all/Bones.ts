import { Item, ItemJson } from '../Item';

const bonesData: ItemJson = {
  id: 20,
  name: 'Bones',
  examine: 'Just some regular bones.',
  members: false,
  stackable: false,
  value: 4,
  lowAlch: 3,
  highAlch: 4,
  weight: 0.1,
  tradeable: true,
  equipable: false,
  destroy: 'Drop',
  questItem: false,
  releaseDate: '2001-01-04',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bones',
};

export const Bones = Item.fromJson(bonesData);
