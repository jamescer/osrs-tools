import { Item } from "../Item";

const CocktailGlassData = {{
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
    id: 2026,
    name: "Cocktail glass"
  }
export const CocktailGlass = Item.fromJson(CocktailGlassData);