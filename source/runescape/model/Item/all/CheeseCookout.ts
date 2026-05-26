import { Item } from "../Item";

const CheeseCookoutData = {
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
    id: 26625,
    name: "Cheese (cookout)"
  }
export const CheeseCookout = Item.fromJson(CheeseCookoutData);
