import { Item } from '../Item';

const piscatorisTeleportData = {
  id: 12408,
  name: "Piscatoris teleport",
  iconUrl: '/assets/items/12408.png',
  examine: "Teleports you to Piscatoris.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Piscatoris_teleport',
};

export const PiscatorisTeleport = Item.fromJson(piscatorisTeleportData);
