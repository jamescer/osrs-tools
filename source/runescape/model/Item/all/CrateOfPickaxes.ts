import { Item } from "../Item";

const CrateOfPickaxesData = {
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
    id: 32543,
    name: "Crate of pickaxes"
  }
export const CrateOfPickaxes = Item.fromJson(CrateOfPickaxesData);
