import { Item } from "../Item";

const RepairPlankData = {{
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
    id: 7148,
    name: "Repair plank"
  }
export const RepairPlank = Item.fromJson(RepairPlankData);