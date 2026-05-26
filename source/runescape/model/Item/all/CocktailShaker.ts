import { Item } from "../Item";

const CocktailShakerData = {
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
    id: 2025,
    name: "Cocktail shaker"
  }
export const CocktailShaker = Item.fromJson(CocktailShakerData);
