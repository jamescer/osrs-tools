import { Item } from '../Item';

const lumberyardTeleportData = {
    examine: "Teleports you to the Lumberyard.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Lumberyard_teleport",
    id: 12642,
    name: "Lumberyard teleport",
    iconUrl: "/assets/items/12642.png"
  }

export const LumberyardTeleport = Item.fromJson(lumberyardTeleportData);
