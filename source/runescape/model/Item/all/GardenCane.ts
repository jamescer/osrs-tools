import { Item } from "../Item";

const GardenCaneData = {{
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
    id: 4189,
    name: "Garden cane"
  }
export const GardenCane = Item.fromJson(GardenCaneData);