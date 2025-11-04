import { Item } from '../Item';

const dragonslayer_mapData = {
  equipable: false,
  examine: 'An ancient map created by the Dragonkin.',
  id: 21043,
  members: true,
  destroy: "You'll need to search Dallas Jones' chest again.",
  name: 'Dragonkin map',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragonkin_map',
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.01,
};

export const DragonkinMap = Item.fromJson(dragonslayer_mapData);
