import { Item } from '../Item';

const taiBwoWannaiTeleportData = {
    examine: "Teleports you to Tai bwo wannai.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Tai_bwo_wannai_teleport",
    id: 12409,
    name: "Tai bwo wannai teleport",
    iconUrl: "/assets/items/12409.png"
  }

export const TaiBwoWannaiTeleport = Item.fromJson(taiBwoWannaiTeleportData);
