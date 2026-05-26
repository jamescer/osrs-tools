import { Item } from "../Item";

const KhazardCellKeysData = {
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
    id: 76,
    name: "Khazard cell keys"
  }
export const KhazardCellKeys = Item.fromJson(KhazardCellKeysData);
