import { Item } from "../Item";

const PotCookoutData = {
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
    id: 26619,
    name: "Pot (cookout)"
  }
export const PotCookout = Item.fromJson(PotCookoutData);
