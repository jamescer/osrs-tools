import { Item } from "../Item";

const BottleOfCreatorsCocktailData = {
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
    id: 31851,
    name: "Bottle of creator's cocktail"
  }
export const BottleOfCreatorsCocktail = Item.fromJson(BottleOfCreatorsCocktailData);
