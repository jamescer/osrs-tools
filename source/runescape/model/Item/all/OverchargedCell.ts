import { Item } from "../Item";

const OverchargedCellData = {
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
    id: 26886,
    name: "Overcharged cell"
  }
export const OverchargedCell = Item.fromJson(OverchargedCellData);
