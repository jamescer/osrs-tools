import { Item } from "../Item";

const DragonMetalSheetData = {
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
    id: 31996,
    name: "Dragon metal sheet"
  }
export const DragonMetalSheet = Item.fromJson(DragonMetalSheetData);
