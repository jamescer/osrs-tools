import { Item } from "../Item";

const BrimhavenTeleportData = {
    examine: "",
    value: 0,
    highAlch: 0,
    lowAlch: 0,
    weight: 0,
    members: false,
    tradeable: false,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "",
    id: 11745,
    name: "Brimhaven teleport"
  }
export const BrimhavenTeleport = Item.fromJson(BrimhavenTeleportData);
