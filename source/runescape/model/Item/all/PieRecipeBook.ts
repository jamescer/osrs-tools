import { Item } from "../Item";

const PieRecipeBookData = {{
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
    id: 7162,
    name: "Pie recipe book"
  }
export const PieRecipeBook = Item.fromJson(PieRecipeBookData);