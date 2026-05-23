import { Item } from '../Item';

const digsiteTeleportData = {
  id: 12403,
  name: "Digsite teleport",
  iconUrl: '/assets/items/12403.png',
  examine: "Teleports you to the Digsite.",
  value: 10,
  highAlch: 6,
  lowAlch: 4,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Digsite_teleport',
};

export const DigsiteTeleport = Item.fromJson(digsiteTeleportData);
