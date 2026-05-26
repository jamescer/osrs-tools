import { Item } from "../Item";

const ZealotsKeyData = {
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
    id: 4078,
    name: "Zealot's key"
  }
export const ZealotsKey = Item.fromJson(ZealotsKeyData);
