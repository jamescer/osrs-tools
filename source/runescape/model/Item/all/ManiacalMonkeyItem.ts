import { Item } from "../Item";

const ManiacalMonkeyItemData = {
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
    id: 24864,
    name: "Maniacal monkey (item)"
  }
export const ManiacalMonkeyItem = Item.fromJson(ManiacalMonkeyItemData);
