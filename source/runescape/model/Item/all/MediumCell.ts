import { Item } from "../Item";

const MediumCellData = {
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
    id: 26884,
    name: "Medium cell"
  }
export const MediumCell = Item.fromJson(MediumCellData);
