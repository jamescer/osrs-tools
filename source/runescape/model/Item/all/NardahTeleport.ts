import { Item } from '../Item';

const nardahTeleportData = {
    examine: "Teleports you to Nardah.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Nardah_teleport",
    id: 12402,
    name: "Nardah teleport",
    iconUrl: "/assets/items/12402.png"
  }

export const NardahTeleport = Item.fromJson(nardahTeleportData);
