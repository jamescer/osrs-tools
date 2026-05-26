import { Item } from "../Item";

const CrateOfSnakeskinData = {
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
    id: 32706,
    name: "Crate of snakeskin"
  }
export const CrateOfSnakeskin = Item.fromJson(CrateOfSnakeskinData);
