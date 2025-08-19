import { Item } from '../Item';

const morttonTeleportData = {
  id: 12406,
  name: 'Mortton teleport',
  members: true,
  tradeable: true,
  stackable: true,
  noted: false,
  value: 3405,
  examine: "A scroll that teleports you to Mort'ton.",
  equipable: false,
  weight: 0.006,
  questItem: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mortton_teleport',
};

export const MorttonTeleport = Item.fromJson(morttonTeleportData);
