import { Item } from "../Item";

const UnchargedCellData = {
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
    id: 26882,
    name: "Uncharged cell"
  }
export const UnchargedCell = Item.fromJson(UnchargedCellData);
