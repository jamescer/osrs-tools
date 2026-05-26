import { Item } from "../Item";

const DarkAcornData = {
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
    id: 24733,
    name: "Dark acorn"
  }
export const DarkAcorn = Item.fromJson(DarkAcornData);
