import { Item } from '../Item';

const iorwerthCampTeleportData = {
  id: 12410,
  name: "Iorwerth camp teleport",
  iconUrl: '/assets/items/12410.png',
  examine: "Teleports you to the Iorwerth Camp.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iorwerth_camp_teleport',
};

export const IorwerthCampTeleport = Item.fromJson(iorwerthCampTeleportData);
