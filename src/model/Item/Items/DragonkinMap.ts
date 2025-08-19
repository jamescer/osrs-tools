import { Item } from '../Item';

const dragonslayer_mapData = {
  id: 21043,
  name: 'Dragonkin map',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 0,
  examine: 'An ancient map created by the Dragonkin.',
  equipable: false,
  weight: 0.01,
  questItem: true,
  destroy: "You'll need to search Dallas Jones' chest again.",
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragonkin_map',
};

export const DragonkinMap = Item.fromJson(dragonslayer_mapData);
