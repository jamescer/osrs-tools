import { Item } from "../Item";

const ShortPlantData = {{
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
    id: 8189,
    name: "Short plant"
  }
export const ShortPlant = Item.fromJson(ShortPlantData);