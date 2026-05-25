import { Item } from "../Item";

const WoodDiningTableData = {{
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
    id: 8115,
    name: "Wood dining table"
  }
export const WoodDiningTable = Item.fromJson(WoodDiningTableData);