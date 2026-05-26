import { Item } from "../Item";

const CalcifiedAcornData = {
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
    id: 30042,
    name: "Calcified acorn"
  }
export const CalcifiedAcorn = Item.fromJson(CalcifiedAcornData);
