import { Item } from "../Item";

const DragonMetalLumpData = {
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
    id: 22103,
    name: "Dragon metal lump"
  }
export const DragonMetalLump = Item.fromJson(DragonMetalLumpData);
