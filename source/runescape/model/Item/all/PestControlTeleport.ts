import { Item } from '../Item';

const pestControlTeleportData = {
  id: 12407,
  name: "Pest control teleport",
  iconUrl: '/assets/items/12407.png',
  examine: "Teleports you to Pest control.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Pest_control_teleport',
};

export const PestControlTeleport = Item.fromJson(pestControlTeleportData);
