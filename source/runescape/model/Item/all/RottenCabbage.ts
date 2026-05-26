import { Item } from "../Item";

const RottenCabbageData = {
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
    id: 22321,
    name: "Rotten cabbage"
  }
export const RottenCabbage = Item.fromJson(RottenCabbageData);
