import { Item } from '../Item';

const morttonTeleportData = {
  equipable: false,
  examine: "A scroll that teleports you to Mort'ton.",
  id: 12406,
  members: true,
  name: 'Mortton teleport',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mortton_teleport',
  questItem: false,
  stackable: true,
  tradeable: true,
  value: 3405,
  weight: 0.006,
};

export const MorttonTeleport = Item.fromJson(morttonTeleportData);
