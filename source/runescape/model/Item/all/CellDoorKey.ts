import { Item } from "../Item";

const CellDoorKeyData = {{
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
    id: 1840,
    name: "Cell door key"
  }
export const CellDoorKey = Item.fromJson(CellDoorKeyData);