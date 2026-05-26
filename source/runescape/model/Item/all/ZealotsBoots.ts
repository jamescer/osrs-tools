import { Item } from "../Item";

const ZealotsBootsData = {
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
    id: 25440,
    name: "Zealot's boots"
  }
export const ZealotsBoots = Item.fromJson(ZealotsBootsData);
