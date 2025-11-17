import { Item, ItemJson } from '../Item';

const morttonTeleportData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: "A scroll that teleports you to Mort'ton.",
  highAlch: 2043,
  id: 12406,
  lowAlch: 1362,
  members: true,
  meleeStrength: 0,
  name: 'Mortton teleport',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mortton_teleport',
  prayer: 0,
  questItem: false,
  releaseDate: '5 January 2006',
  stackable: true,
  tradeable: true,
  value: 3405,
  weight: 0.006,
};

export const MorttonTeleport = Item.fromJson(morttonTeleportData);
