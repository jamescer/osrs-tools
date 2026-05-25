import { Item } from "../Item";

const TallPlantData = {{
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
    id: 8188,
    name: "Tall plant"
  }
export const TallPlant = Item.fromJson(TallPlantData);