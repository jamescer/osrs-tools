import { Item } from "../Item";

const OddBattaData = {
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
    id: 2245,
    name: "Odd batta"
  }
export const OddBatta = Item.fromJson(OddBattaData);
