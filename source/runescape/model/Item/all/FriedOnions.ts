import { Item } from "../Item";

const FriedOnionsData = {
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
    id: 7084,
    name: "Fried onions"
  }
export const FriedOnions = Item.fromJson(FriedOnionsData);
