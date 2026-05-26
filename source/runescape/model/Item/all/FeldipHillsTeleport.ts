import { Item } from '../Item';

const feldipHillsTeleportData = {
    examine: "Teleports you to Feldip hills.",
    value: 10,
    highAlch: 6,
    lowAlch: 4,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Feldip_hills_teleport",
    id: 12404,
    name: "Feldip hills teleport",
    iconUrl: "/assets/items/12404.png"
  }

export const FeldipHillsTeleport = Item.fromJson(feldipHillsTeleportData);
