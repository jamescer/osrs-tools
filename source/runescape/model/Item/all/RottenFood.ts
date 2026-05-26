import { Item } from "../Item";

const RottenFoodData = {
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
    id: 2959,
    name: "Rotten food"
  }
export const RottenFood = Item.fromJson(RottenFoodData);
