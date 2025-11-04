import { Item, ItemJson } from '../Item';

const dragonkinMapData: ItemJson = {
  destroy: "You'll need to search Dallas Jones' chest again.",
  equipable: false,
  examine: 'An ancient map created by the Dragonkin.',
  highAlch: 0,
  id: 21043,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Dragonkin map',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragonkin_map',
  prayer: 0,
  questItem: true,
  releaseDate: '5 January 2017',
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.01,
};

export const DragonkinMap = Item.fromJson(dragonkinMapData);
