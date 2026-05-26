import { Item } from "../Item";

const RecipeForEasterBunsData = {
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
    id: 30709,
    name: "Recipe for easter buns"
  }
export const RecipeForEasterBuns = Item.fromJson(RecipeForEasterBunsData);
