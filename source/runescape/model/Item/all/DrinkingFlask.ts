import { Item } from "../Item";

const DrinkingFlaskData = {
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
    id: 29925,
    name: "Drinking flask"
  }
export const DrinkingFlask = Item.fromJson(DrinkingFlaskData);
