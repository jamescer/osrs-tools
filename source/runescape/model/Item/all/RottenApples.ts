import { Item } from "../Item";

const RottenApplesData = {{
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
    id: 6093,
    name: "Rotten apples"
  }
export const RottenApples = Item.fromJson(RottenApplesData);