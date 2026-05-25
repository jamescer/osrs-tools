import { Item } from "../Item";

const GardenFenceData = {{
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
    id: 8201,
    name: "Garden fence"
  }
export const GardenFence = Item.fromJson(GardenFenceData);