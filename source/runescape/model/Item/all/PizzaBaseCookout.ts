import { Item } from "../Item";

const PizzaBaseCookoutData = {
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
    id: 26629,
    name: "Pizza base (cookout)"
  }
export const PizzaBaseCookout = Item.fromJson(PizzaBaseCookoutData);
