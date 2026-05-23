import { Item } from '../Item';

const lunarIsleTeleportData = {
  id: 12405,
  name: "Lunar isle teleport",
  iconUrl: '/assets/items/12405.png',
  examine: "Teleports you to Lunar isle.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Lunar_isle_teleport',
};

export const LunarIsleTeleport = Item.fromJson(lunarIsleTeleportData);
