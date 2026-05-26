import { Item } from "../Item";

const VegetableBattaData = {
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
    id: 2281,
    name: "Vegetable batta"
  }
export const VegetableBatta = Item.fromJson(VegetableBattaData);
