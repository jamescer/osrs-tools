import { Item, ItemJson } from '../Item';

const ropeData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A sturdy rope with many uses.',
  highAlch: 0,
  id: 954,
  lowAlch: 0,
  members: false,
  meleeStrength: 0,
  name: 'Rope',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rope',
  questItem: false,
  releaseDate: '11 June 2001',
  stackable: false,
  tradeable: true,
  value: 15,
  weight: 0.3,
};

export const Rope = Item.fromJson(ropeData);
